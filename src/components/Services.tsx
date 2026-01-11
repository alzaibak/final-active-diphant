import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe, Smartphone, Code, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const serviceKeys = ["websites", "mobile", "webapps", "marketing"] as const;
const serviceIcons = {
  websites: Globe,
  mobile: Smartphone,
  webapps: Code,
  marketing: Megaphone,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Services() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xl md:text-2xl font-bold text-primary mb-4 block">{t("services.label")}</span>
          {/*<h2 className="heading-lg mb-4">
            {t("services.title")}
          </h2>*/}
          <p className="body-md  font-bold">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {serviceKeys.map((key) => {
            const IconComponent = serviceIcons[key];
            return (
              <motion.div
                key={key}
                variants={cardVariants}
                className="group glass rounded-2xl p-8 card-hover cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {t(`services.items.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`services.items.${key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="heroOutline" size="lg">
              {t("services.cta2")}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
