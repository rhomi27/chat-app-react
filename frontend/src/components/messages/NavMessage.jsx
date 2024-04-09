import { IoMdArrowBack } from "react-icons/io";
import useConversation from "../../zustand/useConversation.js";


const NavMessage = () => {
    const {selectedConversation, setSelectedConversation} = useConversation()
   
    return (
        <div className="w-full justify-start items-center gap-4 bg-blue-950 sticky top-0 z-10 flex px-3">
        
                <IoMdArrowBack  onClick={() => setSelectedConversation(null)} className="w-4 h-4 text-white cursor-pointer" />
            
            <div className="flex p-3 justify-start items-center gap-4">
                <img className="w-10 h-10 rounded-full object-cover" src={selectedConversation.avatar} alt="user avatar" />
                <h1 className="text-white">{selectedConversation.fullname}</h1>
            </div>
        </div>
    )
}

export default NavMessage