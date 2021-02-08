import {ObjectId} from "mongodb";
import mongoose from "mongoose";

const treeSchema = mongoose.Schema({
    y_lambert72: {
        type: Number,
        required: true,
    },
    arbotag: {
        type: Number,
        required: true,
    },
    date_donnees: {
        type: String,
        required: true,
    },
    x_lambda: {
        type: Number,
        required: true,
    },
    geoloc: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    hauteur_totale: {
        type: Number,
        required: true,
    },
    x_lambert72: {
        type: Number,
        required: true,
    },
    y_phi: {
        type: Number,
        required: true,
    },
    nom_complet: {
        type: String,
        required: true,
    },
    diametre_cime: {
        type: Number,
        required: true,
    },
    circomf: {
        type: Number,
        required: true,
    },
    owner: {
        type: ObjectId,
    },
});

export default mongoose.model("Tree", treeSchema);
