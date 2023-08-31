import ContactUsForm from "@/components/ContactUsForm"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import React from 'react'


const CloudBasedHosting = ({servicesCard}) => {
    return (
        <Layout>
            <section>
                <div className="w-full">
                    <div className="container">
                        <div className="w-full mt-24">
                            <div className="w-full">
                                <div className="mx-auto mb-8 w-full">
                                    <Image
                                        src="/images/Cloud Based hosting/cloudBasedImg.png"
                                        alt="Image"
                                        className="w-full max-w-[600px] m-auto object-contain"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="w-full mt-7">
                                    <h1 className="text-xl sm:text-3xl font-semibold text-center">Cloud based hosting services</h1>
                                    <p className=' max-w-[850px] m-auto text-sm sm:text-lg text-center mt-5'>Focus on your business and avoid all the web hosting hassles. Our managed hosting services guarantee unmatched performance, reliability and choice with support that acts as your extended team. We offer dedicated server hosting & cloud hosting solutions to small, medium and large corporate clients. This way, the load is balanced, security is taken care of and hardware resources are available virtually, so they can be used when needed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24">
            <div className="w-full px-4 py-12 bg-light-primary-color">
                <div className="container">
                    <h2 className="section-heading font-bold text-4xl text-center">
                        Other Services
                    </h2>
                    <p className="text-center max-w-[600px] block m-auto mt-4">
                    Quaid Technologies: Your gateway to exceptional IT solutions.
                    Crafting excellence in every service we deliver.
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
                                        <span className="font-semibold">Learn more</span>
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
        </Layout>
    )
}

export default CloudBasedHosting

export async function getServerSideProps(context) {
    // Fetch data from an API, database or just hard code it.
    // The data should come as props to the Services component.

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
  
    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
      props: { servicesCard },
    }
  }