import React, { PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createContainer } from 'meteor/react-meteor-data';
import Category from '../apis/methods/category';
import Product from '../apis/methods/product';
import Dropzone from 'react-dropzone';
import {imageToBase64} from '../module/functions';
import TableProduct from '../component/table';

class Admin extends React.Component {
  handleSelect(index, last) {
    // console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }
  render () {
    //console.log(this.props.listProductPost);
    //console.log(this.props.location.pathname.replace('/',''));
    var location = this.props.location.pathname.replace('/','');
    return (
      <Tabs
          onSelect={this.handleSelect}
          selectedIndex={0}
        >
        <TabList>
            <Tab>Verifying</Tab>
            <Tab>On-air</Tab>
            <Tab>Expired</Tab>
        </TabList>
        <TabPanel>
          <ProductVerify listProductVerify={this.props.listProductVerify} location={location} />
        </TabPanel>
        <TabPanel>
          <ProductOnAir listProductOnAir={this.props.listProductOnAir} location={location} />
        </TabPanel>
        <TabPanel>
          <ProductExpired listProductExpired={this.props.listProductExpired} location={location} />
        </TabPanel>
      </Tabs>
    )
  }
}

class ProductVerify extends React.Component {

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

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Products awaiting moderation</h3>
          <ListProductVerify listProductVerify={this.props.listProductVerify} location={this.props.location} />
        </div>
      </div>
    )
  }
}

class ListProductVerify extends React.Component {
  render() {
    var listProductVerify = this.props.listProductVerify;
    return (
      <div>
        {
          listProductVerify.length>0?
            <TableProduct product={listProductVerify} location={this.props.location} />
          :""
        }
      </div>
    )
  }
}


class ProductOnAir extends React.Component {

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

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Products awaiting moderation</h3>
          <ListProductOnAir listProductOnAir={this.props.listProductOnAir} location={this.props.location} />
        </div>
      </div>
    )
  }
}

class ListProductOnAir extends React.Component {
  render() {
    var listProductOnAir = this.props.listProductOnAir;
    return (
      <div>
        {
          listProductOnAir.length>0?
            <TableProduct product={listProductOnAir} location={this.props.location} />
          :""
        }
      </div>
    )
  }
}

class ProductExpired extends React.Component {

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

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Products exired time / Canceled</h3>
          <ListProductExpired listProductExpired={this.props.listProductExpired} location={this.props.location} />
        </div>
      </div>
    )
  }
}

class ListProductExpired extends React.Component {
  render() {
    var listProductExpired = this.props.listProductExpired;
    return (
      <div>
        {
          listProductExpired.length>0?
            <TableProduct product={listProductExpired} location={this.props.location} />
          :""
        }
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('getListProductPost');
  console.log(Meteor.subscribe('getListProductPost').ready());
  return {
    listProductVerify: Product.find({status: 'verifying'},{sort: {create_at: -1}}).fetch(),
    listProductOnAir: Product.find({status: 'processing'},{sort: {create_at: -1}}).fetch(),
    listProductExpired: Product.find({status: 'done', status: 'cancel'},{sort: {create_at: -1}}).fetch(),
  };
}, Admin);
