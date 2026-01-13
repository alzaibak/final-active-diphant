import arch from "../images/arch.png";
import eavoiHomeHeader from "../images/eavoiHomeHeader.png";
import eavoiservices from "../images/eavoiservices.jpg";
import eavoiteam from "../images/eavoiTeam.jpg";
import eavoiprojectone from "../images/eavoiprojectone.jpg";
import eavoprojecttwo from "../images/eavoprojecttwo.jpg";
import eavoiabout from "../images/eavoiabout.jpg";
import eavoiprojects from "../images/eavoiProjects.jpg";
import ecommerce from "../images/ecommerce.jpg"
import ecommercehome from "../images/ecommerceHome.jpg"
import ecommerproducts from "../images/EcommerceProducts.jpg"
import ecommersingleproduct from "../images/ecommercaSingleproduct.png"
import ecommercart from "../images/ecommercecarte.png"
import ecommercepanier from "../images/ecommercePayement.png"
import ecommerlogin from "../images/ecommerceLogin.jpg"
import ecommercesignup from "../images/ecommerceUserAccount.jpg"
import ecommerceadminDashbord from "../images/ecommerceadminDashbord.png"
import note from "../images/note.png"
import noteHome from "../images/noteHome.png"
import noteJogin from "../images/noteJogin.png"
import noteAccount from "../images/noteAccount.png"
import notAdding from "../images/notAdding.png"
import noteUserPage from "../images/noteUserPage.png"










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
    arch,
    eavoiHomeHeader,
    eavoiprojects,
    eavoiservices,
    eavoiabout,
    eavoiteam,
    eavoiprojectone,
    eavoprojecttwo,
  ],
  captions: [
    { en: "Promotion", fr: "Promotion", ar: "ترويج" },
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
},{
  id: "ecommerce-webapp",
  title: {
    en: "E-commerce Web Application",
    fr: "Application Web E-commerce",
    ar: "تطبيق ويب للتجارة الإلكترونية"
  },
  category: { en: "Web Application", fr: "Application Web", ar: "تطبيق ويب" },
  description: {
    en: "Simple and modern e-commerce web application to sell products online",
    fr: "Application web e-commerce simple et moderne pour vendre des produits en ligne",
    ar: "تطبيق ويب للتجارة الإلكترونية بسيط وحديث لبيع المنتجات عبر الإنترنت"
  },
  fullDescription: {
    en: "This e-commerce web application is designed to help businesses sell products online easily. It has a clean and modern design, works on all devices, and loads quickly. Customers can browse products, view details, filter by categories, add items to the cart, and checkout smoothly. It includes account management, order tracking, secure payments, and easy navigation. The interface is simple to use, making shopping clear and enjoyable for everyone.",
    fr: "Cette application web e-commerce est conçue pour aider les entreprises à vendre leurs produits en ligne facilement. Elle dispose d’un design moderne et épuré, fonctionne sur tous les appareils et se charge rapidement. Les clients peuvent parcourir les produits, voir les détails, filtrer par catégorie, ajouter au panier et acheter facilement. Elle inclut la gestion des comptes, le suivi des commandes, les paiements sécurisés et une navigation simple. L’interface est facile à utiliser, rendant l’expérience d’achat claire et agréable pour tous.",
    ar: "تم تصميم تطبيق الويب هذا للتجارة الإلكترونية لمساعدة الشركات على بيع المنتجات عبر الإنترنت بسهولة. يتميز بتصميم حديث ونظيف، ويعمل على جميع الأجهزة، ويتميز بسرعة التحميل. يمكن للعملاء تصفح المنتجات، عرض التفاصيل، التصفية حسب الفئات، إضافة المنتجات إلى السلة، وإتمام الشراء بسهولة. يشمل إدارة الحسابات، تتبع الطلبات، المدفوعات الآمنة، وتنقل سهل. الواجهة بسيطة للاستخدام، مما يجعل تجربة التسوق واضحة وممتعة للجميع."
  },
  tags: ["HTML", "CSS", "JS", "React", "Tailwind", "Stripe", "Node.js", "Express"],
  images: [
  ecommerce,
  ecommercehome,
  ecommerproducts,
  ecommersingleproduct,
  ecommercart,
  ecommercepanier,
  ecommerlogin,
  ecommercesignup,
  ecommerceadminDashbord,
  ],
  captions: [
    { en: "Promotion", fr: "Promotion", ar: "ترويج" },
    { en: "Homepage with featured products", fr: "Page d'accueil avec produits en vedette", ar: "الصفحة الرئيسية مع المنتجات المميزة" },
    { en: "Products listing page with filters", fr: "Page de liste de produits avec filtres", ar: "صفحة قائمة المنتجات مع فلاتر" },
    { en: "Product detail page", fr: "Page de détails du produit", ar: "صفحة تفاصيل المنتج" },
    { en: "Shopping cart page", fr: "Page du panier", ar: "صفحة سلة التسوق" },
    { en: "Checkout page with payment options", fr: "Page de paiement avec options", ar: "صفحة إتمام الشراء مع خيارات الدفع" },
    { en: "User account dashboard", fr: "Tableau de bord du compte utilisateur", ar: "لوحة تحكم حساب المستخدم" },
    { en: "Signup page", fr: "Page d'inscription", ar: "صفحة التسجيل" },
    { en: "Admin dashboard", fr: "Tableau de bord administrateur", ar: "لوحة تحكم المشرف" },
  ],
  client: "E commerce",
  year: "",
  liveUrl: "",
  features: [
    {
      icon: "ShoppingCart",
      title: { en: "Easy Shopping", fr: "Achat facile", ar: "تسوق سهل" },
      description: {
        en: "Browse products, add to cart, and checkout quickly",
        fr: "Parcourir les produits, ajouter au panier et acheter rapidement",
        ar: "تصفح المنتجات، إضافة إلى السلة وإتمام الشراء بسرعة"
      }
    },
    {
      icon: "CreditCard",
      title: { en: "Secure Payments", fr: "Paiements sécurisés", ar: "مدفوعات آمنة" },
      description: {
        en: "Safe and fast online payment options",
        fr: "Options de paiement en ligne sûres et rapides",
        ar: "خيارات دفع آمنة وسريعة عبر الإنترنت"
      }
    },
    {
      icon: "Users",
      title: { en: "User Accounts", fr: "Comptes utilisateurs", ar: "حسابات المستخدمين" },
      description: {
        en: "Customers can create accounts, track orders, and manage profiles",
        fr: "Les clients peuvent créer des comptes, suivre les commandes et gérer leur profil",
        ar: "يمكن للعملاء إنشاء حسابات، تتبع الطلبات، وإدارة الملفات الشخصية"
      }
    },
    {
      icon: "Navigation",
      title: { en: "Easy Navigation", fr: "Navigation facile", ar: "سهولة التنقل" },
      description: {
        en: "Simple menus and search to quickly find products",
        fr: "Menus simples et recherche pour trouver rapidement les produits",
        ar: "قوائم بسيطة ووظيفة البحث للعثور على المنتجات بسرعة"
      }
    },
    {
      icon: "Zap",
      title: { en: "Fast Performance", fr: "Performance rapide", ar: "أداء سريع" },
      description: {
        en: "Quick page loads and smooth browsing",
        fr: "Chargement rapide des pages et navigation fluide",
        ar: "تحميل سريع للصفحات وتصفح سلس"
      }
    },
    {
      icon: "BarChart3",
      title: { en: "Analytics Dashboard", fr: "Tableau de bord analytique", ar: "لوحة تحليلات" },
      description: {
        en: "Track sales, traffic, and customer behavior in real time",
        fr: "Suivre les ventes, le trafic et le comportement des clients en temps réel",
        ar: "تتبع المبيعات والزوار وسلوك العملاء في الوقت الفعلي"
      }
    },
    {
      icon: "Package",
      title: { en: "Inventory Management", fr: "Gestion des stocks", ar: "إدارة المخزون" },
      description: {
        en: "Easily manage stock levels and product availability",
        fr: "Gérer facilement les niveaux de stock et la disponibilité des produits",
        ar: "إدارة مستويات المخزون وتوافر المنتجات بسهولة"
      }
    },
    {
      icon: "Lightbulb",
      title: { en: "Promotions & Discounts", fr: "Promotions & Remises", ar: "العروض والخصومات" },
      description: {
        en: "Offer discounts, sales, and promotions to customers",
        fr: "Proposer des réductions, ventes et promotions aux clients",
        ar: "تقديم خصومات وعروض ترويجية للعملاء"
      }
    }
  ],
  overview: {
    title: {
      en: "MyShop E-commerce Web Application",
      fr: "Application Web E-commerce MyShop",
      ar: "تطبيق ويب للتجارة الإلكترونية MyShop"
    },
   description: {
      en: "A simple e-commerce web application designed for easy online shopping. Products can be browsed, filtered by category, viewed in detail, added to the cart, and purchased securely. The application works smoothly on phones, tablets, and computers, with a clear and user-friendly interface for a seamless shopping experience.",
      fr: "Une application web e-commerce simple conçue pour faciliter les achats en ligne. Les produits peuvent être parcourus, filtrés par catégorie, consultés en détail, ajoutés au panier et achetés en toute sécurité. L'application fonctionne parfaitement sur téléphones, tablettes et ordinateurs, avec une interface claire et facile à utiliser pour une expérience d'achat fluide.",
      ar: "تطبيق ويب للتجارة الإلكترونية بسيط مصمم لتسهيل التسوق عبر الإنترنت. يمكن تصفح المنتجات، تصفيتها حسب الفئة، عرض التفاصيل، إضافتها إلى السلة، وإتمام الشراء بأمان. يعمل التطبيق بسلاسة على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر، مع واجهة واضحة وسهلة الاستخدام لتجربة تسوق سلسة."
    },
    image: ecommerce,
  }
},
{
  id: "online-notes-app",
  title: {
    en: "Online Notes Web Application",
    fr: "Application Web de Prise de Notes",
    ar: "تطبيق ملاحظات عبر الويب"
  },
  category: {
    en: "Web Application",
    fr: "Application Web",
    ar: "تطبيق ويب"
  },
  description: {
    en: "A secure online notes application that allows users to create, manage, and organize personal notes.",
    fr: "Une application de notes en ligne sécurisée permettant aux utilisateurs de créer, gérer et organiser leurs notes personnelles.",
    ar: "تطبيق ملاحظات إلكتروني آمن يتيح للمستخدمين إنشاء ملاحظاتهم الشخصية وإدارتها وتنظيمها."
  },
  fullDescription: {
    en: "This online notes web application allows users to sign up or log in to their personal accounts and manage notes at any time. Each user has a private dashboard where notes are displayed individually using session-based authentication. Users can add new notes, edit existing ones, or delete them easily. The application relies on a database connection where user and note data are securely stored.",
    fr: "Cette application web de prise de notes permet aux utilisateurs de créer un compte ou de se connecter pour gérer leurs notes personnelles à tout moment. Chaque utilisateur dispose d’un tableau de bord privé où les notes sont affichées individuellement grâce à la gestion des sessions. Les utilisateurs peuvent ajouter, modifier ou supprimer leurs notes facilement. L’application utilise une base de données pour stocker les informations des utilisateurs et des notes en toute sécurité.",
    ar: "يتيح تطبيق الملاحظات هذا للمستخدمين إنشاء حساب أو تسجيل الدخول لإدارة ملاحظاتهم الشخصية في أي وقت. يحصل كل مستخدم على صفحة خاصة به لعرض ملاحظاته بشكل فردي باستخدام الجلسات. يمكن للمستخدم إضافة الملاحظات وتعديلها أو حذفها بسهولة. يعتمد التطبيق على قاعدة بيانات لتخزين بيانات المستخدمين والملاحظات بشكل آمن."
  },
  tags: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
  images: [
    note,
    noteHome,
    noteAccount,
    noteJogin,
    noteUserPage,
    notAdding,
   

   
  ],
  captions: [
    { en: "Promotion", fr: "Promotion", ar: "ترويج" },
    {
      en: "Home page of the application",
      fr: "Page d’accueil de l’application",
      ar: "الصفحة الرئيسية للتطبيق"
    },
    {
      en: "Sign up modal with validation alerts",
      fr: "Fenêtre d’inscription avec alertes de validation",
      ar: "نافذة إنشاء حساب مع تنبيهات التحقق"
    },
    {
      en: "Login modal with remember me option",
      fr: "Fenêtre de connexion avec option se souvenir de moi",
      ar: "نافذة تسجيل الدخول مع خيار تذكرني"
    },
    {
      en: "User dashboard displaying personal notes",
      fr: "Tableau de bord affichant les notes personnelles",
      ar: "لوحة تحكم المستخدم لعرض الملاحظات"
    },
    {
      en: "Create new note page",
      fr: "Page de création d’une nouvelle note",
      ar: "صفحة إنشاء ملاحظة جديدة"
    }
  ],
  client: "Notes",
  year: "2025",
  liveUrl: "",
  features: [
    {
      icon: "UserPlus",
      title: {
        en: "User Authentication",
        fr: "Authentification des utilisateurs",
        ar: "نظام تسجيل المستخدمين"
      },
      description: {
        en: "Sign up and login system with validation and alerts",
        fr: "Système d’inscription et de connexion avec validation et alertes",
        ar: "نظام إنشاء حساب وتسجيل دخول مع التحقق والتنبيهات"
      }
    },
    {
      icon: "Lock",
      title: {
        en: "Session-Based Security",
        fr: "Sécurité par sessions",
        ar: "الأمان باستخدام الجلسات"
      },
      description: {
        en: "Each user can only access their own notes",
        fr: "Chaque utilisateur ne peut accéder qu’à ses propres notes",
        ar: "كل مستخدم يمكنه الوصول إلى ملاحظاته فقط"
      }
    },
    {
      icon: "Edit",
      title: {
        en: "CRUD Notes",
        fr: "Gestion des notes",
        ar: "إدارة الملاحظات"
      },
      description: {
        en: "Create, edit, and delete notes at any time",
        fr: "Créer، modifier et supprimer des notes à tout moment",
        ar: "إضافة وتعديل وحذف الملاحظات في أي وقت"
      }
    },
    {
      icon: "Database",
      title: {
        en: "Database Integration",
        fr: "Intégration de base de données",
        ar: "الربط مع قاعدة البيانات"
      },
      description: {
        en: "MySQL database with Users and Notes tables",
        fr: "Base de données MySQL تحتوي على جداول المستخدمين والملاحظات",
        ar: "قاعدة بيانات MySQL تحتوي على جداول المستخدمين والملاحظات"
      }
    }
  ],
  overview: {
    title: {
      en: "Online Notes Application",
      fr: "Application de notes en ligne",
      ar: "تطبيق الملاحظات الإلكتروني"
    },
    description: {
      en: "The Online Notes Application is a simple and practical web app designed to help users store their notes securely. With an easy-to-use interface, users can quickly create accounts, log in, and manage their notes. The system uses a database connection that must be configured before running the app, ensuring data persistence and personalized access for every user.",
      fr: "L’application de notes en ligne est une application web simple et pratique conçue pour aider les utilisateurs à stocker leurs notes en toute sécurité. Grâce à une interface facile à utiliser, les utilisateurs peuvent créer un compte, se connecter et gérer leurs notes rapidement. Le système utilise une connexion à une base de données qui doit être configurée avant l’exécution de l’application.",
      ar: "تطبيق الملاحظات الإلكتروني هو تطبيق ويب بسيط وعملي يساعد المستخدمين على حفظ ملاحظاتهم بشكل آمن. يتميز بواجهة سهلة الاستخدام تتيح إنشاء حساب وتسجيل الدخول وإدارة الملاحظات بسهولة. يعتمد التطبيق على قاعدة بيانات يجب إعدادها قبل التشغيل لضمان حفظ البيانات وإتاحة الوصول الشخصي لكل مستخدم."
    },
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1200&h=800&fit=crop"
  }
},
]

export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

export const categories = {
  en: ["All", "Website", "Web Application", "Mobile Application", "Digital Marketing" ],
  fr: ["Tous", "Site Web", "Application Web", "Application Mobile", "Marketing Digital"],
  ar: ["الكل", "موقع ويب", "تطبيق ويب", "تطبيق موبايل", "تسويق رقمي"]
};