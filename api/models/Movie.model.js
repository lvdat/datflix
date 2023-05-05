import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    genres: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }],
    duration: String,
    thumbnail: String,
    country: String,
    video: String,
})

export default mongoose.model('Movie', movieSchema)