import mongoose from 'mongoose'
import slugify from 'slugify'

const categorySchema = new mongoose.Schema({
    title: String
})

export default mongoose.model('Category', categorySchema)