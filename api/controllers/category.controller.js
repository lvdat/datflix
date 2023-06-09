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

export const getCategoryById = async(req, res) => {
    try {
        const category = await Category.findById(req.params.id).exec()
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

export const createCategory = async(req, res) => {
    try {
        const category = await Category.create({
            title: req.body.title,
        })
        if (category) {
            return res.status(200).send({
                message: "Success",
                id: category._id
            })
        }
        return res.status(400).send({
            message: "Failed",
            id: category._id
        })
    } catch (err) {
        return res.status(500).send({
            message: "Server Internal Error."
        })
    }
}

export const deleteCategory = async(req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        if (category) {
            return res.status(200).send({
                message: "Success",
                id: category._id
            })
        }
        return res.status(400).send({
            message: "Failed",
        })
    } catch (err) {
        return res.status(500).send({
            message: "Server Internal Error."
        })
    }
}