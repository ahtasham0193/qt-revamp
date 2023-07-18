import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import React from 'react'


const MobileSoftwareDevelopment = () => {
    return (
        <Layout>
            <section>
                <div className="w-full p-6">
                    <div className="w-full">
                        <div className="thin-container w-full">
                            <Image
                                src="/images/Mobile Software Development/mobileSoftwaredevelopmentImg.png"
                                className="w-full max-w-[600px] m-auto mt-8"
                                width="300"
                                height="300"
                                alt="Illustration of services content"
                            />
                            <h1 className="section-heading text-4xl font-bold text-center mt-8">
                                Mobile software development
                            </h1>

                            <p className="mt-6 text-center">
                                Our elite in-house team specializes in software engineering, product development, cloud architecture, and digital transformation. We rapidly and reliably deliver software that meets the needs of the world’s most demanding organizations. Our diverse team is united to create some extraordinary apps for your business. Features do matter in the performance of the mobile apps, that’s why we see multiple featured apps in app stores. In such a crowded marketplace, only the perfect featured app stands out. It not only outlines the uniqueness of your business but can generate thousands of leads. So, first you need to win the visitor through attractive design of your application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full mt-24">
                    <div className="container">
                        <h2 className="section-heading text-4xl font-bold text-center mt-8">
                            Mobile software development
                        </h2>
                        <Image
                            src="/images/Mobile Software Development/mobSoftwareImg2.png"
                            className="w-full max-w-[1100px] m-auto mt-8"
                            width="300"
                            height="300"
                            alt="Illustration of services content"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full mt-24">
                    <div className="container">
                        <h3 className="text-xl sm:text-3xl font-semibold text-center">Software apps</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">NATIVE APPS</h4>
                                <p className="text-sm sm:text-lg mt-5">The key advantange of Native App is performance. Building native applications means Objective-C on iOS, and java on Android. These apps give you quality and great performance. We build Native Apps in iOS, Android, and Windows platforms. Native apps are the preference for companies that are looking to get the essence on a solitary stage.</p>
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <Image
                                    src="/images/Mobile Software Development/NativeAppImg.png"
                                    alt="Image"
                                    className="w-full object-contain"
                                    width={180}
                                    height={180}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <Image
                                    src="/images/Mobile Software Development/HybridAppImg.png"
                                    alt="Image"
                                    className="w-full object-contain"
                                    width={180}
                                    height={180}
                                />
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">HYBRIDS APPS</h4>
                                <p className="text-sm sm:text-lg mt-5">Change your business experience through one app across all the mobile platforms. Get rid of costly separate projects and get instant experience of your code on all hardware with the help of QuaidTech's skilled developers. Our Team can work in your favourite UI framework also.</p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">WEB APPS</h4>
                                <p className="text-sm sm:text-lg mt-5">WE produce tailor made responsive design and development for massive conversions. Actually the Responsive Web Design is the plan that suggests the outline and execution of website according to client conduct and environment on the screen size and working arrangement of their gadget.</p>
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] h-[300px] py-4">
                                <Image
                                    src="/images/Mobile Software Development/WebAppImg.png"
                                    alt="Image"
                                    className="w-full object-contain h-full"
                                    width={180}
                                    height={180}
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

export default MobileSoftwareDevelopment