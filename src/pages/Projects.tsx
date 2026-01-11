import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/button";
import { allProjects, categories } from "../data/allProjects";

const categoryKeys = ["all", "website", "webapp", "mobileapp", "marketing", "branding"];

export default function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'fr' | 'ar';
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Get localized text helper
  const getText = (obj: { en: string; fr: string; ar: string }) => obj[lang] || obj.en;

  // Category mapping for filtering
  const getCategoryValue = (key: string): string => {
    const categoryMap: Record<string, { en: string; fr: string; ar: string }> = {
      "all": { en: "All", fr: "Tous", ar: "الكل" },
      "website": { en: "Website", fr: "Site Web", ar: "موقع ويب" },
      "webapp": { en: "Web Application", fr: "Application Web", ar: "تطبيق ويب" },
      "mobileapp": { en: "Mobile Application", fr: "Application Mobile", ar: "تطبيق موبايل" },
      "marketing": { en: "Digital Marketing", fr: "Marketing Digital", ar: "تسويق رقمي" },
      "branding": { en: "Branding", fr: "Branding", ar: "العلامة التجارية" }
    };
    return categoryMap[key]?.[lang] || categoryMap[key]?.en || "";
  };

  const filteredProjects = activeCategory === "all" 
    ? allProjects 
    : allProjects.filter(p => getText(p.category) === getCategoryValue(activeCategory));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <PageHero
        badge={t("works.label")}
        title={t("works.pageTitle")}
        subtitle={t("works.pageSubtitle")}
        showBackLink
        backTo="/"
        backLabel={t("works.backToHome")}
      />

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/80 backdrop-blur-lg z-40">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide"
          >
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {t(`categories.${key}`)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={project.images[0]} 
                      alt={getText(project.title)}
                      className="w-full h-full object-fill"
                      animate={{ scale: hoveredId === project.id ? 1.1 : 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-sm text-primary font-medium mb-2">{getText(project.category)}</span>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {getText(project.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{getText(project.description)}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={hoveredId === project.id ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                      >
                        <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="text-muted-foreground text-lg">{t("works.noProjects")}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-border">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="heading-lg mb-6">{t("works.ctaTitle")}</h2>
            <p className="body-md mb-8">{t("works.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">{t("works.contactUs")}</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/">{t("works.backHome")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}