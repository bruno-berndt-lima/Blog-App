import Comment from "./Comment"
import axios from "axios"
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { useAuth, useUser } from "@clerk/clerk-react"
import { toast } from "react-toastify"

const fetchComments = async (postId) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`)
    return res.data
}

const Comments = ({postId}) => {
    const {user} = useUser()
    const {getToken} = useAuth()

    const {isPending, error, data} = useQuery({
        queryKey: ["comments", postId],
        queryFn: () => fetchComments(postId),
    })

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async (newComment) => {
            const token = await getToken()
            return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`, newComment, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["comments", postId]})
        },
        onError: (error) => {
            toast.error(error.response.data)
        }
    })

    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)

        const data = {
            description: formData.get("description")
        }

        mutation.mutate(data)
    }

    return (
        <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
            <h1 className="text-lg text-gray-500 underline">Comments</h1>
            <form onSubmit={handleSubmit} className="flex items-center justify-between gap-8 w-full">
                <textarea name="description" placeholder="Write a comment..." className="w-full p-4 rounded-xl"/>
                <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">Send</button>
            </form>
            {isPending ? "Loading..." : error ? "Error loading comments!" : 
                <>
                {
                    mutation.isPending && (
                        <Comment comment={{
                            description: `${mutation.variables.description} (Sending...)`,
                            createdAt: new Date(),
                            user: {
                                img: user.imageUrl,
                                username: user.username,
                            }
                        }}/>
                    )
                }
                {data.map((comment) => (
                    <Comment key={comment._id} comment={comment} postId={postId}/>
                ))}
                </>
            }
        </div>
    )
}

export default Comments