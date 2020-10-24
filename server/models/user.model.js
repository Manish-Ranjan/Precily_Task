const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: 3
    },
}, { timestamps: true });
const user = mongoose.model('User', UserSchema);
module.exports = user;