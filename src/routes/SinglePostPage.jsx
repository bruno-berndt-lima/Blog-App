import { Link } from "react-router-dom"
import Image from "../components/Image"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Details  */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">klhf lakjdf akldfj alkjf aoiejf oia iklj galk joiaji lkhasd glkaj lkj.</h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link className="text-blue-800">John Doe</Link>
                        <span>on</span>
                        <Link className="text-blue-800">Web Design</Link>
                        <span>2 days ago</span>
                    </div>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                </div>
                <div className="hidden lg:block w-2/5">
                    <Image src="postImg.jpeg" w="600" className="rounded-2xl"/>
                </div>
            </div>
            {/* Content  */}
            <div className="flex flex-col md:flex-row gap-12">
                {/* Text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque. Proin sit amet euismod nisi, vitae luctus tortor. Proin lacinia interdum nisi, a auctor mauris sodales vel. Phasellus odio mauris, elementum quis varius ac, placerat cursus ex. Nulla bibendum bibendum erat. Praesent non magna pharetra, pretium sapien nec, pulvinar lacus. Quisque euismod lorem sit amet tellus lobortis, id sollicitudin erat fringilla.
                    </p>
                </div>
                {/* Menu */}
                <div className="px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                            <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48"></Image>
                            <Link className="text-blue-800">John Doe</Link>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta egestas pellentesque.</p>
                        <div className="flex gap-2">
                            <Link>
                                <Image src="facebook.svg"></Image>
                            </Link>
                            <Link>
                                <Image src="instagram.svg"></Image>
                            </Link>
                        </div>
                    </div>
                    <PostMenuActions/>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className="underline">All</Link>
                        <Link className="underline" to="/">
                            Web Design
                        </Link>
                        <Link className="underline" to="/">
                            Development
                        </Link>
                        <Link className="underline" to="/">
                            Databases
                        </Link>
                        <Link className="underline" to="/">
                            Search engine
                        </Link>
                        <Link className="underline" to="/">
                            Marketing
                        </Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage