import Accordion from "@/components/Accordian"
import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import OurClients from "@/components/OurClients"
import Image from "next/image"
import Link from "next/link"
import React from 'react'


const HireOverseas = ({servicesCard}) => {
    return (
        <>
            <Layout>
                <section>
                    <div className="w-full">
                        <div className="container">
                            <div className="w-full mt-24">
                                <div className="w-full">
                                    <div className="mx-auto mb-8 w-full">
                                        <Image
                                            src="/images/Hire Overseas/hireOverseasImg.png"
                                            alt="Image"
                                            className="w-full max-w-[320px] m-auto object-contain"
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                    <div className="w-full mt-7">
                                        <h1 className="text-xl sm:text-3xl font-semibold text-center">Team providers since 1998</h1>
                                        <p className=' max-w-[850px] m-auto text-sm sm:text-lg text-center mt-5'>Quaid Technologies holds more than 20 years of experience in various fields of Information Technology. From simple to complex projects, we bespoke each project requirement whilst keeping abreast with advanced technologies and frameworks. By hiring our offshore team, you are actually hiring the whole company for yourself. You do not need to establish any of the infrastructures like office space, hardware, software, and communication facilities which definitely is a cost advantage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full mt-24">
                        <div className="container">
                            <div className="w-full">
                                <h2 className="text-xl sm:text-3xl font-semibold text-center">The Process</h2>
                                <div className="mx-auto mb-8 w-full mt-12">
                                    <Image
                                        src="/images/Hire Overseas/processImg.png"
                                        alt="Image"
                                        className="w-full max-w-[850px] m-auto object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full mt-24">
                        <div className="container">
                            <div className="w-full">
                                <h2 className="text-xl sm:text-3xl font-semibold text-center">Benefits and advantages</h2>
                            </div>
                            <div className="w-full max-w-[850px] m-auto mt-6">
                                <Accordion title="Cost Reduction">
                                It is totally impossible for anybody that between in-house responsibility, he would also be able to look after what is happening in the offshore team. This responsibility requires the permanent specialized leader whose sole duty is to work with the offshore group. The leader is required to clear the business needs and provide inspirations for each task. He also arranged for coordination, helped comprehend troublesome specialized difficulties, auditing and coaching the offshore group. By keeping all these needs in mind, Quaid Technologies love to offer the perfect individual for the onshore team lead responsibility.
                                </Accordion>
                                <Accordion title="Ready to use infrastructure">
                                Quaid Technologies holds more than years of experience in various fields and services of Information Technology. From simple to complex projects, we deal with each project requirement with advanced technologies, so by hiring the offshore team of us, you are actually hiring the whole company for you. You do not need to establish any of the infrastructures like office space, hardware, software, and communication facilities which definitely have a cost advantage.
                                </Accordion>
                                <Accordion title="Immediate Availability">
                                The time duration is owed in a manner so that the client can keep a constant communication with our team. As a client, you have access to our team at all hours. The work process is kept flexible according to the convenience of client. Before starting the work, the time schedule is set by the client so that the client can have an immediate conversation whenever needed.
                                </Accordion>
                                <Accordion title="Team Strength">
                                At Quaid Technologies, the offshore pool involves the designers, developers, content writers, app engineers and security providers with proven records in their respective field. Basically, we provide the team with a strength of 6-7 according to the project. As the team is small it is really easy to manage and communicate with them. Each team adheres to proven methodologies and best practices.
                                </Accordion>
                                <Accordion title="Goal Focus">
                                As a client, you can now engage with your customers and leave the work to the experienced Offshore Team. Now you have more time to implement better ways for your business. You can develop new marketing strategies and generate more income. We allow you to concentrate on what your goal is. We let you focus on more important things concerning your business’ success by sharing the work burden.
                                </Accordion>
                                <Accordion title="Right Protection">
                                At all stages of work, we follow up and keep complete transparency. From work distribution to each activity discussed and updated to the client, we keep the records. We also value that each project comes to adhering to the security protocol. So, whatever is the information type, the protocol is maintained at all stages.
                                </Accordion>
                                <Accordion title="Low Risk - High Return">
                                By hiring an offshore team you handle the project with the help of skilled specialists. The setup of the new IT department and the infrastructure will bring such a cost to the business and you never know if it is going to be profitable for you or not. So the offshore team minimizes the risk, through providing the established infrastructure with skilled professionals which cost you very low. As a client, you can expect accurate and speedy outputs from a group of experienced staff.
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full mt-24">
                        <div className="container">
                            <div className="w-full">
                                <h2 className="text-xl sm:text-3xl font-semibold text-center">Our prestigious clients</h2>
                                <p className=' max-w-[850px] m-auto text-sm sm:text-lg text-center mt-5'>Our clients inspire us to push boundaries and achieve greatness together. <br />
                                    Proudly partnering with clients to transform visions into reality.</p>
                            </div>
                            <div className="w-full mt-6">
                                <OurClients />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full mt-24">
                        <div className="container">
                            <div className="w-full">
                                <h2 className="text-xl sm:text-3xl font-semibold text-center">Popular buying services</h2>
                            </div>
                            <div className="w-full mt-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-light-primary-color rounded-lg p-8">
                                        <h2 className=" text-[22px] font-normal text-gray-700 mb-4">Application Developers</h2>
                                        <p className="text-gray-400 text-base ">REACT, IOS, ANDROIID, LARAVEL, ANGULAR, VUE</p>
                                    </div>
                                    <div className="bg-light-primary-color rounded-lg p-8">
                                        <h2 className=" text-[22px] font-normal text-gray-700 mb-4">DevOps Experts</h2>
                                        <p className="text-gray-400 text-base ">BAMBOO, GRADLE,J ENKINS, GIT, DOCKER</p>
                                    </div>
                                    <div className="bg-light-primary-color rounded-lg p-8">
                                        <h2 className=" text-[22px] font-normal text-gray-700 mb-4">Quality Control Engineers</h2>
                                        <p className="text-gray-400 text-base ">TESTINGWHIZ, POSTMAN, GITHUB, RANOREX</p>
                                    </div>
                                    <div className="bg-light-primary-color rounded-lg p-8">
                                        <h2 className=" text-[22px] font-normal text-gray-700 mb-4">Designers (UX/UI)</h2>
                                        <p className="text-gray-400 text-base ">WIREFRAMES, PROTOTYPE, DESIGN, FRONT-END</p>
                                    </div>
                                    <div className="bg-light-primary-color rounded-lg p-8">
                                        <h2 className=" text-[22px] font-normal text-gray-700 mb-4">Server Administrators</h2>
                                        <p className="text-gray-400 text-base ">WINDOW, UNIX, LINUX APACHE,</p>
                                    </div>
                                    <div className="bg-light-primary-color rounded-lg p-8">
                                        <h2 className=" text-[22px] font-normal text-gray-700 mb-4">Digital Marketing Strategists</h2>
                                        <p className="text-gray-400 text-base ">SEO, SMM, PPC, EMAIL MARKETING</p>
                                    </div>
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
                        {servicesCard?.map((card , index) => {
                               
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
                                                <span className="font-semibold cursor-pointer">Learn more</span>
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
        </>
    )
}

export default HireOverseas

export async function getServerSideProps(context) {
    // Fetch data from an API, database or just hard code it.
    // The data should come as props to the Services component.

    const servicesCard = [
        {
            image: "/images/Cloud Based hosting/cloudBasedImg.png",
            title: "Managed Hosting Services",
            text: "Our managed hosting guarantees unmatched performance, reliability and choice with support that acts as your extended team.",
            slug: "/cloud-based-hosting"
          },
          {
            image: "/images/Mobile Software Development/mobileSoftwaredevelopmentImg.png",
            title: "Mobile Software Development",
            text: "The company leads the state of the art Mobile Software Development, enabling seamless user experiences across all modern platforms and devices.",
            slug: "/mobile-software-development"
          },
          {
            image: "/images/Branding And Designing/brandingImg.png",
            title: "Designing & Branding",
            text: "We offer a full-service branding and custom design strategy to our clients , we help you bring your ideas to life.",
            slug: "/branding-and-designing"
          },
    ];
  
    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
      props: { servicesCard },
    }
  }