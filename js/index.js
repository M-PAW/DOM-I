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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Starting here
const headerImg = document.querySelector('#cta-img');
const midPageImg = document.querySelector('.middle-img');
headerImg.src = 'img/header-img.png';
midPageImg.src = 'img/mid-page-accent.jpg';

// Navigation
const navText = document.querySelectorAll('a');
navText[0].textContent = siteContent.nav["nav-item-1"];
navText[1].textContent = siteContent.nav["nav-item-2"];
navText[2].textContent = siteContent.nav["nav-item-3"];
navText[3].textContent = siteContent.nav["nav-item-4"];
navText[4].textContent = siteContent.nav["nav-item-5"];
navText[5].textContent = siteContent.nav["nav-item-6"];

// let obectKeys = Object.keys(siteContent.nav);
// console.log()

// append & prepend links
const navBox = document.querySelector('nav');
const firstLink = document.createElement('a');
firstLink.textContent = 'Home';
navBox.prepend(firstLink);

//const navBox = document.querySelector('nav');
const endLink = document.createElement('a');
endLink.textContent = 'NSFW';
navBox.appendChild(endLink);


// nav link color
const navColor = document.querySelectorAll('a');
navColor.forEach(aColor => aColor.style.color = 'green');

// H1
const ctaText = document.querySelector('h1');
ctaText.textContent = "DOM IS AWESOME";

const newButton = document.querySelector('button');
newButton.textContent = 'Get Started';

// H4
const headerFour = document.querySelectorAll('h4');

headerFour[0].textContent = siteContent["main-content"]["features-h4"];
headerFour[1].textContent = siteContent["main-content"]["about-h4"];
headerFour[2].textContent = siteContent["main-content"]["services-h4"];
headerFour[3].textContent = siteContent["main-content"]["product-h4"];
headerFour[4].textContent = siteContent["main-content"]["vision-h4"];
headerFour[5].textContent = siteContent.contact["contact-h4"];

// text-content 
const textContent = document.querySelectorAll('p');

textContent[0].textContent = siteContent["main-content"]["features-content"];
textContent[1].textContent = siteContent["main-content"]["about-content"];
textContent[2].textContent = siteContent["main-content"]["services-content"];
textContent[3].textContent = siteContent["main-content"]["product-content"];
textContent[4].textContent = siteContent["main-content"]["vision-content"];
textContent[5].textContent = siteContent.contact.address;
textContent[6].textContent = siteContent.contact.phone;
textContent[7].textContent = siteContent.contact.email;
textContent[8].textContent = siteContent.footer.copyright;

