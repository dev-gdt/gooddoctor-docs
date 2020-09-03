const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  screenName: String,
  googleId: String,
  profileImageUrl: String,
  role: String,
  grant: Array,
})

const User = mongoose.model("user", userSchema)

module.exports = User
