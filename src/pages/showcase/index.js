import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import { hidePortfolioAlert, postPortfolioForm } from "@/store/slices/global"
import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"


const Portfolio = () => {
    const alertStatus = useSelector((state) => state.globalItem?.portflioAlert);
    const [showPopup, setShowPopup] = useState(false);
    const [submitted, setSubmitted] = useState(alertStatus);
    const dispatch = useDispatch();
    const initialFormData = {
        name: '',
        email: '',
        message: '',
      };
    const [formData, setFormData] = useState({
        ...initialFormData 
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
          } else if (formData.name.length > 25) {
            errors.name = 'Name should not be greater than 25 characters';
            isValid = false;
          } else if (/\d/.test(formData.name)) {
            errors.name = 'Name should not contain numbers';
            isValid = false;
          }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
            isValid = false;
        }

        setFormErrors(errors);

        return isValid;
    };

    useEffect(() => {
        setSubmitted(alertStatus)
        if (submitted) {
          const timer = setTimeout(() => {
           dispatch(hidePortfolioAlert())
          }, 5000);
    
          return () => clearTimeout(timer);
        }
      }, [submitted , alertStatus]);

    const handleSubmit = () => {
        if (validateForm()) {
            dispatch(postPortfolioForm(formData))
            setFormData({ ...initialFormData });
            setShowPopup(false);
        }
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
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="mt-6 bg-light-gray-color h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                    />
                                                    {formErrors.name && (
                                                        <p className="text-red-500 ml-[14px] mt-2">{formErrors.name}</p>
                                                    )}

                                                    <input
                                                        type="mail"
                                                        placeholder="Email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="mt-6 bg-light-gray-color h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                    />
                                                    {formErrors.email && (
                                                        <p className="text-red-500 ml-[14px] mt-2">{formErrors.email}</p>
                                                    )}

                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        placeholder="Message"
                                                        id=""
                                                        cols="30"
                                                        rows="10"
                                                        className="p-3.5 mt-6 bg-light-gray-color h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                    />
                                                    {formErrors.message && (
                                                        <p className="text-red-500 ml-[14px] mt-2">{formErrors.message}</p>
                                                    )}
                                                    <div className="flex justify-end mt-5">
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
                                        {submitted && (
                                                        <div className="bg-green-500 text-white py-2 px-4 rounded-lg fixed bottom-16 left-9 transform translate-x-2 translate-y-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-6 w-6 inline-block mr-2"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M5 13l4 4L19 7"
                                                                />
                                                            </svg>
                                                            Email sent successfully
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
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">App Design and Development</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2020 - 2021</span>
                                    </div>

                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] h-80 py-4">
                                    <Image
                                        src="/images/Portfolio/ballisticCalculatorImg.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] h-80 py-4">
                                    <Image
                                        src="/images/Portfolio/askariBankImg.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">Askari Bank Portal</h4>
                                    <p className="text-sm sm:text-lg mt-5">Askari Bank is a commercial bank and is owned by Fauji Foundation. They needed to automate their recruitment portal and resolve several operational challenges related to it. Our client aimed to eliminate unnecessary delays in hiring, minimise labour and streamline the recruitment process. Within a few months, we automated our client’s job portal to help them reduce recruitment cost and boost operational efficiency.</p>
                                    <div className="flex flex-col sm:flex-row mt-4">
                                        <span className=" bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Website Design</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2020 - 2021</span>
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
                                    <div className="w-full flex flex-col sm:flex-row mt-4">
                                        <span className=" bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">App Design and Development</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2018 - Ongoing</span>
                                    </div>
                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] h-80 py-4">
                                    <Image
                                        src="/images/Portfolio/NewsConnectImg.png"
                                        alt="Image"
                                        className="w-full object-contain h-full"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] h-80 py-4">
                                    <Image
                                        src="/images/Portfolio/playTravelImg.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">Play Travel</h4>
                                    <p className="text-sm sm:text-lg mt-5">Play Travel is a web app for people who love to travel without having to worry about making payments upfront. Travelling is made accessible to more Australians through this app by offering flexible payment plans, and has given globetrotters cause for rejoice! <br /> Now, travel doesn’t have to mean making scary upfront payments. Instead, you can choose one of our interest-free installment options for your holidays. The QuaidTech team, whilst working along with the team in Australia, has made rewarding contributions to the success and launch of this project.</p>
                                    <div className="flex flex-col sm:flex-row mt-4">
                                        <span className=" bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Website Design and Development</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2020 - 2022</span>
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
                                        <span className=" bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Website Design and Development</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2018 - 2019</span>
                                    </div>
                                    <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                        <a href="https://www.daep.gov.ae/" target="_blank">
                                            View Website
                                        </a>
                                    </button>
                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] h-80 py-4">
                                    <Image
                                        src="/images/Portfolio/DAEPImg.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">Thriggle</h4>
                                    <p className="text-sm sm:text-lg mt-5">Thriggle is a community driven happy hour app founded to help the local music community. Quaid Technologies and its team has developed the mobile and web app to find great happy hour deals in the most efficient, organised, user friendly way that will help users to plan a fun evening, while saving time and money.</p>
                                    <div className="flex flex-col sm:flex-row mt-4">
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">App Design and Development</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2018 - Ongoing</span>
                                    </div>
                                    <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                        <a href="https://thriggle.com/" target="_blank">
                                            View Website
                                        </a>
                                    </button>
                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] h-80 py-4">
                                    <Image
                                        src="/images/Portfolio/thriggle-mobile.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] h-80 py-4">
                                    <Image
                                        src="/images/Portfolio/mt2020-mobile.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">MT2020</h4>
                                    <p className="text-sm sm:text-lg mt-5">MT2020 allows physicians/ doctors to add cases using iOS and Android mobile apps, as well as using web portals. They can use apps to contact other physicians. Using maps they can browse the regions and can see hospital's ratings and list of doctors working in particular hospitals. The goal of MT2020 is to provide easy access to doctors to add case data.</p>
                                    <div className="flex flex-col sm:flex-row mt-4">
                                        <span className=" bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">App Design</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2019 - 2020</span>
                                    </div>

                                </div>

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">USGCO</h4>
                                    <p className="text-sm sm:text-lg mt-5">The US Department of States aims to provide annual Green Card Program for people from low-immigration nations the opportunity to become permanent residents of the United States. Applying for participation is quite easy and can be done online on the United States Green Card Office website (USGCO). QuaidTech's offshore development team has been working with USGCO for more than half a decade and still continue to provide services.</p>
                                    <div className="flex flex-col sm:flex-row mt-4">
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Website Design and Development</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2016 - Ongoing</span>
                                    </div>
                                    <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                        <a href="https://www.usgreencardoffice.com/" target="_blank">
                                            View Website
                                        </a>
                                    </button>
                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] h-80 py-4">
                                    <Image
                                        src="/images/Portfolio/USGCO.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] h-80 py-4">
                                    <Image
                                        src="/images/Portfolio/mile.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">MILE</h4>
                                    <p className="text-sm sm:text-lg mt-5">MILE is focused on building leadership and entrepreneurial excellence in the Arab and Muslim world. The non-profit organisation is building local intellectual capital and leveraging a business model that ensures sustainability and relevant development opportunities to our present and future business leaders. We worked as MILE's overseas IT team for more than five years till they shifted whole operations in-house.</p>
                                    <div className="flex flex-col sm:flex-row mt-4">
                                        <span className=" bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Website Design and Development</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2013 - 2018</span>
                                    </div>
                                    <button className="mt-5 bg-primary-color hover:bg-primary-color text-white font-light py-2 px-4 rounded-lg">
                                        <a href="https://mile.org/" target="_blank">
                                            View Website
                                        </a>
                                    </button>
                                </div>

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">Punjab Tourism</h4>
                                    <p className="text-sm sm:text-lg mt-5">Punjab Tourism was a pioneering project initiated and ran by the government of Punjab, with significant sponsorship and support from the World Bank. The primary objective of this project was to promote tourism in the state of Punjab by harnessing the power of technology. One of the key components of this initiative was the development of a comprehensive tourism website which was designed to cover a wide range of information and services related to tourism in Punjab. The "Punjab Tourism" website was a dynamic, user-friendly platform that served as a one-stop destination for both tourists and travelers interested in exploring the diverse attractions that Punjab has to offer!</p>
                                    <div className="flex flex-col sm:flex-row mt-4">
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Website Design and Development</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2022 - Ongoing</span>
                                    </div>

                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4 h-80">
                                    <Image
                                        src="/images/Portfolio/punjab-tourism.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4 h-80">
                                    <Image
                                        src="/images/Portfolio/depa.png"
                                        alt="Image"
                                        className="w-full h-full object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="md:col-span-1 px-5 sm:px-[74px] py-4">
                                    <h4 className="text-xl sm:text-3xl font-semibold">DEPA App Store</h4>
                                    <p className="text-sm sm:text-lg mt-5">DEPA App Store is a dynamic form solution built on the Form.io platform. It empowers administrators to create dynamic applications and generate their respective forms using the Form.io form builder. In addition, we have developed a custom solution to manage the hierarchy between child and parent applications, as well as establish a structured workflow for submission data management. Form.io, a powerful form-building platform, serves as the foundation of our solution. This enables seamless creation and customization of forms, making it easier than ever to tailor applications to specific needs. Our custom hierarchy management system ensures a clear and organized structure for applications, allowing for efficient management and navigation. Furthermore, our workflow hierarchy for submission data provides a structured approach to handle and process data, ensuring that information flows smoothly within the system. Together, these components create a comprehensive and adaptable solution for dynamic application and form management.</p>
                                    <div className="flex flex-col sm:flex-row mt-4">
                                        <span className=" bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Website Design and Development</span>
                                        <span className="bg-light-primary-color text-black w-fit h-auto px-5 py-3 rounded-full text-sm sm:mr-6 mb-4 sm:mb-0">Year 2022 - Ongoing</span>
                                    </div>

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