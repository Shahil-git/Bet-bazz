import { Link } from "react-router-dom";

const BlogData = ({copy}) => {
    const {id ,title , readable_publish_date , description , cover_image } = copy
    return (
        <div>
        <div  className=" border-[3px] border-primary hover:border-secondary h-[470px]">
			<Link to={`/blog/${id}`} rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-[3px] border-primary">
				<img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs text-black dark:text-white">{readable_publish_date}</span>
					<p>{description}</p>
				</div>
			</Link >
	
		</div>
        </div>
    );
};

export default BlogData;