import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Globe, 
  Smartphone, 
  Code, 
  Megaphone, 
  Palette,
  Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Clock,
  Headphones,
  Award,
  BarChart3
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ServiceProcess from "../components/ServiceProcess";
import { Button } from "../components/ui/button";

const serviceIcons: Record<string, React.ElementType> = {
  websites: Globe,
  mobile: Smartphone,
  webapps: Code,
  marketing: Megaphone,
  design: Palette,
  seo: BarChart3,
  maintenance: Shield,
};

const serviceColors: Record<string, string> = {
  websites: "primary",
  mobile: "accent",
  webapps: "primary",
  marketing: "accent",
  design: "primary",
  seo: "primary",
  maintenance: "accent",
};

const whyUsKeys = ["lowPrice", "rapidity", "support", "quality"] as const;
const whyUsIcons = {
  lowPrice: DollarSign,
  rapidity: Clock,
  support: Headphones,
  quality: Award,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Services() {
  const { t } = useTranslation();
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const whyUsRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const whyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" });

  const serviceKeys = ["websites", "mobile", "webapps", "marketing", "design", "seo", "maintenance"] as const;
  const processKeys = ["discovery", "design", "development", "launch"] as const;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <PageHero
        badge={t("services.label")}
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

      {/* CTA Buttons */}
      <div className="section-container mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button variant="hero" size="lg">
              {t("services.cta1")}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Button>
          </Link>
          <a href="#services">
            <Button variant="heroOutline" size="lg">
              {t("services.cta2")}
            </Button>
          </a>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-16 border-y border-border/50">
        <div className="section-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {whyUsKeys.map((key) => {
              const IconComponent = whyUsIcons[key];
              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(`about.whyUs.${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`about.whyUs.${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" ref={servicesRef} className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="section-title">
              {t("services.label")}
            </h2>
            <p className="body-md mt-4">
              {t("services.title")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceKeys.map((key) => {
              const IconComponent = serviceIcons[key];
              const color = serviceColors[key];
              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="group glass rounded-2xl p-8 card-hover"
                >
                  <div className={`w-14 h-14 rounded-xl ${color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t(`services.items.${key}.description`)}
                  </p>
                  <ul className="space-y-3">
                    {(t(`services.items.${key}.features`, { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Service Process Section - Replaces Testimonials */}
      <ServiceProcess />

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative z-10">
              <h2 className="heading-lg mb-4">
                {t("services.cta.title")}
              </h2>
              <p className="body-md max-w-xl mx-auto mb-8">
                {t("services.cta.subtitle")}
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  {t("services.cta.button")}
                  <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
