import Accordion from "@/components/Accordian"
import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import Link from "next/link"
import React from 'react'


const SoftwareDevelopment = ({servicesCard}) => {
    return (
        <Layout>
            <section>
                <div className="w-full p-6">
                    <div className="w-full">
                        <div className="thin-container w-full">
                            <Image
                                src="/images/software development/software-developmentImg.png"
                                className="w-full max-w-[600px] m-auto mt-8"
                                width={500}
                                height={300}
                                alt="Illustration of services content"
                            />
                            <h1 className="section-heading text-4xl font-bold text-center mt-8">
                                Software development since 1998
                            </h1>
                            <h2 className="section-heading text-[22px] font-normal text-center mt-4">Get The Tailor-Made Software For Your Company That Fits Like A Glove</h2>
                            <p className="mt-6">
                                Fancy a timely project completion, fewer error rates, and software development expertise? Get bespoke software and manifest all that and much more in a blink of an eye!
                                Gone are the days when you and your brand relied on the manual workforce. This is the digital transformation era, and you must jump on the bandwagon if you haven't already. With our impeccable software development services, the journey is going to be an unforgettable one.
                            </p>

                            <Image
                                src="/images/team.svg"
                                className="w-full max-w-[600px] m-auto mt-12"
                                width={500}
                                height={300}
                                alt="Illustration of services content"
                            />

                            <h1 className="section-heading text-4xl font-bold text-center mt-8">
                                Why wouldn’t you look beyond us?
                            </h1>
                            <p className="mt-6">
                                We have a history of clients who keep coming back to us, newer ones who come on recommendations, and luckier ones who find us by chance. Here is why?
                            </p>
                            <ul className=" list-disc mt-5 pl-4">
                                <li>
                                    We have an exceptional record in software development; our testimonials speak for ourselves.
                                </li>
                                <li>
                                    Aim to know your and your brand's needs and personalize the software accordingly.
                                </li>
                                <li>
                                    Provide quality assurance of software as well as testing.
                                </li>
                                <li>
                                    Call ourselves problem solvers; whether you are a start-up or decades-old healthcare, we are up for the challenge.
                                </li>
                                <li>
                                    Have a 360 degrees approach to provide you with a flawless experience.
                                </li>
                                <li>
                                    Our software ensures seamless, error-free operations.
                                </li>
                            </ul>
                            <p className="mt-6">Let's not wait for any further and make your brand more extraordinary together (CTA)</p>
                            <h3 className=" mt-6 text-[22px] font-normal">What Is Software Development?</h3>
                            <p className="mt-4">Software development is not an ordinary system; instead, it is a complex system and comprises a series of steps requiring expertise. Here is how it is defined:</p>
                            <div className="mt-10 max-w-[600px] mx-auto">
                                <Accordion title="Step No 1: Identification Of Needs">
                                    This is a specific research-based step and holds primary importance. It revolves wholly around the identification of the needs of the brand and involves extensive marketing research and brainstorming. Our team of experts does in-depth market research first and then the brand's needs so that the target market gets what they are looking for. Remember, we also discuss the brand's aspects, including strengths, weaknesses, and opportunities.
                                    Pro Tip: The best way to do this is to get feedback from potential and old customers
                                </Accordion>
                                <Accordion title="Step No 2: Analysis Of Requirements">The second step in software development is the in-depth analysis of the requirements. In fact, this is very crucial in the development of software as it decides the fate of the software. The developers at this time determine the software development approach, such as a waterfall or V model. Moreover, the developers decide on the detailed outline of every component, scope, testing parameters, and task details of the developers to ensure the delivery of a quality product.</Accordion>
                                <Accordion title="Step No 3: Design">The third stage of the software development process is the design phase. The developers, at this point, come up with advanced specifications that are required to create the software. What else? Risk levels, time, budget, limitations, technologies, and designs are also considered. Actually, this step is a template that minimizes the chances of delays and flaws.</Accordion>
                                <Accordion title="Step No 4: Developing And Implementation">After the design is complete, the next step is developing and implementing the parameters of the design. The product specifications and requirements decided in the third step are coded at this stage. Besides, the front-end developers design interfaces and back-ends, and at the same time, the administrators add relevant data to the database. After being done with the coding, the developers then implement the product into the environment as part of the testing. This helps us see whether the performance is as per the requirements.</Accordion>
                                <Accordion title="Step No 5: Testing">At this phase, it's time to test the software for bugs. Adding more to this, the verification is done before it can be delivered to the users. Our expert testers verify the product's functions and ensure its performance is according to the requirements. If there is any defect in the code, the testers notify the developers. They work on the software, improve and repeat the process until it is ready.</Accordion>
                                <Accordion title="Step No 6: Deployment & Maintenance">When the software is defect-free, it's ready to deliver to the customers. Once it is released, we create a maintenance team to manage all the issues the clients encounter while using the product.</Accordion>
                            </div>
                            <p className="mt-6">
                                "A collection of processes involved in creating software programs" or "A process used by the programmers to build computer programs that meet technical specifications and user requirements of a brand"
                                Adding more to it, the whole cycle consisting of methodologies used to develop the software is known as Software Development Life Cycle (SDLC), an international standard used by software houses globally to develop and optimize the software per the brand's needs.
                                We use the Waterfall model for SDLC. Here are the seven main steps included in it that lead to a particular, tailor-made software:
                            </p>
                            <ul className="list-disc mt-5 pl-4">
                                <li>
                                    Identification of the software that is needed
                                </li>
                                <li>
                                    Specification of the software in detail
                                </li>
                                <li>
                                    Designing the software
                                </li>
                                <li>
                                    Programming
                                </li>
                                <li>
                                    Testing
                                </li>
                                <li>
                                    Maintenance
                                </li>
                            </ul>
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
    )
}

export default SoftwareDevelopment

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
        image: "/images/website development/website-developmentImg.png",
        title: "Web Development",
        text: "We provide client-focused, customer-centric, Web Application Development Solutions that deliver tangible business results.",
        slug: "/website-development"
      },
      {
        image: "/images/Digital Marketing/digitalMarketingImg.png",
        title: "Digital Marketing",
        text: "Grow a bigger, booming business in the world of the digital market with our first-rate digital marketing services. Get your hands on our tailored and exceptional digital marketing strategy that helps businesses to",
        slug: "/digital-marketing"
      },
    ];
  
    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
      props: { servicesCard },
    }
  }