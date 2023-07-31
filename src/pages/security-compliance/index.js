import Accordion from "@/components/Accordian"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import React from 'react'



const SecurityCompliance = () => {
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
                        Content 1 Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sunt dicta harum quibusdam cumque nesciunt perferendis
                        earum! Nemo nulla eaque quod deleniti adipisci neque aspernatur?
                        Eum reiciendis sint quia aspernatur. Pariatur non odit, odio
                        necessitatibus sint in vero ipsa enim consequatur, eaque officia
                        ea perferendis autem nesciunt blanditiis explicabo suscipit.
                    </Accordion>
                    <Accordion title="SOX">Content 2</Accordion>
                    <Accordion title="PCI DSS">Content 3</Accordion>
                    <Accordion title="SOC Reports">Content 4</Accordion>
                    <Accordion title="Networks">Content 5</Accordion>
                    <Accordion title="Devices">Content 6</Accordion>
                    <Accordion title="Users">Content 7</Accordion>
                    <Accordion title="SAST">Content 8</Accordion>
                    <Accordion title="DAST">Content 9</Accordion>
                    <Accordion title="SCA">Content 10</Accordion>
                    <Accordion title="IAST and Hybrid Tools">Content 11</Accordion>
                    <Accordion title="MAST">Content 12</Accordion>
                    <Accordion title="ASTaaS">Content 13</Accordion>
                    <Accordion title="ASTO">Content 14</Accordion>
                </div>
            </section>
            <section className="mt-24"> 
                <OtherServices />
            </section>
        </Layout>
    )
}


export default SecurityCompliance