import action_type from './action_type';

export function buyProduct(product){
  return function(dispatch){
    dispatch({type: action_type.BUY_PRODUCT, data: product})
  }
}
