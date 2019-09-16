// Action Types
export const UPDATE_SCROLL_INDEX = 'UPDATE_SCROLL_INDEX';

// Actions
export function updateScrollIndex(scrollIndex) {
  if (scrollIndex < 0 || scrollIndex > 3) {
    scrollIndex = 1;
  }

  return { type: UPDATE_SCROLL_INDEX, scrollIndex};
}