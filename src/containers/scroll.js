import { connect } from 'react-redux';
import { updateScrollIndex } from "../state/actions";
import _ScrollBar from '../components/scrollBar/scrollBar';

const mapStateToProps = (state) => ({
  scrollIndex: state.scrollIndex
});

const mapDispatchToProps = (dispatch) => ({
  setIndex: (id) => {dispatch(updateScrollIndex(id))}
});

const ScrollBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ScrollBar);

export default ScrollBar;