/* eslint-disable default-case */
import { WS_CONNECT, SEND_MESSAGE, receiveMessage } from 'src/actions';

let socketCanal;

const socket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socketCanal = window.io('http://localhost:3001');
      socketCanal.on('send_message', (data) => {
        store.dispatch(receiveMessage(data));
      });
      break;
    case SEND_MESSAGE: {
      const state = store.getState();
      socketCanal.emit('send_message', {
        text: state.messageInConstruction,
        author: state.pseudo,
        authorId: state.authorId,
      });
    }
  }
  next(action);
};

export default socket;
