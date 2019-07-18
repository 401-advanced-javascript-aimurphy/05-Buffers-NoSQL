'use strict';

const mongoose = require('mongoose');
const Categories = require('./models-modular/categories/categories.js')


// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// mongoose.connect(MONGOOSE_URI);

let food = new Categories();
food.create({name: 'chicken', description: 'spicy and delicious'})
.then(foodItem => console.log(foodItem))
.catch(console.error);

// Do some work

// Disconnect
mongoose.disconnect();