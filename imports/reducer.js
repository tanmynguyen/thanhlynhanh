import 'babel-polyfill';
import { combineReducers } from 'redux';
import action_type from './action_type'

const initialState = {
  arrDetailCheckOut: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case action_type.BUY_PRODUCT:
      var _product = state.arrDetailCheckOut.slice();
      if(state.arrDetailCheckOut.length > 0){
        for(let i=0;i<state.arrDetailCheckOut.length;i++){
          if(state.arrDetailCheckOut[i]._id == action.data._id){
            // _product = state.arrDetailCheckOut[i];
          } else {
            _product.push(action.data.product);
          }
        }
      } else {
        _product.push(action.data.product)
      }

      return Object.assign({}, state, {
        arrDetailCheckOut: _product
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;
