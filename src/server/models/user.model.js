import {ObjectId} from "mongodb";
import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Email is invalid"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: 8,
        select: false,
    },
    avatar: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
    },
    color: {
        type: String,
        required: true,
    },
    leaves: {
        type: Number,
    },
    trees: {
        type: [ObjectId],
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
    },
});

export default mongoose.model("User", userSchema);
