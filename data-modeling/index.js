'use strict';

const mongoose = require('mongoose');

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
// var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// Do some work

// Disconnect
mongoose.disconnect();