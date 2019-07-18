'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const Model = require('./categories-schema.js')



class Categories {

  constructor() {
  }

  get(_id) {
    if (_id) {
      return this.schema.findOne({ _id });
    } else {
      return this.schema.find({});
    }
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    // new category = new schema(record);
    // category.save();
    // let newRecord = new this.schema(record);
    // return newRecord.save();

  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return this.schema.findByIdAndDelete(_id);

  }

}

module.exports = Categories;
