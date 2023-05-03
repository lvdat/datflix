import mongoose from 'mongoose'
import slugify from 'slugify'

const categorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    set: (value) => {
        const processedValue = value.trim().toLowerCase()
        const slug = slugify(processedValue, { lower: true })
        return slug
    }
})

export default mongoose.model('Category', categorySchema)