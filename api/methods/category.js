import Category from '../models/category';

if(Meteor.isServer){

  Meteor.publish('getListCategory', () => {
    if (!Meteor.userId()) throw new Meteor.Error('not-authorized');
    return Product.find({}, {sort: {name: -1}}).fetch();
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
