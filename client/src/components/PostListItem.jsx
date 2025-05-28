import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            {/* Image  */}
            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
            </div>

            {/* Details  */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold">
                    fjdksal lakdgj lsadjjfalk jfkljkd l hgslf hlhad lghsd gfd
                </Link>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link className="text-blue-800">John</Link>
                    <span>on</span>
                    <Link className="text-blue-800">Web Design</Link>
                    <span>2 days ago</span>
                </div>
                <p>
                    aaaaaaaaaaaa bbbbbbbbbbbbbbbbn nnnnnnnnnnnnn nnnnnnnnnnnnnn ma asfka fkjah fa
                    djhf ds hflkdf slk dfl lkhalkfa lkha sflk oiwe oiqer yoiq uoiqu oiurqo
                     oqiyer oiquer uweyroqiu oiqur oq iu oiryq oiwy oroeiy qouy  oriqy ruoyq or
                      queyr oqiuroqiyr quoro qiyruoiq yroqiyr oqiy orqoiyroq iyr oqiyro qiyriq
                </p>
                <Link to="/test" className="underline text-blue-800 text-sm">Read More</Link>

            </div>
        </div>
    )
}

export default PostListItem