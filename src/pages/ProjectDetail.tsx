import { motion } from "framer-motion";
import { useParams, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Layout, Smartphone, Navigation, Zap,  Briefcase, Calendar, Clock, Building, Tag, Expand, ExternalLink, ShoppingCart, CreditCard, Package, Heart, Dumbbell, TrendingUp, Users, BarChart3, FileText, Lightbulb, Thermometer, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/button";
import { getProjectById, allProjects } from "../data/allProjects";
import ImageLightbox from "../components/ImageLightbox";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart, CreditCard, Briefcase,Layout, Smartphone, Navigation, Zap,  Package, Heart, Dumbbell, TrendingUp, Users, BarChart3, FileText, Lightbulb, Thermometer, Shield
};

export default function ProjectDetail() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'fr' | 'ar';
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t("projectDetail.notFound")}</h1>
          <p className="text-muted-foreground mb-8">{t("projectDetail.notFoundDesc")}</p>
          <Button variant="hero" asChild>
            <Link to="/projects">{t("projectDetail.viewAll")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = allProjects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  // Get localized text helper
  const getText = (obj: { en: string; fr: string; ar: string }) => obj[lang] || obj.en;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Lightbox */}
      <ImageLightbox
        images={project.images}
        captions={project.captions.map(c => getText(c))}
        currentIndex={selectedImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* Hero Section */}
      <PageHero
        badge={getText(project.category)}
        title={getText(project.title)}
        subtitle={getText(project.description)}
        showBackLink
        backTo="/projects"
        backLabel={t("projectDetail.backToProjects")}
      />

      {/* Project Meta */}
      <section className="pb-8">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {project.year && (
              <span className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                {project.year}
              </span>
            )}
            {project.duration && (
              <span className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                {getText(project.duration)}
              </span>
            )}
            {project.client && (
              <span className="flex items-center gap-2 text-muted-foreground">
                <Building className="w-5 h-5 text-primary" />
                {project.client}
              </span>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t("projectDetail.livePreview")}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Image Gallery */}
      <section className="section-padding pt-0">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main Image - Reduced Size */}
            <div 
              className="relative rounded-2xl overflow-hidden mb-4 aspect-video max-h-[500px] w-[80%] cursor-pointer group mx-auto"
              onClick={() => setLightboxOpen(true)}
            >
              <motion.img
                key={selectedImage}
                src={project.images[selectedImage]}
                alt={getText(project.captions[selectedImage])}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Expand Overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Expand className="w-8 h-8 text-primary-foreground" />
                </motion.div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-foreground font-medium">{getText(project.captions[selectedImage])}</p>
              </div>
            </div>

            {/* Thumbnails - Smaller */}
            <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={getText(project.captions[index])}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview Section */}
      {project.overview && (
        <section className="section-padding pt-0">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="heading-md mb-6">{getText(project.overview.title)}</h2>
                <p className="body-lg leading-relaxed text-muted-foreground">
                  {getText(project.overview.description)}
                </p>
              </div>
              <div className="rounded overflow-hidden max-h-[300px]">
                <img
                  src={project.overview.image}
                  alt={getText(project.overview.title)}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-md mb-4">{t("projectDetail.keyFeatures")}</h2>
              <p className="body-md text-muted-foreground max-w-2xl mx-auto">
                {t("projectDetail.featuresSubtitle")}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon] || Package;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{getText(feature.title)}</h3>
                    <p className="text-sm text-muted-foreground">{getText(feature.description)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="heading-md mb-6">{t("projectDetail.aboutProject")}</h2>
              <p className="body-lg leading-relaxed">{getText(project.fullDescription)}</p>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Technologies */}
              <div className="glass rounded-2xl p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <Tag className="w-5 h-5 text-primary" />
                  {t("projectDetail.technologies")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t("projectDetail.similarProject")}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t("projectDetail.similarProjectCta")}
                </p>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact">{t("projectDetail.contactUs")}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding border-t border-border">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ArrowLeft className="w-5 h-5 text-foreground group-hover:text-primary-foreground rtl:rotate-180" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{t("projectDetail.prevProject")}</span>
                  <p className="font-medium text-foreground">{getText(prevProject.title)}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors sm:flex-row-reverse sm:text-end"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ArrowRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground rtl:rotate-180" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{t("projectDetail.nextProject")}</span>
                  <p className="font-medium text-foreground">{getText(nextProject.title)}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}