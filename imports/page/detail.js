import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Category from '../apis/methods/category';
import Product from '../apis/methods/product';
import {buyProduct} from '../action';
import {connect} from 'react-redux';

export var productDetail = null;

class Detail extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      detail: null
    }
  }

  buyNow(){
    productDetail = this.state.detail;
    this.props.buyProduct(this.state.detail);
    this.props.router.push('/checkout');
  }

  componentWillMount() {
    var _this = this;
    Meteor.call('getProductById', this.props.params.productId, (err, result) => {
      _this.setState({
        detail: result
      })
    })
  }

  render () {
    return (
      <div>
        {
          this.state.detail?
          <div>
            <button onClick={() => this.buyNow()} type="button">Buy Now</button>
          </div>
          :<div>loadding...</div>
        }
      </div>
    )
  }
}

const _Detail = createContainer(() => {
  Meteor.subscribe('getListCategory');
  Meteor.subscribe('getListProductPost');
  return {
    // getProductById: Product.find({}, {sort: {create_at: -1}}).fetch()
  };
}, Detail);

export default connect (
  null,
  (dispatch) => ({
    buyProduct: (product) => {dispatch(buyProduct(product))}
  })
)(_Detail)
