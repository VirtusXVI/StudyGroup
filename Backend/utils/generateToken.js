import 'dotenv/config';
import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
    console.log("cancro")
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}