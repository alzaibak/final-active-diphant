import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

// Web3Forms - 100% FREE, unlimited emails, no backend needed
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

const projectTypes = [
  { value: "website", labelKey: "contact.projectTypes.website" },
  { value: "webapp", labelKey: "contact.projectTypes.webapp" },
  { value: "mobileapp", labelKey: "contact.projectTypes.mobileapp" },
  { value: "marketing", labelKey: "contact.projectTypes.marketing" },
  { value: "design", labelKey: "contact.projectTypes.design" },
  { value: "other", labelKey: "contact.projectTypes.other" },
];

interface ContactFormProps {
  showTitle?: boolean;
  className?: string;
}

export default function ContactForm({ showTitle = true, className = "" }: ContactFormProps) {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t("contact.requiredFields"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t("contact.invalidEmail"));
      return;
    }

    setLoading(true);

    try {
     
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${formData.name} - Diphant`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not specified",
          phone: formData.phone || "Not specified",
          project_type: formData.projectType || "Not specified",
          message: formData.message,
          redirect: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        toast.success(t("contact.success"));
        setFormData({ name: "", email: "", company: "", phone: "", projectType: "", message: "" });
      } else {
        throw new Error(result.message || "Error sending message");
      }
    } catch (error) {
      console.error("Form Error:", error);
      toast.error(t("contact.error"));
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`glass rounded-3xl p-10 text-center ${className}`}
      >
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-4">
          {t("contact.success")}
        </h3>
        <p className="text-muted-foreground mb-8">
          {t("contact.successDesc")}
        </p>
        <Button
          variant="heroOutline"
          onClick={() => setSent(false)}
        >
          {t("contact.sendAnother")}
        </Button>
      </motion.div>
    );
  }

  return (
    <div className={`glass rounded-3xl p-8 md:p-10 ${className}`}>
      {showTitle && (
        <h3 className="text-2xl font-semibold text-foreground mb-6">
          {t("contact.formTitle")}
        </h3>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("contact.fullName")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.yourName")}
              className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("contact.emailLabel")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("contact.company")}
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t("contact.companyPlaceholder")}
              className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("contact.phone")}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contact.phonePlaceholder")}
              className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t("contact.projectType")}
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
          >
            <option value="">{t("contact.selectProjectType")}</option>
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {t(type.labelKey)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t("contact.message")} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder={t("contact.messagePlaceholder")}
            className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
            required
          />
        </div>

        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full md:w-auto"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              {t("contact.sending")}
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {t("contact.send")}
            </>
          )}
        </Button>
      </form>

      {/* Web3Forms Setup Note */}
      <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Configuration:</strong> {t("contact.setupNote")}{" "}
          <a 
            href="https://web3forms.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Web3Forms.com
          </a>{" "}
          {t("contact.setupNote2")}
        </p>
      </div>
    </div>
  );
}
