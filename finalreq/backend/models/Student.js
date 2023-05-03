const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  address: {
    type: String
  },
}, {
  collection: 'students'
})
module.exports = mongoose.model('Student', studentSchema)