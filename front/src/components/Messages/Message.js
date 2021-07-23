import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({
  author,
  text,
  isMine,
}) => (
  <div className={classNames('message', { 'message--mine': isMine })}>
    <p className="message-author">{author}</p>
    <p className="message-content">{text}</p>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Message;
