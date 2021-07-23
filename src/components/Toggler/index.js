import React from 'react';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';

import './style.scss';

const Toggler = ({ open, changeOpen }) => (
  <button className="toggler" type="button">
    <FeatherIcon
      style={{
        transform: open ? 'rotate(45deg)' : 'none',
      }}
      icon="plus"
      size={20}
      onClick={changeOpen}
    />
  </button>
);

Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  changeOpen: PropTypes.func.isRequired,
};

export default Toggler;
