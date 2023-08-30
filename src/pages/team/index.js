import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'

const Team = ({ founders, management, team, solutionArchitects, uiuxExpert, seo, qaAutomation, adminTeam }) => {
    return (
        <>
            <Layout>
                <section>
                    <div className="w-full">
                        <div className="container">
                            <div className="w-full p-4">
                                <h1 className="hero-heading text-4xl text-center sm:text-7xl leading-normal mt-2 sm:mt-12">Meet our team</h1>
                                <p className=' max-w-[700px] m-auto text-sm sm:text-lg text-center mt-5'>Our team at Quaid Technologies is a tightly-knit group of IT professionals with a wealth of experience. We're united by our passion for innovation and a commitment to delivering top-notch solutions. With diverse skills and expertise, we collaborate seamlessly to exceed client expectations.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="w-full mt-7">
                        <div className="container">
                            <div className="w-full p-4 mt-5">
                                <h2 className=' text-xl sm:text-3xl font-semibold text-center'>Founders & Partners</h2>
                                <div className=" max-w-[800px] m-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
                                        {
                                            founders?.map((data, index) => {
                                                return <div className="mt-5" key={index} >
                                                    <div className="w-full h-[120px] sm:h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width={500}
                                                            height={300} className=' w-full h-full object-contain' />
                                                    </div>
                                                    <div className="w-full h-auto">
                                                    <h2 className="mt-4 font-bold text-lg text-center">{data?.name}</h2>
                                                    <p className="text-gray-600 text-center">{data?.title}</p>
                                                    </div>
                                                 
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>

                            </div>
                            <div className="w-full p-4 mt-5">
                                <h2 className=' text-xl sm:text-3xl font-semibold text-center'>Management</h2>
                                <div className=" max-w-[800px] m-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-4
                                     gap-4 mt-7">
                                        {
                                            management?.map((data, index) => {
                                                return <div className="mt-5" key={index}>
                                                    <div className="w-full h-[120px] sm:h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width={500}
                                                            height={300} className=' w-full h-full object-contain' />
                                                    </div>
                                                    <div className="w-full h-auto">
                                                    <h2 className="mt-4 font-bold text-lg text-center">{data?.name}</h2>
                                                    <p className="text-gray-600 text-center">{data?.title}</p>
                                                    </div>
                                                 
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>

                            </div>
                            <div className="w-full p-4 mt-5">
                                <h2 className=' text-xl sm:text-3xl font-semibold text-center'>Team</h2>
                                <div className=" max-w-[800px] m-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-4
                                     gap-4 mt-7">
                                        {
                                            team?.map((data, index) => {
                                                return <div className="mt-5" key={index}>
                                                    <div className="w-full h-[120px] sm:h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width={500}
                                                            height={300} className=' w-full h-full object-contain' />
                                                    </div>
                                                    <div className="w-full h-auto">
                                                    <h2 className="mt-4 font-bold text-lg text-center">{data?.name}</h2>
                                                    <p className="text-gray-600 text-center">{data?.title}</p>
                                                    </div>
                                                 
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>

                            </div>
                            <div className="w-full p-4 mt-5">
                                <h2 className=' text-xl sm:text-3xl font-semibold text-center'>Solution Architects</h2>
                                <div className=" max-w-[800px] m-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-4
                                     gap-4 mt-7">
                                        {
                                            solutionArchitects?.map((data, index) => {
                                                return <div className="mt-5" key={index}>
                                                    <div className="w-full h-[120px] sm:h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width={500}
                                                            height={300} className=' w-full h-full object-contain' />
                                                    </div>
                                                    <div className="w-full h-auto">
                                                    <h2 className="mt-4 font-bold text-lg text-center">{data?.name}</h2>
                                                    <p className="text-gray-600 text-center">{data?.title}</p>
                                                    </div>
                                                 
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>

                            </div>
                            <div className="w-full p-4 mt-5">
                                <h2 className=' text-xl sm:text-3xl font-semibold text-center'>UI/UX Experts</h2>
                                <div className=" max-w-[800px] m-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-4
                                     gap-4 mt-7">
                                        {
                                            uiuxExpert?.map((data, index) => {
                                                return <div className="mt-5" key={index}>
                                                    <div className="w-full h-[120px] sm:h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width={500}
                                                            height={300} className=' w-full h-full object-contain' />
                                                    </div>
                                                    <div className="w-full h-auto">
                                                    <h2 className="mt-4 font-bold text-lg text-center">{data?.name}</h2>
                                                    <p className="text-gray-600 text-center">{data?.title}</p>
                                                    </div>
                                                 
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>

                            </div>
                            <div className="w-full p-4 mt-5">
                                <h2 className=' text-xl sm:text-3xl font-semibold text-center'>SEO & SEM</h2>
                                <div className=" max-w-[800px] m-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-4
                                     gap-4 mt-7">
                                        {
                                            seo?.map((data, index) => {
                                                return <div className="mt-5" key={index}>
                                                    <div className="w-full h-[120px] sm:h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width={500}
                                                            height={300} className=' w-full h-full object-contain' />
                                                    </div>
                                                    <div className="w-full h-auto">
                                                    <h2 className="mt-4 font-bold text-lg text-center">{data?.name}</h2>
                                                    <p className="text-gray-600 text-center">{data?.title}</p>
                                                    </div>
                                                 
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>

                            </div>
                            <div className="w-full p-4 mt-5">
                                <h2 className=' text-xl sm:text-3xl font-semibold text-center'>QA Automation</h2>
                                <div className=" max-w-[800px] m-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-4
                                     gap-4 mt-7">
                                        {
                                            qaAutomation?.map((data, index) => {
                                                return <div className="mt-5" key={index}>
                                                    <div className="w-full h-[120px] sm:h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width={500}
                                                            height={300} className=' w-full h-full object-contain' />
                                                    </div>
                                                    <div className="w-full h-auto">
                                                    <h2 className="mt-4 font-bold text-lg text-center">{data?.name}</h2>
                                                    <p className="text-gray-600 text-center">{data?.title}</p>
                                                    </div>
                                                 
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>

                            </div>
                            <div className="w-full p-4 mt-5">
                                <h2 className=' text-xl sm:text-3xl font-semibold text-center'>Admin Team</h2>
                                <div className=" max-w-[800px] m-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-4
                                     gap-4 mt-7">
                                        {
                                            adminTeam?.map((data, index) => {
                                                return <div className="mt-5" key={index}>
                                                    <div className="w-full h-[120px] sm:h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width={500}
                                                            height={300} className=' w-full h-full object-contain' />
                                                    </div>
                                                    <div className="w-full h-auto">
                                                    <h2 className="mt-4 font-bold text-lg text-center">{data?.name}</h2>
                                                    <p className="text-gray-600 text-center">{data?.title}</p>
                                                    </div>
                                                 
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </section>
            </Layout>
        </>

    )
}

export default Team



export async function getServerSideProps(context) {
    // Fetch data from an API, database or just hard code it.
    // The data should come as props to the Services component.

    const founders = [
        {
            image: "/images/teamImages/imtiaz.png",
            name: "Imtiaz Jafri",
            title: "Chief Executive Officer(Partner)",
        },
        {
            image: "/images/teamImages/Atta.png",
            name: "Atta ur Rehman",
            title: "Chief Executive Officer(Partner)",
        },
        {
            image: "/images/teamImages/walter.png",
            name: "Walter Hayes",
            title: "Chief Executive Officer(Partner)",
        },
    ];

    const management = [
        {
            image: "/images/teamImages/fatima.png",
            name: "Fatima Chughtai",
            title: "Head HR",
        },
        {
            image: "/images/teamImages/Dr Naeem.png",
            name: "Dr Naeem Janjua",
            title: "DO Australia",
        },
        {
            image: "/images/teamImages/abbas.png",
            name: "Muhammad Abbas",
            title: "Project Manager / SE",
        },
        {
            image: "/images/teamImages/rabbiya.png",
            name: "Rabbiya Malik",
            title: "Assistant HR / SE",
        },
    ];

    const team = [
        {
            image: "/images/teamImages/ansar.png",
            name: "Muhammad Ansaar",
            title: "Product Owner ",
        },
        {
            image: "/images/teamImages/fida.png",
            name: "Fida Ur Rehman",
            title: "Product Owner",
        },
        {
            image: "/images/teamImages/rameen.png",
            name: "Rameen Mubarik",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/umer.png",
            name: "Muhammad Umer",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/tabish.png",
            name: "Tabish Irfan",
            title: "Front End Developer",
        },
        {
            image: "/images/teamImages/ahtasham.png",
            name: "Ahtasham Arshad",
            title: "Front End Developer",
        },
        {
            image: "/images/teamImages/fahad.png",
            name: "Fahad Ul Abideen",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/anas.png",
            name: "Anas Abdullah",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/mudassar.png",
            name: "Mudassar Muneer",
            title: "DevOps Engineer",
        },
        {
            image: "/images/teamImages/mohid.png",
            name: "Muhammad Mohid Dastgeer",
            title: "Angular Developer",
        },
        {
            image: "/images/teamImages/hassam.png",
            name: "Hassam ul Haq",
            title: "DevOps Engineer.",
        },
        {
            image: "/images/teamImages/sheryar.png",
            name: "Sheryar Qazi",
            title: "Business Development Manager",
        },
        {
            image: "/images/teamImages/imran.png",
            name: "Imran Noor",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/uzair.png",
            name: "Uzair Ali",
            title: "Backend Developer",
        },
        {
            image: "/images/teamImages/shahid.png",
            name: "Shahid Abbas",
            title: "Node JS Developer",
        },
        {
            image: "/images/teamImages/aezaz.png",
            name: "Aezaz Ali",
            title: "Software Engineer",
        },
    ];

    const solutionArchitects = [
        {
            image: "/images/teamImages/qasim.png",
            name: "Muhammad Qasim",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/muneeb.png",
            name: "Muneeb Ur Rehman",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/hammas.png",
            name: "Hammas Ali",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/M_umar.png",
            name: "Muhammad Umar",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/muneem.png",
            name: "Munem Habib",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/faisal.png",
            name: "Faisal Raza",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/adnan.png",
            name: "Muhammad Adnan",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/mudassarHusan.png",
            name: "Mudasser Hassan",
            title: "Software Engineer",
        },
        {
            image: "/images/teamImages/vajeeha.webp",
            name: "Vajeeha",
            title: "Software Engineer",
        },
    ]

    const uiuxExpert = [
        {
            image: "/images/teamImages/usman.png",
            name: "Usman Hussain",
            title: "UI/UX Designer",
        },
        {
            image: "/images/teamImages/zahid.png",
            name: "Zaid Hayat",
            title: "UI/UX Designer",
        },
        {
            image: "/images/teamImages/wajahat.webp",
            name: "Wajahat",
            title: "UI/UX Designer",
        },
        {
            image: "/images/teamImages/khurram.png",
            name: "Muhammad Khurram",
            title: "Concept Designer",
        },
        {
            image: "/images/teamImages/raffay.png",
            name: "Rafay Khurshid",
            title: "UI/UX Designer",
        },
        {
            image: "/images/teamImages/zinnira.png",
            name: "Zinnira Munir",
            title: "Concept Designer",
        },
    ];

    const seo = [
        {
            image: "/images/teamImages/amir.png",
            name: "Aamir Mirza",
            title: "SEO & Digital Marketing Manager",
        },
        {
            image: "/images/teamImages/waqas.png",
            name: "Sardar Waqas",
            title: "Digital Marketing Strategist",
        },
        {
            image: "/images/teamImages/zainab.png",
            name: "Zainab Iqbal",
            title: "Content Writer",
        },
        {
            image: "/images/teamImages/irsa.png",
            name: "Irsa Shahid",
            title: "Content Writer",
        },
        {
            image: "/images/teamImages/hamid.png",
            name: "Hamid Farooq",
            title: "Content Writer",
        },
        {
            image: "/images/teamImages/sabahat.png",
            name: "Sabahat Tanveer",
            title: "SEO Expert & Strategist",
        },
        {
            image: "/images/teamImages/zeeshan.png",
            name: "Zeeshan Awan",
            title: "Digital Marketing Strategist",
        },
    ];

    const qaAutomation = [
        {
            image: "/images/teamImages/faiza.png",
            name: "Faiza Siddiqui",
            title: "Quality Assurance/QC",
        },
        {
            image: "/images/teamImages/saqib.png",
            name: "Saqib Hussain",
            title: "Quality Assurance/QC",
        },
        {
            image: "/images/teamImages/saad.png",
            name: "Muhammad Saad",
            title: "Automation SQA Engineer.",
        },
        {
            image: "/images/teamImages/waheed.png",
            name: "Waheed Iqbal",
            title: "SQA Engineer",
        }
    ];

    const adminTeam = [
        {
            image: "/images/teamImages/usama.png",
            name: "Muhammad Usama Khan",
            title: "Admin Officer",
        },
        {
            image: "/images/teamImages/ibrar.png",
            name: "Malik Ibrar Anjum",
            title: "Head Accounts",
        },
        {
            image: "/images/teamImages/firdous.webp",
            name: "Firdous Jabeen",
            title: "Account Manager",
        },
        {
            image: "/images/teamImages/awais.webp",
            name: "Muahmmad Awais",
            title: "Advocate / Attorney",
        }
    ];

    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
        props: { founders, management, team, solutionArchitects, uiuxExpert, seo, qaAutomation, adminTeam },
    }
}