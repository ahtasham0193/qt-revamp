import Accordion from "@/components/Accordian"
import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import Link from "next/link"
import React from 'react'



const WebsiteDevelopment = ({ servicesCard }) => {

    return (
        <Layout>
            <section>
                <div className="w-full p-6">
                    <div className="w-full">
                        <div className="thin-container w-full">
                            <Image
                                src="/images/website development/website-developmentImg.png"
                                className="w-full max-w-[600px] m-auto mt-8"
                                width={500}
                                height={300}
                                alt="Illustration of services content"
                            />
                            <h1 className="section-heading text-4xl font-bold text-center mt-8">
                                Website development since 1998
                            </h1>
                            <p className="mt-6  text-center">
                                Want to Turn Your Website into a Lead Magnet? Want to Turn every Visitor into a Buyer? Let us take things into our hands and revolutionize your digital journey like never before.
                                Quaid Technologies offers a full range of custom Web Application development services that help design, build, and evolve web-based software. We provide client focused and customer centric website solutions that deliver tangible business results. We add the latest features, enhanced settings, and custom considerations. Our leading edge technical experts have the ability to create any sort of site at any stage by appropriately understanding your business needs.
                            </p>

                            <Image
                                src="/images/team.svg"
                                className="w-full max-w-[600px] m-auto mt-12"
                                width={500}
                                height={300}
                                alt="Illustration of services content"
                            />

                            <h1 className="section-heading text-4xl font-bold text-center mt-8">
                                Do you want to know why we are best in the game?
                            </h1>
                            <p className="mt-6  text-center">
                                The digital market is a great pool, and to stand out among the many fish (competitors) is difficult. It took us plenty of effort and hard work to reach where we are today. Here is why we are the best in the Game:
                            </p>
                            <div className="mt-10 max-w-[600px] mx-auto">
                                <Accordion title="We Provide You with a Secure Website">
                                    With an amazing website comes a fear of data leaks or hacking. But not when it is crafted at the hands of our team! Trust us when we say our experts make sure no data leak or security breach happens at your irresistible website.
                                </Accordion>
                                <Accordion title="We Won't Let You be Obsolete">Our team gives you timely updates on evolving patterns in the market. This way, you stay ahead of the Game and don't become obsolete, which is the need of the hour.</Accordion>
                                <Accordion title="We Let You Be You">Every brand/product is different, and no template fits all. Hence, we believe in letting you be you and putting your best step forward with our customized web development services. This way, you get to greet your audience with your authentic brand spirit, giving a nice and instant boost to your product.</Accordion>
                                <Accordion title="We Make Sure You Boost Your Product Performance">Staying relevant in your business world is very important. When businesses don't revise their product according to industry trends, they quickly become obsolete. We help you stay updated and hence boost product performance per the industry trends.</Accordion>
                                <Accordion title="We Provide a Safe & User-Friendly Experience">Trust us when we say your website will be a memorable experience for your clients. Our web development experts make sure there is adequate security on the website as well as post-purchase care. This way, they get a safe and user-friendly experience and keep coming back!</Accordion>

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
                                <h4 className="text-xl sm:text-3xl font-semibold">LEARNING MANAGEMENT SYSTEM (LMS)</h4>
                                <p className="text-sm sm:text-lg mt-5">May it be that you want to add a self-paced eLearning course to your curriculum, or simply want to digitize your gradebook, a learning management system (LMS) is a great way to bring your classroom into the 21st century. Team at QuaidTech will help you learn how leveraging technology can help you do just that to get the best results.</p>
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
                                <h4 className="text-xl sm:text-3xl font-semibold">AUTO BUTLER SYSTEM</h4>
                                <p className="text-sm sm:text-lg mt-5">Auto Butler system is a product for today’s busy lifestyles as it takes the worry out of appearance care. You can have both your appearance care and maintenance done in one convenient appointment at the same Dealership that sold you the car.</p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">WEB PORTALS, CMS, E-COMMERCE SYSTEMS</h4>
                                <p className="text-sm sm:text-lg mt-5">New technologies are transforming both brick-and-mortar and eCommerce retail businesses. We make retail software that can help you run your business more effectively and keep up with the latest trends.</p>
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
                                                <span className="font-semibold cursor-pointer">Learn more</span>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="w-full mt-10">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default WebsiteDevelopment

export async function getServerSideProps(context) {
    // Fetch data from an API, database or just hard code it.
    // The data should come as props to the Services component.

    const servicesCard = [
        {
            image: "/images/Mobile Software Development/mobileSoftwaredevelopmentImg.png",
            title: "Mobile Software Development",
            text: "The company leads the state of the art Mobile Software Development, enabling seamless user experiences across all modern platforms and devices.",
            slug: "/mobile-software-development"
        },
        {
            image: "/images/Hire Overseas/hireOverseasImg.png",
            title: "Hire Overseas Development Team",
            text: "Our Cloud Team service allows you to hire on-site or offshore technical resources without being constrained by distance or international borders.",
            slug: "/hire-overseas"
        },
        {
            image: "/images/Desktop Software/desktopSoftwareImg.png",
            title: "Desktop Software Development",
            text: "We provide leading software development services to our worldwide clients. Quaid Technology is the expert partner you need to deliver innovative and competitive results.",
            slug: "/desktop-software"
        },
    ];

    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
        props: { servicesCard },
    }
}