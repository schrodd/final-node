import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import sendMail from "../lib/nodemailer/nodemailer.js";
import { userFormatter } from "../controllers/formatters.js";
import UserModel from "../db/models/users.js";

const saltRounds = 10; // bcrypt rounds

export const signupStrat = new LocalStrategy(
  { passReqToCallback: true }, // allows access to request from callback
  async (req, username, password, done) => {
    const user = await UserModel.findOne({ username });
    if (user)
      return done(null, false, {
        message: "Username exists. Please pick another.",
      });
    if (!user) {
      // if it doesnt exist, creates it
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        err && console.log(err);
        try {
          const newUser = await UserModel.create(
            userFormatter(username, hash, req.body)
          );
          await sendMail.userCreated(newUser); // send notification to user via email
          return done(null, newUser); // returns new user
        } catch (error) {
          console.log(error);
        }
      });
    }
  }
);

export const loginStrat = new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await UserModel.findOne({ username });
      if (!user) {
        return done(null, false, {
          message: `User not found with username ${username}.`,
        });
      } else if (!(await bcrypt.compare(password, user.password))) {
        return done(null, false, { message: "Wrong password." });
      } else return done(null, user);
    } catch (error) {
      console.log(error);
    }
  }
);

