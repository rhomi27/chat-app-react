import Conversation from '../Model/ConversationModel.js'
import Message from '../Model/MessageModel.js'

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }
        // socket io

        // await conversation.save()
        // await newMessage.save()
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("error in controller send message", error.message)
        return res.status(500).json("internal server error")
    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages")

        if (!conversation) return res.status(200).json([])
        

        const message = conversation.messages

        res.status(200).json(message)
    } catch (error) {
        console.log("error in controller get message", error.message)
        return res.status(500).json(error.message)
    }

}