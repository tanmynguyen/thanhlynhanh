import GenericCollection from '../genericCollection';

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

export default Product;
