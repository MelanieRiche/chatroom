import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/containers/LoginForm/Field';

import './style.scss';

const LoginForm = ({ login }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <Field
        type="email"
        placeholder="Email"
        name="email"
      />
      <Field
        type="password"
        placeholder="Mot de passe"
        name="password"
      />
      <button className="login-action" type="submit">
        Envoyer
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
