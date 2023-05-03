import mongoose from 'mongoose'

const genderSchema = new mongoose.Schema({
    name: String,
})

export default mongoose.model('Gender', genderSchema)