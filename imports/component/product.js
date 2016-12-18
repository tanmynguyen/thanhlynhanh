import React, { PropTypes } from 'react';
import {Link} from 'react-router';

class Product extends React.Component {

  buyNow(){

  }

  render () {
    var product = this.props.product;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 co-xs-12">
        <div className="thumbnail">
          <Link to={"detail/"+product._id}>
            <img src={product.imageBase64} className="img-responsive"/>
          </Link>
            <div className="caption">
              <h3>{product.name}</h3>
              <div className="clearfix">
                <div className="col-md-6"><span className="oldprice">${product.normal_price}</span></div>
                <div className="col-md-6"><span className="newprice">${product.sale_price}</span></div>
              </div>
              <div className="clearfix">
                <div className="quantumtxt">Need Active: <span className="quatum">{product.quantity}</span></div>
                <div className="timetxt">Time: <span className="time"> 23:59:26</span></div>
              </div>
              <div className="clearfix">
                <span className="pull pull-right"><span className="mypoints">Points: {product.sale_price}</span></span>
              </div>
              <div className="clearfix">
                <div className="row">
                  <div className="col-sm-6" ><i className="fa fa-user"> Nguyennhatkha92</i></div>
                  <div className="col-sm-6"><i className="fa fa-map-marker"> Ho chi Minh</i></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Product;
