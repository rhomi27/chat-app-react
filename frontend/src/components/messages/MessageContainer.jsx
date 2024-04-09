import { useEffect } from 'react';
import useConversation from '../../zustand/useConversation';
import InputMessage from './InputMessage';
import Messages from './Messages';
import NavMessage from './NavMessage';
import MessagesNone from './MessagesNone'
const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])
    return (

        <div className={`w-full h-full fixed top-0 bottom-0 right-0 left-0 justify-center items-center sm:relative sm:block ${!selectedConversation ? "hidden" : "flex"}`}>
            {!selectedConversation ? <MessagesNone /> : <div className="bg-sky-300 bg-opacity-50 w-full h-full backdrop-blur-lg">
                <NavMessage />
                <Messages />
                <InputMessage />
            </div>}
        </div>
    )
}

export default MessageContainer