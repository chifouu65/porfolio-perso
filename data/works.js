import omf_full from '../public/images/works/omf/omf-full.png'
import omf_phone_item from '../public/images/works/omf/omf-phone_item.png'

import pierrette_full_2 from '../public/images/works/pierrette-essentielle/pierrette-full2.png'
import pierrette_full_main from '../public/images/works/pierrette-essentielle/pierrette-full.png'
import pierrette_full_about from '../public/images/works/pierrette-essentielle/pierrette-full_about.png'
import pierrette_phone_item from '../public/images/works/pierrette-essentielle/pierrette-phone_item.png'
import pierrette_phone_contact from '../public/images/works/pierrette-essentielle/pierrette-phone-contact.png'

import hottakes from '../public/images/works/hottakes/rest.png'

import kasa_phone_home from '../public/images/works/kasa/kasa-phone_home.png'
import kasa_phone_item from '../public/images/works/kasa/kasa-phone_item.png'
import kasa_full_about from '../public/images/works/kasa/kasa-full_about.png'
import kasa_full_item from '../public/images/works/kasa/kasa-full_item.png'

import lapanthere_full from '../public/images/works/lapanthere/lapanthere_full.png'
import lapanthere_phone from '../public/images/works/lapanthere/lapanthere_phone.png'

//import booki_full from '../public/images/works/booki/booki_full.png'
//import booki_phone from '../public/images/works/booki/booki_phone.png'

import kanap_full from '../public/images/works/kanap/kanap_full.png'
import kanap_phone from '../public/images/works/kanap/kanap_phone.png'

import ai_1 from '../public/images/works/ai/ai_1.png'
import ai_2 from '../public/images/works/ai/ai_2.png'
import ai_3 from '../public/images/works/ai/ai_3.png'

import astro_home_phone from '../public/images/works/astro/astro-home-phone.png'
import astro_product_desktop from '../public/images/works/astro/astro-product-desktop.png'
import astro_shop_phone from '../public/images/works/astro/astro-shop-phone.png'

import chat_D from '../public/images/works/messenger/chat_D.png'
import chat_P from '../public/images/works/messenger/chat_P.png'
import home_D from '../public/images/works/messenger/home_D.png'
import home_P from '../public/images/works/messenger/home_P.png'
import login_D from '../public/images/works/messenger/login_D.png'
import login_P from '../public/images/works/messenger/login_P.png'

import home_pr_v2 from '../public/images/works/v2_pr/homepage.png'
const works = [
    {
      id: "v2_pierrette_essentielle",
        title: "Pierrette Essentielle (v2)",
        link: "https://shop.pierrette-essentielle.fr/",
        description: `Développement d'une boutique en ligne pour la marque Pierrette Essentielle. \n
        Nouvelle version du site avec NextJs 13, refonte du design, ajout de nouvelles fonctionnalités, amélioration du SEO, amélioration des performances, amélioration de l'accessibilité, amélioration de la PWA, amélioration de l'expérience utilisateur, amélioration de l'expérience développeur. \n
        (Version non définitive, en cours de développement) \n
        - Style avec TailwindCSS.\n
        - Authentification Non.\n
        - Base de données avec MongoDB.\n
        - Seo avec NextJs.\n
        - PWA avec NextJs.\n
        - Animations avec Framer Motion. Non fini\n
        - Gestion d'état avec Redux Toolkit.\n
        - Gestion des requêtes avec Axios.\n
        - Gestion des cookies.Non Fini.\n
        - Gestion des routes avec NextJs.\n
        - Gestion des icones avec react-icons.\n
        - Gestion des notifications avec react-toastify.\n
        
        https://github.com/chifouu65/v2_pierrette_essentielle_e-commerce
        `,
        year: "2023",
        thumbnail: home_pr_v2,
        imgs: [
            home_pr_v2,
        ],
        stack: [
            "React",
            "NextJS",
            "TailwindCSS",
            "Redux Toolkit",
            "Axios",
            "react-icons",
            "react-toastify",
        ],
    },
    {
        id: 'messenger-clone',
        title: 'Messenger Clone',
        link: 'https://github.com/chifouu65/messenger-clone-nextjs',
        description: `Développement d'un clone de Messenger. \n
        (fonctionnalités : (connexion, inscription, chat en temps réel, upload d'images temps réel, responsive design, modification des états des messages, suppression des messages, suppression des conversations, deconnexion) \n
        - Authentification avec Next-Auth et OAuth.\n
        - Base de données avec Prisma et MongoDB.\n
        - Upload d'images avec Cloudinary.\n
        - Chat / Conversation en temps réel avec PusherJs.\n
        - Déploiement avec Vercel.\n
        - Responsive design.\n
        - SEO avec NextJs.\n
        - PWA avec NextJs.\n
        - Animations avec Framer Motion.\n
        - Gestion d'état avec Zustand.\n
        - Gestion des formulaires avec React Hook Form.\n
        - Gestion des classes avec Clsx.\n
        - Gestion des images avec Cloudinary.\n`,
        year: '2023',
        thumbnail: home_D,
        imgs: [home_D, home_P, login_D, login_P, chat_D, chat_P],
        stack: [
            'React',
            'NextJS',
            'TailwindCSS',
            'Next-Auth',
            'Prisma',
            'toastify',
            'zustand',
            'pusherJs',
            'framer-motion',
            'react-icons',
            'react-hook-form',
            'react-select',
            'axios',
            'bcrypt',
            'clsx',
            'date-fns',
            'lodash',
            'prisma',
            'cloudinary',
            'pusher',
            'next-superjson',
            'next-cloudinary',
        ],
        video: 'https://www.youtube.com/watch?v=oxhSJZu-jFI&t=24s',
        type: 'project personnel',
    },
    {
        id: 'astrology-e-commerce',
        title: 'Astrology E-commerce',
        link: 'http://astro.pierrette-essentielle.com',
        description: `Développement d'un site Ecommerce pour une boutique d'astrologie. (Prototype)\n
        - Front-end avec React, NextJs, Chakra UI, React Hook Form, React Icons, Stripe Checkout, OAuth.\n
        - SEO avec NextJs, NextJs Head.\n
        - Version Prototype pour démo.\n`,
        year: '2023',
        thumbnail: astro_product_desktop,
        imgs: [astro_product_desktop, astro_shop_phone, astro_home_phone],
        stack: ['React', 'NextJS', 'Chakra UI', 'NodeJS', 'Express', 'MongoDB', 'Stripe', 'Nginx', 'SEO', 'OAuth'],
        type: 'freelance',
    },
    {
        id: 'ai-powered-3d-website-using-react-threejs',
        title: 'AI 3D Website Using React, Three.js',
        link: 'https://github.com/chifouu65/Ai_Powered_3D_website',
        description: `Développement d'un site web 3D utilisant React, Three.js, TailwindCSS, Framer Motion, valtio, DALLE AI, NodeJS, Express, Cloudinary.\n
        ThreeJS - à en charge la partie 3D du site web\n
        Il permet d'afficher un modèle 3D d'un t-shirt, de le customiser et de le télécharger.\n
        DALLE AI - une Ai utilisée pour générer des images à partir de textes.\n
        - Se site web permet de customiser un t-shirt en 3D, de générer des images à partir de textes, de télécharger le modèle 3D du t-shirt.\n `,
        year: '2023',
        thumbnail: ai_1,
        imgs: [ai_1, ai_2, ai_3],
        stack: ['React', 'ThreeJS', 'TailwindCSS', 'Framer Motion', 'valtio', 'DALLE AI', 'NodeJS', 'Express', 'Cloudinary'],
        type: 'project personnel',
    },
    {
        id: 'pierrette-essentielle',
        title: 'Pierrette Essentielle',
        link: 'https://www.pierrette-essentielle.com/',
        description: `Développeur Full Stack pour un site de e-commerce.\n
        - API sécurisée avec NodeJS, Express, MongoDB, Stripe, Nginx, Https.\n
        - Front-end avec React, TailwindCSS, Framer Motion.\n
        - Déploiement sur un serveur VPS avec Nginx.\n`,
        year: '2023',
        thumbnail: pierrette_full_main,
        imgs: [pierrette_full_main, pierrette_full_2, pierrette_full_about, pierrette_phone_item, pierrette_phone_contact],
        stack: ['React', 'NodeJS', 'Express', 'MongoDB', 'Stripe', 'TailwindCSS', 'Nginx'],
        type: 'freelance',
    },
    {
        id: 'hot-takes',
        title: 'HotTakes',
        link: 'https://github.com/chifouu65/REST-API-Node_Express_Mongo',
        description: `Développement d'une API sécurisée pour une application de critique gastronomique, \n
        à l'aide de NodeJS, Express, MongoDB, JsonWebToken, Bcrypt.\n
        `,
        year: '2022',
        thumbnail: hottakes,
        imgs: [hottakes],
        stack: ["JavaScript", "NodeJS", "Express", "MongoDB", "JsonWebToken", "Bcrypt"],
        type: "project d'étude (openClassrooms)",
    },
    {
        id: 'kasa',
        title: `Kasa`,
        link: `https://github.com/chifouu65/P7_OC`,
        description: `Développement d'une application web React, Sass (avec maquette fournie).\n 
        pour une agence immobilière.\n`,
        year: '2022',
        thumbnail: kasa_full_item,
        imgs: [kasa_phone_home, kasa_phone_item, kasa_full_about, kasa_full_item],
        stack: ['React', 'Scss'],
        type: "project d'étude (openClassrooms)",
    },
    {
        id: 'la-panthere',
        title: `La Panthère`,
        link: `https://github.com/chifouu65/Projt_4_SEO_NL`,
        description: `J'ai optimisé un site web existant pour améliorer son référencement et sa performance.\n 
        - Identifié les parties qui n'étaient pas optimisées pour le référencement et/ou n'étaient pas à jour en termes d'accessibilité.\n
        - Optimisé le contenu et le code source du site en appliquant ces recommandations 
        - J'ai fais des tests de performance et d'accessibilité pour vérifier que les améliorations apportées étaient efficaces.\n
        - J'ai rédigé un rapport d'optimisation pour présenter les résultats de mon travail et les recommandations pour l'avenir.`,
        year: '2022',
        thumbnail: lapanthere_full,
        imgs: [lapanthere_full, lapanthere_phone],
        stack: ['SEO', 'Performance', 'Accessibility'],
        type: "project d'étude (openClassrooms)",
    },
    {
        id: 'ohmyfood',
        title: `OhMyFood`,
        link: 'https://github.com/chifouu65/p3_OC_NL',
        description: `Développement d'un site web pour une entreprise de commande de repas en ligne.\n
        - L'application permet aux utilisateurs de composer leur propre menu et réduire leur temps d’attente dans les restaurants car leur menu est préparé à l’avance.`,
        year: '2022',
        thumbnail: omf_full,
        imgs: [omf_full, omf_phone_item],
        stack: ['Javascript', 'Sass', 'Html'],
        type: "project d'étude (openClassrooms)",
    },
    {
        id: 'kanap',
        title: `Kanap`,
        link: 'https://github.com/chifouu65/P5-Dev-Web-Kanap',
        description: `Développement d'un site e-commerce pour une marque de canapés.\n 
        - Le site permet aux utilisateurs de consulter les produits.\n
        - De les ajouter au panier et de passer commande.`,
        year: '2022',
        thumbnail: kanap_full,
        imgs: [kanap_full, kanap_phone],
        stack: ['Javascript', 'Css', 'Nodejs', 'Express', 'MongoDB'],
        type: "project d'étude (openClassrooms)",
    }
]

export default works