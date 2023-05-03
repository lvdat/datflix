import mongoose from 'mongoose'

const peopleSchema = new mongoose.Schema({
    name: String,
    real_name: String,
    bio: String,
    gender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gender',
    },
    birthday: Date,
    place_of_birth: String,
    slug: String,
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }]
})

export default mongoose.model('People', peopleSchema)