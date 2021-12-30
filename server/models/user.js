const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String,
        required: true,
        minlength: "5",
        trim: true
    },
    date: {
        type: Date
    },
    description: {
        type: String
    }
    // phone: {
    //     type: String,
    //     default: '',
    //     validate: {
    //         validator: function (v) {
    //             return /^$|^\d{10}$/.test(v);
    //         },
    //         message: props => `${props.value} is not a valid phone number!`
    //     }
})

module.exports = mongoose.model('user', userSchema)