import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <>
      <footer className="w-full h-auto bg-white p-4 py-20 border-b">
        <div className="container">
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-12 gap-8">
              <div className="col-span-2 sm:col-span-4 p-2">
                <Image
                  src="/images/logo.png"
                  className="h-[70px] w-auto"
                  height={500}
                  width={500}
                  alt="Description of the image"
                />
                <p className="mt-4 leading-relaxed">
                M/S Quaid Technologies: Your Trusted IT Solutions Provider Since 1998 <br />
                Quaid Technologies is a leading IT company that has been delivering top-notch Software Development and IT Infrastructure Consultancy services since 1998. With an unwavering commitment to excellence, we have established ourselves as a reliable partner for businesses worldwide.
                </p>
              </div>
              <div className="col-span-2 sm:col-span-2 p-4">
                <h3 className="font-bold text-2xl mt-4">Pages</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/"  className={`${router.pathname === '/' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color`}>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/showcase" className={`${router.pathname === '/showcase' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color`}>
                      <span>
                        Portfolio
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className={`${router.pathname === '/showcase' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color`}>
                      <span>
                        Life @ QuaidTech
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-3 p-4">
                <h3 className="font-bold text-2xl mt-4">Services</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/service/it-staff-augmentation-services">
                      <span className={`${router.pathname === '/service/it-staff-augmentation-services' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>IT Staff Augmentation Services</span>
                    </Link></li>
                  <li>
                    <Link href="/service/hire-overseas-development-team">
                      <span className={`${router.pathname === '/hire-overseas-development-team' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>
                        Hire Overseas Development Team
                      </span>
                    </Link></li>
                  <li>
                    <Link href="/service/desktop-software-development">
                      <span className={`${router.pathname === '/service/desktop-software-development' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>Desktop Software Development</span>
                    </Link></li>
                  <li>
                    <Link href="/service/web-development">
                      <span className={`${router.pathname === '/service/web-development' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>Website Development</span>
                    </Link></li>
                  <li>
                    <Link href="/service/software-development">
                      <span className={`${router.pathname === '/service/software-development' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>Software Development</span>
                    </Link></li>
                  <li>
                    <Link href="/service/mobile-software-development">
                      <span className={`${router.pathname === '/service/mobile-software-development' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>Mobile Software Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/digital-search-engine-marketing">
                      <span className={`${router.pathname === '/service/digital-search-engine-marketing' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>Digital / Search Engine Marketing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/managed-hosting-services">
                      <span className={`${router.pathname === '/service/managed-hosting-services' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>Managed Hosting Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/security-compliance">
                      <span className={`${router.pathname === '/service/security-compliance' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>Security & Compliance</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/designing-branding">
                      <span className={`${router.pathname === '/service/designing-branding' ? 'text-primary-color' : 'text-gray-700'} hover:text-primary-color `}>Designing & Branding</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-3 p-4">
                <h3 className="font-bold text-2xl mt-4">Company</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/team">
                      <span className={`${router.pathname === '/team' ? 'text-primary-color ' : 'text-gray-700'} hover:text-primary-color`}>Team</span>
                    </Link></li>
                  <li>
                    <Link href="/ourclients">
                      <span className={`${router.pathname === '/ourclients' ? 'text-primary-color ' : 'text-gray-700'} hover:text-primary-color`}>Clients</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span className={`${router.pathname === '/about' ? 'text-primary-color ' : 'text-gray-700'} hover:text-primary-color`}>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-qt">
                      <span className={`${router.pathname === '/contact-qt' ? 'text-primary-color ' : 'text-gray-700'} hover:text-primary-color`}>
                        Contact Us
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full py-10 px-2">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-8">
            <div className="col-span-12 md:col-span-6">
              <p>@2023 QuiadTechnologies. All right reserved.</p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex justify-end space-x-4">
                <a href="https://www.facebook.com/QuaidTech/">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border">
                  <FaFacebookF />
                </div>
                </a>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fquaidtech">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border">
                  <FaTwitter />
                </div>
                </a>
                <a href="https://www.instagram.com/quaidtech/">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border">
                  <FaInstagram />
                </div>
                </a>
                <a href="https://www.linkedin.com/company/quaidtech/mycompany/">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border">
                  <FaLinkedinIn />
                </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
