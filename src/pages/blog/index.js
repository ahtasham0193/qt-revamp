import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogsData, fetchTrendBlogData } from "@/store/slices/global";

const Blogs = ({ blogs }) => {
  const dispatch = useDispatch();
  const blogListing = useSelector((state) => state.globalItem?.blogsData);
  const trendBlog = useSelector((state) => state.globalItem?.trendingBlog);
  useEffect(() => {
    dispatch(fetchBlogsData())
    dispatch(fetchTrendBlogData())
  },[dispatch])

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </p>
          </div>
          <div className="w-full rounded-lg border-2 border-light-gray-color mt-6 sm:mt-16 sm:p-12 p-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-1/2 p-4">
                <h3 className="font-semibold text-2xl">Trending Post</h3>
                <h2 className="mt-4 font-bold text-4xl">
                  {
                    trendBlog.title
                  }
                </h2>
                <p className="mt-4" dangerouslySetInnerHTML={{ __html: trendBlog.brief_content }} />
                <p className="mt-6 font-semibold text-lg">
                  <span>{trendBlog.name}</span> | <span>{trendBlog.publish_date}</span>|
                  <span>7 min read</span>
                </p>
              </div>
              <div class="w-full md:w-1/2 p-4">
                <Image
                  src={trendBlog.image_url}
                  className="w-full max-w-[100%] m-auto"
                  width="300"
                  height="300"
                  alt={trendBlog.publish_date}
                />
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
            {blogListing?.map((item, index) => {
              return (
            <Link href={`blog/${item.slug}`}>
            <div class="w-full" key={index}>
                <div className="w-full h-[240px] overflow-hidden">
                <Image
                    src={item.image_url}
                    className="w-full max-w-[100%] h-full object-cover m-auto"
                    width="300"
                    height="300"
                    alt={item.image_caption}
                  />
                </div>
                <div className="w-full py-5">
                    <h3 className="font-bold text-xl">
                        {item.title}
                    </h3>
                    <p className="mt-4" dangerouslySetInnerHTML={{ __html: item.brief_content }} />
                    <p className="mt-4">
                        <span>{item.name}</span> |
                        <span>{item.publish_date}</span>
                    </p>
                </div>  
                </div>
            </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
    </>
  );
};

export default Blogs;

// export async function getServerSideProps(context) {
//   const blogs = [
//     {
//       image: "/images/blog2.png",
//       title: "QuaidTech Team celebrated 74th Independence Day of Pakistan",
//       text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
//       author: "Quaid Tech",
//       date: "August 14, 2020",
//       slug: "10-tips-to-become-pro-developer"
//     },
//     {
//       image: "/images/blog1.png",
//       title: "Managing Rails application secrets with encrypted credentials",
//       text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
//       author: "Tabish Irfan",
//       date: "August 14, 2020",
//       slug: "10-tips-to-become-pro-developer"
//     },
//     {
//       image: "/images/service1.png",
//       title: "Account-based marketing: Data-driven selection for ABM success",
//       text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
//       author: "Quaid Tech",
//       date: "August 8, 2022",
//       slug: "10-tips-to-become-pro-developer"
//     },
//     {
//       image: "/images/blog2.png",
//       title: "QuaidTech Team celebrated 74th Independence Day of Pakistan",
//       text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
//       author: "Quaid Tech",
//       date: "August 14, 2020",
//       slug: "10-tips-to-become-pro-developer"
//     },
//     {
//       image: "/images/blog1.png",
//       title: "Managing Rails application secrets with encrypted credentials",
//       text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
//       author: "Tabish Irfan",
//       date: "August 14, 2020",
//       slug: "10-tips-to-become-pro-developer"
//     },
//     {
//       image: "/images/service1.png",
//       title: "Account-based marketing: Data-driven selection for ABM success",
//       text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
//       author: "Quaid Tech",
//       date: "August 8, 2022",
//       slug: "10-tips-to-become-pro-developer"
//     }
//   ];
//   return {
//     props: { blogs },
//   };
// }
