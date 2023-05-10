import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  profileImage: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  userRole: { type: Schema.Types.ObjectId, ref: "UserRole" }
}, {
  timestamps: true
})

const UserInfo = mongoose.model("UserInfo", userSchema);

export default UserInfo;


