import React, { Component, PropTypes } from 'react';
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

function mapStateToProps(store) {
  return {
    message: store.message,
  };
}

export default connect(mapStateToProps)(DisplayMessage);
