import eavoiHomeHeader from "../images/eavoiHomeHeader.png";
import eavoiservices from "../images/eavoiservices.jpg";
import eavoiteam from "../images/eavoiTeam.jpg";
import eavoiprojectone from "../images/eavoiprojectone.jpg";
import eavoprojecttwo from "../images/eavoprojecttwo.jpg";
import eavoiabout from "../images/eavoiabout.jpg";
import eavoiprojects from "../images/eavoiProjects.jpg";
import eavoiVedio from "../images/result.gif";






export interface ProjectFeature {
  icon: string;
  title: { en: string; fr: string; ar: string };
  description: { en: string; fr: string; ar: string };
}

export interface Project {
  id: string;
  title: { en: string; fr: string; ar: string };
  category: { en: string; fr: string; ar: string };
  description: { en: string; fr: string; ar: string };
  fullDescription: { en: string; fr: string; ar: string };
  tags: string[];
  images: string[];
  captions: { en: string; fr: string; ar: string }[];
  client?: string;
  duration?: { en: string; fr: string; ar: string };
  year?: string;
  liveUrl?: string;
  features?: ProjectFeature[];
  overview?: {
    title: { en: string; fr: string; ar: string };
    description: { en: string; fr: string; ar: string };
    image: string;
  };
}

export const allProjects: Project[] = [
    {
  id: "architecture-website",
  title: {
    en: "Architecture Agency Website",
    fr: "Site Web d'Agence d'Architecture",
    ar: "موقع شركة هندسة معمارية"
  },
  category: { en: "Website", fr: "Site Web", ar: "موقع ويب" },
  description: {
    en: "Modern website for an architecture firm showing their projects and services",
    fr: "Site web moderne pour un cabinet d'architecture présentant ses projets et services",
    ar: "موقع ويب حديث لشركة معمارية تعرض مشاريعها وخدماتها"
  },
  fullDescription: {
  en: "EAVOI is a creative agency website showcasing brand identity, services, and projects with a clean, modern design. Fully responsive and optimized for fast loading, it offers smooth navigation, clear visual hierarchy, and an engaging user experience across desktop, tablet, and mobile. Highlight your agency’s creativity, professionalism, and credibility effortlessly.",
  fr: "EAVOI est un site d’agence créative mettant en avant l’identité de marque, les services et les projets avec un design moderne et épuré. Entièrement responsive et rapide, il propose une navigation fluide et une hiérarchie visuelle claire sur tous les appareils, renforçant la créativité et le professionnalisme de l’agence.",
  ar: "إيفوي هو موقع وكالة إبداعية يعرض هوية العلامة التجارية والخدمات والمشاريع بتصميم حديث ونظيف. متجاوب بالكامل وسريع التحميل، يوفر تجربة تصفح سلسة وهيكل بصري واضح على جميع الأجهزة، ويعكس احترافية وإبداع الوكالة."
  },
  tags: ["HTML", "CSS", "JS", "Bootstrap"],
  images: [
    eavoiHomeHeader,
    eavoiprojects,
    eavoiservices,
    eavoiabout,
    eavoiteam,
    eavoiprojectone,
    eavoprojecttwo,
  ],
  captions: [
    {
      en: "Homepage welcome section",
      fr: "Section d'accueil de la page d'accueil",
      ar: "قسم الترحيب بالصفحة الرئيسية"
    },
    {
      en: "Projects gallery page",
      fr: "Page galerie de projets",
      ar: "صفحة معرض المشاريع"
    },
    {
      en: "Services we offer",
      fr: "Services que nous proposons",
      ar: "الخدمات التي نقدمها"
    },
    {
      en: "About our company",
      fr: "À propos de notre entreprise",
      ar: "عن شركتنا"
    },
    {
      en: "Team page",
      fr: "Page d'équipe",
      ar:"الفريق",
    },
    {
      en: "Mall building project",
      fr: "Centre commercial",
      ar: "مول تجاري"
    },
    {
      en: "Mall building project",
      fr: "Centre commercial",
      ar: "مول تجاري"
    },
  ],
  client: "EAOVI",
  year: "2025",
  liveUrl: "https://eavoi.com/",
  features: [
  { 
    icon: "Smartphone", 
    title: { en: "Responsive Design", fr: "Design responsive", ar: "تصميم متجاوب" }, 
    description: { 
      en: "Optimized layout that adapts seamlessly to all screen sizes",
      fr: "Mise en page optimisée s’adaptant à tous les écrans",
      ar: "تصميم متكيف يعمل بسلاسة على جميع الأجهزة"
    } 
  },
  { 
    icon: "Users", 
    title: { en: "Team Presentation", fr: "Présentation de l’équipe", ar: "عرض الفريق" }, 
    description: { 
      en: "Clear and professional showcase of creative team members",
      fr: "Présentation claire et professionnelle des membres de l’équipe",
      ar: "عرض احترافي وواضح لأعضاء الفريق"
    } 
  },
  { 
    icon: "Briefcase", 
    title: { en: "Project Portfolio", fr: "Portfolio de projets", ar: "معرض الأعمال" }, 
    description: { 
      en: "Organized presentation of featured and completed projects",
      fr: "Présentation organisée des projets réalisés",
      ar: "عرض منظم للمشاريع المنجزة"
    } 
  },
  { 
    icon: "Navigation", 
    title: { en: "Easy Navigation", fr: "Navigation facile", ar: "سهولة التنقل" }, 
    description: { 
      en: "Simple and intuitive navigation for a smooth user experience",
      fr: "Navigation simple et intuitive pour une expérience fluide",
      ar: "تنقل سهل وبسيط لتجربة استخدام سلسة"
    } 
  },
  { 
    icon: "Zap", 
    title: { en: "Performance Optimized", fr: "Performance optimisée", ar: "أداء محسّن" }, 
    description: { 
      en: "Fast loading times and smooth interactions across the website",
      fr: "Temps de chargement rapides et interactions fluides",
      ar: "سرعة تحميل عالية وتفاعل سلس"
    } 
  }
],
 overview: {
  title: { 
    en: "EAVOI website", 
    fr: "Site EAVOI", 
    ar: "موقع إيفوي" ,
  },
  description: { 
    en: "EAVOI is a creative website that is easy to use and clear to understand. It works well on phones, tablets, and computers. The website shows the company’s work in a simple way, explains what the brand does, and helps visitors find information quickly. It is designed so everyone can see and understand the content, making the company easy to know.",

    fr: "EAVOI est un site créatif, facile à utiliser et simple à comprendre. Il fonctionne bien sur les téléphones, tablettes et ordinateurs. Le site montre le travail de l’entreprise de manière claire, explique ce que fait la marque et aide les visiteurs à trouver rapidement les informations. Il est conçu pour que tout le monde puisse voir et comprendre le contenu, rendant l’entreprise facile à connaître .",

    ar: "إيفوي هو موقع إبداعي سهل الاستخدام وسهل الفهم. يعمل جيدًا على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر. يعرض الموقع أعمال الشركة بطريقة واضحة، ويشرح ما تفعله العلامة التجارية، ويساعد الزوار على العثور على المعلومات بسرعة. تم تصميمه ليتمكن الجميع من رؤية وفهم المحتوى، مما يجعل الشركة سهلة التعرف عليها."
},
  image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=800&fit=crop"
},
},]

export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

export const categories = {
  en: ["All", "Website", "Web Application", "Mobile Application", "Digital Marketing", "Branding"],
  fr: ["Tous", "Site Web", "Application Web", "Application Mobile", "Marketing Digital", "Branding"],
  ar: ["الكل", "موقع ويب", "تطبيق ويب", "تطبيق موبايل", "تسويق رقمي", "العلامة التجارية"]
};