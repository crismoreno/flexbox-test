import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = [
    { id: 1,
      name: 'CHRISTMAS CAMPAIGN',
      metatags: ['photography', 'design', 'comunication', 'online-marketing', 'social-media', 'nordic'],
      tags: ['PHOTOGRAPHY', ' DESIGN', ' COMUNICATION', ' ONLINE MARKETING', ' SOCIAL MEDIA'],
      img: ['../../assets/img/projects/medran/medran.jpg'],
      cover: '../../assets/img/projects/medran/medran-cover.jpg',
      description: `Cansaladeries Medrán is a small chain of 4 stores located in Sabadell (Barcelona).
      The customer wanted visibility on social media such as Instagram or Facebook. Graphic content had to be done on a regular basis and promoted using Facebook Ads.
      The customer asked for special Christmas Campaign so a website was developed from scratch and a marketing plan was created and followed. This marketing plan consisted of a lucky draw, Google Adwords campaign, Facebook Ads campaign and Google Analytics.`,
      customer: 'CANSALADERIES MEDRAN',
      date: '2015',
      // collaborators: ['NORDIC WEBSITES'],
      website: 'http://cansaladeriesmedran.com/',
      isfeatured: false,
      madeat: 'Nordic Projects as SEM & SMM'
    },
    { id: 2,
    name: 'THE HUNT',
    metatags: ['video', 'design', 'esdi'],
    tags: [' VIDEO', ' DESIGN'],
    cover: '../../assets/img/projects/thehunt/the-hunt-cover.jpg',
    description: `We were asked to do a video clip. Using audiovisual resources and techniques, we had to come up with a concept that could follow the song\'s rythm and melody.

    (Song: The Hunt | Artist: Ex-Guru)`,
    customer: `BACHELOR'\S PROJECT`,
    date: '2013',
    collaborators: ['OWN PROJECT'],
    website: 'https://vimeo.com/85111459',
    link: 'https://player.vimeo.com/video/85111459',
    isfeatured: false
    },
    { id: 3,
    name: 'GOOGLED GAME',
    metatags: ['code', 'design', 'js', 'jquery', 'html', 'css3', 'vanillajs', 'git', 'ironhack', 'css'],
    tags: [' CODE', ' DESIGN'],
    img: ['../../assets/img/projects/googled/googled.jpg'],
    cover: '../../assets/img/projects/googled/googled-cover.jpg',
    description: `This project took place during the week 3/9 of the Web Developement Bootcamp at Ironhack.
    We were asked to buid a game within 5 days.

    This game had to follow the requirements below:
    - Functional
    - Deployed to Github Pages
    - Object Oriented vanilla jS
    - Responsive

    - JQuery has been used for DOM Manipulation purposes

    Googled is a game about guessing: ¿Which concept may have more monthly Google searches on average?
    1. STARTER VIEW: Click on the gray button to start.

    2. GAME VIEW: The screen will be splited in two, 'Do you think second concept has more searches or less?' try to answer before time runs out! If you're right, you'll score 1 point. You'll keep playing until you fail.

    3. GAME OVER VIEW: Two buttons will pop up, 'play again' will take you back to the game view and 'back to beginning' will go back to the starter view.
    `,
    customer: `FIRST PROJECT at IRONHACK`,
    date: '2017',
    collaborators: ['OWN PROJECT'],
    website: 'https://crismoreno.github.io/googled',
    isfeatured: false,
    codelang: ['VanillaJS', 'JQuery', 'HTML5', 'CSS3', 'JS', 'GIT']
  },
  { id: 4,
    name: 'NEIGHBOURHOOD',
    metatags: ['design', 'comunication', 'code', 'management','express', 'node', 'jquery', 'bootstrap', 'html', 'css', 'js', 'git', 'ironhack'],
    tags: [' DESIGN', ' COMUNICATION', ' CODE', ' MANAGEMENT','EXPRESS', 'NODE.JS', 'JQUERY', 'BOOTSTRAP', 'HTML5', 'CSS3', 'JS', 'GIT'],
    img: ['../../assets/img/projects/neighbourhood/neighbourhood2.jpg'],
    cover: '../../assets/img/projects/neighbourhood/neighbourhood-cover.jpg',
    description: `This project took place during the week 6/9 of the Web Developement Bootcamp at Ironhack.
    We were asked to buid something with someone within 5 days. My partner in this project was Clara Ameller who worked on the Back-End.

    App requirements below:
    - Functional
    - Include authorization & authentication and user management
    - The app had to be rendered from the backend using the following technologies: Node.js, Express and Mongo.DB
    - Deployed to Heroku
    - Responsive

    - As a personal appreciation we both agreed on using Bootstrap in order to learn about it.

    Neighbourhood is a webapp in which, after creating an account and logging in with your personal data, you can offer yourself to do a certain thing for someone for a price of your own choice.

    It's like Wallapop for services!

    We can also search for other people's services, entering a keyword in the searcher or directly searching through the categories.
    In the 'list view' you'll see all the services matching your entered keywords and on the right side, there will be a map pointing both your location and the ones of your search (Google Maps API).
    If you select a service you'll see all its detailed info, whereas the contact data will only be shown once you're logged in. If not, you'll have to log in.

    DEMO: If you type "karate" in the searcher, you'll see me offering karate lessons.`,
    customer: `SECOND PROJECT at IRONHACK`,
    date: '2017',
    collaborators: ['CLARA AMELLER (BACK-END)'],
    website: 'https://neighbourhood.herokuapp.com',
    isfeatured: false,
    codelang: ['Express', 'Node.js', 'JQuery', 'Bootstrap', 'HTML5', 'CSS3', 'JS', 'GIT']
  },
  { id: 5,
    name: 'FOODTENDER',
    metatags: ['design', 'comunication', 'code', 'management', 'express', 'node', 'jquery', 'bootstrap', 'html', 'css', 'angular', 'js', 'git', 'ironhack'],
    tags: [' DESIGN', ' COMUNICATION', ' CODE', ' MANAGEMENT', 'EXPRESS', 'NODE.JS', 'JQUERY', 'BOOTSTRAP', 'HTML5', 'CSS3', 'ANGULAR', 'JS', 'GIT'],
    img: ['../../assets/img/projects/foodtender/foodtender2.jpg'],
    cover: '../../assets/img/projects/foodtender/foodtender-cover.jpg',
    description: `This project took place during the week 9/9 of the Web Developement Bootcamp at Ironhack.
    We were asked to buid something with someone of our own choice within 5 days. My partner in this project was Clara Ameller who worked on the Back-End.

    App requirements below:
    - Functional
    - Include authorization & authentication and user management
    - It had to be a REST API that would consist of a client (Front-End developed with Angular) and a server (Back-End developed with Express, Node.js and MongoDB)
    - Deployed to Heroku
    - Responsive

    - As a personal appreciation we both agreed on using Materialize in order to learn about it.

    Foodtender is a food Guru! If you enter the ingredients in your fridge, Footender is gonna tell you some recipes you can cook with those ingredients.
    Foodtender has 122 ingredients and 12 recipes recognised, this data had to be entered manually because we couldn't find a free API.
    As a user, you can create an account, log in with your personal data and bookmark your favorite recipes. If you are not logged in, you cannot bookmark any recipe.

    DEMO: Leave all the basic ingredients included in the search by default and add: Bacon, Potato, Breadcrumbs and Cheese. Some recipes will show up, you can still modify your search items in this view, adding or removing them. Select a recipe, and there you go!`,
    customer: `THIRD PROJECT at IRONHACK`,
    date: '2017',
    collaborators: ['CLARA AMELLER (BACK-END)'],
    website: 'https://foodtender.herokuapp.com',
    isfeatured: true, 
    codinglang: ['Express', 'Node.js', 'JQuery', 'Bootstrap', 'HTML5', 'CSS3', 'Angular', 'JS', 'GIT']
  },
  { id: 6,
    name: 'GRAPHIC SUPPORT & BRANDING',
    metatags: ['photography', 'design', 'comunication', 'social-media', 'management'],
    tags: ['PHOTOGRAPHY', ' DESIGN', ' COMUNICATION', ' SOCIAL MEDIA', ' MANAGEMENT'],
    img: ['../../assets/img/projects/medran/medran-graphic.jpg'],
    cover: '../../assets/img/projects/medran/medran-cover.jpg',
    description: `Graphic support had to be created on a regular basis in order to improve brand awareness and promoting products.`,
    customer: 'CANSALADERIES MEDRAN',
    date: '2012 - 2017',
    collaborators: ['CARLOTA GASSÓ'],
    website: 'https://medran.cat',
    isfeatured: false
  },
  { id: 7,
    name: ' RE-STYLING',
    metatags: ['photography', 'design', 'comunication', 'management'],
    tags: ['PHOTOGRAPHY', ' DESIGN', ' COMUNICATION', ' MANAGEMENT'],
    img: ['../../assets/img/projects/naturalkids/naturalkids.jpg'],
    cover: '../../assets/img/projects/naturalkids/naturalkids-cover.jpg',
    description: `After a few years working as a designer at naturalKIDS, a new website had to be done from scratch in order to improve both the look and feel and the functionality.
    Once I started with the design I realised the isotype had lacks that needed to be fixed to gain integration within all digital platforms.
    The customer was very insistent in keeping the nature of everything, so the less I changed, the better.`,
    customer: 'NATURALKIDS',
    date: '2013 - 2017',
    collaborators: ['MÍRIAM ESLAVA'],
    website: 'http://www.naturalkids.cat/',
    isfeatured: false
  },
  { id: 8,
    name: 'BRANDING',
    metatags: ['design', 'comunication'],
    tags: [' DESIGN', ' COMUNICATION'],
    img: ['../../assets/img/projects/pbcapital/pbcapital.jpg'],
    cover: '../../assets/img/projects/pbcapital/pbcapital-cover.jpg',
    description: `"PB" stands for "Planas Bielsa" which are the surnames of a businessman in Barcelona. He required a corporate image that would feel transparent, clear, trustworthy, classical and that could represent his person.`,
    customer: 'PB | CAPITAL',
    date: '2016',
    collaborators: ['OWN PROJECT'],
    isfeatured: false
  },
  // { id: 9,
  //   name: 'BRANDING',
  //   metatags: ['design', 'comunication'],
  //   tags: [' DESIGN', ' COMUNICATION'],
  //   img: ['../../assets/img/projects/joventutactiva/joventutactiva.jpg'],
  //   cover: '../../assets/img/projects/joventutactiva/joventutactiva-cover.jpg',
  //   description: `Joventut Activa is an association for teens based in Sant Quirze del Vallès. They required a symbol that would represent the association.`,
  //   customer: 'JOVENTUT ACTIVA',
  //   date: '2015',
  //   collaborators: ['OWN PROJECT'],
  //   isfeatured: false
  // },
  { id: 10,
    name: 'BRAND & IDENTITY',
    metatags: ['design', 'comunication'],
    tags: [' DESIGN', ' COMUNICATION'],
    img: ['../../assets/img/projects/villenaruhl/villenaruhl.jpg'],
    cover: '../../assets/img/projects/villenaruhl/villenaruhl-cover.jpg',
    description: `Villena & Rühl are the surnames of a married couple who wanted to launch a finantial trading online school. They both wanted something that would feel classic but not too much, trustworthy, reliable, clear & sophisticated...
    The "&" symbol represents the bound between them and both typography and colours are specially chosen in order to represent these values.
    Thay required business cards, stationery and templates for some of the supports they worked with.`,
    customer: 'VILLENA & RÜHL',
    date: '2014',
    collaborators: ['OWN PROJECT'],
    isfeatured: false
  },
  { id: 11,
    name: 'BRANDING AND UXUI',
    metatags: ['design', 'comunication', 'management'],
    tags: [' DESIGN', ' COMUNICATION', ' MANAGEMENT'],
    img: ['../../assets/img/projects/wedrink/wedrink.jpg'],
    cover: '../../assets/img/projects/wedrink/wedrink-cover.jpg',
    description: `WeDrink was a SAAS (Software as a service) StartUp aiming to develop an application for nightclubs, where people could ask for drinks through their own smartphones.
    In addition to that, the application would promote special offers, different nightclubs and remarkable music sessions. The application was thought to include drinking games and other fun content.`,
    customer: 'WEDRINK',
    date: '2016',
    collaborators: ['OWN PROJECT'],
    isfeatured: false
  },
  // { id: 12,
  //   name: 'BRANDING',
  //   metatags: ['design', 'comunication'],
  //   tags: [' DESIGN', ' COMUNICATION'],
  //   img: ['../../assets/img/projects/pumpitnanotech/pumpit.jpg'],
  //   cover: '../../assets/img/projects/pumpitnanotech/pumpit-cover.jpg',
  //   description: `PumpIt Nanotech was a nanotech StartUp specialised in fluids that required a corporate identity. The result had to feel techy, reliable, professional...
  //   The symbol in the combination mark represents the shape of the machine they worked with.`,
  //   customer: 'PUMPIT NANOTECH',
  //   date: '2016',
  //   collaborators: ['OWN PROJECT'],
  //   isfeatured: false
  // },
  { id: 13,
    name: 'BRAND & IDENTITY',
    metatags: ['design', 'comunication', 'management'],
    tags: [' DESIGN', ' COMUNICATION', ' MANAGEMENT'],
    img: ['../../assets/img/projects/comac/comac.jpg'],
    cover: '../../assets/img/projects/comac/comac-cover.jpg',
    description: `'Comac Esports & Lleure' is a company that offers services related to sports and management of sport venues.
    They needed someone to layout and produce a project for a public contest.
    I recommended to re-style their corporate identity. `,
    customer: 'COMAC S.L',
    date: '2016-2017',
    collaborators: ['OWN PROJECT'],
    website: 'https://comacsl.com/',
    isfeatured: false
  },
  { id: 14,
    name: 'THE MAKER',
    metatags: ['photography', 'design', 'comunication', 'video', 'management', 'esdi'],
    tags: ['PHOTOGRAPHY', ' DESIGN', ' COMUNICATION', ' VIDEO', ' MANAGEMENT'],
    img: ['../../assets/img/projects/themaker/themaker.jpg'],
    cover: '../../assets/img/projects/themaker/themaker-cover.jpg',
    description: `We had to come up with a publication that would follow certain values selected by our team. After doing a research, a moodboard and the attire selection from different spanish designers and brands this was the result.`,
    customer: `BACHELOR'\S PROJECT`,
    date: '2015',
    link: 'https://player.vimeo.com/video/122646273',
    collaborators: ['DAVID MAESO, MIRIAM GARCIA, ANNA TRIAS, ENRIC MARTÍ, CARLOTA GASSÓ'],
    download: 'https://drive.google.com/open?id=1sXVX2hYiVX4AuOUJQR53wRIqQSjmaa3d',
    isfeatured: false
  },
  { id: 15,
    name: 'VIDEO',
    metatags: ['photography', 'design', 'comunication', 'video', 'management'],
    tags: ['PHOTOGRAPHY', ' DESIGN', ' COMUNICATION', ' VIDEO', ' MANAGEMENT'],
    cover: '../../assets/img/projects/cns/cns-cover.jpg',
    description: `The "Club Natació de Sabadell" needed a comercial promoting video for their training camps and accomodations.`,
    customer: 'CNS TRAINING CAMPS SBD',
    date: '2014',
    collaborators: ['CARLOTA GASSÓ BARNADAS'],
    website: 'https://vimeo.com/252252561',
    link: 'https://player.vimeo.com/video/252252561',
    isfeatured: false
  },
  { id: 16,
    name: 'PROPERA PARADA (NEXT STOP)',
    metatags: ['photography', 'design', 'comunication', 'video', 'management', 'esdi'],
    tags: ['PHOTOGRAPHY', ' DESIGN', ' COMUNICATION', ' VIDEO', ' MANAGEMENT'],
    img: ['../../assets/img/projects/nextstop/pfg.jpg'],
    cover: '../../assets/img/projects/nextstop/pfg-cover.jpg',
    description: `In this project, you'll see how, after a deep field study about a collective, a proposal is developed for them.
    AMUC (Asociación de músicos de la calle) was the selected collective. They are based in Barcelona and organised by themselves to be a group of underground musicians in the city.
    The project lays on the argumentative basis of the collective's participative observation, the historical research about the city, its urbanism politics and an
    analysis of the current situation.

    WHY BARCELONA?
    Because is a city rich in culture and loftiness. A city that shows off about how it is but hides the repression it exerts over some collectives.

    WHY AMUC?
    AMUC is the chosen collective due to its self-management, its legal recognition and its acomplishment under the TMB (Transports metropolitans de Barcelona) permisions. That's why
    they are out of any legal punishment.
    Moreover, it's a cheerful collective, very heterogeneous but also very stigmatized. AMUC deserves to be seen from another perspective.
    The members have a different halo, are (generally) bohemians megalomaniac and real experts in music rather than homeless, as it's generally thought.

    WHY THE UNDERGROUND?
    The underground's space is equal for everyone, a place with special conditions, public but private at the same time and non free of charge.
    It's an ambiguous space, different. It is interesting to know all of its details and how this association can be self-managed under this conditions.
    Moreover, in this space, there're surveillance cameras, turning it into a permanently watched over place while being a transit space, a space in which we tend to be for a little period of time.
    So, people who stays there are not behavouring as a regular user.
    All of this, makes the underground a really unique space, interesting and intriguing at the same time.`,
    customer: `FINAL BACHELOR'\S PROJECT`,
    date: '2015',
    collaborators: ['ALEJANDRO PALOMES'],
    link: 'https://player.vimeo.com/video/248653843',
    download: 'https://drive.google.com/drive/folders/1AptMzDQRJzPhtPFIT1FhR8ZepjO96xS1?usp=sharing',
    isfeatured: false
  },
  { id: 17,
    name: 'EVENT MANAGEMENT',
    metatags: ['design', 'comunication', 'management', 'esdi'],
    tags: [' DESIGN', ' COMUNICATION', ' MANAGEMENT'],
    img: ['../../assets/img/projects/sincro/sincro.jpg'],
    cover: '../../assets/img/projects/sincro/sincro-cover.jpg',
    description: `As part of a bachelor’s subject, we had to organise an event.

    Ona Carbonell was studying in our same university, so we decided to take benefit of this situation. She took us to C.A.R Sant Cugat, where we could see how all the spanish team trained together.
    The porposal was about presenting the Spanish team to the olympics.`,
    customer: `BACHELOR'\S PROJECT`,
    date: '2015',
    collaborators: ['OWN PROJECT'],
    download: 'https://drive.google.com/file/d/1ZBmBT9db9GZDFAHKTg_kgqCJL47uDmot/view?usp=sharing',
    isfeatured: false
  },
  { id: 18,
    name: 'BRAND MANAGEMENT',
    metatags: ['photography', 'design', 'comunication', 'management', 'esdi'],
    tags: ['PHOTOGRAPHY', ' DESIGN', ' COMUNICATION', ' MANAGEMENT'],
    img: ['../../assets/img/projects/terraguillermina/terraguillermina.jpg'],
    cover: '../../assets/img/projects/terraguillermina/terraguillermina-cover.jpg',
    description: `As part of a bachelor’s subject, we had to create a brand and a business plan from scratch.
    Our team came up with: TERRA GUILLERMINA.`,
    customer: `BACHELOR'\S PROJECT`,
    date: '2015',
    collaborators: ['CARLOTA GASSÓ, IRENE MACULÉ, RAÜL GARCIA & MERITXELL MARTÍNEZ'],
    download: 'https://drive.google.com/file/d/1gsG7mliBERwmrMmzRQ8YMpRz9iPv0wO2/view?usp=sharing',
    isfeatured: false
  },
  { id: 19,
    name: 'PHOTOGRAPHY AND CURIOSITY',
    metatags: ['photography', 'design', 'comunication'],
    tags: ['PHOTOGRAPHY', ' DESIGN', ' COMUNICATION'],
    img: ['../../assets/img/projects/insta/insta.jpg'],
    cover: '../../assets/img/projects/insta/insta-cover.jpg',
    description: `I love presenting my personal Instagram account in my portfolio because it's a life project. I have had several periods in which I have focused in different topics.
    You'll see all my trips, my curiosities, my thoughts… It's just me!`,
    customer: 'PERSONAL PROJECT',
    date: '2011 - TODAY',
    collaborators: ['OWN PROJECT'],
    website: 'https://www.instagram.com/calpimoreno/',
    isfeatured: false
  },
  { id: 20,
    name: 'TYPOGRAPHY',
    metatags: ['design', 'esdi'],
    tags: [' DESIGN'],
    img: ['../../assets/img/projects/typography/typo.jpg'],
    cover: '../../assets/img/projects/typography/typo-cover.jpg',
    description: `As part of a bachelor’s subject, we were asked to create a typography composition. A written text that woudn't behave as something to be read, but something to be seen as an image. `,
    customer: `BACHELOR'\S PROJECT`,
    date: '2012',
    collaborators: ['OWN PROJECT'],
    isfeatured: false
  },
  { id: 21,
    name: 'JACKOBSON FUNCTION OF LANGUAGE',
    metatags: ['design', 'comunication', 'esdi'],
    tags: [' DESIGN', ' COMUNICATION'],
    img: ['../../assets/img/projects/gibson/gibson.jpg'],
    cover: '../../assets/img/projects/gibson/gibson-cover.jpg',
    description: `As part of a bachelor’s subject, we had to create a whole campaign for an existing brand.
    Taking into account the 6 functions of language:
    - Emotive (alternatively called "expressive" or "affective") function.
    - Metalingual (alternatively called "metalinguistic" or "reflexive") function.
    - Phatic function.
    - Poetic function.
    - Conative function.
    - Referential function.`,
    customer: `BACHELOR'\S PROJECT`,
    date: '2012',
    collaborators: ['OWN PROJECT'],
    website: 'https://en.wikipedia.org/wiki/Jakobson%27s_functions_of_language',
    isfeatured: false
  },
  { id: 22,
    name: 'STORYTELLING',
    metatags: ['design', 'comunication', 'esdi'],
    tags: [' DESIGN', ' COMUNICATION'],
    img: ['../../assets/img/projects/storytelling/leluthier.jpg'],
    cover: '../../assets/img/projects/storytelling/leluthier-cover.jpg',
    description: `As part of a bachelor’s subject, we were asked to create graphic content from a piece of story:

    “¿Mi historia?
    Tan sólo era una niña cuando encontré la vieja guitarra acústica
    que había pertenecido a mi padre, un hippie empedernido que murió
    haciendo lo que más le  amaba, la música. A partir de ese momento emprendí
    la mayor aventura de mi vida. Aprendí a tocarla, a dibujarla , a afinarla?,
    a montarla y desmontarla… Terminé estableciendo un pequeño y modesto taller
    en un ático de la capital catalana.
    Actualmente, yo creo la música, haciendo guitarras a medida para que otros las toquen.
    Soy quien saca el sonido que vive en los árboles.”`,
    customer: `BACHELOR'\S PROJECT`,
    date: '2012',
    collaborators: ['OWN PROJECT'],
    isfeatured: false
  },
  { id: 23,
    name: 'RENDER',
    metatags: ['design', 'esdi'],
    tags: [' DESIGN'],
    img: ['../../assets/img/projects/render/render.jpg'],
    cover: '../../assets/img/projects/render/render-cover.jpg',
    description: `As part of a bachelor’s subject, we were asked to do render something in Photoshop my choice was a Polaroid Land camera.`,
    customer: `BACHELOR'\S PROJECT`,
    date: '2012',
    collaborators: ['OWN PROJECT'],
    website: 'https://www.google.es/search?q=polaroid+land+camera&source=lnms&tbm=isch&sa=X&ved=0ahUKEwikh5r9o_3YAhVGbRQKHYgnB-sQ_AUICigB&biw=1865&bih=960#imgrc=4M7l1hkNOEElVM:',
    isfeatured: false
  },
  { id: 24,
    name: 'CARTA AL CEL',
    metatags: ['design', 'comunication', 'esdi'],
    tags: [' DESIGN', ' COMUNICATION'],
    img: ['../../assets/img/projects/cartaalcel/cartaalcel.jpg'],
    cover: '../../assets/img/projects/cartaalcel/cartaalcel-cover.jpg',
    description: `I like saying 'Happy new year' in the most special way. That's why, on 2012 I gave a rocket to every member of my family, so that they could write their new year’s wishes and send them to the sky! 
    Can you imagine a better way to start the year?  🚀`,
    customer: 'PERSONAL PROJECT',
    date: '2012',
    collaborators: ['OWN PROJECT'],
    isfeatured: false
  },
  // { id: 25,
  //   name: 'DOJO VIRTUAL',
  //   metatags: ['design', 'comunication', 'code', 'wordpress', 'management', 'php', 'css'],
  //   tags: [' DESIGN', ' COMUNICATION', 'CODE', 'WORDPRESS', 'MANAGEMENT', 'PHP', 'CSS'],
  //   img: ['../../assets/img/projects/dojo/dojo.png'],
  //   cover: '../../assets/img/projects/dojo/dojo-cover.png',
  //   description: `After 5 years of practicing Karate Kyokushin I decided it was time to create a platform for my dojo. This platform had to be able to promote the dojo's activity as well as allowing the sensei to upload private content for the karatekas in the dojo. Video made by Oriol Colomar.`,
  //   customer: 'PERSONAL PROJECT',
  //   date: '2017',
  //   link: 'https://www.youtube.com/embed/AhfJC84xksw',
  //   website: 'http://www.notcalpi-test.com/',
  //   collaborators: ['DOJO KARATE IVÁN LÓPEZ', 'ORIOL COLOMAR'],
  //   isfeatured: false,
  //   codinglang: ['Wordpress', 'PHP', 'CSS']
  // },
    { id: 26,
    name: 'PARTYAPP',
    metatags: ['code', 'html', 'css', 'sass', 'bootstrap', 'nodejs', 'express', 'mvc', 'ejs', 'node', 'mysql'],
    tags: [' CODE', ' HTML', ' CSS', ' SASS', ' BOOTSTRAP', 'NODEJS', 'EXPRESS', 'MVC', 'EJS', 'NODE', 'MYSQL'],
    img: ['../../assets/img/projects/partyapp/partyapp.png'],
    cover: '../../assets/img/projects/partyapp/partyapp-cover.png',
    description: `Partyapp is a personal project thought to be a party management tool developed in Express, EJS, SASS, Mysql and deployed to Heroku. I created this app in order to plan and manage my housewarming party.`,
    customer: 'PERSONAL PROJECT',
    date: '2019',
    website: 'https://partyapp-node.herokuapp.com/',
    isfeatured: true,
    codinglang: [' CODE', ' HTML', ' CSS', ' SASS', ' BOOTSTRAP', 'NODEJS', 'EXPRESS', 'MVC', 'EJS', 'MYSQL']
  },
  { id: 27,
    name: 'TIENDACLAN.ES',
    metatags: ['code', 'magento', 'php', 'css', 'sass', 'dobcn'],
    tags: ['CODE', 'MAGENTO', 'PHP', 'CSS', 'SASS'],
    img: ['../../assets/img/projects/tiendaclan/tiendaclan.png'],
    cover: '../../assets/img/projects/tiendaclan/tiendaclan-cover.png',
    description: `Tiendaclan is a toy specialised ecommerce developed at dobcn. This ecommerce has been developed using Magento 2.1.13 and Porto Theme. My tasks during the development of the platform were not only mantaining the site through managing CMS blocks but also coming up with custom developments that affected directly to the end user experience. `,
    customer: 'THE ROCKET FACTORY',
    date: '2018',
    website: 'https://tiendaclan.es/',
    // collaborators: ['Olga Ortiz', ' Julio Raimondi', ' Francesca Cerón'],
    isfeatured: false,
    codinglang: ['Magento', 'PHP', 'CSS', 'SASS'],
    madeat: 'Dobcn as Front-End Developer'
  },
  { id: 28,
    name: 'ELRINCONDELCUIDADOR.ES',
    metatags: ['code', 'wordpress', 'php', 'css', 'dobcn', 'html'],
    tags: ['CODE', 'WORDPRESS', 'PHP', 'CSS', 'DOBCN', 'html'],
    img: ['../../assets/img/projects/erc/erc.png'],
    cover: '../../assets/img/projects/erc/erc-cover.png',
    description: `As a Front-End developer at DOBCN I helped out in manteinance-related tasks. Although the platform was already developed at my arrival, I contributed to the new look and feel of the site and to developing new features. The site is developed in Wordpress and consists in a blog centered in caring awareness. I also helped out in mantainance, switching the whole css into scss, cleaning up code and plugins as the website was first developed in 2014.`,
    customer: 'HARTAMANN',
    date: 'Improving day by day',
    website: 'https://www.elrincondelcuidador.es/',
    // collaborators: ['Olga Ortiz', ' Julio Raimondi', ' Francesca Cerón'],
    isfeatured: false,
    codinglang: ['Wordpress', ' PHP', ' CSS', 'HTML', 'NODE'],
    madeat: 'Dobcn as Front-End Developer'
  },
  // { id: 29,
  //   name: 'PHARMA.VEROVAL.INFO',
  //   metatags: ['code', 'wordpress', 'php', 'css'],
  //   tags: ['CODE', 'WORDPRESS', 'PHP', 'CSS'],
  //   img: ['../../assets/img/projects/pharma.veroval/pharma-veroval.png'],
  //   cover: '../../assets/img/projects/pharma.veroval/pharma-veroval-cover.png',
  //   description: `As a Front-End developer at DOBCN I helped out in manteinance-related tasks. Although the platform was already developed at my arrival, I contributed to the new look and feel of the site as a Front-End developer. The site is developed in Wordpress and consists in a B2B platform whose aim is to train chemists selling products of the brand.`,
  //   customer: 'HARTMANN',
  //   date: '2018',
  //   website: 'https://pharma.veroval.info/',
  //   collaborators: ['Olga Ortiz', ' Julio Raimondi', ' Francesca Cerón'],
  //   isfeatured: false,
  //   codinglang: ['wORDPRESS', ' PHP', ' CSS'],
  //   madeat: 'Dobcn as Front-End Developer'
  // },
  // { id: 30,
  //   name: 'ARTHICARE INTENSIVE LANDING PAGE',
  //   metatags: ['code', 'html', 'css', 'sass', 'bootstrap', 'php', 'jquery'],
  //   tags: ['CODE', ' HTML', ' CSS', ' SASS', ' BOOTSTRAP', ' PHP', ' JQUERY'],
  //   img: ['../../assets/img/projects/epaplus/arthicare-intensive.png'],
  //   cover: '../../assets/img/projects/epaplus/arthicare-intensive-cover.png',
  //   description: `As a Front-End developer at DOBCN I worked in the whole development of the end user interface. It was thought to be a landing page intended to be used for leed collecting purposes.`,
  //   customer: 'PEROXFARMA',
  //   date: '2018',
  //   website: 'https://www.epaplus.com/arthicare-intensive/',
  //   collaborators: ['Olga Ortiz', ' Julio Raimondi', ' Francesca Cerón'],
  //   isfeatured: false,
  //   codinglang: ['BOOTSTRAP', ' PHP', ' SASS', ' CSS', ' HTML', ' JQUERY'],
  //   madeat: 'Dobcn as Front-End Developer'
  // },
  { id: 31,
    name: 'ABEAUTYTRADEAREA',
    metatags: ['code', 'html', 'css', 'bootstrap', 'php', 'jquery', 'dobcn', 'sass', 'mysql'],
    tags: ['CODE', 'HTML', 'CSS', 'BOOTSTRAP', 'PHP', 'JQUERY', 'SASS', 'MYSQL'],
    img: ['../../assets/img/projects/abeautytradearea/abeautytradearea.png'],
    cover: '../../assets/img/projects/abeautytradearea/abeautytradearea-cover.png',
    description: `As a Front-End developer at DOBCN I worked in both the end user B2B platform and the CMS. Although the project was already started at my arrival at DOBCN, I developed most of the Front-End. Both of the platforms are tailor-made developed in PHP with the help of some libraries. For confidentiality reasons, there's not much more I can show about this project. Get in touch with me for futher explanations`,
    customer: 'IDESA ANGELINI',
    date: '2018',
    // collaborators: ['Olga Ortiz', ' Julio Raimondi', ' Francesca Cerón'],
    isfeatured: false,
    codinglang: ['BOOTSTRAP', ' PHP', ' SASS', ' CSS', ' HTML', ' JQUERY', 'SASS', 'MYSQL'],
    confidential: true,
    madeat: 'Dobcn as Front-End Developer'
  },
  { id: 32,
    name: 'EPAPLUS SITE',
    metatags: ['code', 'html', 'css', 'sass', 'bootstrap', 'php', 'jquery', 'wordpress', 'polylang', 'dobcn'],
    tags: ['CODE', 'HTML', 'CSS', 'SASS', 'BOOTSTRAP', 'PHP', 'JQUERY', 'WORDPRESS', 'POLYLANG'],
    img: ['../../assets/img/projects/epaplus/epaplus-site.png'],
    cover: '../../assets/img/projects/epaplus/epaplus-site-cover.png',
    description: `As a Front-End developer at DOBCN I worked in the whole development of the end user interface. This site had to display all the products in the Epaplus Brand followed by a strong Marketing strategy.`,
    customer: 'PEROXFARMA',
    date: '2019',
    website: 'https://www.epaplus.com',
    // collaborators: ['Olga Ortiz', ' Julio Raimondi'],
    isfeatured: false,
    codinglang: ['BOOTSTRAP', ' PHP', ' SASS', ' CSS', ' HTML', ' JQUERY', 'WORDPRESS'],
    madeat: 'Dobcn as Front-End Developer'
  },
  { id: 33,
    name: 'MUSSVITAL SITE',
    metatags: ['code', 'html', 'css', 'sass', 'bootstrap', 'php', 'jquery', 'wordpress', 'polylang', 'dobcn'],
    tags: ['CODE', 'HTML', 'CSS', 'SASS', 'BOOTSTRAP', 'PHP', 'JQUERY', 'WORDPRESS', 'POLYLANG'],
    img: ['../../assets/img/projects/mussvital/mussvital-site.png'],
    cover: '../../assets/img/projects/mussvital/mussvital-site-cover.png',
    description: `As a Front-End developer at DOBCN I worked in the whole development of the end user interface. This site had to display all the products in the Mussvital Brand followed by a strong Marketing strategy.`,
    customer: 'PEROXFARMA',
    date: '2019',
    website: 'https://www.mussvital.com',
    // collaborators: ['Olga Ortiz', ' Julio Raimondi'],
    isfeatured: false,
    codinglang: ['BOOTSTRAP', ' PHP', ' SASS', ' CSS', ' HTML', ' JQUERY', 'WORDPRESS', 'POLYLANG'],
    madeat: 'Dobcn as Front-End Developer'
  },
  { id: 34,
    name: 'LAURIECOOKIES',
    metatags: ['design', 'code', 'management', 'html', 'sass', 'Vanilla jS', 'bootstrap', 'git', 'gulp', 'assembler', 'css', 'js'],
    tags: [' DESIGN', ' CODE', ' MANAGEMENT', 'HTML', 'SASS', 'VANILLA JS', 'BOOTSTRAP', 'GIT', 'GULP', 'ASSEMBLER', 'CSS', 'JS'],
    img: ['../../assets/img/projects/lauriecookies/lauriecookies-site.png'],
    cover: '../../assets/img/projects/lauriecookies/lauriecookies.png',
    description: `This has been my first project at Assembler School. It had to be build using just HTML, CSS and Bootstrap but no third party libraries for jS were allowed. 
    This was also accompained by an extense documentation on the project. This static website has been built within 6 days.`,
    customer: `FIRST PROJECT ASSEMBLER SCHOOL`,
    date: '2019',
    website: 'https://lauriecookies.herokuapp.com/',
    isfeatured: false,
    codinglang: ['html', 'sass', 'Vanilla jS', 'bootstrap', 'git', 'gulp', 'js']
  },
  { id: 35,
    name: 'MYPORTFOLIO',
    metatags: ['design', 'code', 'management', 'html', 'sass', 'node', 'Express', 'git', 'bootstrap', 'assembler', 'nodemailer', 'mysql', 'pug', 'css', 'js'],
    tags: [' DESIGN', ' CODE', ' MANAGEMENT', 'HTML', 'SASS', 'NODE', 'EXPRESS', 'GIT', 'BOOTSTRAP', 'ASSEMBLER', 'NODEMAILER', 'MYSQL', 'PUG', 'CSS', 'JS'],
    img: ['../../assets/img/projects/myportfolio/myportfolio-site.png'],
    cover: '../../assets/img/projects/myportfolio/myportfolio.png',
    description: `This poject consisted in building a selfmanageable tailormade portfolio website.

    As a user I had to be able to:
    List:
      - Soft skills
      - Tech skills
      - Work Experience
      - About
    Send contact forms.

    As an admin I had to be able to:
    CRUD
      - Soft skills
      - Tech skills
      - Work Experience
      - About
    Receive contact forms to my email.

    It had to be acheived using NodeJS, Mysql and ExpressJS.
    We could choose a render engine such as: Pug, EJS or handlebars.
    I decided to go for Pug.
    The project was done all by myself and had to be achieved within 7 days.

    Get into the backoffice with the following credentials:
    USR: admin
    PWD: admin

    Note that login/logout buttons are at the bottom/right corner.`,
    customer: `MADE at ASSEMBLER SCHOOL`,
    date: 'Feb 2020',
    website: 'https://my-portfolio-not-calpi.herokuapp.com',
    isfeatured: true,
    codinglang: ['html', 'sass', 'Node', 'express', 'git', 'bootstrap', 'nodemailer', 'mysql', 'pug', 'css', 'js']
  },
  { id: 36,
    name: 'TAMBOR MUSIC LIBRARY',
    metatags: ['design', 'code', 'management', 'html', 'sass', 'Webpack', 'git', 'bootstrap', 'assembler', 'jquery', 'css', 'js'],
    tags: [' DESIGN', ' CODE', ' MANAGEMENT', 'HTML', 'SASS', 'WEBPACK', 'GIT', 'BOOTSTRAP', 'ASSEMBLER', 'JQUERY', 'CSS', 'JS'],
    img: ['../../assets/img/projects/tambor/tambor-site.png'],
    cover: '../../assets/img/projects/tambor/tambor.png',
    description: `
    The platform had to be dynamic and actions had to be carried out without reloading the page.

    The search engine had to implement the following options:
    - Search songs by name
    - Search artists by name
    - Search albums by name
    - Search music videos by name
    
    In addition, the following optional parameters had to automatically filter to the search:
    - Filter by country (A specific third-party API had to be queried to obtain the necessary information to apply the filter. Ex: https://api.printful.com/countries)
    - Filter by explicit content: “Yes” or “No”
    - Limit results: Range from 1 to 200.
    
    Once these requirements had been met, the following points had to be taken into account when displaying the results:
    Depending on the search, the following items had to be displayed per item.
    
    For a song:
    - Cover
    - Name of the song
    - Artist name
    - Album name
    - Song Price
    - Release date
    - Song length
    - Musical genre
    - Audio sample of the song
    - Song Link in iTunes
    
    For an artist:
    - First name
    - Musical genre
    - Artist link on iTunes
    
    For an album:
    - Cover
    - Album name
    - Artist name
    - Album price
    - Number of songs
    - Release date
    - Musical genre
    
    For a music video:
    - Cover
    - Name of the song
    - Artist name
    - Song Price
    - Release date
    - Song length
    - Musical genre
    - Clip video sample
    - Link of the music video on iTunes`,
    customer: `MADE at ASSEMBLER SCHOOL`,
    date: 'DEC 2019',
    website: 'https://apple-music-library.herokuapp.com/',
    isfeatured: true,
    codinglang: ['html', 'sass', 'webpack', 'git', 'bootstrap', 'jquery', 'css', 'js']
  },
  { id: 37,
    name: 'WEATHER APP',
    metatags: ['design', 'code', 'management', 'html', 'sass', 'Vanilla jS', 'bootstrap', 'git', 'gulp', 'assembler', 'jquery', 'ajax', 'html', 'css', 'js'],
    tags: [' DESIGN', ' CODE', ' MANAGEMENT', 'HTML', 'SASS', 'VANILLA JS', 'BOOTSTRAP', 'GIT', 'GULP', 'ASSEMBLER', 'JQUERY', 'AJAX', 'CSS', 'HTML', 'JS'],
    img: ['../../assets/img/projects/weatherapp/weatherapp-site.png'],
    cover: '../../assets/img/projects/weatherapp/weatherapp.png',
    description: `
    Welcome to Cristina Moreno's Weather app. This weather app runs with data from: [Open Weather Map](https://openweathermap.org/).
    This weather app has been built using:
    - Bootstrap
    - Jquery and Vanilla jS versions.
    - Google Fonts

    - Gulp for:
        - Compiling scss and minifying styles
        - Minifying js
        - Browsersync
        - Sending notifications (Make sure you're not blocking push notifications on your local machine to show them)

    This project has been developed at: Assembler School`,
    customer: `MADE at ASSEMBLER SCHOOL`,
    date: 'Nov 2019',
    website: 'https://cmoreno-weatherapp.herokuapp.com/',
    isfeatured: false,
    codinglang: ['html', 'sass', 'Vanilla jS', 'bootstrap', 'git', 'gulp', 'jquery', 'ajax', 'html', 'css', 'js']
  },
];
  constructor() { }

  getProjects () {
    return this.projects;
  }
  getProjectById (id) {
    const project = this.projects.filter((elem) => {
      if (elem.id + '' === id) {
        return elem;
      }
    });
    return project[0];
  }

  getProjectByTag (tag) {
    const projects = this.projects;

    const tagged = projects.reduce((tags, project) => {
      if (project.metatags.includes(tag)) {
        tags.push(project);
      }
      return tags;
    }, []);

    return tagged;
  }

  getProjectByFeatured (){
    const featured = this.projects.filter((elem) => {
      if (elem.isfeatured === true){
        return elem;
      }
    });
    return featured;
  }
}
