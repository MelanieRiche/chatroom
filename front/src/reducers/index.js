import {
  CHANGE_MESSAGE_IN_CONSTRUCTION,
  TOGGLE_OPEN,
  CHANGE_INPUT_VALUE,
  MEMORIZE_PSEUDO,
  RECEIVE_MESSAGE,
  SEND_MESSAGE,
} from 'src/actions';

const initialState = {
  open: true,
  messageInConstruction: '',
  pseudo: 'Anonyme',
  authorId: Math.random(),
  logged: false,
  email: '',
  password: '',
  messages: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MESSAGE_IN_CONSTRUCTION:
      return {
        ...state,
        messageInConstruction: action.newValue,
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message,
        ],
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messageInConstruction: '',
      };
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    case MEMORIZE_PSEUDO:
      return {
        ...state,
        pseudo: action.pseudo,
        logged: true,
      };
    default:
      return state;
  }
};

export default reducer;
