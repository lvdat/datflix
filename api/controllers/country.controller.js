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

export const getCountryByIsoCode = async(req, res) => {
    try {
        const countries = await Country.findOne({
            iso_code: req.params.isocode
        }).exec()
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

export const createCountry = async(req, res) => {
    try {
        const country = await Country.create({
            iso_code: req.body.iso_code,
            name: req.body.name,
        })
        if (country) {
            return res.status(200).send({
                message: "Success",
                id: country._id
            })
        }
        return res.status(400).send({
            message: "Failed",
            id: country._id
        })
    } catch (err) {
        return res.status(500).send({
            message: "Server Internal Error."
        })
    }
}