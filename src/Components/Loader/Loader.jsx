import { HashLoader} from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-60">
          <HashLoader size={100} color="#006266" /> 
        </div>
    );
};

export default Loader;