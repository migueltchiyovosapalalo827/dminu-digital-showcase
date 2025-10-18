import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Clients />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
