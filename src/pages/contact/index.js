import Layout from "@/components/Layout";
import ContactUsForm from "@/components/ContactUsForm";
const ContactUs = () => {
  return (
    <Layout>
      <section className="w-full px-4 py-6 sm:py-16 bg-light-primary-color">
        <div className="container">
            <ContactUsForm/>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
