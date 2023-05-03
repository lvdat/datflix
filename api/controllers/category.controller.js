import Category from '../models/Category.model.js'

export const getAllCategory = async(req, res) => {
    try {
        const categories = await Category.find().exec()
        if (!categories || categories.length === 0) {
            return res.status(404).send({
                message: "Chưa có thể loại nào :("
            })
        }
        return res.status(200).send(categories)
    } catch (err) {
        return res.status(500).send({
            message: "Có lỗi trong quá trình truy xuất thông tin",
            error: err.message
        })
    }
}

export const getCategoryBySlug = async(req, res) => {
    try {
        const category = await Category.findOne({
            slug: req.params.slug
        }).exec()
        if (!category || category.length === 0) {
            return res.status(404).send({
                message: "Không tìm thấy thể loại :("
            })
        }
        return res.status(200).send(category)
    } catch (err) {
        return res.status(500).send({
            message: "Có lỗi trong quá trình truy xuất thông tin",
            error: err.message
        })
    }
}