import { connect } from 'react-redux';
import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  listOfMessages: state.messages,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
