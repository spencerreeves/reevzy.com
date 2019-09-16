import { combineReducers } from 'redux';
import { UPDATE_SCROLL_INDEX } from './actions';

function scrollIndex(state = 1, action) {
  switch (action.type) {
    case UPDATE_SCROLL_INDEX:
      return action.scrollIndex;
    default:
      return state;
  }
}

const reducer = combineReducers({
  scrollIndex
});

export default reducer;
