import * as types from '../actions/ActionTypes';

const INTIAL_STATE = {
  // test : 'init text',
  testResult : 'Init Text'
};


export default function (state = INTIAL_STATE, action) {
  switch(action.type) {
    case types.TEST:
      return { ...state,
        testResult : action.Result };
  }

  return state;
}
