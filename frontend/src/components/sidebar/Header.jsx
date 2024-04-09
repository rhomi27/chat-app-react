import { AiFillMessage } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
const Header = () => {
    return (
        <div className="w-full flex flex-wrap justify-between items-center bg-blue-600 bg-opacity-20 p-4 rounded-t-lg backdrop-blur-lg">
            <div className="text-white text-xl font-bold flex items-center gap-2"><AiFillMessage /><h1 className="hidden sm:flex">ChatApp</h1></div>
            <div className="flex relative">
                <input type="text" className="bg-white border backdrop-blur-lg pr-10 border-gray-500  rounded-full bg-opacity-5 p-1 px-3 text-white text-sm focus:ring-1 ring-sky-300 outline-none" />
                <button className="absolute right-2 top-1 hover:scale-105 transition-all duration-150"><BiSearchAlt className="text-white h-5 w-5" /></button>
            </div>
        </div>
    )
}

export default Header