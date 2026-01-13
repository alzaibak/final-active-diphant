import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  ArrowLeft, 
  Mail, 
  Clock, 
  MapPin, 
  Phone,
  MessageCircle
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

// WhatsApp number (with country code, no spaces or dashes)
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "";

export default function Contact() {
  const { t } = useTranslation();

  const openWhatsApp = () => {
    const message = encodeURIComponent(t("contact.messagePlaceholder"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              {t("contact.backToHome")}
            </Link>
            <h1 className="heading-xl mb-6">
              {t("contact.title").split(" ")[0]} <span className="text-primary">{t("contact.title").split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="body-lg">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="heading-md mb-4">{t("contact.infoTitle")}</h2>
                <p className="body-md">
                  {t("contact.infoSubtitle")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t("contact.email")}</div>
                    <a href="mailto:mohamadalzaibak.8@gmail.com" className="text-primary hover:underline">
                      mohamadalzaibak.8@gmail.com
                    </a>
                  </div>
                </div>

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

                {/* WhatsApp */}
                <motion.button
                  onClick={openWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-start">
                    <div className="font-medium text-foreground">{t("contact.whatsapp")}</div>
                    <span className="text-sm text-muted-foreground">{t("contact.whatsappChat")}</span>
                  </div>
                </motion.button>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t("contact.address")}</div>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t("contact.addressValue")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t("contact.responseTime")}</div>
                    <p className="text-muted-foreground">{t("contact.within24h")}</p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
