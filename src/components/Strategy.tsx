import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ClipboardList, Palette, Code2, Rocket, Headphones } from "lucide-react";

const stepIcons = [ClipboardList, Palette, Code2, Rocket, Headphones];
const stepKeys = ["discovery", "design", "development", "launch", "support"];

export default function Strategy() {
  const { t } = useTranslation();
  const ref = useRef(null);

  // ✅ Works for both mobile & desktop
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden bg-secondary/20"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("strategy.label")}
          </span>
          <h2 className="section-title">
            {t("strategy.title")}
          </h2>
          <p className="body-md text-muted-foreground mt-4">
            {t("strategy.subtitle")}
          </p>
        </motion.div>

        {/* Wave Timeline - Desktop */}
        <div className="relative hidden md:block">
          {/* SVG Wave Line */}
          <svg
            className="absolute top-[72px] left-0 w-full h-24 z-0"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M 0 50 
                 Q 120 10, 240 50 
                 Q 360 90, 480 50 
                 Q 600 10, 720 50 
                 Q 840 90, 960 50 
                 Q 1080 10, 1200 50"
              stroke="url(#waveGradient)"
              strokeWidth="3"
              strokeDasharray="10 8"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(200 100% 50%)" />
                <stop offset="50%" stopColor="hsl(280 80% 60%)" />
                <stop offset="100%" stopColor="hsl(200 100% 50%)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {stepKeys.map((key, index) => {
              const Icon = stepIcons[index];
              const isUp = index % 2 === 0;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`flex flex-col items-center ${
                    isUp ? "" : "pt-24"
                  }`}
                >
                  {/* Circle with Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                    }}
                    className="relative group mb-5"
                  >
                    {/* Outer glow ring */}
                    <div className="absolute inset-[-8px] rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg z-10">
                      {index + 1}
                    </div>

                    {/* Main circle */}
                    <div className="w-28 h-28 rounded-full bg-card border-2 border-border flex items-center justify-center relative group-hover:border-primary/50 transition-all duration-300 shadow-xl">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="text-center max-w-[180px]">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t(`strategy.steps.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`strategy.steps.${key}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary rounded-full origin-top"
          />

          {/* Mobile Steps */}
          <div className="space-y-8">
            {stepKeys.map((key, index) => {
              const Icon = stepIcons[index];

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-6 items-start"
                >
                  {/* Circle with Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {t(`strategy.steps.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`strategy.steps.${key}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
