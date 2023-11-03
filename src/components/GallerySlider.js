import { MdClear } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const GallerySlider = ({ galleryImages, currentIndex, onClose, onNext, onPrevious }) => {
  const image = galleryImages[currentIndex];
 
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-90">
      <div className="max-w-full max-h-full relative">
        <button
          className="absolute sm:-top-[5rem] -top-52 sm:-right-[14rem] right-4 text-black text-4xl w-6 h-6 rounded-full bg-white flex justify-center items-center"
          onClick={onClose}
        >
          <MdClear />
        </button>
        <button
          className="absolute top-1/2 sm:-left-[7rem] left-0 transform -translate-y-1/2 text-black text-2xl w-6 h-6 rounded-full bg-white flex justify-center items-center"
          onClick={onPrevious}
          disabled={currentIndex === 0}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute top-1/2 sm:-right-[8rem] right-0 transform -translate-y-1/2 text-black text-2xl w-6 h-6 rounded-full bg-white flex justify-center items-center"
          onClick={onNext}
          disabled={currentIndex === galleryImages.length - 1}
        >
          <IoIosArrowForward />
        </button>
        <Image
          src={image.image}
          alt="Description of the image"
          className=" sm:w-[900px] sm:h-[600px] sm:m-0 w-3/4 m-auto object-cover"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default GallerySlider;