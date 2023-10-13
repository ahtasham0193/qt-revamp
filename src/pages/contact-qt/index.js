import Layout from "@/components/Layout";
import ContactUsForm from "@/components/ContactUsForm";
import Head from "next/head";
const ContactUs = () => {
  return (
    <>
        <Head>
        <title>Contact Us - Quaid Technologies</title>
        <meta 
          name="description"
          content="Need assistance with any service or solution? Contact us, our team is glad to assist you with their best possible experience."/>
        
      </Head>
 
    <Layout>
      <section className="w-full px-4 py-6 sm:py-16 bg-light-primary-color">
        <div className="container">
            <ContactUsForm/>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default ContactUs;
