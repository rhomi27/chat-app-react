import { useState } from "react"
import toast from './../../node_modules/react-hot-toast/src/index';
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
    const [loading, setLoading] = useState(false)
    const { authUser, setAuthUser } = useAuthContext()
    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullname, username, password, confirmPassword, gender })
        if (!success) return;

        setLoading(true)
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender })
            })
            const data = await res.json()
            if (data.error) throw new Error(data.error);
            
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }

    return { loading, signup };
}
export default useSignUp

function handleInputErrors({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill out all fields")
        return false
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false
    }
    if (username.length > 25) {
        toast.error('Username should have a maximum of 25 characters');
        return false;
    }
    return true
}