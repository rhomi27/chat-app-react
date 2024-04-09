import User from "../Model/UserModel.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../Utils/generateToken.js"

export const SignUp = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body

        if (password.length <= 5) {
            return res.status(400).json({ error: "minimum password 6" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "pasword don't macth" })
        }
        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ error: "username already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashPassword,
            gender,
            avatar: gender === 'male' ? boyProfile : girlProfile
        })

        if (newUser) {

            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()

            return res.status(200).json({
                _id: newUser._id,
                username: newUser.username,
                fullname: newUser.fullname,
                gender: newUser.gender,
                avatar: newUser.avatar,
                message: "Sign up successfully"
            })
        } else {
            return res.status(400).json({ error: "Invalid user data" })
        }
    } catch (error) {
        console.log("error signUp controller", error.message)
        return res.status(500).json({ error: "server internal error" })
    }


}

export const SignIn = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" })
        } else {
            generateTokenAndSetCookie(user._id, res)
            return res.status(200).json({
                _id: user._id,
                username: user.username,
                fullname: user.fullname,
                gender: user.gender,
                avatar: user.avatar,
                message: "Sign in successfully"
            })
        }

    } catch (error) {
        console.log("error signIn controller", error.message)
        return res.status(500).json({ error: "server internal error" })
    }
}

export const LogOut = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({message: "Logged Out successfully"})
    } catch (error) {
        console.log("error LogOut controller:", error.message)
        return res.status(500).json({ error: "server internal error" })
    }
}