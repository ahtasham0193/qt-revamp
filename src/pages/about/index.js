import Layout from "@/components/Layout";
import Image from "next/image";
function HomePage() {
  return (
    <Layout>
      <section>
        <div className="w-full">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/5 p-4">
                <h1 className="hero-heading text-4xl sm:text-7xl leading-normal mt-2 sm:mt-16">
                  Who We Are
                </h1>
                <p className="mt-5 text-lg">
                  M/S Quaid Technologies has been providing Software Development
                  & IT Services since 1998 with the merger of M/S PakCyber Group
                  in 2013. We have automated many industries and moved them from
                  manual procedures to paperless fully Automated Solutions. We
                  Develop Applications in a wide range of categories for service
                  industries and online enterprises. The applications that we
                  have developed are quite unique and easy to use. We help
                  enterprises and businesses in executing their Digital
                  Marketing Strategies. Our clients are enjoying versatile
                  selling experiences and rapid business growth. We Safeguarded
                  and Secured many enterprises, IT Infrastructures and made them
                  solid and strong to face any threat from potential intruders.
                </p>
              </div>
              <div className="w-full md:w-2/5 p-4">
                <Image
                  src="/images/quaid.png"
                  className="w-[70%] block m-auto h-full object-contain"
                  width="200"
                  height="200"
                  alt="Description of the image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-primary-color px-4 py-6 sm:p-12">
          <div className="container">
            <div className="flex justify-around items-center max-w-[800px] m-auto">
              <h2 className="text-white text-2xl sm:text-5xl font-bold ">
                Unity
              </h2>
              <Image
                src="/images/dot.svg"
                className="w-auto block m-auto h-full object-contain"
                width="200"
                height="200"
                alt="Description of the image"
              />
              <h2 className="text-white text-2xl sm:text-5xl  font-bold">
                Faith
              </h2>
              <Image
                src="/images/dot.svg"
                className="w-auto block m-auto h-full object-contain"
                width="200"
                height="200"
                alt="Description of the image"
              />
              <h2 className="text-white text-2xl sm:text-5xl  font-bold">
                Discipline
              </h2>
            </div>
            <p className="text-white mt-4 sm:mt-10 text-center text-lg">
              With faith, discipline and selfless devotion to duty, there is
              nothing worth while that you cannot achieve.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-light-primary-color px-4 py-6 sm:py-16">
          <div className="container">
            <div className="w-full max-w-[1000px] m-auto">
              <h2 className="text-2xl sm:text-5xl font-semibold text-center">
                Our Mission
              </h2>
              <p className="text-center mt-4 sm:mt-8">
                The mission of Quaid Technologies is to use our experience and
                innovation to help customers run their businesses more
                effectively and seamlessly. Through our talent and concern, we
                strive to exceed client's expectations and help customers
                throughout the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-6 sm:py-16">
          <div className="container">
            <h2 className="text-center text-2xl sm:text-5xl font-semibold ">
            Major areas worked with
            </h2>

            <div className="flex flex-wrap -m-2 mt-14">
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
    <div className="bg-gray-400 h-24">
    <Image
                        src='/images/area1.png'
                        className="w-auto h-[150px]"
                        width="200"
                        height="200"
                        alt="Description of the image"
                      />
    </div> 
                      
  </div>
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
    <div className="bg-gray-400 h-24"></div>  {/* Your content goes here */}
  </div>
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
    <div className="bg-gray-400 h-24"></div>  {/* Your content goes here */}
  </div>
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
    <div className="bg-gray-400 h-24"></div>  {/* Your content goes here */}
  </div>
</div>

          </div>
      </section>
      <h1>About Page</h1>
    </Layout>
  );
}

export default HomePage;
