import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'

const Careers = ({ clients }) => {
    return (
        <>
            <Layout>
                <section>
                    <div className="w-full">
                        <div className="container">
                            <div className="w-full p-4">
                                <h1 className="hero-heading text-4xl text-center sm:text-7xl leading-normal mt-2 sm:mt-12">Our clients</h1>
                                <p className=' max-w-[700px] m-auto text-sm sm:text-lg text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full mt-7">
                        <div className="container">
                            <div className="grid grid-cols-2 md:grid-cols-6  gap-4">
                                {
                                    clients?.map((data, index) => {
                                        return   <div className="w-full h-[120px]" key={index}>
                                            <Image src={data?.image} alt="Profile Picture" width="150"
                                                height="150" className=' w-full h-full object-contain' />
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                    </div>

                </section>
            </Layout>
        </>
    )
}

export default Careers



export async function getServerSideProps(context) {
    // Fetch data from an API, database or just hard code it.
    // The data should come as props to the Services component.

    const clients = [
        {
            image: "/images/Clients/MrSaadMehmood.png",
        },
        {
            image: "/images/Clients/Dubai.png",
        },
        {
            image: "/images/Clients/thriggle.png",
        },
        {
            image: "/images/Clients/BRI.png",
        },
        {
            image: "/images/Clients/denhil.png",
        },
        {
            image: "/images/Clients/DUSKI.png",
        },
        {
            image: "/images/Clients/FUSIONADLINK.png",
        },
        {
            image: "/images/Clients/GITS.png",
        },
        {
            image: "/images/Clients/JPMA.png",
        },
        {
            image: "/images/Clients/LIQA.png",
        },
        {
            image: "/images/Clients/LOVE.png",
        },
        {
            image: "/images/Clients/MPPA.png",
        },
        {
            image: "/images/Clients/Mt.png",
        },
        {
            image: "/images/Clients/PEOPLE.png",
        },
        {
            image: "/images/Clients/RESEARCH.png",
        },
        {
            image: "/images/Clients/Hiphank.png",
        },
        {
            image: "/images/Clients/AEO.png",
        },
    ];

    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
        props: { clients },
    }
}