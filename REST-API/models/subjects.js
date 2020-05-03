const mongoose = require('mongoose');

//connect to schema

const Schema = mongoose.Schema;


const NinjaSchema = new Schema({
    // username: { type: String, unique: true, required: [true, 'username field is required'] },
    // hash: { type: String, required: true },
    // firstName: { type: String, required: [true, 'firstname is required'] },
    // lastName: { type: String, required: [true, 'lastname is required'] },
    // email: { type: String, required: [true, 'email is required'] },
    // // active: { type: Boolean, default: true, select: false },
    // role: { type: String, enum: ["student", "tutor"], default: "student" },
    // createdDate: { type: Date, default: Date.now }

    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    rank: {
        type: String,

    },

    available: {
        type: Boolean,
        default: false
    }


})

const Ninja = mongoose.model('ninja', subjectSchema);

module.exports = Ninja;