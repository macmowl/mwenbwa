import {ObjectId} from "mongodb";
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    username: {
        type: String,
        required: true,
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
    },
});

userSchema.plugin(uniqueValidator);

export default mongoose.model("User", userSchema);
