const passport = require("passport")
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy
const keys = require("./keys")
const User = require("../models/user-model")
const Role = require("../models/role")

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"))
    })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      // find current user in UserModel
      const currentUser = await User.findOne({
        googleId: profile.id,
      })

      // overwrite grant permission to ensure update
      if (currentUser) {
        const currentRole = await Role.findOne({
          role: currentUser.role,
        })
        const doc = await User.findOneAndUpdate(
          { googleId: profile.id },
          { grant: currentRole["grant"] },
        )
        //done(null,doc)
        //done(null,currentRole)
      }

      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          name: profile.name["familyName"],
          screenName: profile.displayName,
          googleId: profile.id,
          profileImageUrl: profile.photos[0]["value"],
          role: "guest",
          grant: [],
        }).save()
        if (newUser) {
          done(null, newUser)
        }
      }
      done(null, currentUser)
    },
  ),
)
