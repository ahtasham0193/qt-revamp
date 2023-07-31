import Header from "../components/Header";
import Button from "@/components/Button";
import Slider from "@/components/Slider";
import Image from "next/image";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import ContactUsForm from "@/components/ContactUsForm";
import Layout from "@/components/Layout";
function HomePage() {
  const [servicesCard, setServicesCard] = useState([
    {
      image: "/images/service1.png",
      title: "Everything you need to grow your business",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
    },
    {
      image: "/images/service1.png",
      title: "Everything you need to grow your business",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
    },
    {
      image: "/images/service1.png",
      title: "Everything you need to grow your business",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
    },
  ]);

  const [portfolioCard, setPortfolioCard] = useState([
    {
      image: "/images/project1.webp",
      title: "Everything you need to grow your business",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
    },
    {
      image: "/images/project1.webp",
      title: "Everything you need to grow your business",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
    },
    {
      image: "/images/project1.webp",
      title: "Everything you need to grow your business",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
    },
  ]);

  const [clients, setClients] = useState([
    {
      video: "/videos/client1.mp4",
    },
    {
      video: "/videos/client1.mp4",
    },
    {
      video: "/videos/client1.mp4",
    },
  ]);
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
              <Button variant="primary">View Projects</Button>
              <Button variant="secondary" classes="ml-5">
                Contact Us
              </Button>
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
              Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus
              faucibus pharetra sem vel. Nulla sed mauris convallis metus.Lorem
              ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus
              pharetra sem vel. Nulla sed mauris convallis metus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
              {servicesCard?.map((card) => {
                return (
                  <div className="overflow-hidden max-w-sm mx-auto my-4 border border-slate-200 rounded">
                    <div className="w-full p-3 bg-white flex items-center justify-center">
                      <Image
                        src={card.image}
                        className="w-auto h-[150px]"
                        width="200"
                        height="200"
                        alt="Description of the image"
                      />
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-bold">{card.title}</h2>
                      <p className="my-5">{card.text}</p>
                      <span className="font-semibold">Learn more</span>
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
              Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus
              faucibus pharetra sem vel. Nulla sed mauris convallis metus.Lorem
              ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus
              pharetra sem vel. Nulla sed mauris convallis metus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {portfolioCard?.map((card) => {
                return (
                  <div className="overflow-hidden max-w-sm mx-auto my-4 border border-slate-200 rounded">
                    <div className="w-full p-3 bg-white flex items-center justify-center">
                      <Image
                        src={card.image}
                        className="w-auto h-[250px] md:h-[150px]"
                        width="200"
                        height="200"
                        alt="Description of the image"
                        quality='100'
                      />
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-bold">{card.title}</h2>
                      <p className="my-5">{card.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="sm:rounded sm:p-10 bg-light-primary-color">
        <div className="container">
          <div className="py-12 px-6 w-full">
            <h1 className="section-heading  text-4xl leading-normal font-bold text-center ">
              Make a catchy line for clients
            </h1>
            <p className="max-w-[700px] my-[1rem] w-fit block m-auto leading-relaxed text-center">
              Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus
              faucibus pharetra sem vel. Nulla sed mauris convallis metus.Lorem
              ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus
              pharetra sem vel. Nulla sed mauris convallis metus.
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
