import type { SiteContent } from './types'

const fr: SiteContent = {
  lang: 'fr',
  nav: [
    { label: 'Accueil',    href: '/' },
    { label: 'À propos',   href: '/a-propos' },
    { label: 'À venir',    href: '/a-venir' },
    { label: 'Aperçu',     href: '/apercu' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Contact',    href: '/contact' },
  ],
  meta: {
    title: 'The Hysterical Ladies: Musical Cabaret Exploring Women\'s Sexual Anxieties | The Hysterical Ladies',
    description: "Un cabaret musical explorant les éveils et escapades sexuelles de trois \"filles Hystériques\"!",
  },
  home: {
    heroAlt: 'The Catalogue of Sexual Anxieties at The White Bear Theatre 17TH-28TH sEPTEMBER',
    taglines: [
      "Si les Andrew Sisters chantaient sur les verrues génitales et la masturbation",
      "Un trio sexy dévoile les secrets cachés et inavoués de la féminité",
      "Un mélange de récits authentiques, de faits historiques, enveloppés dans des harmonies somptueuses",
      "Vous allez certainement apprendre une ou deux choses",
    ],
    endorsement: {
      quote: "Vous allez certainement apprendre une ou deux choses",
      rating: 5,
    },
    upcomingCta: 'More about our tour!',
    sectionTitles: {
      upcoming:   'Upcoming',
      contribute: 'Contribuer',
      overview:   'Aperçu',
      news:       'News & Reviews',
      contact:    'Contact',
    },
    contributeText: "Vous aimez ce que vous voyez ? Aidez-nous à continuer à tourner. Chaque contribution nous permet de porter ce spectacle dans de nouvelles salles, dans de nouvelles villes.",
    contributeButton: 'Faire un don.',
    newsSubtitle: 'What media says about us and our show.',
    contactSubtitle: 'Questions par rapport à nos tournées.',
  },
  about: {
    heading: 'Le Catalogue des Angoisses Sexuelles',
    intro: "Un cabaret musical explorant les éveils et escapades sexuelles de trois \"filles Hystériques\"!",
    showDescription: [
      "Un cabaret musical explorant les éveils et escapades sexuelles de trois \"filles Hystériques\"!",
      "À l'instar de Monty Python, nous nous lançons dans une quête. Une quête au nom des femmes du monde entier pour répondre à l'une des grandes questions existentielles : Suis-je sexuellement normale ? Avec des morceaux originaux inspirés des Andrew Sisters, nous voyageons à travers des chapitres hilarants qui reflètent nos propres parcours d'anxiétés sexuelles, de répression, et même de libération !Alors embarquez avec nous, tandis que nous ouvrons notre bible de blasphèmes et que nous vous racontons une petite histoire...",
    ],
    historyHeading: 'Notre Histoire',
    historyParagraphs: [
      "Un après-midi pluvieux, trois amies se sont réfugiées dans un café et se sont installées pour discuter, débattre et critiquer leur vie amoureuse. Après plusieurs tours de \"Est-ce que c'est moi ?\", \"Oh, toi aussi tu as ce poil rebelle là ?\", \"Est-ce que ta grimace quand tu jouis est aussi bizarre que la mienne ?\", il est vite devenu évident à quel point nos angoisses sexuelles se recoupaient, malgré nos différences, sexuelles, culturelles et religieuses. Nous nous sommes également demandé comment les femmes à travers l'histoire avaient affronté les mêmes questions, surtout à une époque où toute pensée exprimée pouvait suffire à qualifier une femme d'\"hystérique\".",
      "C'est ainsi qu'une idée de spectacle a commencé à germer. Notre ambition : normaliser l'anormal ! En partageant nos propres angoisses sexuelles, nous espérions mettre en lumière des problèmes auxquels toutes les femmes font face. La vie est bien trop courte pour s'inquiéter de la taille de son vagin !",
      "Nous avons eu l'honneur de collaborer avec le compositeur reconnu Patrice Peyrieras, qui a sublimé nos paroles grâce à son génie musical.",
      "Le Catalogue des Angoisses Sexuelles est une pièce unique de théâtre posée sur une partition originale inspirée du jazz des années 40. Notre utilisation de la musique swing traditionnelle fait écho à la féminité hégémonique, en jouant sur le contraste entre des harmonies impeccables et des blagues bien décalées.",
      "Nous avons exploré le passé, le présent et le futur pour surmonter nos peurs sexuelles, et tout cela pour votre plaisir comique !",
      "Alors accrochez-vous, et pourquoi pas... attachez-vous aussi, pour un périple endiablé !",
    ],
    performers: [
      {
        name: 'Charlotte Szabo',
        role: 'Autrice et comédienne',
        bio: '',
      },
      {
        name: 'Marion Poli',
        role: 'Autrice et comédienne',
        bio: '',
      },
      {
        name: 'Aniqa Charania',
        role: 'Autrice et comédienne',
        bio: '',
      },
    ],
    crew: [
      { name: 'YeoHyeon Jung',     role: 'Stage Manager' },
      { name: 'Mallory Cheminet',  role: 'Chorègraphe' },
      { name: 'Inès Amoura',       role: 'Méteure en scène' },
      { name: 'Jessica Rock',      role: 'Pianiste' },
      { name: 'Patrice Peyrieras', role: 'Compositeur Musical' },
      { name: 'Anthony Nyro',      role: 'Assistant de Production' },
    ],
    associationLabel: 'Présidente de l\'association Au Haz Art',
    associationPerson: 'Clémentine Marcès',
  },
  upcoming: {
    heading: 'Upcoming Projects',
    stayTuned: 'STAY TUNED FOR UPDATES!',
    ticketLabel: 'Réserver',
    events: [
      {
        venue:     'Essaïon Théâtre',
        city:      'Paris',
        country:   'France',
        dates:     '7–11 · 14–18 · 21–25 janvier 2026',
        ticketUrl: 'https://essaion-theatre.com/spectacle/the-catalogue-of-sexual-anxieties/',
        status:    'upcoming',
      },
    ],
  },
  gallery: {
    heading: 'Gallerie',
    subtitle: 'Jetez un coup d\'œil à la galerie pour suivre nos escapades actuelles.',
    groups: [
      {
        venue: 'Théâtre Essaïon, Paris',
        year: 2024,
        photos: [
          { src: '/images/gallery/essaion-2024-01.jpg', alt: "Le trio en scène à l'Essaïon Théâtre, Paris 2024" },
          { src: '/images/gallery/essaion-2024-02.jpg', alt: "Moment de chant à l'Essaïon Théâtre, Paris 2024" },
          { src: '/images/gallery/essaion-2024-03.jpg', alt: 'Performance au micro, Essaïon Théâtre 2024' },
          { src: '/images/gallery/essaion-2024-04.jpg', alt: 'Tableau final, Essaïon Théâtre 2024' },
        ],
      },
      {
        venue: 'Théâtre White Bear Londres',
        year: 2024,
        photos: [
          { src: '/images/gallery/whitebear-2024-01.jpg', alt: 'Scène au White Bear Theatre, Londres 2024' },
          { src: '/images/gallery/whitebear-2024-02.jpg', alt: 'Trio en représentation, White Bear Theatre 2024' },
          { src: '/images/gallery/whitebear-2024-03.jpg', alt: 'Interprétation musicale, White Bear Theatre 2024' },
        ],
      },
      {
        venue: 'Skirts of Fire Festival',
        year: 2024,
        photos: [
          { src: '/images/gallery/skirts-2024-01.jpg', alt: 'Festival Skirts of Fire 2024 — performance' },
          { src: '/images/gallery/skirts-2024-02.jpg', alt: 'Festival Skirts of Fire 2024 — scène de groupe' },
        ],
      },
      {
        venue: 'Edmonton',
        year: 2023,
        photos: [
          { src: '/images/gallery/edmonton-2023-01.jpg', alt: 'Edmonton Fringe Festival 2023' },
          { src: '/images/gallery/edmonton-2023-02.jpg', alt: 'Représentation à Edmonton 2023' },
        ],
      },
      {
        venue: 'Paris',
        year: 2022,
        photos: [
          { src: '/images/gallery/paris-2022-01.jpg', alt: 'Paris 2022 — première représentation' },
          { src: '/images/gallery/paris-2022-02.jpg', alt: 'Paris 2022 — scène en coulisses' },
        ],
      },
    ],
  },
  news: {
    heading: 'News & Critiques',
    reviews: [
      {
        source: 'BilletRéduc, Paris',
        quote:  "Une exploration audacieuse, spirituelle et décomplexée de la sexualité féminine. Impossible de ne pas rire aux éclats et de ne pas réfléchir profondément.",
        date:   'Octobre 2024',
        city:   'Paris',
        url:    'https://www.billetreduc.com/spectacle/the-catalogue-of-sexual-anxieties-355517',
      },
      {
        source: 'Beyond the Curtain',
        quote:  "Une expérience inoubliable qui aborde des sujets tabous avec humour et finesse. L'alchimie entre les artistes est électrique.!",
        date:   'Septembre 2024',
        city:   'Londres',
        url:    'https://www.beyondthecurtain.co.uk/2024/09/the-catalogue-of-sexual-anxieties.html',
      },
      {
        source: 'There Ought To Be Clowns',
        quote:  "Rien n'est tabou, et la mise en scène d'Inès Amoura trouve le juste équilibre entre sincérité et folie. C'est personnel, c'est vulnérable, et c'est foutrement drôle !",
        date:   'Septembre 2024',
        city:   'Londres',
        url:    'https://oughttobeclowns.com/2024/09/review-the-catalogue-of-sexual-anxieties-white-bear-theatre.html/',
      },
      {
        source: 'London Pub Theatre Magazine',
        quote:  "Le trio aborde sans filtre des sujets qu'on n'ose même pas penser tout haut — et avec un culot rafraîchissant ! Un cabaret / comédie musicale / stand-up étonnamment profond… et même un peu émouvant.",
        rating: 4,
        date:   'Septembre 2024',
        city:   'Londres',
        url:    'https://www.londonpubtheatres.com/review-the-catalogue-of-sexual-anxieties-at-white-bear-theatre-27-28-september-2024',
      },
      {
        source: 'Everything Theatre',
        quote:  "Une création aussi imprévisible qu'un orgasme surprise ! Le tout forme un spectacle fascinant par son audace et son inventivité — surtout sur des sujets qui mettent certains mal à l'aise… mais ici, tout est traité avec tact, humour et intelligence.",
        rating: 4,
        date:   'Septembre 2024',
        city:   'Londres',
        url:    'https://everything-theatre.co.uk/2024/09/review-the-catalogue-of-sexual-insecurities-white-bear-theatre/',
      },
      {
        source: 'The PEG Reviews',
        quote:  "C'est une escapade divertissante à travers une sélection divertissante d'angoisses liées à la sexualité. Ces femmes nous guident avec charme et humour dans le monde labyrinthique du sexe et ses défis. Nous découvrons les histoires personnelles de chacune d'elles et leur relation avec le sexe, les hommes et tout ce qui s'y rapporte.",
        rating: 3,
        date:   'Août 2023',
        city:   'Edmonton',
      },
      {
        source: 'Info Edmonton',
        quote:  "Si vous vous êtes déjà demandé comment les femmes gèrent leur sexualité, ne manquez pas The Catalogue of Sexual Anxieties.",
        rating: 5,
        date:   '21 août 2023',
        city:   'Edmonton',
        url:    'https://infoedmonton.com/article/fringe-show-recommendations-2023-ongoing/',
      },
      {
        source: '12thnight — Liz Nichols',
        quote:  "Jouons à 'Qui est le déviant ?",
        date:   '19 août 2023',
        city:   'Edmonton',
        url:    'https://12thnight.ca/2023/08/19/lets-play-whos-the-deviant-the-catalogue-of-sexual-anxieties-a-fringe-review/',
      },
      {
        source: 'St Albert Gazette',
        quote:  "Ce spectacle audacieux explore les vies intimes de trois femmes venant de différents pays, révélant un fil conducteur d'expériences et de défis partagés.",
        date:   '24 août 2023',
        city:   'Edmonton',
        url:    'https://www.stalbertgazette.com/2023-fringe-fest/fringe-review-the-catalogue-of-sexual-anxieties-7436547',
      },
    ],
  },
  contact: {
    heading: 'Contact',
    formLabel: 'Questions par rapport à nos tournées.',
    fields: {
      name:    'Votre Nom',
      email:   'Votre mail*',
      message: 'Votre message ici*',
      send:    'Envoyer votre message',
    },
    successMessage: 'Message envoyé — nous vous répondrons dès que possible.',
    errorMessage:   'Une erreur est survenue. Réessayez ou écrivez-nous directement à manager@hystericalladies.net.',
    address:      '29 ST3 TOUR CORTINA, 41 RUE DU DISQUE, 75013 PARIS',
    siret:        'SIRET 82398276400024',
    registration: 'PLATESV-D-2024-005680',
    manager:      'Representée par Clémentine MARCES',
  },
  footer: {
    company:   'Au Haz Art',
    devCredit: 'Devélopé avec amour par QuaiLabs',
    copyright: '© 2025. Au-Haz-Art Touts les droits reservés.',
  },
}

export default fr
