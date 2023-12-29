import Header from "../components/header";
import Landing from "./landing";
import Footer from "../components/footer";
import ContactSection from "./contact"
import FAQSection from "./faq";
import Map from "./map";

const Contact = () => {
  return (
    <div>
      <Header />
      <Landing />
      <ContactSection />
      <Map/>
      <FAQSection/>
      <Footer />
    </div>
  );
};

export default Contact;
