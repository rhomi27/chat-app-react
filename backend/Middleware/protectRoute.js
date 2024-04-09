import jwt from 'jsonwebtoken'
import User from '../Model/UserModel.js'

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" })
        }
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET)

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - No token provided" })
        }
        const user = await User.findById(decoded.userId).select("-password")

        if (!user) {
            return res.status(404).json({error: "No such user found."})
        }

        req.user = user
        next()

    } catch (error) {
        console.log("error in middleware protect", error.message)
        return res.status(500).json("internal server error")
    }
}

export default  protectRoute; 