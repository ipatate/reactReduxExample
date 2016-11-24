import React, { Component, PropTypes } from 'react';
// for connect component to redux
import { connect } from 'react-redux';
// action file for dispatch message
import * as Action from './redux/actions/message';

// components form and display
import Form from './components/Form';
import DisplayMessage from './components/DisplayMessage';

export class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    message: PropTypes.string,
  }
  render() {
    const { message } = this.props;
    return (
      <div>
        <h1>Example of message dispatch across 3 components</h1>
        <Form />
        <DisplayMessage name="component 1" />
        <DisplayMessage name="component 2" />
        <DisplayMessage name="component 3" />
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
export default connect(mapStateToProps)(App);
