import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './style.scss';

const App = ({ connect }) => {
  useEffect(() => {
    connect();
  }, []);
  return (
    <div className="chat">
      <Messages />
      <Form />
      <Settings />
    </div>
  );
};

App.propTypes = {
  connect: PropTypes.func.isRequired,
};

export default App;
