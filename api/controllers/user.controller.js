import jwt from 'jsonwebtoken'
import User from '../models/User.model.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

export const login = async(req, res) => {
    const { username, password } = req.body
    const uID = req.uID
    const user = await User.findById(uID).exec()
    if (bcrypt.compareSync(password, user.password)) {
        let token = jwt.sign({ id: uID }, JWT_SECRET, {})
        return res.status(200).send({
            message: "Đăng nhập thành công!",
            token,
        })
    } else {
        return res.status(401).send({
            message: 'Mật khẩu không chính xác!',
        })
    }
}