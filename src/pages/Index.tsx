import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Strategy from "../components/Strategy";
import Works from "../components/Works";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "";

const Index = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Strategy />
      <Works />
      
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-card relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />

        <div className="section-container relative z-10">
          <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <span className="text-primary font-medium mb-4 block">{t("nav.contact")}</span>
              <h2 className="heading-lg mb-6">
                {t("contact.title")}
              </h2>
              <p className="body-md mb-8">
                {t("contact.subtitle")}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t("contact.responseTime")}</div>
                    <div className="text-muted-foreground">{t("contact.within24h")}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t("contact.email")}</div>
                    <a href="mailto:mohamadalzaibak.8@gmail.com" className="text-primary hover:underline">
                      mohamadalzaibak.8@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t("contact.whatsapp")}</div>
                    <div className="text-[#25D366] font-medium group-hover:underline">
                      {t("contact.whatsappChat")}
                    </div>
                  </div>
                </a>
                  <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t("contact.phone")}</div>
                    <a href="tel:+33752323502" className="text-muted-foreground hover:text-foreground">
                      +33 7 52 32 35 02
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;