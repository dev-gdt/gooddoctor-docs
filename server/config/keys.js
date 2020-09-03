// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const G_TOKENS = {
  GOOGLE_CLIENT_ID:
    "800081715492-n5mhdiu1pl8bn05c89aut567tilfutfi.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET: "dbOu0E7viJ2OXVdD-OCXaLAi",
}

const MONGODB = {
  MONGODB_URI:
    "mongodb+srv://mike:mike@gdt.41doi.gcp.mongodb.net/testing?retryWrites=true&w=majority",
}

const SESSION = {
  COOKIE_KEY: "thisappisawesome",
}

const KEYS = {
  ...G_TOKENS,
  ...MONGODB,
  ...SESSION,
}

module.exports = KEYS
