import Accordion from "@/components/Accordian"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import React from 'react'



const BrandingAndDesigning = () => 
{
    return(
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
                                        width={180}
                                        height={180}
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
                        Content 1 Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sunt dicta harum quibusdam cumque nesciunt perferendis
                        earum! Nemo nulla eaque quod deleniti adipisci neque aspernatur?
                        Eum reiciendis sint quia aspernatur. Pariatur non odit, odio
                        necessitatibus sint in vero ipsa enim consequatur, eaque officia
                        ea perferendis autem nesciunt blanditiis explicabo suscipit.
                    </Accordion>
                    <Accordion title="Graphic Designing">Content 2</Accordion>
                    <Accordion title="Corporate Identity">Content 3</Accordion>
                    <Accordion title="App Designs">Content 4</Accordion>
                    <Accordion title="Digital Marketing">Content 5</Accordion>
                    <Accordion title="Facebook pages">Content 6</Accordion>
                    <Accordion title="Youtube Channel">Content 7</Accordion>
                    <Accordion title="Logo Branding">Content 8</Accordion>
                </div>
            </section>
            <section className="mt-24">
                <div className="w-full">
                <Image
                                        src="/images/Branding And Designing/brandingImg2.png"
                                        alt="Image"
                                        className="w-full m-auto object-contain"
                                        width={180}
                                        height={180}
                                    />
                </div>
                <OtherServices />
            </section>
            
        </Layout>
    )
}

export default BrandingAndDesigning