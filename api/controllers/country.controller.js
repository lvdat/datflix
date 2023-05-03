import Country from '../models/Country.model.js'

export const getAllCountry = async(req, res) => {
    try {
        const countries = await Country.find().exec()
        if (!countries || countries.length === 0) {
            return res.status(404).send({
                message: "Chưa có quốc gia nào :("
            })
        }
        return res.status(200).send(countries)
    } catch (err) {
        return res.status(500).send({
            message: "Có lỗi trong quá trình truy xuất thông tin",
            error: err.message
        })
    }
}