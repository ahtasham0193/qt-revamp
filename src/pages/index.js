
import Button from "@/components/Button";
import Slider from "@/components/Slider";
import Image from "next/image";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Video from "@/components/Video";
import ContactUsForm from "@/components/ContactUsForm";
import Layout from "@/components/Layout";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from 'react-icons/io'
function HomePage() {
  const [servicesCard, setServicesCard] = useState([
    {
      image: "/images/books.svg",
      title: "IT Staff Augmented Services",
      text: "With so many technologies to work upon, hiring gets difficult when you are looking for a specialty. Why worrying when you can simply go for IT Staff Augmentation? Don't have the right person to do the job in-house? You don't need to hire a permanent resource.",
      slug: "/it-staff-augmented"
    },
    {
      image: "/images/website development/website-developmentImg.png",
      title: "Website Development Services",
      text: "Want to Turn Your Website into a Lead Magnet? Want to Turn every Visitor into a Buyer? Let us take things into our hands and revolutionize your digital journey like never before. Quaid Technologies offers a full range of custom Web Application development services that help design, build, and evolve web-based software.",
      slug: "/website-development"
    },
    {
      image: "/images/Mobile Software Development/mobileSoftwaredevelopmentImg.png",
      title: "Mobile Software Development Services",
      text: "Our elite in-house team specializes in software engineering, product development, cloud architecture, and digital transformation. We rapidly and reliably deliver software that meets the needs of the world’s most demanding organizations.",
      slug: "/mobile-software-development"
    },
  ]);

  const [portfolioCard, setPortfolioCard] = useState([
    {
      image: "/images/Portfolio/NewsConnectImg.png",
      title: "News Connect",
      text: "Get latest news from United States to UK to Japan, around the world including but not limited to India, Pakistan, Philippines, Sweden, Germany, France, Italy, United Arab Emirates, Saudi Arabia and other without annoying Advertisements. ",
    },
    {
      image: "/images/Portfolio/playTravelImg.png",
      title: "Play Travel",
      text: "Play Travel is a web app for people who love to travel without being worried about making payments upfront. Through this app travelling is made accessible to more Australians, by offering them flexible payment plans, and has given globetrotters rejoice.",
    },
    {
      image: "/images/Portfolio/DAEPImg.png",
      title: "DAEP",
      text: "DAEP (Dubai Aviation Engineering Projects) is a leading engineering organization responsible for the design, master planning, infrastructure development and construction of Dubai’s dynamic aviation sector. Under the leadership of Mr. Jonathan Ali Khan, team QuaidTech uplifted the design of DAEP.",
    },
  ]);

  const [clients, setClients] = useState([
    {
      video: "/videos/client1.mp4",
    },
    {
      video: "/videos/ahsan.mp4",
    },
    {
      video: "/videos/maria.mp4",
    },
    {
      video: "/videos/saima.mp4",
    },
  ]);

  const [startIdx, setStartIdx] = useState(0);

  const nextSlide = () => {
    setStartIdx((prevStartIdx) =>
      prevStartIdx + 2 >= portfolioCard.length ? 0 : prevStartIdx + 2
    );
  };

  const prevSlide = () => {
    setStartIdx((prevStartIdx) =>
      prevStartIdx - 2 < 0 ? portfolioCard.length - 2 : prevStartIdx - 2
    );
  };
  return (

    <Layout>
      <div className="w-full  px-6">
        <div className="container py-12 bg-[url('/images/hero-bg.png')] bg-no-repeat bg-[center_50px] sm:bg-[length:100%_100%] bg-[length:115%] ">
          <div className="hero-section-content-wrapper max-w-[900px] mt-12 p-1">
            <h1 className="hero-heading text-4xl sm:text-7xl leading-normal mt-2 sm:mt-12">
              Creating Intelligent & Scalable Digital Solutions.
            </h1>
            <ul className="flex w-fit gap-14 my-10">
              <li>
                <span className="text-primary-color text-[1.5rem] font-bold">
                  100+
                </span>
                <p>Project Completed</p>
              </li>
              <li>
                <span className="text-primary-color text-[1.5rem] font-bold">
                  30+
                </span>
                <p>Total Clients</p>
              </li>
              <li>
                <span className="text-primary-color text-[1.5rem] font-bold">
                  80+
                </span>
                <p>Tech Experts</p>
              </li>
            </ul>

            <div className="flex mb-12">
              <Link href="/portfolio">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" classes="ml-5">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section>
        <Slider itemsInMobileView={6} itemsInDesktopView={6}>
          <Image
            src="/images/client1.png"
            className="sm:h-[70px] h-[30px] w-auto"
            width="100"
            height="100"
            alt="Description of the image"
          />
          <Image
            src="/images/client2.png"
            className="sm:h-[70px] h-[30px] w-auto"
            width="100"
            height="100"
            alt="Description of the image"
          />
          <Image
            src="/images/client3.png"
            className="sm:h-[70px] h-[30px] w-auto"
            width="100"
            height="100"
            alt="Description of the image"
          />
          <Image
            src="/images/client4.png"
            className="sm:h-[70px] h-[30px] w-auto"
            width="100"
            height="100"
            alt="Description of the image"
          />
          <Image
            src="/images/client5.png"
            className="sm:h-[70px] h-[30px] w-auto"
            width="100"
            height="100"
            alt="Description of the image"
          />
          <Image
            src="/images/client6.png"
            className="sm:h-[70px] h-[30px] w-auto"
            width="100"
            height="100"
            alt="Description of the image"
          />
        </Slider>
      </section>

      <section className="sm:rounded sm:p-10 mt-10 bg-light-primary-color" id="services-section">
        <div className="container">
          <div className="py-12 px-6 w-full h-[500] ">
            <h1 className="section-heading  text-4xl leading-normal font-bold text-center ">
              Everything you need to grow your business
            </h1>
            <p className="max-w-[700px] my-[1rem] w-fit block m-auto leading-relaxed text-center">
              M/S Quaid Technologies has been providing Software Development & IT Services since 1998 with the merger of M/S PakCyber Group in 2013. We have been the technical solution provider to many industries and moved them from manual procedures to paperless fully Automated Solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
              {servicesCard?.map((card, index) => {
                return (
                  <div className="overflow-hidden max-w-sm mx-auto my-4 border border-slate-200 rounded" key={index}>
                    <div className="w-full p-3 bg-white flex items-center justify-center">
                      <Image
                        src={card.image}
                        className="w-auto h-[150px] object-contain"
                        width="200"
                        height="200"
                        alt="Description of the image"
                      />
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-bold">{card.title}</h2>

                      <p className="my-5">{card.text}</p>

                      <Link href={card.slug}>
                        <span className="font-semibold cursor-pointer">Learn more <IoIosArrowDroprightCircle className="inline-block align-middle text-primary-color text-2xl"/></span> 
                       
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="sm:rounded sm:p-10" id="services-section">
        <div className="container">
          <div className="py-12 px-6 w-full">
            <h1 className="section-heading  text-4xl leading-normal font-bold text-center ">
              Showcasing our cutting-edge projects
            </h1>
            <p className="max-w-[700px] my-[1rem] w-fit block m-auto leading-relaxed text-center">
              Being the Development & Technical partner, Quaid Technologies is part of various organisations and projects around the globe. We have given services to many enterprises & organisations in Public & Private sectors. Below is the snippet of work done by us.
            </p>
            <section className="flex justify-center items-center py-16 w-full">
              <div className="w-[30%] h-[514px] flex items-center">
              <div className="w-full">
            <h2 className="section-heading  text-4xl leading-normal font-bold mb-2">Our Projects</h2>
            <Link href="/portfolio">
                        <span className="font-semibold cursor-pointer ml-2">See all projects <IoIosArrowDroprightCircle className="inline-block align-middle text-primary-color text-2xl"/></span>
            </Link>
            </div>
            </div>
      <div className="w-[70%] relative">
        <div className="space-x-4 relative overflow-hidden w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 p-4 ">
          {portfolioCard?.slice(startIdx, startIdx + 2)?.map((project, index) => (
  
            <div className= {`max-w-sm overflow-hidden shadow-lg transform transition-transform duration-300 my-4 border border-slate-200 rounded h-full ${
                 index === 0 ? 'translate-x-0' : ""
               }`}>
                    <div className="w-full p-3 bg-white flex items-center justify-center">
                      <Image
                        src={project.image}
                        className="w-auto h-[250px] md:h-[150px]"
                        width="200"
                        height="200"
                        alt="Description of the image"
                        quality='100'
                      />
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-bold">{project.title}</h2>
                      <p className="my-5">{project.text}</p>
                    </div>
                  </div>
          ))}
        </div>
        <button
            className="absolute top-[52%] left-[-4rem] transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute top-[52%] right-[-1.9rem] transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
            onClick={nextSlide}
          >
            &gt;
          </button>
      </div>
    </section>
            
          </div>
        </div>
      </section>

      <section className="sm:rounded sm:p-10 bg-light-primary-color">
        <div className="container">
          <div className="py-12 px-6 w-full">
            <h1 className="section-heading  text-4xl leading-normal font-bold text-center ">
              Happy Clients
            </h1>
            <p className="max-w-[700px] my-[1rem] w-fit block m-auto leading-relaxed text-center">
              Our satisfied clients are a testament to our commitment to excellence. Their success is our greatest achievement.
            </p>

            <Carousel itemsToShowDesktop={1.7} itemsToShowMobile={1} margin={30} speed={5000}>
              {clients?.map((item) => {
                return (
                  <div className="w-full sm:h-[500px] h-[250px] rounded-lg overflow-hidden shadow-md">
                    <Video
                      videoSrc={item.video}
                      controls
                      width="320"
                      height="240"
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <ContactUsForm />
        </div>
      </section>
    </Layout>

  );
}

export default HomePage;
