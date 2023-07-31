import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
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
                  Lorem ipsum dolor sit amet consectetu. Tempus volutpat tempus
                  faucibus pharetra sem vel. Nulla sed mauris convallis
                  metus.Lorem ipsum dolor sit amet consectetu
                </p>
              </div>
              <div className="col-span-2 sm:col-span-2 p-4">
                <h3 className="font-bold text-2xl mt-4">Pages</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <span>
                        Portfolio
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-3 p-4">
                <h3 className="font-bold text-2xl mt-4">Services</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/it-staff-augmented">
                      <span>IT Staff Augmentation Services</span>
                    </Link></li>
                  <li>
                    <Link href="/hire-overseas">
                      <span>
                        Hire Overseas Development Team
                      </span>
                    </Link></li>
                  <li>
                    <Link href="/desktop-software">
                      <span>Desktop Software Development</span>
                    </Link></li>
                  <li>
                    <Link href="/website-development">
                      <span>Website Development</span>
                    </Link></li>
                  <li>
                    <Link href="/software-development">
                      <span>Software Development</span>
                    </Link></li>
                  <li>
                    <Link href="/mobile-software-development">
                      <span>Mobile Software Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing">
                      <span>Digital / Search Engine Marketing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloud-based-hosting">
                      <span>Managed Hosting Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/security-compliance">
                      <span>Security & Compliance</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/branding-and-designing">
                      <span>Designing & Branding</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-3 p-4">
                <h3 className="font-bold text-2xl mt-4">Company</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/team">
                      <span>Team</span>
                    </Link></li>
                  <li>
                    <Link href="/careers">
                      <span>Career</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span>
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
                <div className="flex items-center justify-center w-12 h-12 rounded-full border">
                  <FaFacebookF />

                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border">
                  <FaTwitter />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border">
                  <FaYoutube />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border">
                  <FaInstagram />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border">
                  <FaLinkedinIn />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
