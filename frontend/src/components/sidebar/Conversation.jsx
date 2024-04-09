import useConversation from "../../zustand/useConversation"

const Conversation = ({ conversation }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const isSelected = selectedConversation?._id === conversation._id
    return (
        <div onClick={() => setSelectedConversation(conversation)} className={`flex justify-start w-full border-b pb-2 items-center gap-4 hover:bg-sky-300 rounded-md cursor-pointer transition-all duration-300 ${isSelected ? "bg-sky-300" : ""}`}>
            <img className="rounded-full w-10 h-10 object-cover border-2 border-sky-400" src={conversation.avatar} alt="user avatar" />
            <div className="flex text-sm text-white">{conversation.fullname}</div>
        </div>
    )
}

export default Conversation