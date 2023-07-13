import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/CallToAction";
import { useEffect } from "react";
const Post = ({ blogs }) => 
{
  const router = useRouter();
  let  {slug}  = router.query;
  
  if (typeof slug === 'string') {
    slug = slug.replace(/-/g, ' ')
  }
  


  return (
    <Layout>
      <section className="w-full px-4 py-10 sm:p-16">
        <div className="container">
          <h1 className="text-center text-2xl sm:text-4xl font-bold max-w-[700px] m-auto capitalize">
            {slug}
          </h1>
          <p className="text-center mt-6 font-semibold text-lg">
            <span>Zainab Iqbal</span> | <span>July 03, 2023</span>{" "}
          </p>
          <div className="w-full max-w-[1100px] rounded-md overflow-hidden m-auto">
            <Image
              src="/images/blog1.png"
              className="w-full  m-auto mt-10"
              width="300"
              height="300"
              alt="description for blogs images"
            />
          </div>

          <div className="w-full max-w-[1000px] m-auto text-justify mt-8">
            <h3 className="text-2xl sm:text-4xl font-bold">
              What Does a Great User Experience Mean?
            </h3>
            <p className="mt-4">
              If you find that your website is not generating as many leads as
              you believe it should, if your website’s bounce rates remain high,
              or if you simply wish to further enhance the satisfaction of your
              users’ interactions on your website, then you’ve come to the right
              place! The following is a list of tips to improve the efficiency,
              usability, and accessibility of user interactions on a website to
              create a richer user experience through changes that are easy to
              implement, but make a world of a difference.
            </p>

            <p className="mt-4">
              If you find that your website is not generating as many leads as
              you believe it should, if your website’s bounce rates remain high,
              or if you simply wish to further enhance the satisfaction of your
              users’ interactions on your website, then you’ve come to the right
              place! The following is a list of tips to improve the efficiency,
              usability, and accessibility of user interactions on a website to
              create a richer user experience through changes that are easy to
              implement, but make a world of a difference.
            </p>

            <p className="mt-4">
              If you find that your website is not generating as many leads as
              you believe it should, if your website’s bounce rates remain high,
              or if you simply wish to further enhance the satisfaction of your
              users’ interactions on your website, then you’ve come to the right
              place! The following is a list of tips to improve the efficiency,
              usability, and accessibility of user interactions on a website to
              create a richer user experience through changes that are easy to
              implement, but make a world of a difference.
            </p>
            <p className="mt-4">
              If you find that your website is not generating as many leads as
              you believe it should, if your website’s bounce rates remain high,
              or if you simply wish to further enhance the satisfaction of your
              users’ interactions on your website, then you’ve come to the right
              place! The following is a list of tips to improve the efficiency,
              usability, and accessibility of user interactions on a website to
              create a richer user experience through changes that are easy to
              implement, but make a world of a difference.
            </p>
            <p className="mt-4">
              If you find that your website is not generating as many leads as
              you believe it should, if your website’s bounce rates remain high,
              or if you simply wish to further enhance the satisfaction of your
              users’ interactions on your website, then you’ve come to the right
              place! The following is a list of tips to improve the efficiency,
              usability, and accessibility of user interactions on a website to
              create a richer user experience through changes that are easy to
              implement, but make a world of a difference.
            </p>
            <p className="mt-4">
              If you find that your website is not generating as many leads as
              you believe it should, if your website’s bounce rates remain high,
              or if you simply wish to further enhance the satisfaction of your
              users’ interactions on your website, then you’ve come to the right
              place! The following is a list of tips to improve the efficiency,
              usability, and accessibility of user interactions on a website to
              create a richer user experience through changes that are easy to
              implement, but make a world of a difference.
            </p>
            <p className="mt-4">
              If you find that your website is not generating as many leads as
              you believe it should, if your website’s bounce rates remain high,
              or if you simply wish to further enhance the satisfaction of your
              users’ interactions on your website, then you’ve come to the right
              place! The following is a list of tips to improve the efficiency,
              usability, and accessibility of user interactions on a website to
              create a richer user experience through changes that are easy to
              implement, but make a world of a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-6 sm:p-16">
        <div className="container">
          <h2 className="text-2xl sm:text-5xl font-semibold text-center ">
            Read more posts
          </h2>
          <div className="w-full mt-4 sm:mt-16">
            <Carousel
              itemsToShowDesktop={3}
              itemsToShowMobile={1}
              margin={30}
              speed={5000}
            >
              {blogs?.map((item, index) => {
                return (
                  <div class="w-full" key={index}>
                    <div className="w-full h-[150px] sm:h-[240px] overflow-hidden">
                      <Image
                        src={item.image}
                        className="w-full max-w-[100%] h-full object-cover m-auto"
                        width="300"
                        height="300"
                        alt="Illustration of services content"
                      />
                    </div>
                    <div className="w-full py-5">
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p className="mt-4">{item.text}</p>
                      <p className="mt-4">
                        <span>{item.author}</span> |<span> {item.date}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>

      <CallToAction/>
    </Layout>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const blogs = [
    {
      image: "/images/blog2.png",
      title: "QuaidTech Team celebrated 74th Independence Day of Pakistan",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
      author: "Quaid Tech",
      date: "August 14, 2020",
    },
    {
      image: "/images/blog1.png",
      title: "Managing Rails application secrets with encrypted credentials",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
      author: "Tabish Irfan",
      date: "August 14, 2020",
    },
    {
      image: "/images/service1.png",
      title: "Account-based marketing: Data-driven selection for ABM success",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
      author: "Quaid Tech",
      date: "August 8, 2022",
    },
    {
      image: "/images/blog2.png",
      title: "QuaidTech Team celebrated 74th Independence Day of Pakistan",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
      author: "Quaid Tech",
      date: "August 14, 2020",
    },
    {
      image: "/images/blog1.png",
      title: "Managing Rails application secrets with encrypted credentials",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
      author: "Tabish Irfan",
      date: "August 14, 2020",
    },
    {
      image: "/images/service1.png",
      title: "Account-based marketing: Data-driven selection for ABM success",
      text: "Lorem ipsum dolor sit amet consectetur. Tempus volutpat tempus faucibus pharetra sem vel.",
      author: "Quaid Tech",
      date: "August 8, 2022",
    },
  ];
  return {
    props: { blogs },
  };
}
