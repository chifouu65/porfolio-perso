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

import booki_full from '../public/images/works/booki/booki_full.png'
import booki_phone from '../public/images/works/booki/booki_phone.png'

import kanap_full from '../public/images/works/kanap/kanap_full.png'
import kanap_phone from '../public/images/works/kanap/kanap_phone.png'

const works = [
    {
      id: 'pierrette-essentielle',
      title: 'Pierrette Essentielle',
      link: 'https://www.pierrette-essentielle.com/',
      description: `Développeur Full Stack pour un site de commerce électronique chez Pierrette Essentielle (Freelance). Création d'un site de commerce électronique, développement d'une API sécurisée à l'aide de Nodejs et d'express pour la gestion des produits et des commandes, et développement du site web client en utilisant React, TailwindCss, Stripe.`,
      year: '2023',
      thumbnail: pierrette_full_main,
      imgs: [pierrette_full_main, pierrette_full_about, pierrette_phone_item, pierrette_phone_contact],
      stack: ['React', 'NodeJS', 'Express', 'MongoDB', 'Stripe'],
    },
    {
      id: 'hot-takes',
      title: 'HotTakes',
      link: 'https://github.com/chifouu65',
      description: `Développement d'une API sécurisée pour une application de critique gastronomique en utilisant Nodejs, Express, JsonWebToken, Bcrypt et MongoDB.`,
      year: '2022',
      thumbnail: hottakes,
      imgs: [hottakes],
      stack: ["JavaScript"]
    },
    {
      id: 'kasa',
      title: `Kasa`,
      link: `https://github.com/chifouu65/P7_OC`,
      description: `Développement d'une maquette pour une agence immobilière à l'aide de React et Sass.`,
      year: '2022',
      thumbnail: kasa_full_item,
      imgs: [kasa_phone_home, kasa_phone_item, kasa_full_about, kasa_full_item],
      stack: ['React', 'Sass'],
    },
    {
      id: 'la-panthere',
      title: `La Panthère`,
      link: `https://github.com/chifouu65/Projt_4_SEO_NL`,
      description: `J'ai optimisé un site web existant pour améliorer son référencement et sa performance. J'ai identifié les parties qui n'étaient pas optimisées pour le référencement et/ou n'étaient pas à jour en termes d'accessibilité, et j'ai fourni une liste de recommandations pour améliorer le site en mettant l'accent sur l'impact sur la vitesse de chargement de la page. J'ai ensuite optimisé le contenu et le code source du site en appliquant ces recommandations et j'ai comparé les résultats de performance avant et après l'optimisation.`,
      year: '2022',
      thumbnail: lapanthere_full,
      imgs: [lapanthere_full, lapanthere_phone],
      stack: ['React', 'Sass'],
    },
    {
      id: 'booki',
      title: `Booki`,
      link: 'https://github.com/chifouu65/p2_OC_NL/tree/intégration-web',
      description: `Création d'une maquette pour une agence immobilière à l'aide de HTML, CSS, Sass et JavaScript.`,
      year: '2022',
      thumbnail: booki_full,
      imgs: [booki_full, booki_phone],
      stack: ['React', 'Sass'],
    },
    {
      id: 'ohmyfood',
      title: `OhMyFood`,
      link: 'https://github.com/chifouu65/p3_OC_NL',
      description: `Création d'une maquette pour un site web de restaurant en utilisant HTML, CSS et JavaScript.`,
      year: '2022',
      thumbnail: omf_full,
      imgs: [omf_full, omf_phone_item],
      stack: ['React', 'Sass'],
    },
    {
      id: 'kanap',
      title: `Kanap`,
      link: 'https://github.com/chifouu65/P5-Dev-Web-Kanap',
      description: `Création d'une maquette pour un site web de meubles en utilisant HTML, CSS, Sass et JavaScript.`,
      year: '2022',
      thumbnail: kanap_full,
      imgs: [kanap_full, kanap_phone],
      stack: ['React', 'Sass'],
    }
  ]

export default works