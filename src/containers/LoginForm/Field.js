import { connect } from 'react-redux';
import Field from 'src/components/LoginForm/Field';
import { changeInputValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => ({
  currentValue: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeCurrentValue: (newValue) => {
    dispatch(changeInputValue(newValue, ownProps.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
