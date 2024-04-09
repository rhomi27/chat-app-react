import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from './../../node_modules/react-hot-toast/src/index';
const useSignOut = () => {
    const { setAuthUser } = useAuthContext()
    const [loading, setLoading] = useState(false)

    const signout = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/auth/signout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            toast.success(data.message);
            if (data.error) { throw new Error(data.error) }

            localStorage.removeItem('chat-user')
            setAuthUser(null)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, signout }
}

export default useSignOut