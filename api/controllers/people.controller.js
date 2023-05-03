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