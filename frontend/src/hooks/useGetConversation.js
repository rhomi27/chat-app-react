import { useEffect, useState } from "react"
import toast from './../../node_modules/react-hot-toast/src/index';


const useGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const [conversation, setConversation] = useState([])

    useEffect(() => {
        const getConversation = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/users')
                const data = await res.json()

                if (data.error) {
                    throw new Error(data.error)
                }
                setConversation(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        getConversation()
    }, [])
    return { loading, conversation }
}
export default useGetConversation