import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import React from 'react'

const DesktopSoftware = () => {
    return (
        <Layout>
            <section>
                <div className="w-full">
                    <div className="container">
                        <div className="w-full mt-24">
                            <div className="w-full">
                                <div className="mx-auto mb-8 w-full">
                                    <Image
                                        src="/images/Desktop Software/desktopSoftwareImg.png"
                                        alt="Image"
                                        className="w-full max-w-[320px] m-auto object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="w-full mt-7">
                                    <h1 className="text-xl sm:text-3xl font-semibold text-center">Software development company since 1998</h1>
                                    <p className=' max-w-[850px] m-auto text-sm sm:text-lg text-center mt-5'>Quaid Technologies offers custom software development with technology & subject matter expertise combined. We venture with an array of software companies in the industry, starting from fresh names to the established ones.</p>
                                </div>
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
                                <h4 className="text-xl sm:text-3xl font-semibold">ACCOUNTS /INVENTORY /HR SYSTEMS</h4>
                                <p className="text-sm sm:text-lg mt-5">Quaid Technologies have a vast dexterity for managing and maintaining the quality of annual financial report schemes and the state property accounting record reports. We keep all the stock records on a centralized computer database. We lead and screen the annual physical inventory cycle and review those reports together by keeping them divided on a regular basis. Later we give stock data and reference assets to the division workforce.Here, you’ll find information on industry tech and trends paired with tips to help your business remain competitive.</p>
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
                                <h4 className="text-xl sm:text-3xl font-semibold">POINT OF SALES SYSTEM</h4>
                                <p className="text-sm sm:text-lg mt-5">Quaid Technologies have a vast dexterity for managing and maintaining the quality of annual financial report schemes and the state property accounting record reports. We keep all the stock records on a centralized computer database. We lead and screen the annual physical inventory cycle and review those reports together by keeping them divided on a regular basis. Later we give stock data and reference assets to the division workforce.Here, you’ll find information on industry tech and trends paired with tips to help your business remain competitive.</p>
                            </div>
                           
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">DESKTOP APPS/HEALTH PORTALS</h4>
                                <p className="text-sm sm:text-lg mt-5">We are very keen towards collecting and importing databases from diverse information sources like Entrust, TMB and NPI. QuaidTech cares for the databases of medical specialists like their medicinal records. The very basic inquiry form we put on the website can gather data focused around Zip Code and client IP. Our social insurance improvement management hunts individualities of therapeutic techniques, office pursuits, restorative methodology and practitioners.</p>
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

export default DesktopSoftware