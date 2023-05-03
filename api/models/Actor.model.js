import mongoose from 'mongoose'

const actorSchema = new mongoose.Schema({
    name: String,
    real_name: String,
    bio: String,
    gender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gender',
    },
    birthday: Date,
    place_of_birth: String,

})

export default mongoose.model('Actor', actorSchema)