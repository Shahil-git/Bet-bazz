import { Link, Outlet, useLoaderData } from "react-router-dom";
import Nab from "../Components/Nabver/Nab";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const ShowBlogs = () => {

    const [index ,setIndex] = useState(0)
  const handleBookmark = show =>{
    console.log(show);
  }
    const show = useLoaderData()
    const { comments_count, public_reactions_count, title, reading_time_minutes,tags } = show
    return (
        <div>
            <Nab></Nab>
            <div className="max-w-3xl pt-16 py-16 p-10 mx-auto space-y-12">
                <article className="space-y-8 ">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}.</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
                            <div className="flex items-center md:space-x-2">
                                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full bg-gray-500 dark:bg-gray-500 border-gray-700 dark:border-gray-300" />
                                <p className="text-sm">{reading_time_minutes} min read • {new Date(show.readable_publish_date).toLocaleDateString()}</p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count}  comments • {public_reactions_count} views</p>
                        </div>
                    </div>
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
	<Link onClick={()=>setIndex(0)}  to="" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${index === 0 ? "border border-b-0" : "border-b"} rounded-t-lg dark:bg-gray-100 dark:text-gray-800`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Content</span> 
	</Link >
	<Link onClick={()=>setIndex(1)} to={`author`} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${index === 1 ? "border border-b-0" : "border-b"} rounded-t-lg dark:bg-gray-100 dark:text-gray-800`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Author</span>
	</Link >
    <Link onClick={()=>handleBookmark(show) }><MdOutlineBookmarkAdd  className="ml-5 text-4xl rounded-full hover:bg-primary bg-secondary p-1" /></Link>
</div>
<Outlet></Outlet>

                </article>
                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
                {
            tags.map(tag=>  <a key={tags.id} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">#{tag}</a>)
                }
                        
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Related posts</h4>
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:underline">Func id</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volta, aliquot lectus sit amet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowBlogs;