import {ObjectId} from "mongodb";
import mongoose from "mongoose";

const treeSchema = mongoose.Schema({
    locked: {
        type: Boolean,
        default: false,
    },
    isFree: {
        type: Boolean,
        default: true,
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
        },
        coordinates: {
            type: [Number],
        },
    },
    height: {
        type: Number,
    },
    latinName: {
        type: String,
    },
    generatedName: {
        type: String,
    },
    diameter: {
        type: Number,
    },
    leaves: {
        type: Number,
    },
    owner: {
        type: ObjectId,
    },
    color: {
        type: String,
    },
});

export default mongoose.model("Tree", treeSchema);
