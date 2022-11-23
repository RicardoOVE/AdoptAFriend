const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be at least 2 letters long"]
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    description: {
        type: String
    },
    breed: {
        type: String
    },
    age: {
        type: String
    },
    size: {
        type: String
    },
    gender: {
        type: String
    },
    energy: {
        type: Number
    },
    playfulness: {
        type: Number
    },
    training: {
        type: Number
    },
    requirements: {
        type: Number
    },
    excercise: {
        type: Number
    },
    friendlinessdogs: {
        type: Number
    },
    friendlinesskids: {
        type: Number
    },
    friendlinessstrangers: {
        type: Number
    },
    favorited: {
        type: Number
    }
}, { timestamps: true, versionKey:false });

const Pet = mongoose.model("pets", PetSchema);
module.exports = Pet;