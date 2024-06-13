import { useLoaderData, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nab from "../Nabver/Nab";
import BlogData from "../../BlogData/BlogData";
import Loader from "../Loader/Loader";


const Blogs = () => {
    const Blogs = useLoaderData()
    console.log(Blogs);
    const navigation = useNavigation()
   if( navigation.state === 'loading') return <Loader></Loader>
    return (
        <div>
            <Nab></Nab>
            <div className="pt-16">
               <div>
               <section className=" text-black">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
			<img src={Blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{Blogs[0].title}</h3>
				<span className="text-xs text-gray-400 dark:text-gray-600">{new Date(Blogs[0].readable_publish_date).toLocaleDateString()}</span>
				<p>{Blogs[0].description}</p>
			</div>  
		</a>
       <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {
        Blogs.slice(1 ,19). map(copy => <BlogData key={copy.id} copy={copy}></BlogData>)
       }
       </div>
		<div className="flex justify-center">
			
		</div>
	</div>
</section>
               </div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Blogs;