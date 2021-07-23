import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';

import './style.scss';

const Form = ({ message, changeMessage, send }) => {
  const handleChange = (event) => {
    changeMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // if message is not empty we send it
    if (message.trim()) {
      send();
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Saisissez votre message..."
        className="form-input"
        value={message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="form-submit"
      >
        <FeatherIcon icon="send" size={40} />
      </button>
    </form>
  );
};

Form.propTypes = {
  message: PropTypes.string.isRequired,
  changeMessage: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
};

export default Form;
