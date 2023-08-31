import Layout from '@/components/Layout'
import OurClients from '@/components/OurClients'
import React from 'react'

const Careers = () => {
    return (
        <>
            <Layout>
                <section>
                    <div className="w-full">
                        <div className="container">
                            <div className="w-full p-4">
                                <h1 className="hero-heading text-4xl text-center sm:text-7xl leading-normal mt-2 sm:mt-12">Our clients</h1>
                                <p className=' max-w-[700px] m-auto text-sm sm:text-lg text-center mt-5'>
                                    Our clients inspire us to push boundaries and achieve greatness together. <br />
                                    Proudly partnering with clients to transform visions into reality.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <OurClients />
                </section>
            </Layout>
        </>
    )
}

export default Careers


