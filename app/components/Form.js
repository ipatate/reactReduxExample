import React, { Component, PropTypes } from 'react';
// for connect component to redux
import { connect } from 'react-redux';
// file for action message
import * as Action from '../redux/actions/message';

export class Form extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    message: PropTypes.string,
  }
  constructor(props, context) {
    super(props, context);
    // bind function for use this inside
    this.handleChange = this.handleChange.bind(this);
    this.handler = this.handler.bind(this);
    this.reset = this.reset.bind(this);
    // for input controlled more info https://facebook.github.io/react/docs/forms.html
    this.state = {value: ''};
  }
  // set the value to input on change more info https://facebook.github.io/react/docs/forms.html
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  // if key up dispatch to store
  handler(e) {
    // if the component is connected, redux pass dispatch to props
    const { dispatch } = this.props;
    // dispatch value to store by call action function
    dispatch(Action.addMessage(e.currentTarget.value));
  }
  reset(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(Action.resetMessage());
    // set empty value to input
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
// the state listen by this component
function mapStateToProps(store) {
  return {
    message: store.message,
  };
}
// connect App to redux
export default connect(mapStateToProps)(Form);
