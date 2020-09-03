const mongoose = require("mongoose")
const Schema = mongoose.Schema

const roleSchema = new Schema({
  role: String,
  grant: Array,
})

const Role = mongoose.model("role", roleSchema)

module.exports = Role
