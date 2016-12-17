// import Category from '../models/category';

import {Meteor} from 'meteor/meteor';

import GenericCollection from '../genericCollection.js';

const Category = new GenericCollection('categories');

var schema = new SimpleSchema({
    name: {
      type : String
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

Category.attachSchema(schema);




if(Meteor.isServer){

  Meteor.publish("getListCategory", function() {
		return Category.find();
	})

  // Category.insert({name: 'Others'});
  // Category.insert({name: 'Mobile'});
  // Category.insert({name: 'Tablet'});
  // Category.insert({name: 'Fashion'});

  Meteor.methods({
    // postProduct: () => {
    //   if (!Meteor.userId()) throw new Meteor.Error('not-authorized');
    //   return Product.insert({});
    // },
    // getProductByUserId: () => {
    //
    // }
  })
}

export default Category;
