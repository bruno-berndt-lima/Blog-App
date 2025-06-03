import { Link, useSearchParams } from "react-router-dom"
import Search from "./Search"

const SideMenu = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleFilterChange = (event) => {
        if (searchParams.get("sort") !== !event.target.value) {
            setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                sort: event.target.value
            })
        }
    }

    const handleCategoryChange = (category) => {
        if (searchParams.get("cat") !== category) {
            setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                cat: category
            })
        }
    }

    return (
        <div className="px-4 h-max sticky top-8">
            <h1 className="mb-4 text-sm font-medium">Search</h1>
            <Search/>
            <h1 className="mt-8 mb-4 text-sm font-medium">Filters</h1>
            <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name="sort" 
                        value="newest"
                        onChange={handleFilterChange} 
                        className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    />
                    Newest
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name="sort" 
                        value="popular"
                        onChange={handleFilterChange}
                        className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    />
                    Most Popular
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name="sort" 
                        value="trending"
                        onChange={handleFilterChange}
                        className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    />
                    Trending
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name="sort" 
                        value="oldest"
                        onChange={handleFilterChange} 
                        className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    />
                    Oldest
                </label>
            </div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-4 text-sm">
                <Link className="underline cursor-pointer" onClick={() => handleCategoryChange("general")}>All</Link>
                <Link className="underline cursor-pointer" onClick={() => handleCategoryChange("web-design")}>Web Design</Link>
                <Link className="underline cursor-pointer" onClick={() => handleCategoryChange("development")}>Development</Link>
                <Link className="underline cursor-pointer" onClick={() => handleCategoryChange("databases")}>Databases</Link>
                <Link className="underline cursor-pointer" onClick={() => handleCategoryChange("seo")}>Search engines</Link>
                <Link className="underline cursor-pointer" onClick={() => handleCategoryChange("algorithms")}>Algorithms</Link>
            </div>
        </div>
    )
}

export default SideMenu