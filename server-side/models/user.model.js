import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  phoneNumber:{
    type: Number,
    required: true,
  },
  isAdmin:{
    type: Boolean,
    default: false,
  }
});

const UserInfo = mongoose.model("UserInfo", userSchema);

export default UserInfo;


