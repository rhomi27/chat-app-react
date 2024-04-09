import { useState } from 'react';
import toast from './../../node_modules/react-hot-toast/src/index';
import { useAuthContext } from '../context/AuthContext';

const useSignIn = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const signin = async (username, password) => {
        const success = handleInputErrors({ username, password })
        if (!success) return;
        setLoading(true)
        try {
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()
            if (data.error) throw new Error(data.error);
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
            toast.success(data.message)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }

    return  { loading, signin };
}

export default useSignIn

function handleInputErrors({ fullname, username, password, confirmPassword, gender }) {
    if (!username || !password ) {
        toast.error("Please fill out all fields")
        return false
    }
    return true
}