import Accordion from "@/components/Accordian"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import OurClients from "@/components/OurClients"
import Image from "next/image"
import React from 'react'


const HireOverseas = () => {
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
                                            width={180}
                                            height={180}
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
                                        width={180}
                                        height={180}
                                        quality={100}
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
                                    Content 1
                                </Accordion>
                                <Accordion title="Ready to use infrastructure">
                                    Content 2
                                </Accordion>
                                <Accordion title="Immediate Availability">
                                    Content 3
                                </Accordion>
                                <Accordion title="Team Strength">
                                    Content 4
                                </Accordion>
                                <Accordion title="Goal Focus">
                                    Content 5
                                </Accordion>
                                <Accordion title="Right Protection">
                                    Content 6
                                </Accordion>
                                <Accordion title="Low Risk - High Return">
                                    Content 7
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
                                <p className=' max-w-[850px] m-auto text-sm sm:text-lg text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
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
                    <OtherServices/>
                </section>
            </Layout>
        </>
    )
}

export default HireOverseas