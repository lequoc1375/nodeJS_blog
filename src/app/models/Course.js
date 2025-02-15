const { default: mongoose } = require('mongoose')

const Schema = mongoose.Schema

const Course = new Schema({
  name: { type: String, minLength: 1, maxLength: 100 },
  description: { type: String, minLength: 10, maxLength: 200 },
  image: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model('Course', Course)
