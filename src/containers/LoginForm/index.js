import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { doLogin } from 'src/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(doLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
