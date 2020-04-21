const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

const jwtP = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};

const google = passport => {
passport.use(
    new GoogleStrategy(
     {
      clientID: keys.clientId,
      clientSecret: keys.clientSecret,
      callbackURL: "/auth/google/callback"
     },
     function(accessToken, refreshToken, profile, done) {
      var userData = {
       email: profile.emails[0].value,
       name: profile.displayName,
       token: accessToken
      };
      return done(null, userData);
     }
    )
   );
    }


module.exports = {jwtP, google}