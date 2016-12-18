import React, { PropTypes } from 'react';
import ProductItem from '../component/product';
import { createContainer } from 'meteor/react-meteor-data';
import Category from '../apis/methods/category';
import Product from '../apis/methods/product';

class Home extends React.Component {
  render () {
    var product = this.props.listProductPost;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
              <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">Find product</button>
                </span>
                <input type="text" className="form-control" placeholder="Product name..."/>
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="submit"><i className="fa fa-search fa-lg"></i></button>
                </span>
              </div>
          </div>
        </div>
        <div className="row category">
          <div className="col-md-6 selectform">
              <form className="form-inline">
                <div className="form-group col-sm-4">
                    <div className="row">
                      <select className="form-control" style={{ "width": "95%"}} name="">
                          <option value="">All</option>
                          <option value="">Technology</option>
                          <option value="">Fashion</option>
                          <option value="">Book</option>
                      </select>
                    </div>
                </div>
                <div className="form-group col-sm-4">
                  <div className="row">
                      <select className="form-control col-sm-12" style={{ "width": "95%"}} name="">
                          <option value="">All</option>
                          <option value="">Laptop</option>
                          <option value="">Mobile</option>
                      </select>
                  </div>
                </div>
                <div className="form-group col-sm-4">
                  <div className="row">
                      <select className="form-control col-sm-12" style={{ "width": "95%"}} name="">
                          <option value="">Order by</option>
                          <option value="">Order by</option>
                          <option value="">Orderby New</option>
                      </select>
                  </div>
                </div>
              </form>
          </div>
          <div className="col-md-6">
              <div className="col-sm-6">
                  <label><input type="radio" name="price"/> $1 - $999</label>
              </div>
              <div className="col-sm-6">
                  <label><input type="radio" name="price"/> $1000 - $4999</label>
              </div>
              <div className="col-sm-6">
                  <label><input type="radio" name="price"/> $5000 - $19999</label>
              </div>
              <div className="col-sm-6">
                  <label><input type="radio" name="price"/> $2000 - $99999</label>
              </div>
          </div>
        </div>
        <div className="row product" style={{clear: 'both'}}>
          {
            product.length>0?
              product.map((val, i) => <ProductItem key={i} product={val}/>)
            :""
          }
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('getListCategory');
  Meteor.subscribe('getListProductPost');
  return {
    category: Category.find({}).fetch(),
    listProductPost: Product.find({status: {$ne: 'verifying'}}, {sort: {create_at: -1}}).fetch()
  };
}, Home);
