import axios from 'axios';

import { DO_LOGIN, memorizePseudo } from 'src/actions';

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_LOGIN: {
      const { email, password } = store.getState();
      axios.post('/login', {
        email,
        password,
      }, {
        baseURL: 'http://localhost:3001',
      })
        .then((response) => {
          store.dispatch(memorizePseudo(response.data.pseudo));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default ajax;
