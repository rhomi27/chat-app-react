import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from './../../utils/extractTime';


const Message = ({ message }) => {
    const { authUser } = useAuthContext()
    const fromMe = message.senderId === authUser._id
    const formatTime = extractTime(message.createdAt)
    const className = fromMe ? 'justify-end' : 'justify-start'
    const chatColor = fromMe ? 'bg-blue-400' : 'bg-gray-400'

    return (
        <div className={`message flex ${className} items-center`}>
            <div className={`inline-flex flex-col px-3 gap-1 p-1 ${chatColor} rounded-br-md rounded-l-md`}>
                <p className={`text-white text-sm inline-flex ${className}`}>{message.message}</p>
                <p className="text-white text-xs inline-flex justify-start">{formatTime}</p>
            </div>
        </div>
    )
}

export default Message