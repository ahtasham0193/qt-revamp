import Accordion from "@/components/Accordian"
import Layout from "@/components/Layout"
import OtherServices from "@/components/OtherServices"
import Image from "next/image"
import React from 'react'


const SoftwareDevelopment = () => {
    return (
        <Layout>
            <section>
                <div className="w-full p-6">
                    <div className="w-full">
                        <div className="thin-container w-full">
                            <Image
                                src="/images/software development/software-developmentImg.png"
                                className="w-full max-w-[600px] m-auto mt-8"
                                width="300"
                                height="300"
                                alt="Illustration of services content"
                            />
                            <h1 className="section-heading text-4xl font-bold text-center mt-8">
                                Software development since 1998
                            </h1>
                            <h2 className="section-heading text-[22px] font-normal text-center mt-4">Get The Tailor-Made Software For Your Company That Fits Like A Glove</h2>
                            <p className="mt-6">
                                Fancy a timely project completion, fewer error rates, and software development expertise? Get bespoke software and manifest all that and much more in a blink of an eye!
                                Gone are the days when you and your brand relied on the manual workforce. This is the digital transformation era, and you must jump on the bandwagon if you haven't already. With our impeccable software development services, the journey is going to be an unforgettable one.
                            </p>

                            <Image
                                src="/images/team.svg"
                                className="w-full max-w-[600px] m-auto mt-12"
                                width="300"
                                height="300"
                                alt="Illustration of services content"
                            />

                            <h1 className="section-heading text-4xl font-bold text-center mt-8">
                                Why wouldn’t you look beyond us?
                            </h1>
                            <p className="mt-6">
                                We have a history of clients who keep coming back to us, newer ones who come on recommendations, and luckier ones who find us by chance. Here is why?
                            </p>
                            <ul className=" list-disc mt-5 pl-4">
                                <li>
                                    We have an exceptional record in software development; our testimonials speak for ourselves.
                                </li>
                                <li>
                                    Aim to know your and your brand's needs and personalize the software accordingly.
                                </li>
                                <li>
                                    Provide quality assurance of software as well as testing.
                                </li>
                                <li>
                                    Call ourselves problem solvers; whether you are a start-up or decades-old healthcare, we are up for the challenge.
                                </li>
                                <li>
                                    Have a 360 degrees approach to provide you with a flawless experience.
                                </li>
                                <li>
                                    Our software ensures seamless, error-free operations.
                                </li>
                            </ul>
                            <p className="mt-6">Let's not wait for any further and make your brand more extraordinary together (CTA)</p>
                            <h3 className=" mt-6 text-[22px] font-normal">What Is Software Development?</h3>
                            <p className="mt-4">Software development is not an ordinary system; instead, it is a complex system and comprises a series of steps requiring expertise. Here is how it is defined:</p>
                            <div className="mt-10 max-w-[600px] mx-auto">
                                <Accordion title="Step No 1: Identification Of Needs">
                                    Content 1 Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Sunt dicta harum quibusdam cumque nesciunt perferendis
                                    earum! Nemo nulla eaque quod deleniti adipisci neque aspernatur?
                                    Eum reiciendis sint quia aspernatur. Pariatur non odit, odio
                                    necessitatibus sint in vero ipsa enim consequatur, eaque officia
                                    ea perferendis autem nesciunt blanditiis explicabo suscipit.
                                </Accordion>
                                <Accordion title="Step No 2: Analysis Of Requirements">Content 2</Accordion>
                                <Accordion title="Step No 3: Design">Content 3</Accordion>
                                <Accordion title="Step No 4: Developing And Implementation">Content 4</Accordion>
                                <Accordion title="Step No 5: Testing">Content 5</Accordion>
                                <Accordion title="Step No 6: Deployment & Maintenance">Content 6</Accordion>
                            </div>
                            <p className="mt-6">
                                "A collection of processes involved in creating software programs" or "A process used by the programmers to build computer programs that meet technical specifications and user requirements of a brand"
                                Adding more to it, the whole cycle consisting of methodologies used to develop the software is known as Software Development Life Cycle (SDLC), an international standard used by software houses globally to develop and optimize the software per the brand's needs.
                                We use the Waterfall model for SDLC. Here are the seven main steps included in it that lead to a particular, tailor-made software:
                            </p>
                            <ul className="list-disc mt-5 pl-4">
                                <li>
                                    Identification of the software that is needed
                                </li>
                                <li>
                                    Specification of the software in detail
                                </li>
                                <li>
                                    Designing the software
                                </li>
                                <li>
                                    Programming
                                </li>
                                <li>
                                    Testing
                                </li>
                                <li>
                                    Maintenance
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24">
                <OtherServices />
            </section>
        </Layout>
    )
}

export default SoftwareDevelopment