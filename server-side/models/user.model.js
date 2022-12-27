import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName:{
    type: String,
  },
  email:{
    type: String,
  },
  password:{
    type: String,
  },
  phoneNumber:{
    type: Number,
  },
});

const UserInfo = mongoose.model("UserInfo", userSchema);

export default UserInfo;
