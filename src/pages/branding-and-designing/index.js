import Accordion from "@/components/Accordian"
import ContactUsForm from "@/components/ContactUsForm"
import ImageAccordion from "@/components/ImageAccordian"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import Link from "next/link"
import React from 'react'



const BrandingAndDesigning = ({servicesCard}) => {

    return (
        <Layout>
            <section>
                <div className="w-full">
                    <div className="container">
                        <div className="w-full mt-24">
                            <div className="w-full">
                                <div className="mx-auto mb-8 w-full">
                                    <Image
                                        src="/images/Branding And Designing/brandingImg.png"
                                        alt="Image"
                                        className="w-full max-w-[850px] m-auto object-contain"
                                        width={850}
                                        height={300}
                                    />

                                </div>
                                <div className="w-full mt-7">
                                    <h1 className="text-xl sm:text-3xl font-semibold text-center">Branding and Designing</h1>
                                    <p className=' max-w-[850px] m-auto text-sm sm:text-lg text-center mt-5'>We offer a full-service branding and design strategy that helps you bring your ideas to life. We offer a complete range of creative services tailored around your immediate and on-going branding requirements. From logos to website design, to print and digital, we've got you covered!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-7">
                <div className="mt-10 max-w-[600px] mx-auto">
                    <Accordion title="Web Desigining">
                    A beautiful custom website is very important for your online business presence to succeed. We offer all types of website designs like responsive, mobile, micro sites, WordPress etc. Our websites are not only highly customized and unique to every business, but also very affordable. Our creative designers see a project till the end details, no matter how much time and effort it takes. That’s why our artists keep pace with the changes in the industry and provide dedicated work to our many clients. We are the best website design company striving for excellence.
                    </Accordion>
                    <Accordion title="Graphic Designing">Make your business remarkable with our impressive graphic design service. With impressive logo, brochure, packaging and banner designs, etc. We show your customers how unique and profound you are. Our creative minds utilize all of insight, inventiveness, latest tools, softwares and visual depiction experience to make the wonderful representations of your organization. We are excelling in printing materials, design, flyers, banners, info graphics, business cards and report design. We love to work on projects like packaging designs and magazine designs.</Accordion>
                    <Accordion title="Corporate Identity">You can absolutely get your company excellent image, right after lunch from corporate identity service. It is the best step for all startups and small business. Your digital and printed brand material will let the mass know the business presence. Our team will create your identity that way which cannot only identify the products and services, but also differentiate it from your competitors. Mainly in corporate identity includes logo creation, business cards, stationery design, brochures, leaflets, flyers, report design and website design. It can also be customized to the client needs</Accordion>
                    <Accordion title="App Designs">Great mobile application design is more than looks, it is usable, user-friendly, authentic and intuitive to the user. We work on design applications for many reputable companies. Our experienced and skilled designers know how to walk the fine line between design and features to enjoy the more user experience by the customers.</Accordion>
                    <Accordion title="Digital Marketing">Whatever your business model is, Quaid Technologies will take care of your digital marketing, designing needs. We cover from Websites to Social Media Pages, from PowerPoint to flash presentations. Our design team works with you to create great feel promotional material that matches your company's standards and the message that you want to communicate to your target audience. Whatever your requirements are, we offer our services at affordable rates.</Accordion>
                    <Accordion title="Facebook pages">For many business owners and companies, Facebook is so much more than just a social network. That’s why Quaid Technologies provides a place to build a Facebook page designed to directly interact with the audience and introduce your products, services to the customers and give them an understanding of your business uniqueness. Our team has potential to add photo galleries, embedded videos, audio greetings, polls, quizzes, games and all sorts of interactive widgets to make your customers more visits to your Facebook business page. Also the page would be the one-of-a-kind experience that they will share with their Facebook friends.</Accordion>
                    <Accordion title="Youtube Channel">YouTube is the best tool to bring up your offline promotions to the masses. It is also a starting point for viral videos that make brand recognition. Our team of YouTube page designers will help you to create a customized look for your YouTube Channel, which reflects your brand identity and also makes you stand out from the crowd. The channel would be more personal and allow you to directly communicate with the potential customers.</Accordion>
                    <Accordion title="Logo Branding">The Quaid Technologies reputation has been built on delivering quality logo designs at affordable prices to our clients. We are talented and experienced logo designers who love to work with you to create a great logo that reflects your business essence. We have a good understanding of business concepts and branding. We deliver great logos in an efficient and affordable manner. We know that Logo speaks first more than your business does.</Accordion>
                </div>
            </section>
            <section className="mt-24">
                <div className="w-full">
                   <ImageAccordion/>
                </div>
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

export default BrandingAndDesigning


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
        image: "/images/Hire Overseas/hireOverseasImg.png",
        title: "Hire Overseas Development Team",
        text: "Our Cloud Team service allows you to hire on-site or offshore technical resources without being constrained by distance or international borders.",
        slug: "/hire-overseas"
      },
    ];
  
    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
      props: { servicesCard },
    }
  }