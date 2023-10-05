import Image from 'next/image'
import React from 'react'
import ContactUsForm from './ContactUsForm';

const OtherServices = () => {
       
    const servicesCard = [
        {
          image: "/images/service1.png",
          title: "Everything you need to grow your business",
          text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
        },
        {
          image: "/images/service1.png",
          title: "Everything you need to grow your business",
          text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
        },
        {
          image: "/images/service1.png",
          title: "Everything you need to grow your business",
          text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
        },
      ];
    return (
        <section>
            <div className="w-full px-4 py-12 bg-light-primary-color">
                <div className="container">
                    <h2 className="section-heading font-bold text-4xl text-center">
                        Other Services
                    </h2>
                    <p className="text-center max-w-[600px] block m-auto mt-4">
                        Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel. Nulla sed mauris convallis metus.L
                    </p>

                    <div className="flex flex-wrap justify-around p-4">
                        {servicesCard?.map((card) => {
                            return (
                                <div className="card md:mx-0 md:w-1/3 w- overflow-hidden  max-w-sm mx-2 my-4 border border-slate-200 rounded">
                                    <div className="w-full h-fit p-3 bg-white flex items-center justify-center">
                                        <Image
                                            src={card.image}
                                            className="w-auto h-[150px]"
                                            width="200"
                                            height="200"
                                            alt="Description of the image"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h2 className="text-xl font-bold">{card.title}</h2>
                                        <p className="my-5">{card.text}</p>
                                        <span className="font-semibold">Learn more <IoIosArrowDroprightCircle className="inline-block align-middle text-primary-color text-2xl"/></span>
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
    )
}

export default OtherServices
