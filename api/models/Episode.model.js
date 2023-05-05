import mongoose from 'mongoose'

const episodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
    },
    mediaDirectLink: {
        type: String,
    },
    quality: {
        type: String
    }
})

export default mongoose.model('Episode', episodeSchema)