import mongoose from "mongoose";

const { Schema } = mongoose;

const roleSchema = new Schema({
    admin: {
        type: Boolean,
    },
    superAdmin: {
        type: Boolean,
    },
});

const UserRole = mongoose.model("UserRole", roleSchema);

export default UserRole;