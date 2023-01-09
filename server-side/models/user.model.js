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
});

const UserInfo = mongoose.model("UserInfo", userSchema);

export default UserInfo;

/*
Product Categories-

Mobile Phones
Smart Watches
Headphones
Laptop
TVs
Fridges
Oven
Camera
Speakers
*/
