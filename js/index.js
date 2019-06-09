const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// IMAGES

let headimg = document.getElementById("cta-img");
headimg.setAttribute('src', siteContent["cta"]["img-src"])

let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Navigation
let navItems = Object.values(siteContent.nav);
// console.log(navItems);

let navLink = document.querySelectorAll("a");
navLink.forEach((link, i) => { 
  link.innerText = navItems[i];
  link.style.color = "green";
  link.style.fontSize = "1.6rem";
} );



// navLink.style.fontSize = "16px";

// CTA - Hero Section Header

// 
let hero = Object.values(siteContent.cta);

let heroItems = document.getElementsByClassName("cta-text");
let heroButton = document.getElementsByTagName("button");

hero[0] = siteContent.cta.h1;
heroButton = siteContent.cta.button;

// heroButton.style.color = 'black';
console.log(hero[0]);
console.log(heroButton);


// figure out how to access child elements !!
// console.log(heroItems);

heroCTA = Array.from(heroItems);
heroCTA.forEach((item, i) => {
  item.innerText = hero[i]; 
});


// heroCTA.appendChild('hero');
// console.log(heroCTA);

// let hbtn = document.getElementsByTagName("button");

// hbtn.appendChild()


// siteContent.cta.button

// console.log(hbtn) 
// - button appears in console

// main content

let main = Object.values(siteContent['main-content'])

let mainItems = document.querySelectorAll("main-content");

// heroCTA = Array.from(heroItems);
// heroCTA.forEach((item, i) => {
//   item.innerHTML = hero[i]; 
// })

// contact

// footer

const foot = document.getElementsByTagName("footer");











