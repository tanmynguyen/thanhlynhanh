import 'babel-polyfill';
import { combineReducers } from 'redux';

const initialState = {

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;
