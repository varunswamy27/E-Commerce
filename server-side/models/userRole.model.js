import mongoose from "mongoose";

const { Schema } = mongoose;

const roleSchema = new Schema({
    admin: {
        type: String,
        default : "admin",
        required: true,
    },
    superAdmin: {
        type: Boolean,
        required: true,
    },
});

const UserRole = mongoose.model("UserRole", roleSchema);

export default UserRole;


