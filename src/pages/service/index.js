import Header from "../../components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Accordion from "@/components/Accordian";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import ContactUsForm from "@/components/ContactUsForm";
import Layout from "@/components/Layout";
import OtherServices from "@/components/OtherServices";

function Services({processCards, clients }) 
{
  return (
    <>
      <Layout>
      <div className="w-full p-6">
        <div className="w-full">
          <div className="thin-container w-full">
            <Image
              src="/images/books.svg"
              className="w-full max-w-[600px] m-auto mt-8"
              width="300"
              height="300"
              alt="Illustration of services content"
            />
            <h1 className="section-heading text-4xl font-bold text-center mt-8">
              We are working towards a better future
            </h1>
            <p className="mt-6  text-center">
              Enhance your software development capabilities with our IT staff
              augmented services. Our expert professionals seamlessly integrate
              with your team, providing on-demand talent and expertise to
              accelerate project delivery and drive innovation.
            </p>

            <Image
              src="/images/team.svg"
              className="w-full max-w-[600px] m-auto mt-12"
              width="300"
              height="300"
              alt="Illustration of services content"
            />

            <h1 className="section-heading text-4xl font-bold text-center mt-8">
              Highly trained & motivated teams
            </h1>
            <p className="mt-6  text-center">
              Unlock the potential of your projects with our team of highly
              trained and motivated professionals. Our IT staff augmented
              services bring together top talent, equipped with the latest
              skills and driven by a passion for excellence, to ensure your
              software development initiatives are executed flawlessly.
            </p>
            <div className="mt-10 max-w-[600px] mx-auto">
              <Accordion title="Web Developer">
                Content 1 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sunt dicta harum quibusdam cumque nesciunt perferendis
                earum! Nemo nulla eaque quod deleniti adipisci neque aspernatur?
                Eum reiciendis sint quia aspernatur. Pariatur non odit, odio
                necessitatibus sint in vero ipsa enim consequatur, eaque officia
                ea perferendis autem nesciunt blanditiis explicabo suscipit.
              </Accordion>
              <Accordion title="Mobile App Developer">Content 2</Accordion>
              <Accordion title="Designers">Content 3</Accordion>
              <Accordion title="DevOps">Content 4</Accordion>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-light-primary-color px-4 py-12">
        <div className="container">
          <h2 className="section-heading font-bold text-4xl text-center">
            What's the Process?
          </h2>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {processCards?.map((card) => {
              return (
                <div className="p-4">
                  <div className="flex gap-8 items-center">
                    <div className="w-[70px] h-[70px] rounded-full bg-black overflow-hidden flex items-center justify-center text-white">
                      <span className="font-bold text-3xl">{card.stats}</span>
                    </div>
                    <Image
                      src="/images/long-right-arrow.svg"
                      alt="alt text"
                      width={150}
                      height={30}
                    />
                  </div>
                  <h3 className="mt-12 mb-4 text-xl font-bold">{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              );
            })}
          </div>

          <div className=" justify-between mt-12 sm:flex">
            <h3 className="font-bold text-xl mb-4 sm:mb-0">
              Build great products with our Augmented Reality Services
            </h3>
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12">
        <div className="container">
          <h2 className="section-heading font-bold text-4xl text-center">
            For IT staff Augmentation
          </h2>
          <div className="w-full mt-10">
            <Carousel itemsToShowDesktop={2.7} itemsToShowMobile={1.2} margin={20} speed={5000}>
              {clients?.map((item) => {
                return (
                  <div className=" overflow-hidden   my-4 border border-slate-200 rounded">
                    <div className="w-full h-fit bg-white flex items-center justify-center">
                      <Image
                        src={item.image}
                        className="w-full h-full object-cover"
                        width="200"
                        height="200"
                        alt="Description of the image"
                      />
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p className="my-5">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>

     <section>
              <OtherServices />
     </section>
     <section className="mt-10"> 
            <CallToAction />
            </section>
    </Layout>
      
    </>
  );
}

export default Services;


export async function getServerSideProps(context) {
  // Fetch data from an API, database or just hard code it.
  // The data should come as props to the Services component.


  const processCards = [
    {
      stats: 1,
      title: "Define",
      text: "Kick off development by defining all system requirements, making initial technology decisions, and capturing user roles and personas.",
    },
    {
      stats: 2,
      title: "Design",
      text: "Kick off development by defining all system requirements, making initial technology decisions, and capturing user roles and personas.",
    },
    {
      stats: 3,
      title: "Deliver",
      text: "Kick off development by defining all system requirements, making initial technology decisions, and capturing user roles and personas.",
    },
    {
      stats: 4,
      title: "Develop",
      text: "Kick off development by defining all system requirements, making initial technology decisions, and capturing user roles and personas.",
    },
  ];

  const clients = [
    {
      image: "/images/sample1.png",
      title: "Hassle-free online working",
      text: "Kick off development by defining all system requirements, making initial technology decisions, and capturing user roles and personas.",
    },
    {
      image: "/images/sample2.png",
      title: "Latest equipment and training",
      text: "Kick off development by defining all system requirements, making initial technology decisions, and capturing user roles and personas.",
    },
    {
      image: "/images/sample1.png",
      title: "24/7 availability",
      text: "Kick off development by defining all system requirements, making initial technology decisions, and capturing user roles and personas.",
    },
  ];

  // By returning { props: servicesCard }, the Services component
  // will receive `servicesCard` as a prop at build time
  return {
    props: { processCards, clients },
  }
}