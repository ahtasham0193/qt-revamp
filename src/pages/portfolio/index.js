import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import Image from "next/image"
import React from 'react'


const Portfolio = () => {
    return (
        <Layout>
            <section>
                <div className="w-full">
                    <div className="container">
                        <div className="w-full mt-24">
                            <div className="w-full mt-7">
                                <h1 className="hero-heading text-4xl text-center sm:text-7xl leading-normal mt-2 sm:mt-12">Our Portfolio</h1>
                                <div className="w-full flex justify-center mt-7">
                                    <a
                                        href=""
                                        className=" mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg"
                                        download
                                    >
                                        Download as PDF
                                    </a>
                                </div>

                                <h2 className="text-[22px] leading-6 font-normal my-4 text-center mt-7">Download Our Extended Portfolio By Clicking Link Above</h2>
                                <p className=" max-w-[850px] m-auto text-sm sm:text-base font-normal leading-7 text-center mt-5">Being the Development & Technical partner, Quaid Technologies is part of various organisations and projects around the globe. We have given services to many enterprises & organisations in Public & Private sectors. Below is the snippet of work done by us.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="w-full mt-24">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">Ballistic Calculator App</h4>
                                <p className="text-sm sm:text-lg mt-5">This App presents enhanced features as well as graphical representation of trajectories, in all weathers and all locations.</p>
                                <div className="flex flex-col sm:flex-row mt-4">
                                    <span className="bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">App Design and Development</span>
                                    <span className="bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm">Year 2020 - 2021</span>
                                </div>

                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <Image
                                    src="/images/Portfolio/ballisticCalculatorImg.png"
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
                                    src="/images/Portfolio/askariBankImg.png"
                                    alt="Image"
                                    className="w-full object-contain"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">Askari Bank Portal</h4>
                                <p className="text-sm sm:text-lg mt-5">Askari Bank is a commercial bank and is owned by Fauji Foundation. They needed to automate their recruitment portal and resolve several operational challenges related to it. Our client aimed to eliminate unnecessary delays in hiring, minimise labour and streamline the recruitment process. Within a few months, we automated our client’s job portal to help them reduce recruitment cost and boost operational efficiency.</p>
                                <div className="flex flex-col sm:flex-row mt-4">
                                    <span className=" bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Website Design</span>
                                    <span className="bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm">Year 2020 - 2021</span>
                                </div>
                                <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                    View Website
                                </button>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">News Connect</h4>
                                <p className="text-sm sm:text-lg mt-5">Get latest news from United States to UK to Japan, around the world including but not limited to India, Pakistan, Philippines, Sweden, Germany, France, Italy, United Arab Emirates, Saudi Arabia and other without annoying Advertisements. We also maintained an easy sharing mechanism with quick access to a further range of settings and options.</p>
                                <div className="flex flex-col sm:flex-row mt-4">
                                    <span className=" bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm mt-4">App Design and Development</span>
                                </div>
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <Image
                                    src="/images/Portfolio/NewsConnectImg.png"
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
                                    src="/images/Portfolio/playTravelImg.png"
                                    alt="Image"
                                    className="w-full object-contain"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">Play Travel</h4>
                                <p className="text-sm sm:text-lg mt-5">Play Travel is a web app for people who love to travel without being worried about making payments upfront. Through this app travelling is made accessible to more Australians, by offering them flexible payment plans, and has given globetrotters rejoice. Suddenly, travel doesn’t have to mean making scary upfront payments. Instead, you can now choose one of our interest-free instalment options for holidays. The QuaidTech team, whilst working along with the team in Australia has made rewarding contributions to the success and launch of this project.</p>
                                <div className="flex mt-4">
                                    <span className=" bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm mt-4">Website Design and Development</span>
                                </div>
                                <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                    View Website
                                </button>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <h4 className="text-xl sm:text-3xl font-semibold">DAEP</h4>
                                <p className="text-sm sm:text-lg mt-5">DAEP (Dubai Aviation Engineering Projects) is a leading engineering organization responsible for the design, master planning, infrastructure development and construction of Dubai’s dynamic aviation sector. Under the leadership of Mr. Jonathan Ali Khan, team QuaidTech uplifted the design of DAEP. In addition to design (UX/UI) services, our team did a photography as well as a video promo for the DAEP successfully.</p>
                                <div className="flex flex-col sm:flex-row mt-4">
                                    <span className=" bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm sm:mr-6 mb-4 sm:mb-0 mt-4">Website Design and Development</span>
                                    <span className="bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm mt-4">Year 2018 - 2019</span>
                                </div>
                                <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                    View Website
                                </button>
                            </div>
                            <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                <Image
                                    src="/images/Portfolio/DAEPImg.png"
                                    alt="Image"
                                    className="w-full object-contain"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-center mt-10">
                            <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                Load More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24">
                <div className="w-full px-4 py-12 bg-light-primary-color">
                    <div className="container">
                        <div className="w-full">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Portfolio