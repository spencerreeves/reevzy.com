import { connect } from 'react-redux';
import { updateScrollIndex } from "../state/actions";
import _Header from '../components/header/header';

const mapStateToProps = (state) => ({
  scrollIndex: state.scrollIndex
});

const mapDispatchToProps = (dispatch) => ({
  setIndex: (id) => {dispatch(updateScrollIndex(id))}
});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Header);

export default Header;