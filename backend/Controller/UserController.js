import User from "../Model/UserModel.js";

export const getUser = async (req, res) => {
    try {
        const loggedId = req.user._id

        const filterUser = await User.find({ _id: {$ne :loggedId} }).select("-password")

        return res.status(200).json(filterUser);
    } catch (error) {
        console.log('error in controller getUser:', error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}