import Accordion from "@/components/Accordian"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import React from 'react'



const WebsiteDevelopment = () => {
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
                                    Content 1 Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Sunt dicta harum quibusdam cumque nesciunt perferendis
                                    earum! Nemo nulla eaque quod deleniti adipisci neque aspernatur?
                                    Eum reiciendis sint quia aspernatur. Pariatur non odit, odio
                                    necessitatibus sint in vero ipsa enim consequatur, eaque officia
                                    ea perferendis autem nesciunt blanditiis explicabo suscipit.
                                </Accordion>
                                <Accordion title="We Won't Let You be Obsolete">Content 2</Accordion>
                                <Accordion title="We Let You Be You">Content 3</Accordion>
                                <Accordion title="We Make Sure You Boost Your Product Performance">Content 4</Accordion>
                                <Accordion title="We Provide a Safe & User-Friendly Experience">Content 5</Accordion>
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
                <OtherServices/>
            </section>
        </Layout>
    )
}

export default WebsiteDevelopment