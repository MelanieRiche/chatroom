import { connect } from 'react-redux';
import Toggler from 'src/components/Toggler';
import { toggleOpen } from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  changeOpen: () => {
    dispatch(toggleOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toggler);
