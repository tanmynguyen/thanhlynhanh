// import Product from '../models/product';

import GenericCollection from '../genericCollection';

import {Meteor} from 'meteor/meteor';

const Share = new GenericCollection('shares');

var schema = new SimpleSchema({
    product_id: {
      type : String,
    },
    count: {
      type : String,
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

Share.attachSchema(schema);



if(Meteor.isServer){

  // Meteor.publish('getShare', function(product_id) {
  //   if (!this.userId) throw new Meteor.Error('not-authorized');
  //   return Share.find();
  // })

  // Meteor.publish('getProductById', function(id) {
  //   if (!this.userId) throw new Meteor.Error('not-authorized');
  //   return Product.findOne({_id: id});
  // })

  Meteor.methods({
    getLinkShare: (product_id) => {
      if (!Meteor.userId()) throw new Meteor.Error('not-authorized');
      return Share.findOne({product_id: product_id, create_by: Meteor.userId()});
    }
  })
}

export default Share;
