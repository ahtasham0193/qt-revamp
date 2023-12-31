import Layout from "@/components/Layout"
import Image from "next/image"
import React from 'react'
import OtherServices from "@/components/OtherServices";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import Accordion from "@/components/Accordian";
import ContactUsForm from "@/components/ContactUsForm";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import Head from "next/head";
import CallToAction from "@/components/CallToAction";

const ItStaffAugmented = ({ processCards, clients, servicesCard }) => {
    return(
      <>
      <Head>
        <title>IT Staff Augmentation Services - Quaid Technologies</title>
        <meta 
          name="description"
          content="IT Staff Augmentation Services by Quaidtech | Dedicated &amp; Ready to Deploy Remote Software Development Resources"/>
        
      </Head>

        <Layout>
      <div className="w-full p-6">
        <div className="w-full">
          <div className="thin-container w-full">
            <Image
              src="/images/books.svg"
              className="w-full max-w-[600px] m-auto mt-8"
              width={500}
              height={300}
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
              width={500}
              height={300}
              alt="Illustration of services content"
            />

            <h1 className="section-heading text-4xl font-bold text-center mt-8">
              Highly trained & motivated teams
            </h1>
            <p className="mt-6  text-center">
            Unlock your projects’ potential with our team of highly trained and motivated professionals! Our IT staff augmented services bring together top talent, equipped with the latest skills and driven by a passion for excellence, to ensure your software development initiatives are executed flawlessly.
            </p>
            <div className="mt-10 max-w-[600px] mx-auto">
              <Accordion title="Web Developers">
              We have an excellent team of web developers, and will provide you with both frontend and backend developers who can work according to your time zone.
              </Accordion>
              <Accordion title="Mobile App Developers">Mobile app development is an entirely different niche in the digital world. A web developer is not always able to design mobile apps, which requires a different set of skills and experience. We house some of the world's best tech geniuses who specialize in those exact skills to get the job done.</Accordion>
              <Accordion title="Designers">The purpose of web content is to attract an audience, which can only be achieved if the content is appealing. Whether you want to design a web page, a website, an app, or social media content, we house an impeccable talent pool so that you choose from the best.</Accordion>
              <Accordion title="DevOps">Assist your developers with the best of our best development operations. To ensure that all operations on your end run smoothly, we provide outstanding automation, testing, integration, and management services.</Accordion>
              <Accordion title="Quality Assurance Teams">Quality of work determines any company's credibility. When you deliver a product, you want to ensure it's your best effort. Maybe you have a good team of in-house computer engineers, but you still want someone to review your work. Some companies have a separate quality assurance department, but some cannot afford to hire full-time employees in-house. For such a job, you can reliably turn to our augmented team of QAs.</Accordion>
              <Accordion title="Client Management Teams">No matter how good your product development may be, if your relationship with your clients is poor, you will not be able to stay in the market for long. To establish great client relations and effective communication, you can contact our IT staff augmentation services to hire a client management team.</Accordion>
              <Accordion title="Project Managers">Are you supervising every project your team is working on? We can take the burden off your shoulders by providing you with well-trained project managers. They will make sure that your teams are collaborating efficiently, clients are satisfied, and that the project is being delivered on time by scheduling and keeping a record of everything.</Accordion>
              <Accordion title="Business Analysts">Marketing is the key to any successful business. If your company is in the industry looking to boost your business, attract more clients, and create better jobs, then you must have a dedicated business management team. You’ll find some of the best-qualified people for managing all your marketing hassles here at Quaid Technologies.</Accordion>
              
            
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
            <Link href="/contact-qt">
            
            <Button variant="primary">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12">
        <div className="container">
          <h2 className="section-heading font-bold text-4xl text-center">
            For IT staff Augmentation
          </h2>
          <div className="w-full mt-10">
            <Carousel itemsToShowDesktop={2.7} itemsToShowMobile={1} margin={20} speed={5000}>
              {clients?.map((item) => {
                return (
                  <div className="sm:w-full w-[95%] sm:h-[500px] rounded-lg overflow-hidden shadow-md mb-5">
                    <div className="w-full h-62 bg-white flex items-center justify-center">
                      <Image
                        src={item.image}
                        className="w-full h-full object-contain"
                        width="500"
                        height="400"
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
                        {servicesCard?.map((card, index) => {
                          
                            return (
                                <div className="card md:mx-0 md:w-1/3 w- overflow-hidden  max-w-sm mx-2 my-4 border border-slate-200 rounded" key={index}>
                                    <div className="w-full h-fit p-3 bg-white flex items-center justify-center">
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

                    <div className="w-full mt-10">
                        <ContactUsForm/>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-10"> 
            <CallToAction />
            </section>
    </Layout>
    </>
    )
}

export default ItStaffAugmented



export async function getServerSideProps(context) {
    // Fetch data from an API, database or just hard code it.
    // The data should come as props to the Services component.
  
  
    const processCards = [
      {
        stats: 1,
        title: "Know What You Need",
        text: "You must have a clear idea of your requirements. An easy way to do so is to list the problems hindering the smooth delivery of your work, and then identify the gaps which need to be filled to resolve these problems. When you contact us, we will make sure that we dedicate a person who can listen to all your needs and requirements. Be as clear as you can when explaining all the details to our personnel!",
      },
      {
        stats: 2,
        title: "Choose The Required Team Member",
        text: "If you are looking for a specific type of worker, such as a graphic designer, you can pick one from our team of skilled people. On the other hand, if you identify a gap to be filled but are not sure who to assign the task to, we will be glad to recommend a team or team member that best suits your requirement.",
      },
      {
        stats: 3,
        title: "Have A One-On-One Interview",
        text: "You can interview our candidates one on one. We will arrange an online interview session so that you can have a satisfactory conversation. No matter what part of the world you are in, you will be fully facilitated.",
      },
      {
        stats: 4,
        title: "Start Working Right Away",
        text: "Once you are satisfied with the hiring of your augmented team, you can start assigning work right away. We make sure that our teams are available according to the agreed timings, and we provide them with a peaceful work environment as well as the latest equipment and technologies to work efficiently.",
      },
    ];
  
    const clients = [
      {
        image: "/images/It-staff-Augmentation/hassle-free-online-working.jpg",
        title: "Hassle-Free Online Working",
        text: "We know no horizons in the digital world. You can work from anywhere in the world with your team sitting at an entirely different place and time zone. We ensure that they are provided with an over-the-top working environment.",
      },
      {
        image: "/images/It-staff-Augmentation/latest-equipment-training.jpg",
        title: "Latest Equipment And Training",
        text: "We equip our staff with the latest technologies and devices. We also provide proper training to our staff so they could deliver matcless and par excellence work.",
      },
      {
        image: "/images/It-staff-Augmentation/legal-matters-management.jpg",
        title: "Legal Matters Management",
        text: "We take care of all the HR, accounts, and legal matters of our staff. We are there for you according to your need whether they are of short-term or long-term. You can just consider us an extension of your company which you can scale up or down according to your requirements.",
      },
      {
        image: "/images/It-staff-Augmentation/availability.jpg",
        title: "24/7 Availabliity",
        text: "We are here 24/7 to answer any of your queries and concerns. Contact us today to get the unprecedented IT staff augmentation services.",
      }
    ];

    const servicesCard = [
      {
        image: "/images/software development/software-developmentImg.png",
        title: "Software Development",
        text: "We provide client-focused, customer-centric, Web Application Development Solutions that deliver tangible business results.",
        slug: "/service/software-development"
      },
      {
        image: "/images/Hire Overseas/hireOverseasImg.png",
        title: "Hire Overseas Development Team",
        text: "Our Cloud Team service allows you to hire on-site or offshore technical resources without being constrained by distance or international borders.",
        slug: "/service/hire-overseas-development-team"
      },
      {
        image: "/images/Security Compliance/security-complianceImg.png",
        title: "Security & Compliance",
        text: "We can help your business with our managed network security services to meet your compliance needs. Our experienced team make sure that your servers are in good hands.",
        slug: "/service/security-compliance"
      },
    ];
  
    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
      props: { processCards, clients, servicesCard },
    }
  }