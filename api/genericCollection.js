import {Mongo} from 'meteor/mongo';

class GenericCollection extends Mongo.Collection {

    /**
     * Hook insert function.
     * @author binh.vt
     */
    insert(selector, callback) {
        //Add default history information
        selector.create_at = new Date();
        selector.update_at = new Date();
        selector.create_by = Meteor.userId() ? Meteor.userId() : this.userId;
        selector.update_by = Meteor.userId() ? Meteor.userId() : this.userId;
        return super.insert(selector, callback);
    }

    /**
     * Hook update function.
     * @author binh.vt
     */
    update(selector, modifier, options, callback) {
      //Add default history information
      modifier.$set.update_at = new Date();
      modifier.$set.update_by = Meteor.userId() ? Meteor.userId() : this.userId;
      return super.update(selector, modifier, options, callback);
    }

    /**
     * Find remove function.
     * @author binh.vt
    */
    find(selector, options) {
      if (!selector) {
        var selector = {};
      } else {/*Do Nothing*/}
      selector.delete_at = {$eq: null};
      return super.find(selector, options);
    }

    /**
     * FindOne remove function.
     * @author binh.vt
    */
    findOne(selector, options) {
      if (!selector) {
        var selector = {};
      } else {/*Do Nothing*/}
      selector.delete_at = {$eq: null};
      return super.findOne(selector, options);
    }

    /**
     * Hook remove function.
     * @author binh.vt
    */
    remove(selector, callback) {
      let deleteBy = Meteor.userId() ? Meteor.userId() : this.userId;
      return super.update(selector, {$set: {delete_at: new Date(), delete_by: deleteBy}});
      //return super.remove(selector, callback);
    }

}

export default GenericCollection;
