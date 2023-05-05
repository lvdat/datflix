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
    // Các trường khác tùy ý
    director: String,
    duration: String,
    thumbnail: String,
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
    }
})

export default mongoose.model('Movie', movieSchema)