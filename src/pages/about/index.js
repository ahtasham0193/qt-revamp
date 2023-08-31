import Layout from "@/components/Layout";
import Image from "next/image";
import Accordion from "@/components/Accordian";
import { useState } from "react";
import ContactUsForm from "@/components/ContactUsForm";

function AboutUs({ servicesCard, globalPresence, clientAreas }) {

  return (
    <Layout>
      <section>
        <div className="w-full">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/5 p-4">
                <h1 className="hero-heading text-4xl sm:text-7xl leading-normal mt-2 sm:mt-16">
                  Who We Are
                </h1>
                <p className="mt-5 text-lg">
                  M/S Quaid Technologies has been providing Software Development
                  & IT Services since 1998 with the merger of M/S PakCyber Group
                  in 2013. We have automated many industries and moved them from
                  manual procedures to paperless fully Automated Solutions. We
                  Develop Applications in a wide range of categories for service
                  industries and online enterprises. The applications that we
                  have developed are quite unique and easy to use. We help
                  enterprises and businesses in executing their Digital
                  Marketing Strategies. Our clients are enjoying versatile
                  selling experiences and rapid business growth. We Safeguarded
                  and Secured many enterprises, IT Infrastructures and made them
                  solid and strong to face any threat from potential intruders.
                </p>
              </div>
              <div className="w-full md:w-2/5 p-4">
                <Image
                  src="/images/quaid.png"
                  className="w-[70%] block m-auto h-full object-contain"
                  width="200"
                  height="200"
                  alt="Description of the image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-primary-color px-4 py-6 sm:p-12">
          <div className="container">
            <div className="flex justify-around items-center max-w-[800px] m-auto">
              <h2 className="text-white text-2xl sm:text-5xl font-bold ">
                Unity
              </h2>
              <Image
                src="/images/dot.svg"
                className="w-auto block m-auto h-full object-contain"
                width="200"
                height="200"
                alt="Description of the image"
              />
              <h2 className="text-white text-2xl sm:text-5xl  font-bold">
                Faith
              </h2>
              <Image
                src="/images/dot.svg"
                className="w-auto block m-auto h-full object-contain"
                width="200"
                height="200"
                alt="Description of the image"
              />
              <h2 className="text-white text-2xl sm:text-5xl  font-bold">
                Discipline
              </h2>
            </div>
            <p className="text-white mt-4 sm:mt-10 text-center text-lg">
              With faith, discipline and selfless devotion to duty, there is
              nothing worth while that you cannot achieve.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-light-primary-color px-4 py-6 sm:py-16">
          <div className="container">
            <div className="w-full max-w-[1000px] m-auto">
              <h2 className="text-2xl sm:text-5xl font-semibold text-center">
                Our Mission
              </h2>
              <p className="text-center mt-4 sm:mt-8">
                The mission of Quaid Technologies is to use our experience and
                innovation to help customers run their businesses more
                effectively and seamlessly. Through our talent and concern, we
                strive to exceed client's expectations and help customers
                throughout the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-6 sm:py-16">
        <div className="container">
          <h2 className="text-center text-2xl sm:text-5xl font-semibold ">
            Major areas worked with
          </h2>

          <div className="flex flex-wrap -m-2 mt-20">
            {clientAreas?.map((item) => {
              return (
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
                  <div className="w-full">
                    <Image
                      src={item.image}
                      className="w-auto h-[130px] block m-auto"
                      width="200"
                      height="200"
                      alt="Description of the image"
                    />
                    <h3 className="font-bold mt-7 text-center text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-6 sm:py-16">
        <div className="container">
          <div className="max-w-[800px] m-auto">
            <h2 className="text-center text-2xl sm:text-5xl font-semibold ">
              Our global presence in public and private sector
            </h2>
            <p className=" m-auto mt-10 text-center">
              Enhance your software development capabilities with our IT staff
              augmented services. Our expert professionals seamlessly integrate
              with your team, providing on-demand talent and expertise to
              accelerate project delivery and drive innovation.
            </p>
          </div>

          <div className="flex flex-wrap">
            {globalPresence?.map((item) => {
              return (
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5">
                  <div className="p-4">
                    <h3 className="font-bold mt-7 text-center text-4xl">
                      {item.title}
                    </h3>
                    <Image
                      src={item.image}
                      className="w-auto h-[110px] block m-auto mt-6"
                      width="150"
                      height="150"
                      alt="Description of the image"
                    />
                    <p className="mt-5 text-center text-xl">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Image
            src="/images/world-map.svg"
            className="w-full h-auto max-w-[900px] block m-auto mt-6"
            width="900"
            height="900"
            alt="Description of the image"
          />
          <Image
            src="/images/about.png"
            className="w-full h-auto max-w-[600px] block m-auto mt-16"
            width="600"
            height="600"
            alt="Description of the image"
          />
        </div>
      </section>

      <section className="w-full px-4 py-6 sm:py-16">
        <div className="container">
          <div className="max-w-[800px] m-auto">
            <h2 className="text-center text-2xl sm:text-5xl font-semibold ">
              What we offer Enterprise Solutions
            </h2>
            <p className=" m-auto mt-10 text-center">
              For your company to grow, it is essential to choose the best
              technology. Hiring an innovative IT service provider is the
              easiest way to ensure that you are making the best use of
              technology, increasing sales, and staying one step ahead of the
              competition.
            </p>
          </div>

          <div className="mt-10 max-w-[600px] mx-auto">
            <Accordion title="IT Staff Augmentation Service">
              With so many technologies to work upon, hiring gets difficult when you are looking for a specialty. Why worrying when you can simply go for IT Staff Augmentation? Don't have the right person to do the job in-house? You don't need to hire a permanent resource.
            </Accordion>
            <Accordion title="Hire Overseas Development Team">
              Quaid Technologies holds more than 20 years of experience in various fields of Information Technology. From simple to complex projects, we bespoke each project requirement whilst keeping abreast with advanced technologies and frameworks.
            </Accordion>
            <Accordion title="Desktop Software Development">
              Quaid Technologies offers custom software development with technology & subject matter expertise combined. We venture with an array of software companies in the industry, starting from fresh names to the established ones.
            </Accordion>
            <Accordion title="Web Development">Quaid Technologies offers a full range of custom Web Application development services that help design, build, and evolve web-based software. We provide client focused and customer centric website solutions that deliver tangible business results. We add the latest features, enhanced settings, and custom considerations. </Accordion>
            <Accordion title="Software Development">Fancy a timely project completion, fewer error rates, and software development expertise? Get bespoke software and manifest all that and much more in a blink of an eye!
              Gone are the days when you and your brand relied on the manual workforce. This is the digital transformation era, and you must jump on the bandwagon if you haven't already. With our impeccable software development services, the journey is going to be an unforgettable one.</Accordion>
            <Accordion title="Mobile Software Development">Our elite in-house team specializes in software engineering, product development, cloud architecture, and digital transformation. We rapidly and reliably deliver software that meets the needs of the world’s most demanding organizations. Our diverse team is united to create some extraordinary apps for your business.</Accordion>
            <Accordion title="Digital/Search Engine Marketing">
            Want Higher Ranks, Greater Leads, And Increased Return On Investment (ROI)? You’re at the right spot! It’s high time to switch to the newer marketing tactics for maximizing conversion rates.
            </Accordion>
            <Accordion title="Managed Hosting Services">Servers are the life-line of business’ technology infrastructure. Every time a server stops, and so does your business. We have a knowledgeable and experienced team who make sure that your servers are in good hands. The fundamental layer of protection is much needed before upsetting your company’s crucial data on web. </Accordion>
            <Accordion title="Branding and Designing">We offer a full-service branding and design strategy that helps you bring your ideas to life. We offer a complete range of creative services tailored around your immediate and on-going branding requirements. From logos to website design, to print and digital, we've got you covered! </Accordion>
          </div>
        </div>
      </section>

      <section>
      <div className="w-full px-4 py-12 bg-light-primary-color">
                <div className="container">
                    <h2 className="section-heading font-bold text-4xl text-center">
                        Other Services
                    </h2>
                    <p className="text-center max-w-[600px] block m-auto mt-4">
                    Quaid Technologies: Your gateway to exceptional IT solutions.
                    Crafting excellence in every service we deliver.
                    </p>

                    <div className="flex flex-wrap justify-around p-4">
                        {servicesCard?.map((card) => {
                            return (
                                <div className="card md:mx-0 md:w-1/3 w- overflow-hidden  max-w-sm mx-2 my-4 border border-slate-200 rounded">
                                    <div className="w-full h-fit p-3 bg-white flex items-center justify-center">
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

                    <div className="w-full mt-10">
                        <ContactUsForm/>
                    </div>
                </div>
            </div>
      </section>
    </Layout>
  );
}

export default AboutUs;



export async function getServerSideProps(context) {
  // Fetch data from an API, database or just hard code it.
  // The data should come as props to the Services component.

  const clientAreas = [
    { image: "/images/area1.png", title: "Government" },
    { image: "/images/area2.png", title: "World Bank" },
    { image: "/images/area3.png", title: "Media House" },
    { image: "/images/area4.png", title: "NGOs/UNO" },
  ]

  const servicesCard = [
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
  ]

  const globalPresence = [
    {
      image: "/images/flag1.png",
      title: "USA",
      text: "Apps & Portals (Medical etc)",
    },
    {
      image: "/images/flag2.png",
      title: "AUS",
      text: "Travel & Tourism, Education",
    },
    {
      image: "/images/flag3.png",
      title: "TH",
      text: "eServices / Money Transfer",
    },
    {
      image: "/images/flag4.png",
      title: "UK",
      text: "eCommerce, Deal Apps",
    },
    {
      image: "/images/flag5.png",
      title: "UAE",
      text: "Smart Apps / Portals",
    },
  ];

  // By returning { props: servicesCard }, the Services component
  // will receive `servicesCard` as a prop at build time
  return {
    props: { servicesCard, globalPresence, clientAreas },
  }
}
