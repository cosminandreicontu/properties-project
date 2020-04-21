const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const auth = require("./routes/auth");
const properties = require("./routes/properties");
const {jwtP, google} = require("./config/passport");
const jwt = require("jsonwebtoken");
const keys = require("./config/keys");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



app.use(passport.initialize());

jwtP(passport);
google(passport);

app.use("/auth", auth);
app.use("/properties", properties);


app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

  app.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function(req, res) {
        var token = req.user.token;
        const payload = {
          name: req.user.name,
          token: req.user.token
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.redirect("http://localhost:3000?token=Bearer " + token);
          }
        );
        console.log(req.user)
        
    }
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));