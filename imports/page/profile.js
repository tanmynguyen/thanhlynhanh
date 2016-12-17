import React, { PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createContainer } from 'meteor/react-meteor-data';
import Category from '../apis/methods/category';
import Product from '../apis/methods/product';
import Dropzone from 'react-dropzone';
import {imageToBase64} from '../module/functions';

class Profile extends React.Component {
  handleSelect(index, last) {
    // console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }
  render () {
    return (
      <Tabs
          onSelect={this.handleSelect}
          selectedIndex={0}
        >
        <TabList>
            <Tab>My Store</Tab>
            <Tab>My Order</Tab>
            <Tab>My Point</Tab>
        </TabList>
        <TabPanel>
          <PostProduct category={this.props.category} listProductPost={this.props.listProductPost}/>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>
    )
  }
}

class PostProduct extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      categoryName: "",
      categoryId: "",
      productName: "",
      description: "",
      price: 0,
      quantity: 10,
      totalPrice: 0,
      imageBase64: "",
      temp_image_upload: "/images/upload-cloud.png"
    }
  }

  postProduct(){
    var _this = this;
    var _product = {
      category_id: this.state.categoryId,
      name: this.state.productName,
      description: this.state.description,
      quantity: this.state.quantity,
      normal_price: this.state.price,
      sale_price: this.state.price,
      imageBase64: this.state.imageBase64,
      status: "processing"
    }
    Meteor.call('postProduct', _product, (err, result) => {
      if(err){
        console.error(err);
      } else {
        _this.setState({
          categoryName: "",
          categoryId: "",
          productName: "",
          description: "",
          price: 0,
          quantity: 10,
          totalPrice: 0,
          imageBase64: "",
          temp_image_upload: "/images/upload-cloud.png"
        })
      }
    })
  }

  onDrop(acceptedFiles, rejectedFiles) {
    var _this = this;
    // console.log(imageToBase64(acceptedFiles[0]));

    imageToBase64(acceptedFiles, function(data){
        _this.setState({ imageBase64: data.split(',')[1] })
    });

    this.setState({
        temp_image_upload: acceptedFiles[0].preview
    })
  }

  onChooseCategory(id, name) {
    this.setState({
      categoryName: name,
      categoryId: id
    })
  }

  onChangePrice(value) {
    var _this = this;
    this.setState({
      price: value.target.value,
      totalPrice: value.target.value * _this.state.quantity
    })
  }

  onChangeQuantity(value){
    var _this = this;
    this.setState({
      quantity: value,
      totalPrice: value * _this.state.price
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    var _this = this;
    if(nextProps.category != this.props.category){
      _this.setState({
        categoryName: nextProps.category[0].name,
        categoryId: nextProps.category[0]._id,
        // totalPrice:
      })
    }
  }

  render () {
    return (
      <div className="row">
        <h3>Store</h3>
        <div className="col-md-5">
          <Dropzone className="upload-image" multiple={false}  accept="image/*" onDrop={this.onDrop.bind(this)}>
              <div><img className="view-image img-responsive" src={this.state.temp_image_upload} /></div>
          </Dropzone>
        </div>
        <div className="col-md-7">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-3 control-label" style={{textAlign: 'left'}}>Product Name</label>
              <div className="col-sm-9">
                <input type="name" className="form-control" id="inputEmail3" placeholder="Product name..." onChange={(value) => this.setState({productName: value.target.value})}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-3 control-label" style={{textAlign: 'left'}}>Category</label>
              <div className="col-sm-9">
                <div className="btn-group">
                  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.categoryName} <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      this.props.category?this.props.category.map((val, i) => <li key={i}><a href="javascript:;" onClick={() => this.onChooseCategory(val._id, val.name)}>{val.name}</a></li>):""
                    }
                  </ul>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-3 control-label" style={{textAlign: 'left'}}>Description</label>
              <div className="col-sm-9">
                <textarea type="text" className="form-control" id="inputEmail3" placeholder="Description..." onChange={(value) => this.setState({description: value.target.value})}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-3 control-label" style={{textAlign: 'left'}}>Price</label>
              <div className="col-sm-9">
                <div className="input-group">
                  <div className="input-group-addon">$</div>
                  <input type="number" className="form-control" id="price" placeholder="Price" onChange={(value) => this.onChangePrice(value)}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-3 control-label" style={{textAlign: 'left'}}>Quantity</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" id="quantity" placeholder="Quantity" min="10" step="1" value={this.state.quantity} onChange={(value) => this.onChangeQuantity(value.target.value)}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-3 control-label" style={{textAlign: 'left'}}>Total price</label>
              <div className="col-sm-9">
                <div className="input-group">
                  <div className="input-group-addon">$</div>
                  <input disabled type="text" className="form-control" id="inputEmail3" value={this.state.totalPrice}  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <button type="button" className="btn btn-primary pull-right" onClick={() => this.postProduct()}>Post</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12">
          <hr />
          <ListProductPost listProductPost={this.props.listProductPost}/>
        </div>
      </div>
    )
  }
}

class ListProductPost extends React.Component {
  render() {
    console.log(this.props.listProductPost);
    return (
      <div>

      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('getListCategory');
  Meteor.subscribe('getListProductPost');
  console.log(Meteor.subscribe('getListProductPost').ready());
  return {
    category: Category.find({}).fetch(),
    listProductPost: Product.find({create_by: Meteor.userId()}, {sort: {create_at: -1}}).fetch()
  };
}, Profile);
