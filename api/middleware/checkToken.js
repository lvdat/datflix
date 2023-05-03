import User from '../models/User.model.js'
import jwt, { decode } from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

export const checkToken = async(req, res, next) => {
    const token = req.headers['token']
    if (!token) {
        return res.status(401).send({
            message: 'Bạn chưa đăng nhập!',
        })
    }
    jwt.verify(token, JWT_SECRET, (err, decode) => {
        if (err) {
            return res.status(401).send({
                message: 'Token đã hết hạn hoặc không chính xác, vui lòng đăng nhập lại!',
            })
        }
        req.uID = decode.uID
        next()
    })
}