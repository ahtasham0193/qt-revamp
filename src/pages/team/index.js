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
                                <p className=' max-w-[700px] m-auto text-sm sm:text-lg text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
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
                                                return <div className="mt-5" key={index}>
                                                    <div className="w-full h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width="150"
                                                            height="150" className=' w-full h-full object-contain' />
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
                                                    <div className="w-full h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width="150"
                                                            height="150" className=' w-full h-full object-contain' />
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
                                                    <div className="w-full h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width="150"
                                                            height="150" className=' w-full h-full object-contain' />
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
                                                    <div className="w-full h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width="150"
                                                            height="150" className=' w-full h-full object-contain' />
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
                                                    <div className="w-full h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width="150"
                                                            height="150" className=' w-full h-full object-contain' />
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
                                                    <div className="w-full h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width="150"
                                                            height="150" className=' w-full h-full object-contain' />
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
                                                    <div className="w-full h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width="150"
                                                            height="150" className=' w-full h-full object-contain' />
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
                                                    <div className="w-full h-[150px]">
                                                        <Image src={data?.image} alt="Profile Picture" width="150"
                                                            height="150" className=' w-full h-full object-contain' />
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
            image: "/images/Team/imtiaz.png",
            name: "Imtiaz Jafri",
            title: "Chief Executive Officer(Partner)",
        },
        {
            image: "/images/Team/Atta.png",
            name: "Atta ur Rehman",
            title: "Chief Executive Officer(Partner)",
        },
        {
            image: "/images/Team/walter.png",
            name: "Walter Hayes",
            title: "Chief Executive Officer(Partner)",
        },
    ];

    const management = [
        {
            image: "/images/Team/fatima.png",
            name: "Fatima Chughtai",
            title: "Head HR",
        },
        {
            image: "/images/Team/Dr Naeem.png",
            name: "Dr Naeem Janjua",
            title: "DO Australia",
        },
        {
            image: "/images/Team/abbas.png",
            name: "Muhammad Abbas",
            title: "Project Manager / SE",
        },
        {
            image: "/images/Team/rabbiya.png",
            name: "Rabbiya Malik",
            title: "Assistant HR / SE",
        },
    ];

    const team = [
        {
            image: "/images/Team/ansar.png",
            name: "Muhammad Ansaar",
            title: "Product Owner ",
        },
        {
            image: "/images/Team/fida.png",
            name: "Fida Ur Rehman",
            title: "Product Owner",
        },
        {
            image: "/images/Team/rameen.png",
            name: "Rameen Mubarik",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/umer.png",
            name: "Muhammad Umer",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/tabish.png",
            name: "Tabish Irfan",
            title: "Front End Developer",
        },
        {
            image: "/images/Team/ahtasham.png",
            name: "Ahtasham Arshad",
            title: "Front End Developer",
        },
        {
            image: "/images/Team/fahad.png",
            name: "Fahad Ul Abideen",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/anas.png",
            name: "Anas Abdullah",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/mudassar.png",
            name: "Mudassar Muneer",
            title: "DevOps Engineer",
        },
        {
            image: "/images/Team/mohid.png",
            name: "Muhammad Mohid Dastgeer",
            title: "Angular Developer",
        },
        {
            image: "/images/Team/hassam.png",
            name: "Hassam ul Haq",
            title: "DevOps Engineer.",
        },
        {
            image: "/images/Team/sheryar.png",
            name: "Sheryar Qazi",
            title: "Business Development Manager",
        },
        {
            image: "/images/Team/imran.png",
            name: "Imran Noor",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/uzair.png",
            name: "Uzair Ali",
            title: "Backend Developer",
        },
        {
            image: "/images/Team/shahid.png",
            name: "Shahid Abbas",
            title: "Node JS Developer",
        },
        {
            image: "/images/Team/aezaz.png",
            name: "Aezaz Ali",
            title: "Software Engineer",
        },
    ];

    const solutionArchitects = [
        {
            image: "/images/Team/qasim.png",
            name: "Muhammad Qasim",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/muneeb.png",
            name: "Muneeb Ur Rehman",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/hammas.png",
            name: "Hammas Ali",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/M_umar.png",
            name: "Muhammad Umar",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/muneem.png",
            name: "Munem Habib",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/faisal.png",
            name: "Faisal Raza",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/adnan.png",
            name: "Muhammad Adnan",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/mudassarHusan.png",
            name: "Mudasser Hassan",
            title: "Software Engineer",
        },
        {
            image: "/images/Team/vajeeha.png",
            name: "Vajeeha",
            title: "Software Engineer",
        },
    ]

    const uiuxExpert = [
        {
            image: "/images/Team/usman.png",
            name: "Usman Hussain",
            title: "UI/UX Designer",
        },
        {
            image: "/images/Team/zahid.png",
            name: "Zaid Hayat",
            title: "UI/UX Designer",
        },
        {
            image: "/images/Team/wajahat.png",
            name: "Wajahat",
            title: "UI/UX Designer",
        },
        {
            image: "/images/Team/khurram.png",
            name: "Muhammad Khurram",
            title: "Concept Designer",
        },
        {
            image: "/images/Team/raffay.png",
            name: "Rafay Khurshid",
            title: "UI/UX Designer",
        },
        {
            image: "/images/Team/zinnira.png",
            name: "Zinnira Munir",
            title: "Concept Designer",
        },
    ];

    const seo = [
        {
            image: "/images/Team/amir.png",
            name: "Aamir Mirza",
            title: "SEO & Digital Marketing Manager",
        },
        {
            image: "/images/Team/waqas.png",
            name: "Sardar Waqas",
            title: "Digital Marketing Strategist",
        },
        {
            image: "/images/Team/zainab.png",
            name: "Zainab Iqbal",
            title: "Content Writer",
        },
        {
            image: "/images/Team/irsa.png",
            name: "Irsa Shahid",
            title: "Content Writer",
        },
        {
            image: "/images/Team/hamid.png",
            name: "Hamid Farooq",
            title: "Content Writer",
        },
        {
            image: "/images/Team/sabahat.png",
            name: "Sabahat Tanveer",
            title: "SEO Expert & Strategist",
        },
        {
            image: "/images/Team/zeeshan.png",
            name: "Zeeshan Awan",
            title: "Digital Marketing Strategist",
        },
    ];

    const qaAutomation = [
        {
            image: "/images/Team/faiza.png",
            name: "Faiza Siddiqui",
            title: "Quality Assurance/QC",
        },
        {
            image: "/images/Team/saqib.png",
            name: "Saqib Hussain",
            title: "Quality Assurance/QC",
        },
        {
            image: "/images/Team/saad.png",
            name: "Muhammad Saad",
            title: "Automation SQA Engineer.",
        },
        {
            image: "/images/Team/waheed.png",
            name: "Waheed Iqbal",
            title: "SQA Engineer",
        }
    ];

    const adminTeam = [
        {
            image: "/images/Team/usama.png",
            name: "Muhammad Usama Khan",
            title: "Admin Officer",
        },
        {
            image: "/images/Team/ibrar.png",
            name: "Malik Ibrar Anjum",
            title: "Head Accounts",
        },
        {
            image: "/images/Team/firdous.png",
            name: "Firdous Jabeen",
            title: "Account Manager",
        },
        {
            image: "/images/Team/awais.png",
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