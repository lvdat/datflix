import People from '../models/People.model.js'
import Role from '../models/Role.model.js'
import Gender from '../models/Gender.model.js'

export const getAllPeople = async(req, res) => {
    try {
        const people = await People.find().exec()
        if (!people || people.length === 0) {
            return res.status(404).send({
                message: "Chưa có người nào :("
            })
        }
        return res.status(200).send(people)
    } catch (err) {
        return res.status(500).send({
            message: "Có lỗi trong quá trình truy xuất thông tin",
            error: err.message
        })
    }
}

export const getPeopleById = async(req, res) => {
    try {
        const people = await People.findById(req.params.id).exec()
        if (!people || people.length === 0) {
            return res.status(404).send({
                message: "Không tìm thấy người nào :("
            })
        }
        return res.status(200).send(people)
    } catch (err) {
        return res.status(500).send({
            message: "Có lỗi trong quá trình truy xuất thông tin",
            error: err.message
        })
    }
}

export const createPeople = async(req, res) => {
    try {
        const people = await People.create({
            name: req.body.name,
            real_name: req.body.real_name,
            bio: req.body.bio,
            gender: req.body.gender,
            birthday: req.body.birthday,
            place_of_birth: req.body.place_of_birth,
            slug: req.body.slug,
            roles: req.body.roles
        })
        if (people) {
            return res.status(200).send({
                message: "Success",
                id: people._id
            })
        }
        return res.status(400).send({
            message: "Failed",
            id: people._id
        })
    } catch (err) {
        return res.status(500).send({
            message: "Server Internal Error."
        })
    }
}