import Image from 'next/image'
import React from 'react'


const OurClients = () => {
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
        {
            image: "/images/Clients/usgco_logo.png",
        }
       
    ]
    return (
                    <div className="w-full mt-7">
                        <div className="container">
                            <div className="grid grid-cols-2 md:grid-cols-6  gap-4">
                                {
                                    clients?.map((data, index) => {
                                        return   <div className="w-full h-[150px]" key={index}>
                                            <Image src={data?.image} alt="Profile Picture" width="150"
                                                height="150" className=' w-full h-full object-contain grayscale hover:grayscale-0 transition-transform duration-300' />
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                    </div>
    )
}

export default OurClients

