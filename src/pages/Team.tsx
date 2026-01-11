import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Sparkles, Linkedin, Twitter, Mail, Quote } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import personalPhoto from "../images/personal.png";


const teamMembers = [
  {
    id: 1,
    name: "AL-ZAIBAK Mohamad",
    role: "team.roles.ceo",
    image: personalPhoto,
    linkedin: "https://www.linkedin.com/in/mohamad-abd-alaziz-alzaibak-87b50b13a/",
    twitter: "#",
  },
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Same style as home */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 start-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{t("team.badge")}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-xl mb-6"
            >
              <span className="text-foreground">{t("team.title1")}</span>
              <br />
              <span className="gradient-text">{t("team.title2")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="body-lg max-w-2xl mx-auto"
            >
              {t("team.subtitle")}
            </motion.p>
          </div>
        </div>
      </section>

          {/*CEO section*/}
      <section className="section-padding bg-background">
        <div className="section-container">
          {/* Section Head */}
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {t("team.head")}
          </p>
          <h2 className="text-4xl font-bold mb-16">
            {t("team.roles.ceo")}
          </h2>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-md"
              >
                <div className="relative w-full h-[420px] flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden">
                  
                  {/* subtle frame */}
                  <div className="absolute inset-0 border border-border/60 rounded-lg pointer-events-none" />

                  {/* image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover ring-4 ring-primary grayscale transition-all duration-500 hover:grayscale-0"
                  />

                  {/* soft light accent */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                </div>
              </motion.div>


              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-primary font-medium">
                  {t(member.role)}
                </p>

                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {t("team.ceo.description")}
                </p>

                {/* Socials */}
                <div className="flex gap-4 pt-2">
                  <a href={member.linkedin} className="hover:text-primary">
                    <Linkedin />
                  </a>
                  <a href={member.twitter} className="hover:text-primary">
                    <Twitter />
                  </a>
                  <a
                    href={`mailto:${member.name
                      .toLowerCase()
                      .replace(" ", ".")}@diphant.com`}
                    className="hover:text-primary"
                  >
                    <Mail />
                  </a>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-primary pl-6 italic text-foreground/80 mt-6">
                  “{t("team.ceo.quote")}”
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Grid for the other team members*/}
      {/* <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl glass p-6 hover:border-primary/30 transition-all duration-500">
                  <div className="relative w-60 h-60 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-full object-cover rounded-full ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{t(member.role)}</p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href={member.linkedin}
                        className="p-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@diphant.com`}
                        className="p-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}
      
      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t("team.valuesTitle")}</h2>
            <p className="body-lg max-w-2xl mx-auto mt-4">{t("team.valuesSubtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["dedication", "excellence", "collaboration"].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 glass rounded-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t(`team.values.${value}.title`)}
                </h3>
                <p className="text-muted-foreground">{t(`team.values.${value}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
