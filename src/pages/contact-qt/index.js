import Layout from "@/components/Layout";
import ContactUsForm from "@/components/ContactUsForm";
import Head from "next/head";
import Image from "next/image";
const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Quaid Technologies</title>
        <meta
          name="description"
          content="Need assistance with any service or solution? Contact us, our team is glad to assist you with their best possible experience." />

      </Head>

      <Layout>
        <section>
          <div className="w-full">
            <div className="container">
              <div className="w-full p-4">
                <h1 className="hero-heading text-4xl text-center sm:text-7xl leading-normal mt-2 sm:mt-12">Get in Touch</h1>
                <p className=' max-w-[700px] m-auto text-sm sm:text-lg text-center mt-5'>We'd love to hear from you! At QuaidTech, we're ready to answer any and all of your questions. Here's how you can reach us</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full my-8 max-w-[1200px] m-auto">
            <div className="w-full flex justify-between items-center my-7">
              <div className="w-full">
                <h1 className="hero-heading text-2xl  sm:text-5xl leading-normal mt-2 ">Say Hello,</h1>
                <p className='text-sm sm:text-lg mt-5'>Our team is glad to assist you.</p>
              </div>
              <div className="w-full h-96 flex justify-end">
                <Image src="/images/contact-main-img.png" alt="Profile Picture" width="500"
                  height="300" className=' w-auto h-full object-contain' />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-4 py-6 sm:py-16 bg-light-primary-color">
          <div className="container">
            <ContactUsForm />
          </div>
        </section>
        <section>
          <div className="w-full my-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.8858573589796!2d73.01461727577649!3d33.60826594104288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9467d7a4bbcf%3A0x70d86433c98bc0d0!2sQuaid%20Technologies%20-%20Software%20House%20in%20Rawalpindi%2C%20Islamabad!5e0!3m2!1sen!2s!4v1698823037202!5m2!1sen!2s" width="100%" height="700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </section>
      </Layout>
    </>
  );
};

export default ContactUs;
