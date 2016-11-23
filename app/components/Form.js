import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Action from '../redux/actions/message';

export class Form extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    message: PropTypes.string,
  }
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handler = this.handler.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {value: ''};
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handler(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(Action.addMessage(e.currentTarget.value));
  }
  reset(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(Action.resetMessage());
    this.setState({value: ''});
  }
  render() {
    const { message } = this.props;
    return (
      <div>
        <div>
          <label>Tap the message</label>
        </div>
        <input type="text" onKeyUp={this.handler} value={this.state.value} onChange={this.handleChange} />
        {' '}<a href="#" onClick={this.reset} >Reset</a>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    message: store.message,
  };
}

export default connect(mapStateToProps)(Form);
