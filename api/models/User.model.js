import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    },
})

export default mongoose.model('User', userSchema)