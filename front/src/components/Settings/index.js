import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Toggler from 'src/containers/Toggler';
import LoginForm from 'src/containers/LoginForm';

import sound from 'src/assets/mp3/swoosh.mp3';

import useSound from 'src/hooks/useSound';

import './style.scss';

const Settings = ({ open, logged, pseudo }) => {
  useSound(sound, [open]);
  return (
    <div className={classNames('settings', { 'settings--open': open })}>
      <Toggler />
      {!logged && <LoginForm />}
      {logged && <p>Bienvenue {pseudo}</p>}
    </div>
  );
};

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default Settings;
