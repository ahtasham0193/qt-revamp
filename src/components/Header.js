import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleButtonClick = () => {
  //   router.push("/contact-qt");
  // };

  const isServiceActive = 
  router.pathname === "/service/it-staff-augmentation-services" ||
  router.pathname === "/service/hire-overseas-development-team" ||
  router.pathname === "/service/desktop-software-development" ||
  router.pathname === "/service/web-development" ||
  router.pathname === "/service/software-development" ||
  router.pathname === "/service/mobile-software-development" ||
  router.pathname === "/service/digital-search-engine-marketing" ||
  router.pathname === "/service/managed-hosting-services" ||
  router.pathname === "/service/security-compliance" ||
  router.pathname === "/service/designing-branding"
  ;

  return (
    <header
      className={`w-full h-auto bg-white shadow-md p-4 z-50 sticky top-0 transition-all duration-200 ${isScrolled ? "bg-opacity-100" : "bg-opacity-100"
        }`}
    >
      <nav className="max-w-[1400px] m-auto flex justify-between items-center">
        <Image
          src="/images/logo.png"
          className="h-[70px] w-auto"
          height={500}
          width={500}
          alt="Company logo"
        />
        {isOpen ? null : (
          <Image
            src="/images/hamburger.svg"
            className="h-[40px] w-auto block sm:hidden cursor-pointer"
            height={60}
            width={60}
            alt="mobile menu"
            onClick={toggleMenu}
          />
        )}
        <ul
          className={`w-fit flex  gap-11 sm:flex md:gap-6 lg:gap-11 ${isOpen
            ? "pt-20 w-full items-start fixed top-0 right-0 bottom-0 p-6 bg-gray-100 z-50 flex-col align-start sm:relative sm:bg-transparent sm:p-0 sm:flex-row transform translate-x-0 sm:translate-x-0"
            : "hidden transform translate-x-full sm:translate-x-0"
            } transition-transform items-center duration-200 ease-in-out`}
        >
          {isOpen ? (
            <FaTimes
              className="h-6 w-6 block sm:hidden cursor-pointer absolute top-0 left-0 m-4"
              onClick={toggleMenu}
            />
          ) : null}
          <li>
            <Link href="/" className={`${router.pathname === '/' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color`}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/showcase" className={`${router.pathname === '/showcase' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color`}>
              <span>Portfolio</span>
            </Link>
          </li>
          <li className="group relative">
              <p className={`${isServiceActive ? 'text-primary-color' : 'text-gray-700'} cursor-pointer`}>Services</p>
            <div className={`${isOpen ? "right-[-127px]" : "left-0"} absolute mt-2 w-72 rounded-md s shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50 transition-all duration-200 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible `}>
              <div className="py-1">
                <Link href="/service/it-staff-augmentation-services">
                  <p className={`${router.pathname === '/service/it-staff-augmentation-services' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>IT Staff Augmentation Services</p>
                </Link>
                <Link href="/service/hire-overseas-development-team">
                  <p className={`${router.pathname === '/hire-overseas-development-team' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>Hire Overseas Development Team</p>
                </Link>
                <Link href="/service/desktop-software-development">
                  <p className={`${router.pathname === '/service/desktop-software-development' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>Desktop Software Development</p>
                </Link>
                <Link href="/service/web-development">
                  <p className={`${router.pathname === '/service/web-development' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>Website Development</p>
                </Link>
                <Link href="/service/software-development">
                  <p className={`${router.pathname === '/service/software-development' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>Software Development</p>
                </Link>
                <Link href="/service/mobile-software-development">
                  <p className={`${router.pathname === '/service/mobile-software-development' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>Mobile Software Development</p>
                </Link>
                <Link href="/service/digital-search-engine-marketing">
                  <p className={`${router.pathname === '/service/digital-search-engine-marketing' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>Digital / Search Engine Marketing</p>
                </Link>
                <Link href="/service/managed-hosting-services">
                  <p className={`${router.pathname === '/service/managed-hosting-services' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>Managed Hosting Services</p>
                </Link>
                <Link href="/service/security-compliance">
                  <p className={`${router.pathname === '/service/security-compliance' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>Security & Compliance</p>
                </Link>
                <Link href="/service/designing-branding">
                  <p className={`${router.pathname === '/service/designing-branding' ? 'text-primary-color' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-primary-color `}>Designing & Branding</p>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/team" className={`${router.pathname === '/team' ? 'text-primary-color ' : 'text-gray-700'} hover:text-primary-color`}>
              <span>Team</span>
            </Link>
          </li>
          <li>
            <Link href="/blog" className={`${router.pathname === '/blog' ? 'text-primary-color ' : 'text-gray-700'} hover:text-primary-color`}>
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link href="/ourclients" className={`${router.pathname === '/ourclients' ? 'text-primary-color ' : 'text-gray-700'} hover:text-primary-color`}>
              <span>Clients</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${router.pathname === '/about' ? 'text-primary-color ' : 'text-gray-700'} hover:text-primary-color`}>
              <span>About</span>
            </Link>
          </li>

          <Link href="/contact-qt">
          <Button variant="primary">
            Contact Us
          </Button>
          </Link>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
