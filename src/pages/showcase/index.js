import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import { postPortfolioForm } from "@/store/slices/global"
import Head from "next/head"
import Image from "next/image"
import React, { useState } from 'react'
import { useDispatch } from "react-redux"


const Portfolio = () => {
    const [showPopup, setShowPopup] = useState(false);

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = () => {
      console.log("formData", formData)
      dispatch(postPortfolioForm(formData))
    };
    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <Head>
                <title>Our Portfolio - Quaid Technologies</title>
                <meta
                    name="description"
                    content="Our company portfolio reflects our creativity &amp; quality of work. We have tackled many challenges and get succeeded in an efficient manner. Learn More" />

            </Head>

            <Layout>
                <section>
                    <div className="w-full">
                        <div className="container">
                            <div className="w-full mt-24">
                                <div className="w-full mt-7">
                                    <h1 className="hero-heading text-4xl text-center sm:text-7xl leading-normal mt-2 sm:mt-12">Our Portfolio</h1>
                                    <div className="w-full flex justify-center mt-7">
                                        <button
                                            onClick={openPopup}
                                            className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg"
                                        >
                                            Download as PDF
                                        </button>
                                        {showPopup && (
                                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                                <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={closePopup} />
                                                <div className="bg-white p-4 rounded-lg z-10 max-w-2xl w-full py-10">
                                                    <h2 className="section-heading text-4xl font-bold text-center mb-10">Mail Us</h2>
                                                    <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} className="mb-6 bg-light-gray-color  h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                                                    <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} className="mb-6 bg-light-gray-color  h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                                                    <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" id="" cols="30" rows="10" className="p-3.5 mb-6 bg-light-gray-color  h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"></textarea>
                                                    <div className="flex justify-end">
                                                        <button
                                                            onClick={handleSubmit}
                                                            className="bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg"
                                                        >
                                                            Submit
                                                        </button>
                                                        <button
                                                            onClick={closePopup}
                                                            className="ml-2 bg-gray-400 hover:bg-gray-500 text-white font-light py-2 px-4 rounded-lg"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
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
                                        <a href="https://askaribank.com/" target="_blank">
                                            View Website
                                        </a>
                                    </button>
                                </div>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">News Connect</h4>
                                    <p className="text-sm sm:text-lg mt-5">Get the latest news from the US to the UK to Japan, to around the world, including but not limited to India, Pakistan, the Philippines, Sweden, Germany, France, Italy, the UAE, Saudi Arabia and others without the annoying advertisements. We also maintain an easy sharing mechanism with quick access to a further range of settings and options.</p>
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
                                    <p className="text-sm sm:text-lg mt-5">Play Travel is a web app for people who love to travel without having to worry about making payments upfront. Travelling is made accessible to more Australians through this app by offering flexible payment plans, and has given globetrotters cause for rejoice! <br /> Now, travel doesn’t have to mean making scary upfront payments. Instead, you can choose one of our interest-free installment options for your holidays. The QuaidTech team, whilst working along with the team in Australia, has made rewarding contributions to the success and launch of this project.</p>
                                    <div className="flex mt-4">
                                        <span className=" bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm mt-4">Website Design and Development</span>
                                    </div>
                                    <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                        <a href="https://www.playtravel.com.au/" target="_blank">
                                            View Website
                                        </a>
                                    </button>
                                </div>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">DAEP</h4>
                                    <p className="text-sm sm:text-lg mt-5">DAEP (Dubai Aviation Engineering Projects) is a leading engineering organization responsible for the design, master planning, infrastructure development, and construction of Dubai’s dynamic aviation sector. Under the leadership of Mr. Jonathan Ali Khan, the QuaidTech team uplifted the design of DAEP. In addition to these UX/UI based services, our team successfully handled photography and video promo for DAEP.</p>
                                    <div className="flex flex-col sm:flex-row mt-4">
                                        <span className=" bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm sm:mr-6 mb-4 sm:mb-0 mt-4">Website Design and Development</span>
                                        <span className="bg-light-primary-color text-black py-[13px] px-[23px] rounded-full text-sm mt-4">Year 2018 - 2019</span>
                                    </div>
                                    <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                        <a href="https://www.daep.gov.ae/" target="_blank">
                                            View Website
                                        </a>
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
                            {/* <div className="w-full flex justify-center mt-10">
                            <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                Load More
                            </button>
                        </div> */}
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
        </>
    )
}

export default Portfolio