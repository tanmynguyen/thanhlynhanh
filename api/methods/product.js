import Product from '../models/product';

if(Meteor.isServer){

  Meteor.publish('getListProduct', () => {
    if (!Meteor.userId()) throw new Meteor.Error('not-authorized');
    return Product.find({}, {sort: {create_at: -1}}).fetch();
  })

  Meteor.methods({
    postProduct: (product) => {
      if (!Meteor.userId()) throw new Meteor.Error('not-authorized');
      var _product = {
        category_id: product.category_id,
        name: product.name,
        quantity: product.quantity,
        normal_price: product.normal_price,
        sale_price: product.sale_price,
        status: "processing"
      }
      return Product.insert(_product);
    },
    getProductByUserId: () => {

    }
  })
}
