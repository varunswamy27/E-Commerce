import mongoose from "mongoose";

const { Schema } = mongoose;

const roleSchema = new Schema({
    role: {
        type: String,
    },
});

const UserRole = mongoose.model("UserRole", roleSchema);

export default UserRole;