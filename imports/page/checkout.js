import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import {productDetail} from './detail';

class Checkout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      arrProduct: this.props.arrProduct
    }
  }

  componentWillMount() {
    console.log(this.state.arrProduct);
  }

  render () {
    return (
      
<div className="container">
  <div className="checkout">
  <div className="col-xs-12">
    <h3>Checkout</h3>
  </div>
  <div className="col-md-8">
    <div className="col-sm-4">
      <div className="row">
        <div className="thumbnail">
          <img src="http://www.w3schools.com/w3images/lights.jpg" alt="Cinque Terre" />
        </div>
      </div>
    </div>
    <div className="col-sm-8">
      <div><b className="product-name">Iphone 7 Plus 128GB - New</b></div>
      <div className="price-product">
        Price: $200
      </div>
      <div className="number-products">
        Quantum: 5
      </div>
    </div>
  </div>
  <div className="col-md-4 cost">
  <div className="clearfix">
    <span className="">Pay: <b>$200</b></span>
  </div>
  <div className="clearfix">
    <span className="">Total having point: <b>100</b></span>
  </div>
  <div className="clearfix">
    <span className="">Use point: <b className="usepoint">50</b></span>
  </div>
  <div className="divider"></div>
  <div className="clearfix">
    <span className="">Final: <b>$150</b></span>
  </div>

  </div>

  <div className="clearfix"></div>
</div>

</div>
    )
  }
}

export default connect(
  (state) => ({
    arrProduct: state.reducer.arrDetailCheckOut
  })
)(Checkout);
