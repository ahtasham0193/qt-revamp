import React, { useEffect, useState } from 'react';

const Slider = ({ children, itemsInMobileView, itemsInDesktopView }) => {
  const items = React.Children.toArray(children);
  const totalItems = items.length;
  const clonedItems = [...items, ...items]; // Double items array to simulate an infinite loop

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640); // Adjust the screen width breakpoint as needed
    }

    window.addEventListener('resize', handleResize);

    handleResize(); // Initial screen size detection

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div className="whitespace-nowrap animate-marquee">
        {clonedItems.map((item, index) => (
          <div
            key={index}
            style={{
              width: `${100 / (isMobile ? itemsInMobileView : itemsInDesktopView)}%`,
            }}
            className="inline-block"
          >
            {item}
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee ${totalItems * 2}s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
