import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

const mapStateToProps = (state) => ({
  open: state.open,
  logged: state.logged,
  pseudo: state.pseudo,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
