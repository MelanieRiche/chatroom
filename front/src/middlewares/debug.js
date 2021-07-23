const debug = (store) => (next) => (action) => {
  console.log('dans debugmiddleware', action);
  next(action);
};

export default debug;
