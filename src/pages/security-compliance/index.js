import Accordion from "@/components/Accordian"
import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'


const SecurityCompliance = ({servicesCard}) => {
    return (
        <Layout>
            <section>
                <div className="w-full">
                    <div className="container">
                        <div className="w-full mt-24">
                            <div className="w-full">
                                <div className="mx-auto mb-8 w-full">
                                    <Image
                                        src="/images/Security Compliance/security-complianceImg.png"
                                        alt="Image"
                                        className="w-full max-w-[1200px] m-auto object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="w-full mt-7">
                                    <h1 className="text-xl sm:text-3xl font-semibold text-center">Security compliance</h1>
                                    <p className=' max-w-[850px] m-auto text-sm sm:text-lg text-center mt-5'>Servers are the life-line of business’ technology infrastructure. Every time a server stops, and so does your business. We have a knowledgeable and experienced team who make sure that your servers are in good hands. The fundamental layer of protection is much needed before upsetting your company’s crucial data on web. The quick advancement of Web-borne malware developed digital dangers and data security dangers. Now the Web Threat Security is more common than anytime. With the increasing number of cyber criminals, now the web requires more advanced system other than customary system security and host based security innovations. We can help your business with our managed network security services to meet your compliance needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24">
                <h1 className="text-xl sm:text-3xl font-semibold text-center">Compliance Frameworks We Work With</h1>
                <div className="mt-10 max-w-[600px] mx-auto">
                    <Accordion title="HIPAA">
                        HIPAA (Health Insurance Portability and Accountability Act) applies to companies in the Health Insurance industry. It legislates how companies should handle and secure patient's personal medical information. HIPAA compliance requires companies who manage this kind of information, to do so safely. The act has five sections, which it calls Titles. Title 2 is the section that applies to information privacy and security.
                    </Accordion>
                    <Accordion title="SOX">The Sarbanes-Oxley Act (also called SOX) applies to the corporate care and maintenance of financial data of public companies. It defines what data must be kept and for how long it needs to be held. It also outlines controls for the destruction, falsification, and alteration of data. SOX attempts to improve corporate responsibility and add culpability. The act states that upper management has to certify the accuracy of their data.</Accordion>
                    <Accordion title="PCI DSS">PCI DSS compliance is the Payment Card Industry Data Security Standard created by a group of companies. Requirements that are part of the standard are:
                        <ul className="list-disc px-6 mt-3">
                            <li>
                              A secured network
                            </li>
                            <li>
                            Protected user data
                            </li>
                            <li>
                            Strong access controls and management
                            </li>
                            <li>
                            Network tests
                            </li>
                            <li>
                            Regular reviews of Information Security Policies
                            </li>
                        </ul>
                        </Accordion>
                    <Accordion title="SOC Reports">SOC Reports are Service Organization Control Reports that deal with managing financial or personal information at a company. There are three different SOC Reports. SOC 1 and SOC 2 are different types with SOC 1 applying to financial information controls, while SOC 2 compliance and certification covers personal user information. SOC 3 Reports are publicly accessible, so they do not include confidential information about the company.</Accordion>
                    <Accordion title="Networks">Networks allow us to share information quickly over vast distances. This also makes them a risk. A breached network can do untold amounts of damage to a company.Personal information damage the company’s image</Accordion>
                    <Accordion title="Devices">A user’s personal device that connects to a company network can inject unknown code into the system. Similarly, clicking on the wrong email attachment can quickly spread malicious software.</Accordion>
                    <Accordion title="Users">Careless users are a significant risk for any company. They don’t know they have been compromised and don’t know they are enabling an online attack. Phishing emails now responsible for 91% successful cyber-attacks.</Accordion>
                    <Accordion title="SAST">We specialize in providing top-notch Static Application Security Testing services. Our team of experienced security experts uses cutting-edge SAST tools and methodologies to identify and mitigate security risks in your software applications.</Accordion>
                    <Accordion title="DAST">We excel in providing top-tier Dynamic Application Security Testing services. Our team of seasoned security professionals employs state-of-the-art DAST tools and methodologies to pinpoint and mitigate security risks in your software applications.</Accordion>
                    <Accordion title="SCA">We specialize in providing comprehensive Origin Analysis and Software Composition Analysis services. Our team of experts utilizes advanced tools and methodologies to help you manage and secure your software components effectively.</Accordion>
                    <Accordion title="IAST and Hybrid Tools">We excel in providing state-of-the-art IAST and Hybrid Tools services. Our team of seasoned security professionals employs cutting-edge tools and methodologies to help you secure your applications dynamically.</Accordion>
                    <Accordion title="MAST">We specialize in providing top-tier Mobile Application Security Testing (MAST) services. Our team of expert security professionals utilizes cutting-edge tools and methodologies to assess and enhance the security of your mobile apps.</Accordion>
                    <Accordion title="ASTaaS">We specialize in providing top-tier Application Security Testing as a Service (ASTaaS). Our team of certified security professionals leverages advanced tools and methodologies to ensure the security of your applications.</Accordion>
                    <Accordion title="ASTO">We excel in providing top-tier Application Security Testing Orchestration (ASTO) services. Our team of certified security professionals combines extensive expertise with advanced tools and technologies to enhance your application security. </Accordion>
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


export default SecurityCompliance

export async function getServerSideProps(context) {
    // Fetch data from an API, database or just hard code it.
    // The data should come as props to the Services component.

    const servicesCard = [
      {
        image: "/images/Branding And Designing/brandingImg.png",
        title: "Designing & Branding",
        text: "We offer a full-service branding and custom design strategy to our clients , we help you bring your ideas to life.",
        slug: "/branding-and-designing"
      },
      {
        image: "/images/website development/website-developmentImg.png",
        title: "Web Development",
        text: "We provide client-focused, customer-centric, Web Application Development Solutions that deliver tangible business results.",
        slug: "/website-development"
      },
      {
        image: "/images/Mobile Software Development/mobileSoftwaredevelopmentImg.png",
            title: "Mobile Software Development",
            text: "The company leads the state of the art Mobile Software Development, enabling seamless user experiences across all modern platforms and devices.",
            slug: "/mobile-software-development"
      },
    ];
  
    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
      props: { servicesCard },
    }
  }