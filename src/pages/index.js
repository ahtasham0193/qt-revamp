
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
import Head from "next/head";
import GallerySlider from "@/components/GallerySlider";
import VideoCarousel from "@/components/VideoCarousel";
function HomePage({ galleryImages }) {
  const [servicesCard, setServicesCard] = useState([
    {
      image: "/images/books.svg",
      title: "IT Staff Augmented Services",
      text: "With so many technologies to work upon, hiring becomes difficult when you are looking to fill a speciality. Why worry when you can simply go for IT Staff Augmentation? Don’t have the right person to get the job done in-house? You don't need to hire a permanent resource.",
      slug: "/service/it-staff-augmentation-services"
    },
    {
      image: "/images/website development/website-developmentImg.png",
      title: "Website Development Services",
      text: "Want to transform your website into a lead magnet? Want to turn every visitor into a buyer? Allow us to take things into our hands and revolutionize your digital journey like never before! Quaid Technologies offers a full range of custom Web Application Development Services that help design, build, and evolve web-based software.",
      slug: "/service/web-development"
    },
    {
      image: "/images/Mobile Software Development/mobileSoftwaredevelopmentImg.png",
      title: "Mobile Software Development Services",
      text: "Our elite in-house team specializes in software engineering, product development, cloud architecture, and digital transformation. We rapidly and reliably deliver software that meets the needs of the world’s most demanding organizations.",
      slug: "/service/mobile-software-development"
    },
  ]);

  const [portfolioCard, setPortfolioCard] = useState([
    {
      image: "/images/Portfolio/NewsConnectImg.png",
      title: "News Connect",
      text: "Get the latest news from the US to the UK to Japan, to around the world, including but not limited to India, Pakistan, the Philippines, Sweden, Germany, France, Italy, the UAE, Saudi Arabia and others without the annoying advertisements.",
    },
    {
      image: "/images/Portfolio/playTravelImg.png",
      title: "Play Travel",
      text: "Play Travel is a web app for people who love to travel without having to worry about making payments upfront. Travelling is made accessible to more Australians through this app by offering flexible payment plans, and has given globetrotters cause for rejoice!",
    },
    {
      image: "/images/Portfolio/DAEPImg.png",
      title: "DAEP",
      text: "DAEP (Dubai Aviation Engineering Projects) is a leading engineering organization responsible for the design, master planning, infrastructure development and construction of Dubai’s dynamic aviation sector. Under the leadership of Mr. Jonathan Ali Khan, team QuaidTech uplifted the design of DAEP.",
    },
    {
      image: "/images/Portfolio/askariBankImg.png",
      title: "Askari Bank Portal",
      text: "Askari Bank is a commercial bank and is owned by Fauji Foundation. They needed to automate their recruitment portal and resolve several operational challenges related to it. Our client aimed to eliminate unnecessary delays in hiring, minimise labour and streamline the recruitment process. Within a few months, we automated our client’s job portal to help them reduce recruitment cost and boost operational efficiency.",
    },
    {
      image: "/images/Portfolio/ballisticCalculatorImg.png",
      title: "Ballistic Calculator App",
      text: "This App presents enhanced features as well as graphical representation of trajectories, in all weathers and all locations.",
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

  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const handleVideoPlay = (index) => {
    if (currentVideoIndex !== null && currentVideoIndex !== index) {
      const prevVideo = document.getElementById(`video-${currentVideoIndex}`);
      if (prevVideo) {
        prevVideo.pause();
      }
    }
    setCurrentVideoIndex(index);
  };
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const openSlider = (index) => {
    setIsSliderOpen(true);
    setSliderIndex(index);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  const nextSlide = () => {
    if (sliderIndex < galleryImages.length - 1) {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const previousSlide = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    }
  };



  return (

    <>
      <Head>
        <title>Top Managed IT Services Provider - Quaid Technologies</title>
        <meta
          name="description"
          content="The best IT Service Provider and long-time Automated Solution Provider with a proven track record of delivering premium IT services in Pakistan. Visit Now!" />

      </Head>
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
                <Link href="/showcase">
                  <Button variant="primary">View Projects</Button>
                </Link>
                <Link href="/contact-qt">
                  <Button variant="secondary" classes="ml-5">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section>
          <Slider itemsInMobileView={3} itemsInDesktopView={6}>
            <Image
              src="/images/askari bank.png"
              className="sm:h-[70px] h-[30px] w-auto block mx-auto"
              width="500"
              height="300"
              alt="Description of the image"
            />
            <Image
              src="/images/brain span.webp"
              className="sm:h-[70px] h-[30px] w-auto block mx-auto"
              width="500"
              height="300"
              alt="Description of the image"
            />
            <Image
              src="/images/cardinal.png"
              className="sm:h-[70px] h-[30px] w-auto block mx-auto"
              width="500"
              height="300"
              alt="Description of the image"
            />
            <Image
              src="/images/newsconn.png"
              className="sm:h-[70px] h-[30px] w-auto block mx-auto"
              width="500"
              height="300"
              alt="Description of the image"
            />
            <Image
              src="/images/play-travel-horizontal.svg"
              className="sm:h-[70px] h-[30px] w-auto block mx-auto"
              width="500"
              height="300"
              alt="Description of the image"
            />
            <Image
              src="/images/THRIGGLE1633091642.png"
              className="sm:h-[70px] h-[30px] w-auto block mx-auto"
              width="500"
              height="300"
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
                M/S Quaid Technologies has been providing Software Development & IT Services since 1998, with the merger of M/S PakCyber Group in 2013. We have been the technical solution provider for many industries, and transitioned them from manual procedures to paperless, full automated solutions.
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
                          <span className="font-semibold cursor-pointer">Learn more <IoIosArrowDroprightCircle className="inline-block align-middle text-primary-color text-2xl" /></span>

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
                Being a Development & Technical partner, Quaid Technologies is part of various organisations and projects around the globe. We have provided our services to many enterprises & organisations in both the public and private sectors. Below is a snippet of our work.
              </p>
              <section className="flex flex-col justify-center items-center py-16 w-full sm:flex-row">
                <div className="sm:w-[30%] w-full h-auto flex items-center">
                  <div className="w-full">
                    <h2 className="section-heading  text-4xl leading-normal font-bold mb-2 text-center sm:text-left">Our Projects</h2>
                    <Link href="/showcase" className="w-full block text-center sm:w-auto sm:flex sm:text-left">
                      <span className="font-semibold cursor-pointer ml-2">See all projects <IoIosArrowDroprightCircle className="inline-block align-middle text-primary-color text-2xl" /></span>
                    </Link>
                  </div>
                </div>
                <div className="w-full sm:w-[70%] relative">

                  <Carousel itemsToShowDesktop={2} itemsToShowMobile={1} margin={30} speed={2000}>
                    {portfolioCard?.map((item, index) => {
                      return (
                        <div className="sm:w-full w-[95%] sm:h-[500px] rounded-lg overflow-hidden shadow-md" key={index}>
                          <div className="w-full h-auto">
                            <div className="w-full p-3 bg-white flex items-center justify-center">
                              <Image
                                src={item.image}
                                className="w-auto h-[150px] md:h-[150px]"
                                width="200"
                                height="200"
                                alt="Description of the image"
                                quality='100'
                              />
                            </div>
                            <div className="p-5">
                              <h2 className="text-xl font-bold">{item.title}</h2>
                              <p className="my-5">{item.text}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
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

              <VideoCarousel itemsToShowDesktop={1.7} itemsToShowMobile={1} margin={30} speed={2000}>
                {clients?.map((item, index) => (
                  <div key={index} className="w-full sm:h-[500px] h-[250px] rounded-lg overflow-hidden shadow-md">
                    <video
                      id={`video-${index}`}
                      src={item.video}
                      controls
                      width="320"
                      height="240"
                      className="w-full h-full object-cover"
                      onPlay={() => handleVideoPlay(index)}
                    />
                  </div>
                ))}
              </VideoCarousel>
            </div>
            <ContactUsForm />
          </div>
        </section>



        <section>
          <div className="w-full mt-16">
            <div className="container">
            <h1 className="section-heading  text-4xl leading-normal font-bold text-center ">
                Life @ QuaidTech
              </h1>
              <Carousel itemsToShowDesktop={4} itemsToShowMobile={1.5} margin={20} speed={2000}>
                {galleryImages?.map((item, index) => {
                  return (
                    <div className="sm:w-full w-[95%] h-[200px] rounded-lg overflow-hidden shadow-md" key={index}  onClick={() => openSlider(index)}>
                        <div className="w-full h-full bg-white flex items-center justify-center">
                          <Image
                            src={item.image}
                            className="w-full h-full object-cover"
                            width="500"
                            height="300"
                            alt="Description of the image"
                            quality='100'
                          />
                        </div>
                    </div>
                  );
                })}
              </Carousel>

              {isSliderOpen && (
                <GallerySlider
                  galleryImages={galleryImages}
                  currentIndex={sliderIndex}
                  onClose={closeSlider}
                  onNext={nextSlide}
                  onPrevious={previousSlide}
                />
              )}
            </div>
          </div>
          {/* </div> */}
        </section>
      </Layout>
    </>
  );
}

export default HomePage;

export async function getServerSideProps(context) {
  // Fetch data from an API, database or just hard code it.
  // The data should come as props to the Services component.

  const galleryImages = [
    { image: "/images/gallery/gallery1.png" },
    { image: "/images/gallery/gallery2.png" },
    { image: "/images/gallery/gallery3.jpg" },
    { image: "/images/gallery/gallery4.jpg" },
    { image: "/images/gallery/gallery5.jpg" },
    { image: "/images/gallery/gallery6.png" },
    { image: "/images/gallery/gallery7.jpg" },
    { image: "/images/gallery/gallery8.JPG" },
    { image: "/images/gallery/gallery9.png" },
    { image: "/images/gallery/gallery10.webp" },
    { image: "/images/gallery/gallery11.webp" },
    { image: "/images/gallery/gallery12.jpg" },

  ]


  // By returning { props: servicesCard }, the Services component
  // will receive `servicesCard` as a prop at build time
  return {
    props: { galleryImages },
  }
}