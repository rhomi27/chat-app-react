import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"

const Messages = () => {
    const { loading, messages } = useGetMessages()
    const lastMessages = useRef()

    useEffect(() => {
        setTimeout(() => {
            lastMessages.current?.scrollIntoView({ behavior: "smooth" })
        }, 100);
    }, [messages])

    return (
        <div className="gap-2 flex flex-col h-full sm:h-[63vh] overflow-y-scroll p-2">

            {!loading && messages.length > 0 && messages.map((msg) => (
                <div key={msg._id} ref={lastMessages}>
                    <Message message={msg} />
                </div>
            ))}

            {loading && [...Array(4)].map((_, idx) => <div key={idx} role="status" className="p-4 rounded w-full animate-pulse md:p-6 ">
                <div className="h-2.5 flex justify-end bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
                <div className="w-16 h-2 mb-10 flex justify-end bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>)}
            {!loading && messages.length === 0 && (
                <p className="text-center text-sm text-white font-semibold">Send a message to start chatting.</p>
            )}
        </div>
    )
}
export default Messages