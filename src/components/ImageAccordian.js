import { useState } from 'react';
import Image from 'next/image';

const accordionItems = [
  { 
    id: 1, 
    img: '/images/Branding%20And%20Designing/brand1.jpeg'
  },
  { 
    id: 2, 
    img: '/images/Branding%20And%20Designing/brand2.jpeg' 
  },
  { 
    id: 3, 
    img: '/images/Branding%20And%20Designing/brand3.jpeg'
  },
  { 
    id: 4, 
    img: '/images/Branding%20And%20Designing/brand4.jpeg'
  },
  { 
    id: 5, 
    img: '/images/Branding%20And%20Designing/brand5.jpeg'
  },
  { 
    id: 6, 
    img: '/images/Branding%20And%20Designing/brand6.jpeg'
  }
];

const ImageAccordion = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="accordion w-full h-[550px] overflow-hidden m-auto">
      <ul className="w-full flex m-0 p-0">
        {accordionItems.map((item) => (
          <li 
            key={item.id} 
            className={`relative w-1/3 h-[550px] bg-no-repeat bg-center bg-cover transition-all duration-500 ${
              hoveredItem === item.id ? 'w-4/5' : 'w-1/4'
            }`}
            style={{ backgroundImage: `url(${item.img})` }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
        
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageAccordion;