import { MdClear } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GallerySlider = ({ galleryImages, currentIndex, onClose, onNext, onPrevious }) => {
  const image = galleryImages[currentIndex];
 
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-90">
      <div className="max-w-full max-h-full relative">
        <button
          className="absolute -top-[5rem] -right-[14rem] text-black text-4xl w-10 h-10 rounded-full bg-white flex justify-center items-center"
          onClick={onClose}
        >
          <MdClear />
        </button>
        <button
          className="absolute top-1/2 -left-[7rem] transform -translate-y-1/2 text-black text-2xl w-10 h-10 rounded-full bg-white flex justify-center items-center"
          onClick={onPrevious}
          disabled={currentIndex === 0}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute top-1/2 -right-[8rem] transform -translate-y-1/2 text-black text-2xl w-10 h-10 rounded-full bg-white flex justify-center items-center"
          onClick={onNext}
          disabled={currentIndex === galleryImages.length - 1}
        >
          <IoIosArrowForward />
        </button>
        <img
          src={image.image}
          alt="Description of the image"
          className=" w-[900px] h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default GallerySlider;