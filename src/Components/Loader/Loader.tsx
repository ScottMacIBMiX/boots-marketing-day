import LoaderGif from "../../assets/loader.gif";
import Image from "next/image";
const Loader = () => {
  return (
    <div className="diageo-soi-loader">
      <Image src={LoaderGif} alt="Loading spinner" width={250} height={300} />
    </div>
  );
};

export default Loader;
