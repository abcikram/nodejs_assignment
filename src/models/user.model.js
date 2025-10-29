import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            index: true,
            trim: true
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true , versionKey: false }
);

userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);

export default User;
