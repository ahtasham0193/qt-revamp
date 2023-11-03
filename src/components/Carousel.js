import React, { useState, useEffect } from "react";

function Carousel({ children, speed = 2000, fractionOfNext = 0.2, margin = 0, itemsToShowDesktop, itemsToShowMobile }) {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsToShowDesktop);
  const totalItems = React.Children.count(children);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileInitialized, setIsMobileInitialized] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // New state to control pause

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 568);
    }

    if (!isMobileInitialized) {
      setIsMobile(window.innerWidth <= 568);
      setIsMobileInitialized(true);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileInitialized]);

  const marginn = isMobile ? 10 : 30;

  // Update the state on window resize
  useEffect(() => {
    const resizeListener = () => {
      setItemsToShow(window.innerWidth < 768 ? itemsToShowMobile : itemsToShowDesktop);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [itemsToShowDesktop, itemsToShowMobile]);

  useEffect(() => {
    setItemsToShow(window.innerWidth < 768 ? itemsToShowMobile : itemsToShowDesktop);

    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrent((current) => (current + 1) % totalItems);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [totalItems, speed, itemsToShowDesktop, itemsToShowMobile, isPaused]);

  // Function to pause the carousel on mouse enter
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Function to resume the carousel on mouse leave
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div>
      <div className="relative w-full overflow-hidden mt-7">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${(current * 100) / itemsToShow}%)` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {React.Children.map(children, (child, index) => (
            <div
              style={{ flex: `0 0 ${100 / itemsToShow}%`, margin: `${marginn}px` }}
              key={index}
              className=""
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {Array(totalItems)
          .fill()
          .map((_, i) => (
            <button
              key={i}
              className={`h-3 rounded-full focus:outline-none ${
                current === i ? "w-20 bg-primary-color" : "w-6 bg-gray-300"
              }`}
              onClick={() => setCurrent(i)}
            ></button>
          ))}
      </div>
    </div>
);
}

export default Carousel;
