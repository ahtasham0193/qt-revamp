import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import React from 'react'


const CloudBasedHosting = () => {
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
                <OtherServices/>
            </section>
        </Layout>
    )
}

export default CloudBasedHosting