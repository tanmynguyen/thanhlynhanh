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
    var detail = this.state.detail;
    return (
      <div className="container">
        {
          detail?
          <div>
            <div className="product-detail">

                <div className="col-md-5">
                  <div className="thumbnail">
                    <a href="/w3images/fjords.jpg" target="_blank">
                      <img src={detail.imageBase64} alt="Cinque Terre"/>
                      <div className="caption">
                      <div className="row">
                        <div className="col-md-4 col-xs-4">
                          <img style={{ "width": 100 + "%" }} src="http://www.w3schools.com/w3images/nature.jpg" alt="Cinque Terre"/>
                        </div>
                        <div className="col-md-4 col-xs-4">
                          <img style={{ "width": "100%" }} src="http://www.w3schools.com/w3images/lights.jpg" alt="Cinque Terre"/>
                        </div>
                        <div className="col-md-4 col-xs-4">
                          <img style={{ "width": "100%" }} src="http://www.w3schools.com/w3images/fjords.jpg" alt="Cinque Terre"/>
                        </div>
                      </div>
                      </div>
                    </a>
                  </div>
                  <div className="timetxt text-center">Time: <span className="time"> 23:59:26</span></div>
                    </div>
            <div className="col-md-7">
              <div className="">
                <h3 className="product-title">{detail.name}</h3>
                <div className="clearfix">
                  <div className="col-md-12 text-right">
                    <span className="oldprice">${detail.normal_price}</span> <span className="newprice">${detail.sale_price}</span>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <div className="timetxt">Max Points: <span className="time"> {detail.sale_price}</span></div>
                    </div>
                  </div>
                  <div className="col-sm-6 text-right">
                    <div className="maxorder">Max Order: <span className="quatum">300</span></div>
                    <div className="needorder">Need Order: <span className="quatum">30</span></div>
                  </div>


                </div>
                <div className="detail clearfix">
                  {detail.description}
                </div>
                <div className="row clearfix">
                  <form className="form-inline">
                    <div className="form-group col-md-6 col-sm-12">
                      <input type="text" className="form-control" style={{ "width": "100%", "marginTop": "5px"}} value="http://google.com"/>
                    </div>
                    <div className="form-group col-md-2 col-xs-6 text-right">
                      <i className="fa fa-heart fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="form-group col-md-4 col-xs-6">
                      <button onClick={() => this.buyNow()} className="btn btn-primary btn-buy">Buy now!</button>
                    </div>
                  </form>
                  </div>
              </div>
            </div>

            <div className="clearfix"></div>
            </div>
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
