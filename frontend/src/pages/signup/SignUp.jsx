import { useState } from "react"
import { Link } from "react-router-dom"
import useSignUp from "../../hooks/useSignUp"


const SignUp = () => {

    const { loading, signup } = useSignUp()

    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-96 h-auto relative bg-white shadow-sm shadow-sky-200 bg-opacity-5 rounded-md backdrop-blur-lg">
                <div className="p-4 sm:pr-28 transition-all duration-300">
                    <h1 className="text-2xl text-white font-bold text-center mb-8">Sign Up <span className="text-sky-500">ChatApp</span></h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-2">
                            <label className="text-white flex text-sm justify-start" htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" className="bg-white border backdrop-blur-lg border-gray-500  rounded-md bg-opacity-5 p-1 px-3 text-white text-sm focus:ring-1 ring-sky-300 outline-none"
                                value={inputs.fullname} onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-white flex text-sm justify-start" htmlFor="username">Username</label>
                            <input type="text" id="username" className="bg-white border backdrop-blur-lg border-gray-500  rounded-md bg-opacity-5 p-1 px-3 text-white text-sm focus:ring-1 ring-sky-300 outline-none"
                                value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-white flex text-sm justify-start" htmlFor="password">Password</label>
                            <input type="password" id="password" className="bg-white border backdrop-blur-lg border-gray-500  rounded-md bg-opacity-5 p-1 px-3 text-white text-sm focus:ring-1 ring-sky-300 outline-none"
                                value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}

                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-white flex text-sm justify-start" htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="bg-white border backdrop-blur-lg border-gray-500  rounded-md bg-opacity-5 p-1 px-3 text-white text-sm focus:ring-1 ring-sky-300 outline-none"
                                value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-white flex text-sm justify-start" htmlFor="gender">Select Gender</label>
                            <select name="gender" id="gender" className="bg-white border backdrop-blur-lg border-gray-500  rounded-md bg-opacity-5 p-1 px-3 text-white text-sm focus:ring-1 ring-sky-300 outline-none"
                                value={inputs.gender}
                                onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}>
                                <option className="text-black">Select Gender</option>
                                <option className="text-black " value="male">Male</option>
                                <option className="text-black " value="female">Female</option>
                            </select>
                        </div>
                        <Link to={'/signin'} className="text-white text-xs text-start hover:text-blue-600 p-1 underline">have a account? Sign In</Link>
                        <button type="submit" className="w-full bg-blue-600 text-white mt-5 bg-opacity-50 p-1 border border-blue-600 text-sm rounded-md mb-5 hover:scale-[.98] transition-all duration-200" disabled={loading}>
                            {!loading ? "Sign Up" : <div className="flex justify-center items-center w-full" role="status">
                                <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>}
                        </button>
                    </form>
                </div>
                <div className="absolute -z-[3] md:z-0 -right-28 top-20 transition-all duration-300  drop-shadow-md shadow-black">
                    <img className="w-64 h-[330px] drop-shadow-xl" src="/public/pngwing.com.png" alt="anime sigIn" />
                </div>
            </div>
        </div>
    )
}

export default SignUp