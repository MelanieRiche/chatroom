import { connect } from 'react-redux';
import Message from 'src/components/Messages/Message';

import { isMine } from 'src/selectors';

const mapStateToProps = (state, ownProp) => ({
  isMine: isMine(state.authorId, ownProp.authorId),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
