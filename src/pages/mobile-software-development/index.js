import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const MobileSoftwareDevelopment = ({servicesCard}) => {
    return (
        <Layout>
            <section>
                <div className="w-full p-6">
                    <div className="w-full">
                        <div className="thin-container w-full">
                            <Image
                                src="/images/Mobile Software Development/mobileSoftwaredevelopmentImg.png"
                                className="w-full max-w-[600px] m-auto mt-8"
                                width={500}
                                height={300}
                                alt="Illustration of services content"
                            />
                            <h1 className="section-heading text-4xl font-bold text-center mt-8">
                                Mobile software development
                            </h1>

                            <p className="mt-6 text-center">
                                Our elite in-house team specializes in software engineering, product development, cloud architecture, and digital transformation. We rapidly and reliably deliver software that meets the needs of the world’s most demanding organizations. Our diverse team is united to create some extraordinary apps for your business. Features do matter in the performance of the mobile apps, that’s why we see multiple featured apps in app stores. In such a crowded marketplace, only the perfect featured app stands out. It not only outlines the uniqueness of your business but can generate thousands of leads. So, first you need to win the visitor through attractive design of your application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full mt-24">
                    <div className="container">
                        <h2 className="section-heading text-4xl font-bold text-center mt-8">
                            Mobile software development
                        </h2>
                        <Image
                            src="/images/Mobile Software Development/mobSoftwareImg2.png"
                            className="w-full max-w-[1100px] m-auto mt-8"
                            width={500}
                            height={300}
                            alt="Illustration of services content"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full mt-24">
                    <div className="container">
                        <h3 className="text-xl sm:text-3xl font-semibold text-center">Software apps</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">NATIVE APPS</h4>
                                <p className="text-sm sm:text-lg mt-5">The key advantange of Native App is performance. Building native applications means Objective-C on iOS, and java on Android. These apps give you quality and great performance. We build Native Apps in iOS, Android, and Windows platforms. Native apps are the preference for companies that are looking to get the essence on a solitary stage.</p>
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <Image
                                    src="/images/Mobile Software Development/NativeAppImg.png"
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
                                    src="/images/Mobile Software Development/HybridAppImg.png"
                                    alt="Image"
                                    className="w-full object-contain"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">HYBRIDS APPS</h4>
                                <p className="text-sm sm:text-lg mt-5">Change your business experience through one app across all the mobile platforms. Get rid of costly separate projects and get instant experience of your code on all hardware with the help of QuaidTech's skilled developers. Our Team can work in your favourite UI framework also.</p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">WEB APPS</h4>
                                <p className="text-sm sm:text-lg mt-5">WE produce tailor made responsive design and development for massive conversions. Actually the Responsive Web Design is the plan that suggests the outline and execution of website according to client conduct and environment on the screen size and working arrangement of their gadget.</p>
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] h-[300px] py-4">
                                <Image
                                    src="/images/Mobile Software Development/WebAppImg.png"
                                    alt="Image"
                                    className="w-full object-contain h-full"
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

export default MobileSoftwareDevelopment

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
        image: "/images/Security Compliance/security-complianceImg.png",
        title: "Security & Compliance",
        text: "We can help your business with our managed network security services to meet your compliance needs. Our experienced team make sure that your servers are in good hands.",
        slug: "/security-compliance"
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