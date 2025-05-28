import Image from "./Image"

const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
            <div className="flex items-center gap-4">
                <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
                <span className="font-medium">John Doe</span>
                <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <div className="mt-4">
                <p>
                    In hac habitasse platea dictumst. In mollis commodo felis, pellentesque accumsan neque lacinia eu. Pellentesque dictum auctor nulla, eu consequat elit luctus nec. Sed consectetur tristique dignissim. Vivamus accumsan orci nec ex tempus egestas. Quisque vitae fermentum quam. 
                </p>
            </div>
        </div>
    )
}

export default Comment