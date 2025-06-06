import { Link, useParams } from "react-router-dom"
import Image from "../components/Image"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"
import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import { format } from "timeago.js"

const fetchPost = async (slug) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`)
    return res.data
}

const SinglePostPage = () => {
    const {slug} = useParams()
    const {isPending, error, data} = useQuery({
        queryKey: ["post", slug],
        queryFn: () => fetchPost(slug),
    })

    if (isPending) return "loading..."
    if (error) return "Something went wrong ..." + error.message
    if (!data) return "Post not found!"

    return (
        <div className="flex flex-col gap-8 mt-12">
            {/* Details  */}
            <div className="flex gap-8 ml-4">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        {data.title}    
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link to={`/posts?author=${data.user?.username}`} className="text-blue-800">{data.user?.username || 'Anonymous'}</Link>
                        <span>on</span>
                        <Link to={`/posts?cat=${data.category}`} className="text-blue-800">{data.category}</Link>
                        <span>{format(data.createdAt)}</span>
                    </div>
                    <p className="text-gray-500 font-medium">
                        {data.description}
                    </p>
                </div>
                {data.img && <div className="hidden lg:block w-2/5">
                    <Image src={data.img} w="600" className="rounded-2xl"/>
                </div>}
            </div>
            {/* Content  */}
            <div className="flex flex-col md:flex-row justify-between gap-12">
                {/* Text */}
                <div className="lg:text-lg flex-1 flex flex-col gap-6 text-justify">
                    <div 
                        className="ql-editor"
                        dangerouslySetInnerHTML={{ __html: data.content }} 
                    />
                </div>
                {/* Menu */}
                <div className="md:w-64 px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                            {data.img && <Image src={data.user.img} className="w-12 h-12 rounded-full object-cover" w="48" h="48"></Image>}
                            <Link to={`/posts?author=${data.user?.username}`} className="text-blue-800">{data.user?.username || 'Anonymous'}</Link>
                        </div>
                        <div className="flex gap-2">
                            <Link>
                                <Image src="facebook.svg"></Image>
                            </Link>
                            <Link>
                                <Image src="instagram.svg"></Image>
                            </Link>
                        </div>
                    </div>
                    <PostMenuActions post={data}/>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link to="/posts" className="underline">All</Link>
                        <Link to="/posts?cat=web-design" className="underline">Web Design</Link>
                        <Link to="/posts?cat=development" className="underline">Development</Link>
                        <Link to="/posts?cat=databases" className="underline">Databases</Link>
                        <Link to="/posts?cat=seo" className="underline">Search engines</Link>
                        <Link to="/posts?cat=algorithms" className="underline">Algorithms</Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    <Search/>
                </div>
            </div>
            <Comments postId={data._id} />
        </div>
    )
}

export default SinglePostPage