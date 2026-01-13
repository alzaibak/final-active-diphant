import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { allProjects } from "../data/allProjects";

const displayProjects = allProjects.slice(0, 4);

export default function Works() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'fr' | 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Helper function to get localized text
  const getText = (obj: { en: string; fr: string; ar: string }) => obj[lang] || obj.en;

  return (
    <section id="works" className="section-padding bg-background relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-primary font-medium mb-4 block">{t("works.label")}</span>
            <h2 className="heading-lg">{t("works.title")}</h2>
          </div>
          <p className="body-md max-w-md">
            {t("works.subtitle")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-6"
        >
          {displayProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card card-hover cursor-pointer h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={getText(project.title)}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <span className="absolute top-4 start-4 px-3 py-1 text-xs rounded-full bg-primary/90 text-primary-foreground font-medium">
                    {getText(project.category)}
                  </span>
                </div>
                
                {/* Content */}
                <div className="relative p-6 flex flex-col flex-1 bg-card">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {getText(project.title)}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{getText(project.description)}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ x: 0 }}
                      animate={hoveredId === project.id ? { x: 5 } : { x: 0 }}
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground rtl:rotate-180 transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/projects">
              {t("works.viewAll")}
              <ExternalLink className="w-4 h-4 ms-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
