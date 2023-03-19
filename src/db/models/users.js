import mongoose from "mongoose";

const userCollection = "users";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    isRequired: true,
  },
  password: {
    type: String,
    isRequired: true,
  },
  name: {
    type: String,
    isRequired: true,
  },
  phone: {
    type: String,
    isRequired: true,
  },
  email: {
    type: String,
    isRequired: true,
  },
  cart: [{ type: Object }]
});

const UserModel = mongoose.model(userCollection, userSchema);

export default UserModel;
