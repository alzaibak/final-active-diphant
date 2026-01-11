import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { DollarSign, Zap, HeadphonesIcon, Shield } from "lucide-react";

const whyUsIcons = [DollarSign, Zap, HeadphonesIcon, Shield];
const whyUsKeys = ["lowPrice", "rapidity", "support", "quality"];

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 end-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xl md:text-2xl font-bold text-primary mb-4 block">{t("about.label")}</span>
            <h2 className="heading-lg mb-6">
              {t("about.title")}
            </h2>
            <div className="space-y-4 body-md">
              <p dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">{t("about.cta")}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Why Us Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">{t("about.whyUsTitle")}</h3>
            <div className="grid grid-cols-2 gap-6">
              {whyUsKeys.map((key, index) => {
                const Icon = whyUsIcons[index];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass rounded-2xl p-6 text-center card-hover"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{t(`about.whyUs.${key}.title`)}</h4>
                    <p className="text-sm text-muted-foreground">{t(`about.whyUs.${key}.description`)}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
