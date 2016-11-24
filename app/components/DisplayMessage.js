import React, { Component, PropTypes } from 'react';
// for connect component to redux
import { connect } from 'react-redux';

const DisplayMessage = ({ name, message }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p style={{ minHeight: '30px' }}>
      {message}
      </p>
  </div>
  );
};

DisplayMessage.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
}
// the state listen by this component
function mapStateToProps(store) {
  return {
    message: store.message,
  };
}
// connect App to redux
export default connect(mapStateToProps)(DisplayMessage);
