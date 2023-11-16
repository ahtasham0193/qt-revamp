import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthorsData, fetchTrendBlogData } from "@/store/slices/global";
import img from "../../../../public/images/teamImages/zainab.png"
import { useRouter } from "next/router";

const Author = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    let  {author}  = router.query;
    const authData = useSelector((state) => state.globalItem?.authorData[0] || []);
    const authorsPosts = useSelector((state) => state.globalItem?.authorData);
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(1);


    useEffect(() => {
        dispatch(fetchAuthorsData(author))
    }, [dispatch, author]);


    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
        setOffset(offset + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setOffset(offset - 1);
        }
    };
    return (
        <>
            <Head>
                <title>Our Blog - Quaid Technologies</title>
                <meta
                    name="description"
                    content="Browse our blog posts &amp; get valuable insights! Stay up to date with the latest company news, other business processes, and technology trends!" />

            </Head>

            <Layout>
                <section className="w-full">
                    <div className="container">
                        <div className="w-full max-w-[1000px] m-auto">
                            <h1 className="hero-heading text-4xl sm:text-7xl leading-normal mt-2 sm:mt-16 text-center">
                                {authData.name} Blogs
                            </h1>
                        </div>
                     
                            <div className="w-full flex justify-between items-center rounded-lg border-2 border-light-gray-color mt-6 sm:mt-16 sm:p-12 p-4">
                                <div className="w-[35%] p-4 rounded-lg border-2 border-light-gray-color box-shadow-md">
                                    <div className="rounded-full overflow-hidden w-52 h-52 m-auto">
                                        <Image
                                            src={authData.team_image_url}
                                            className="w-auto h-full object-cover"
                                            width="300"
                                            height="300"
                                            alt="Author Image"
                                        />
                                    </div>
                                    <div className="ml-4 mt-5">
                                        <h3 className=" text-2xl font-semibold text-center">{authData.name}</h3>
                                        <p className="text-lg text-center">{authData.designation}</p>
                                    </div>
                                </div>
                               
                                <div class="w-3/5">
                             
                                    <div class="w-full p-4">
                                    <Link href={`blog/${authData.slug}`}>
                                        <Image
                                            src={authData.image_url}
                                            className="w-full max-w-[100%] m-auto"
                                            width="300"
                                            height="300"
                                            alt={authData.image_caption}
                                        />
                                        </Link>
                                    </div>
                                    <div class="w-full p-4">
                                    <Link href={`blog/${authData.slug}`}>
                                        <h2 className="mt-4 font-bold text-4xl hover:text-primary-color">
                                            {
                                                authData.title
                                            }
                                        </h2>
                                        </Link>
                                        <p className="mt-6 font-semibold text-lg">
                                            <span>{authData.name}</span> | <span>{authData.publish_date}</span>

                                        </p>
                                    </div>
                                  
                                </div>
                            
                            </div>
                        
                    </div>
                </section>

                <section className="w-full px-4 py-6 sm:p-12">
                    <div className="container">
                        {/* <h2 className="text-2xl sm:text-5xl font-semibold text-center">
                            All Posts
                        </h2> */}

                        <div class="grid grid-cols-1 md:grid-cols-3  gap-8 mt-16">
                            {authorsPosts && authorsPosts?.map((item, index) => {
                                return (
                                 
                                        <div class="w-full" key={index}>
                                            <div className="w-full h-[240px] overflow-hidden">
                                            <Link href={`blog/${item.slug}`}>
                                                <Image
                                                    src={item.image_url}
                                                    className="w-full max-w-[100%] h-full object-cover m-auto"
                                                    width="300"
                                                    height="300"
                                                    alt={item.image_caption}
                                                />
                                                </Link>
                                            </div>
                                            <div className="w-full py-5">
                                            <Link href={`blog/${item.slug}`}>
                                                <h3 className="font-bold text-xl hover:text-primary-color">
                                                    {item.title}
                                                </h3>
                                                </Link>
                                                <p className="mt-4" dangerouslySetInnerHTML={{ __html: item.brief_content }} />
                                                <p className="mt-4">
                                                <Link href={`blog/${item.slug}`}><span className="hover:text-primary-color">{item.name}</span> </Link> | <span>{item.publish_date}</span>
                                                </p>
                                            </div>
                                        </div>
                                    
                                );
                            })}
                        </div>
                        <div className="flex justify-end mt-6">
                            {currentPage > 1 && (
                                <button onClick={goToPreviousPage} className=" bg-gray-500 hover:bg-primary-hover text-white font-bold py-2 px-6 rounded mr-5">Previous</button>
                            )}
                            {!authorsPosts.is_last && (
                                <button
                                    onClick={goToNextPage}
                                    className="bg-primary-color hover-bg-secondary-hover text-white font-bold py-2 px-6 rounded"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                <CallToAction />
            </Layout>
        </>
    );
};

export default Author;
