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
      <div className="container">
        {
          this.state.detail?
          <div>
            <div className="product-detail">

                <div className="col-md-5">
                  <div className="thumbnail">
                    <a href="/w3images/fjords.jpg" target="_blank">
                      <img src="http://www.w3schools.com/w3images/lights.jpg" alt="Cinque Terre"/>
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
                <h3 className="product-title"> Iphone 7 Plus 128GB - New 100%</h3>
                <div className="clearfix">
                  <div className="col-md-12 text-right">
                    <span className="oldprice">$400</span> <span className="newprice">$200</span>
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
                      <div className="timetxt">Max Points: <span className="time"> 200</span></div>
                    </div>
                  </div>
                  <div className="col-sm-6 text-right">
                    <div className="maxorder">Max Order: <span className="quatum">300</span></div>
                    <div className="needorder">Need Order: <span className="quatum">30</span></div>
                  </div>


                </div>
                <div className="detail clearfix">
                    <p>Nút home tròn trên iPhone 7 chính thức là dạng cứng, tức bạn sẽ không nhấn xuống được nữa, để thao tác trên nút này bạn sẽ nhấn 1 lực vừa phải đến khi nút home run nhẹ lên.</p>
                    <p>
                    Điều dễ nhận thấy nhất về iPhone 7 tiếp theo chính là mặt sau với dãy ăng-ten được giấu đi, còn lại ngoại hình máy không thay đổi nhiều so với iPhone 6s trước đó.
                    </p>
                    <p>
                      Cuối cùng thì iPhone 7 cũng đã đạt chuẩn chống nước, mang tới sự an tâm lớn cho người dùng khi vô tình để máy dính nước mưa hay làm đổ nước.
                    </p>
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
