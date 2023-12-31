import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogsData, fetchTrendBlogData, hideButtonCondition } from "@/store/slices/global";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogListing = useSelector((state) => state.globalItem?.blogsData);
  const trendBlog = useSelector((state) => state.globalItem?.trendingBlog);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(1); 

  useEffect(() => {
    dispatch(fetchBlogsData(offset));
    dispatch(fetchTrendBlogData());
  }, [dispatch, offset]);


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
          content="Browse our blog posts &amp; get valuable insights! Stay up to date with the latest company news, other business processes, and technology trends!"/>
        
      </Head>
   
    <Layout>
      <section className="w-full">
        <div className="container">
          <div className="w-full max-w-[1000px] m-auto">
            <h1 className="hero-heading text-4xl sm:text-7xl leading-normal mt-2 sm:mt-16 text-center">
              Read our latest blogs
            </h1>
            <p className="text-center mt-4 sm:mt-8">
            Catch up on all you need to know about the industry, and keep yourself updated all at once!
            </p>
          </div>
         
          <div className="w-full rounded-lg border-2 border-light-gray-color mt-6 sm:mt-16 sm:p-12 p-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-1/2 p-4">
                <h3 className="font-semibold text-2xl">Trending Post</h3>
                <Link href={`blog/${trendBlog.slug}`}>
                <h2 className="mt-4 font-bold text-4xl hover:text-primary-color">
                  {
                    trendBlog.title
                  }
                </h2>
                </Link>
                <p className="mt-4" dangerouslySetInnerHTML={{ __html: trendBlog.brief_content }} />
                <p className="mt-6 font-semibold text-lg">
                <Link href={`blog/author/${trendBlog.author_slug}`}> <span className="hover:text-primary-color">{trendBlog.name}</span>  </Link> | <span>{trendBlog.publish_date}</span> | <span>{trendBlog.readingtime} min read</span>
                  
                </p>
              </div>
          
              <div class="w-full md:w-1/2 p-4">
              <Link href={`blog/${trendBlog.slug}`}>
                <Image
                  src={trendBlog.image_url}
                  className="w-full max-w-[100%] m-auto"
                  width="300"
                  height="300"
                  alt={trendBlog.publish_date}
                />
                 </Link>
              </div>
             
            </div>
          </div>
        
        </div>
      </section>

      <section className="w-full px-4 py-6 sm:p-12">
        <div className="container">
          <h2 className="text-2xl sm:text-5xl font-semibold text-center">
            All Posts
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3  gap-8 mt-16">
            {blogListing?.blogs && blogListing?.blogs?.map((item, index) => {
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
                    <Link href={`blog/author/${item.author_slug}`}> <span className="hover:text-primary-color">{item.name}</span>  </Link> | <span>{item.publish_date}</span>
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
           {!blogListing.is_last && (
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

export default Blogs;
