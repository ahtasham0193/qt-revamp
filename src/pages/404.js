import Layout from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"



function Error404Page()
{
    return(
        <Layout>
            <section>
                <div className="w-full">
                    <div className="container">
                        <div className="w-full mt-8">
                        <Image src="/images/404-Error.png" alt="Profile Picture" width="500"
                         height="300" className='w-auto h-full object-contain m-auto block' />
                             <div className="w-full flex justify-center mt-10">
                                 <Link href="/">
                            <button className="bg-primary-color hover:bg-primary-color text-white font-medium py-2 px-4 rounded-lg">
                                BACK TO HOME
                            </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Error404Page