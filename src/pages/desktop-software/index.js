import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const DesktopSoftware = ({servicesCard}) => {
    return (
        <Layout>
            <section>
                <div className="w-full">
                    <div className="container">
                        <div className="w-full mt-24">
                            <div className="w-full">
                                <div className="mx-auto mb-8 w-full">
                                    <Image
                                        src="/images/Desktop Software/desktopSoftwareImg.png"
                                        alt="Image"
                                        className="w-full max-w-[320px] m-auto object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="w-full mt-7">
                                    <h1 className="text-xl sm:text-3xl font-semibold text-center">Software development company since 1998</h1>
                                    <p className=' max-w-[850px] m-auto text-sm sm:text-lg text-center mt-5'>Quaid Technologies offers custom software development with technology & subject matter expertise combined. We venture with an array of software companies in the industry, starting from fresh names to the established ones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full mt-24">
                    <div className="container">
                        <h2 className="text-xl sm:text-3xl font-semibold text-center">Our Process</h2>
                        <div className="w-full mt-10">
                            <Image
                                src="/images/Desktop Software/ourProcess.png"
                                alt="Image"
                                className="w-full object-contain"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full mt-24">
                    <div className="container">
                        <h3 className="text-xl sm:text-3xl font-semibold text-center">Software apps</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">ACCOUNTS /INVENTORY /HR SYSTEMS</h4>
                                <p className="text-sm sm:text-lg mt-5">Quaid Technologies have a vast dexterity for managing and maintaining the quality of annual financial report schemes and the state property accounting record reports. We keep all the stock records on a centralized computer database. We lead and screen the annual physical inventory cycle and review those reports together by keeping them divided on a regular basis. Later we give stock data and reference assets to the division workforce.Here, you’ll find information on industry tech and trends paired with tips to help your business remain competitive.</p>
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <Image
                                    src="/images/Desktop Software/softwareAppImg1.png"
                                    alt="Image"
                                    className="w-full object-contain"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div> 
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                        <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <Image
                                    src="/images/Desktop Software/softwareAppImg2.png"
                                    alt="Image"
                                    className="w-full object-contain"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">POINT OF SALES SYSTEM</h4>
                                <p className="text-sm sm:text-lg mt-5">Quaid Technologies have a vast dexterity for managing and maintaining the quality of annual financial report schemes and the state property accounting record reports. We keep all the stock records on a centralized computer database. We lead and screen the annual physical inventory cycle and review those reports together by keeping them divided on a regular basis. Later we give stock data and reference assets to the division workforce.Here, you’ll find information on industry tech and trends paired with tips to help your business remain competitive.</p>
                            </div>
                           
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">DESKTOP APPS/HEALTH PORTALS</h4>
                                <p className="text-sm sm:text-lg mt-5">We are very keen towards collecting and importing databases from diverse information sources like Entrust, TMB and NPI. QuaidTech cares for the databases of medical specialists like their medicinal records. The very basic inquiry form we put on the website can gather data focused around Zip Code and client IP. Our social insurance improvement management hunts individualities of therapeutic techniques, office pursuits, restorative methodology and practitioners.</p>
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <Image
                                    src="/images/Desktop Software/softwareAppImg3.png"
                                    alt="Image"
                                    className="w-full object-contain"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24">
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
        </Layout>
    )
}

export default DesktopSoftware

export async function getServerSideProps(context) {
    // Fetch data from an API, database or just hard code it.
    // The data should come as props to the Services component.

    const servicesCard = [
      {
        image: "/images/books.svg",
        title: "IT Staff Augmentation Services",
        text: "With so many technologies to work upon, hiring gets difficult when you are looking for a specialty. Why worrying when you can simply go for IT Staff Augmentation?",
        slug: "/it-staff-augmented"
      },
      {
        image: "/images/Digital Marketing/digitalMarketingImg.png",
        title: "Digital Marketing",
        text: "Grow a bigger, booming business in the world of the digital market with our first-rate digital marketing services. Get your hands on our tailored and exceptional digital marketing strategy that helps businesses to",
        slug: "/digital-marketing"
      },
      {
        image: "/images/website development/website-developmentImg.png",
        title: "Web Development",
        text: "We provide client-focused, customer-centric, Web Application Development Solutions that deliver tangible business results.",
        slug: "/website-development"
      },
    ];
  
    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
      props: { servicesCard },
    }
  }