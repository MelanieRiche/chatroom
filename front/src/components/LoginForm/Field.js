import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  placeholder,
  name,
  currentValue,
  changeCurrentValue,
}) => (
  <input
    className="login-input"
    type={type}
    placeholder={placeholder}
    name={name}
    value={currentValue}
    onChange={(event) => {
      changeCurrentValue(event.target.value);
    }}
  />
);

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  currentValue: PropTypes.string,
  changeCurrentValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  currentValue: '',
};

export default Field;
