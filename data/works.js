import omf_full from '../public/images/works/omf/omf-full.png'
import omf_phone_item from '../public/images/works/omf/omf-phone_item.png'

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

const works = [
  {
    id: 'ai-powered-3d-website-using-react-threejs',
    title: 'AI-Powered 3D Website Using React, Three.js',
    link: 'https://github.com/chifouu65/Ai_Powered_3D_website',
    description: `
    ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model\n
    React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React\n
    TailwindCSS - a popular utility-first CSS styling framework\n
    Framer Motion - the most popular library used to bring your React website to life with animations
    You'll also learn how to:\n
    
    Load, create and customize stunning 3D models and geometries with various lights,\n
     as well as understand the 3D world with a camera and positioning of an object in space.
    Make your code reusable and scalable using Higher Order Components\n
     (HOCs) and other industry-standard best practices
    Add custom color and file support.
    Generate and use images through DALLE AI
    Download the resulting t-shirt model image
    Ensure responsiveness across all devices and improve your site's performance
    `,
    year: '2023',
    thumbnail: ai_1,
    imgs: [ai_1, ai_2, ai_3],
    stack: ['React', 'ThreeJS', 'TailwindCSS', 'Framer Motion', 'valtio', 'DALLE AI', 'NodeJS', 'Express', 'Cloudinary'],
  },
    {
      id: 'pierrette-essentielle',
      title: 'Pierrette Essentielle',
      link: 'https://www.pierrette-essentielle.com/',
      description: `
      Développeur Full Stack pour un site de e-commerce,
      Développement & Déploiement de l'api et du site web client,
      (freelance)
      `,
      year: '2023',
      thumbnail: pierrette_full_main,
      imgs: [pierrette_full_main, pierrette_full_about, pierrette_phone_item, pierrette_phone_contact],
      stack: ['React', 'NodeJS', 'Express', 'MongoDB', 'Stripe', 'TailwindCSS', 'Nginx'],
    },
    {
      id: 'hot-takes',
      title: 'HotTakes',
      link: 'https://github.com/chifouu65/REST-API-Node_Express_Mongo',
      description: `Développement d'une API sécurisée pour une 
      application de critique gastronomique. (projet d'étude)`,
      year: '2022',
      thumbnail: hottakes,
      imgs: [hottakes],
      stack: ["JavaScript", "NodeJS", "Express", "MongoDB", "JsonWebToken", "Bcrypt"],
    },
    {
      id: 'kasa',
      title: `Kasa`,
      link: `https://github.com/chifouu65/P7_OC`,
      description: `Développement d'une 
      application web (avec maquette fournie),
      pour une agence immobilière. (projet d'étude)`,
      year: '2022',
      thumbnail: kasa_full_item,
      imgs: [kasa_phone_home, kasa_phone_item, kasa_full_about, kasa_full_item],
      stack: ['React', 'Scss'],
    },
    {
      id: 'la-panthere',
      title: `La Panthère`,
      link: `https://github.com/chifouu65/Projt_4_SEO_NL`,
      description: `J'ai optimisé un site web existant pour améliorer 
      son référencement et sa performance. 
      J'ai identifié les parties qui n'étaient pas optimisées 
      pour le référencement et/ou n'étaient pas à jour en termes 
      d'accessibilité, et j'ai fourni une liste de recommandations 
      pour améliorer le site en mettant l'accent sur l'impact sur la 
      vitesse de chargement de la page. J'ai ensuite optimisé le contenu 
      et le code source du site en appliquant ces recommandations et j'ai 
      comparé les résultats de performance avant et après l'optimisation. (projet d'étude)`,
      year: '2022',
      thumbnail: lapanthere_full,
      imgs: [lapanthere_full, lapanthere_phone],
      stack: ['SEO', 'Performance', 'Accessibility'],
    },
    {
      id: 'ohmyfood',
      title: `OhMyFood`,
      link: 'https://github.com/chifouu65/p3_OC_NL',
      description: `
      Développement d'un site web pour une entreprise de commande de repas en ligne.
      Le concept permet aux utilisateurs de composer leur propre menu et réduire leur temps d’attente dans les restaurants car leur menu est préparé à l’avance. Plus de perte de temps à consulter la carte. (projet d'étude)`,
      year: '2022',
      thumbnail: omf_full,
      imgs: [omf_full, omf_phone_item],
      stack: ['Javascript', 'Sass', 'Html'],
    },
    {
      id: 'kanap',
      title: `Kanap`,
      link: 'https://github.com/chifouu65/P5-Dev-Web-Kanap',
      description: `
      Développement d'un site e-commerce pour une marque de canapés. 
      Le site permet aux utilisateurs de consulter les produits,
      de les ajouter au panier et de passer commande. (projet d'étude)
      `,
      year: '2022',
      thumbnail: kanap_full,
      imgs: [kanap_full, kanap_phone],
      stack: ['Javascript', 'Css', 'Nodejs', 'Express', 'MongoDB'],
    }
  ]

export default works