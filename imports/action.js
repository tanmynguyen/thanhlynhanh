import action_type from './action_type';

export function buyProduct(product, amount){
  return function(dispatch){
    dispatch({type: action_type.BUY_PRODUCT, data: {product, amount}})
  }
}
