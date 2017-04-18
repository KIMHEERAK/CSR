import * as types from './ActionTypes';

const TEST_TEXT = "Action Text"

export function testFunction() {
  return function(dispatch) {
      dispatch({
        type: types.TEST,
        Result: TEST_TEXT
      });
  }
}
