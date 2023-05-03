import User from '../models/User.model.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

export const accountExist = async(username) => {
    const check = await User.findOne({
        username,
    })
    return check && check !== null
}

export const checkBeforeLogin = async(req, res, next) => {
    if (!req.body || !req.body.username || !req.body.password) {
        return res.status(403).send({
            message: "Fobidern"
        })
    }
    const { username } = req.body
    if (!accountExist(username)) {
        return res.status(404).send({
            message: 'Tài khoản không tồn tại!',
        })
    }
    try {
        const user = await User.findOne({
            username,
        })
        req.uID = user._id
        next()
    } catch (err) {
        return res.status(404).send({
            message: 'Tài khoản không tồn tại!',
        })
    }

}