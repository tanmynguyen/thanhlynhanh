// import Product from '../models/product';

import GenericCollection from '../genericCollection';

import {Meteor} from 'meteor/meteor';

const Product = new GenericCollection('products');

var schema = new SimpleSchema({
    category_id: {
      type : String
    },
    name: {
      type : String
    },
    quantity: {
      type: Number,
    },
    normal_price: {
      type: SimpleSchema.Double,
    },
    sale_price: {
      type: SimpleSchema.Double,
    },
    status: {
      type: String
    },
    imageBase64: {
      type: String
    },
  	create_at : {
      type: Date,
      defaultValue: null,
      optional : true
    },
  	update_at: {
  		type: Date,
  		defaultValue: null,
  		optional : true
  	},
    delete_at : {
      type: Date,
      defaultValue: null,
      optional : true
    },
    create_by : {
      type: String,
      defaultValue: null,
      optional : true
    },
  	update_by: {
  		type: String,
  		defaultValue: null,
  		optional: true
  	},
    delete_by : {
      type: String,
      defaultValue: null,
      optional : true
    }
});

Product.attachSchema(schema);



if(Meteor.isServer){

  Meteor.publish('getListProductPost', function() {
    if (!this.userId) throw new Meteor.Error('not-authorized');
    return Product.find();
  })

  // Meteor.publish('getProductById', function(id) {
  //   if (!this.userId) throw new Meteor.Error('not-authorized');
  //   return Product.findOne({_id: id});
  // })

  Meteor.methods({
    postProduct: (product) => {
      if (!Meteor.userId()) throw new Meteor.Error('not-authorized');
      return Product.insert(product);
    },
    buyProduct: () => {

    },
    getProductById: (id) => {
      return Product.findOne({_id: id});
    }
  })
}

export default Product;
