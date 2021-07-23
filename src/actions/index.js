export const CHANGE_MESSAGE_IN_CONSTRUCTION = 'CHANGE_MESSAGE_IN_CONSTRUCTION';
export const changeMessageInConstruction = (newValue) => ({
  type: CHANGE_MESSAGE_IN_CONSTRUCTION,
  newValue,
});

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const changeInputValue = (newValue, key) => ({
  type: CHANGE_INPUT_VALUE,
  newValue,
  key,
});

export const DO_LOGIN = 'DO_LOGIN';
export const doLogin = () => ({
  type: DO_LOGIN,
});

export const MEMORIZE_PSEUDO = 'MEMORIZE_PSEUDO';
export const memorizePseudo = (pseudo) => ({
  type: MEMORIZE_PSEUDO,
  pseudo,
});

export const WS_CONNECT = 'WS_CONNECT';
export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});
