import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from 'src/containers/Messages/Message';

import sound from 'src/assets/mp3/pouf.mp3';
import useSound from 'src/hooks/useSound';

import './style.scss';

const Messages = ({ listOfMessages }) => {
  const sectionElement = useRef(null);

  useSound(sound, [listOfMessages]);

  useEffect(() => {
    sectionElement.current.scrollTop = sectionElement.current.scrollHeight;
  }, [listOfMessages]);

  return (
    <section ref={sectionElement} className="messages">
      {listOfMessages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </section>
  );
};

Messages.propTypes = {
  listOfMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;
