'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  id: { required: true },
  name: { required: true },
});

module.exports = mongoose.model('categories', categories);

