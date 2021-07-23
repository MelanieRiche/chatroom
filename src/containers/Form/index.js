import { connect } from 'react-redux';
import Form from 'src/components/Form';

import { changeMessageInConstruction, sendMessage } from 'src/actions';

const mapStateToProps = (state) => ({
  message: state.messageInConstruction,
});

const mapDispatchToProps = (dispatch) => ({
  changeMessage: function (value) {
    dispatch(changeMessageInConstruction(value));
  },
  send: function () {
    dispatch(sendMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
