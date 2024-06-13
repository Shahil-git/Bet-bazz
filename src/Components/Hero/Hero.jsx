import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <div className="hero lg:max-w-full min-h-[473px] ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold">Welcome to <span   className="text-4xl font-bold bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
                        <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
                        <div className="flex gap-3 justify-center">
                            {/*<button className="btn btn-primary">Read Blogs</button>
      <button className="btn btn-primary ml-5">BookMarks</button>*/}
                            <Link to="/Blogs" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-primary group-hover:text-white">Read Blogs</span>
                            </Link>
                            <Link to="/Bookmarks" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-primary group-hover:text-white">Bookmarks</span>
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;