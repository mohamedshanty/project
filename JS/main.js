// Start Shufill img
// const images = [
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-16-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-15-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-23-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-1-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-19-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-2-min-1.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-9-min-1.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-11-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-30-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-34-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-3-min-1.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-25-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-18-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-31-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-26-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-10-min-1.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-5-min-1.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-12-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-24-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-17-min.png",
//   "https://motawaj.com/wp-content/uploads/2022/07/Asset-36-min.png",
// ];

// const imageContainers = document.querySelectorAll(
//   ".customers .container .image"
// );
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// const numVisibleImages = 5;
// let currentIndex = 0;

// function updateImage() {
//   imageContainers.forEach((container) => container.classList.remove("active"));

//   for (let i = currentIndex; i < currentIndex + numVisibleImages; i++) {
//     const imageIndex = i % images.length;
//     imageContainers[imageIndex].classList.add("active");
//     imageContainers[imageIndex].querySelector("img").src = images[imageIndex];
//   }
// }

// function showNextImages() {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateImage();
// }

// setInterval(showNextImages, 2000);

// updateImage();

// prevBtn.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   updateImage();
// });

// nextBtn.addEventListener("click", showNextImages);

// End Shufill img

// Toggle Menu

// Toggle Menu for Arabic
let isMenuOpenAr = false;
document.getElementById("menu-toggle").addEventListener("click", function () {
  var nav = document.querySelector("header nav");
  var overlay = document.querySelector("#menu-overlay");

  if (!isMenuOpenAr) {
    nav.style.right = "0px";
    overlay.style.display = "block";
    document.body.classList.add("menu-open");
    isMenuOpenAr = true;
  } else {
    nav.style.right = "-300px";
    overlay.style.display = "none";
    document.body.classList.remove("menu-open");
    isMenuOpenAr = false;
  }
});

document.getElementById("menu-overlay").addEventListener("click", function () {
  var nav = document.querySelector("header nav");
  var overlay = document.querySelector("#menu-overlay");

  nav.style.right = "-300px";
  overlay.style.display = "none";
  document.body.classList.remove("menu-open");
  isMenuOpenAr = false;
});

// Toggle Menu for English
let isMenuOpenEn = false;
document.getElementById("menu-toggle").addEventListener("click", function () {
  var nav = document.querySelector("header nav");
  var overlay = document.querySelector("#menu-overlay");

  if (!isMenuOpenEn) {
    nav.style.left = "0px";
    overlay.style.display = "block";
    document.body.classList.add("menu-open");
    isMenuOpenEn = true;
  } else {
    nav.style.left = "-300px";
    overlay.style.display = "none";
    document.body.classList.remove("menu-open");
    isMenuOpenEn = false;
  }
});

document.getElementById("menu-overlay").addEventListener("click", function () {
  var nav = document.querySelector("header nav");
  var overlay = document.querySelector("#menu-overlay");

  nav.style.left = "-300px";
  overlay.style.display = "none";
  document.body.classList.remove("menu-open");
  isMenuOpenEn = false;
});

// Start How Much Char In TextArea
const textarea = document.getElementById("msg");
const charCounter = document.querySelector(".char-counter");

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  charCounter.textContent = `${currentLength} / 180`;

  if (currentLength > 180) {
    charCounter.style.color = "red";
  } else {
    charCounter.style.color = "rgb(131, 127, 127)";
  }
});
// End How Much Char In TextArea

// Start If No Text Input In Name Input Or Email Show Error Msg
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  if (nameValue === "" || emailValue === "") {
    event.preventDefault();
  }
});

nameInput.addEventListener("blur", function () {
  if (nameInput.value.trim() === "") {
    displayError(nameInput, "من فضلك، قم بإدخال اسمك الكامل.");
  } else {
    removeError(nameInput);
  }
});

emailInput.addEventListener("blur", function () {
  if (emailInput.value.trim() === "") {
    displayError(emailInput, "من فضلك، قم بإدخال بريدك الإلكتروني.");
  } else {
    removeError(emailInput);
  }
});

function displayError(inputElement, errorMessage) {
  const errorDiv = inputElement.nextElementSibling;

  if (!errorDiv) {
    const newErrorDiv = document.createElement("div");
    newErrorDiv.className = "error-message";
    newErrorDiv.textContent = errorMessage;

    inputElement.parentNode.appendChild(newErrorDiv);
  }
}

function removeError(inputElement) {
  const errorDiv = inputElement.nextElementSibling;
  if (errorDiv && errorDiv.className === "error-message") {
    errorDiv.remove();
  }
}
// End If No Text Input In Name Input Or Email Show Error Msg

// Start Scroll To Top
document.addEventListener("DOMContentLoaded", function () {
  let scrollableElement = document.body;
  const scrollToTop = document.getElementById("scrollToTop");
  scrollableElement.addEventListener("wheel", checkScrollDirection);

  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      if (window.scrollY > 400) {
        scrollToTop.style.display = "block";
      } else {
        scrollToTop.style.display = "none";
      }
    } else {
      scrollToTop.style.display = "none";
    }
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
  scrollToTop.addEventListener("click", function () {
    if (checkScrollDirectionIsUp(event)) {
      if (window.scrollY > 400) {
        scrollToTop.style.display = "block";
      } else {
        scrollToTop.style.display = "none";
      }
    } else {
      scrollToTop.style.display = "none";
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// End Scroll To Top
// Start download page items gradually when I do scroll down in js
// Scroll Reveal
const sr = ScrollReveal({
  duration: 1000,
  distance: "50px",
  reset: false,
  delay: 100,
});

const servicesImages = document.querySelectorAll(".services-img");

servicesImages.forEach((img, index) => {
  const delay = 200 * index;

  sr.reveal(img, {
    origin: "bottom",
    delay,
  });
});

const artImages = document.querySelectorAll(".art");

artImages.forEach((img, index) => {
  const delay = 200 * index;

  sr.reveal(img, {
    origin: "bottom",
    delay,
  });
});

const form = document.querySelectorAll("#contact-form");

form.forEach((img, index) => {
  const delay = 200 * index;

  sr.reveal(img, {
    origin: "bottom",
    delay,
  });
});

const allImg = document.querySelectorAll(".image");

allImg.forEach((img, index) => {
  const delay = 100 * index;

  sr.reveal(img, {
    origin: "bottom",
    delay,
  });
});

sr.reveal(".title", {
  origin: "bottom",
});

sr.reveal(".wrapper .carousel", {
  origin: "bottom",
});

sr.reveal(".def", {
  origin: "bottom",
});

sr.reveal(".advantages .image", {
  origin: "right",
});

sr.reveal(".advantages .our-advantages", {
  origin: "left",
});

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = 0;
  let increment = 1;

  if (goal < 0) {
    increment = -1;
  }

  let counter = setInterval(() => {
    count += increment;
    el.textContent = count + (increment > 0 ? "+" : "");
    if (count === parseInt(goal)) {
      clearInterval(counter);
    }
  }, 2000 / Math.abs(goal));
}

// New
// const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const carouselChildrens = [...carousel.children];

// let isDragging = false,
//   isAutoPlay = true,
//   startX,
//   startScrollLeft,
//   timeoutId;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens
//   .slice(-cardPerView)
//   .reverse()
//   .forEach((card) => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens.slice(0, cardPerView).forEach((card) => {
//   carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
// carousel.classList.add("no-transition");
// carousel.scrollLeft = carousel.offsetWidth;
// carousel.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
//   });
// });

// const dragStart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging");
//   // Records the initial cursor and scroll position of the carousel
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDragging) return; // if isDragging is false return from here
//   // Updates the scroll position of the carousel based on the cursor movement
//   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// };

// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// };

// const infiniteScroll = () => {
//   // If the carousel is at the beginning, scroll to the end
//   if (carousel.scrollLeft === 0) {
//     carousel.classList.add("no-transition");
//     carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
//     carousel.classList.remove("no-transition");
//   }
//   // If the carousel is at the end, scroll to the beginning
//   else if (
//     Math.ceil(carousel.scrollLeft) ===
//     carousel.scrollWidth - carousel.offsetWidth
//   ) {
//     carousel.classList.add("no-transition");
//     carousel.scrollLeft = carousel.offsetWidth;
//     carousel.classList.remove("no-transition");
//   }

//   // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//   clearTimeout(timeoutId);
//   if (!wrapper.matches(":hover")) autoPlay();
// };

// const autoPlay = () => {
//   if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//   // Autoplay the carousel after every 2500 ms
//   timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2000);
// };
// autoPlay();

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseleave", autoPlay);

// New

const translations = {
  ar: {
    الرئيسية: "الرئيسية",
    خدماتنا: "خدماتنا",
    اعمالنا: "اعمالنا",
    المقالات: "المقالات",
    "تواصل معنا": "تواصل معنا",
    english: "English",
    "من نحن": "من نحن",
    "مؤسسة سعودية":
      " مؤسسة سعودية متخصصة في الخدمات التسويقية والإنتاج هدفنا الريادة في تسويق المشاريع والتميز والتنمية في قطاع الاعمال بستخدام التقنية الحديثة",
    خدماتنا: "خدماتنا",
    نمكن: "نمكن الاعمال في القطاع الخاص والعام",
    "نتمتع بفريق":
      "نتمتع بفريق سعودي شاب ومميز ليحول افكارك الى واقع ونصل بك إلى القمه حيث تطمح أن تكون ونحرص دائما على تحقيق كل الممكن وبعض المستحيل",
    "اخر اعمالنا": "اخر اعمالنا",
    "عرض جميع الاعمال": "عرض جميع الاعمال",
    عملائنا: "عملائنا",
    "عدد عملائنا": "عدد عملائنا",
    "عدد المشاريع": "عدد المشاريع",
    "سنوات العمل": "سنوات العمل",
    "اخر المقالات": "اخر المقالات",
    سيو: "سيو",
    "تواصل معنا": "تواصل معنا",
    "الاسم كامل": "الاسم كامل",
    "البريد الالكتروني": "البريد الالكتروني",
    "رقم الهاتف": "رقم الهاتف",
    الرسالة: "الرسالة",
    "placeholder-msg": "اكتب رسالتك هنا...",
    "submit-value": "ارسال",
    "جميع الحقوق":
      "جميع الحقوق محفوظة لدى متوج للخدمات التسويقية والانتاج &copy; 2022",
    "تواصل معنا عبر الواتس اب": "تواصل معنا عبر الواتس اب",
  },
  en: {
    الرئيسية: "Home",
    خدماتنا: "Our services",
    اعمالنا: "Our projects",
    المقالات: "Blogs",
    "تواصل معنا": "Contact us",
    english: "العربية",
    "من نحن": "ABOUT US",
    "مؤسسة سعودية":
      "A Saudi company specialized in marketing and production services. Our goal is leadership in project marketing, excellence and development in business sector using modern technology.",
    خدماتنا: "OUR SERVICES",
    نمكن: "We enable business in private and public sector",
    "نتمتع بفريق":
      "Our young and outstanding Saudi team is always eager to convert your ideas into reality and take you to the next level. We are always keen to achieve all the possible and some of the impossible.",
    "اخر اعمالنا": "OUR LATEST WORK",
    "عرض جميع الاعمال": "View all projects",
    عملائنا: "OUR CLIENTS",
    "عدد عملائنا": "Our clients",
    "عدد المشاريع": "Number of projects",
    "سنوات العمل": "Years of experiences",
    "اخر المقالات": "RECENT BLOGS",
    سيو: "SEO",
    "تواصل معنا": "CONTACT US",
    "الاسم كامل": "First Name",
    "البريد الالكتروني": "Email Address",
    "رقم الهاتف": "Phone Number",
    الرسالة: "Message",
    "placeholder-msg": "Type your message here...",
    "submit-value": "Send",
    "جميع الحقوق":
      "All rights reserved to Motog for Marketing and Production Services&copy; 2022",
    "تواصل معنا عبر الواتس اب": "Contact us via WhatsApp",
  },
};

const languageItem = document.querySelector("#myHeader a[data-i18n='english']");

languageItem.addEventListener("click", (event) => {
  event.preventDefault();
  toggleLanguage();
});

window.addEventListener("DOMContentLoaded", (event) => {
  const preferredLanguage = localStorage.getItem("preferredLanguage");
  if (preferredLanguage) {
    setLanguage(preferredLanguage);
  }
});

const toggleLanguage = () => {
  const currentLanguage = localStorage.getItem("preferredLanguage");
  const newLanguage = currentLanguage === "en" ? "ar" : "en";
  setLanguage(newLanguage);
  localStorage.setItem("preferredLanguage", newLanguage);
};

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  console.log(elements);
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    if (element.tagName === "INPUT" && element.type === "submit") {
      element.value = translations[language][translationKey];
    } else if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      element.placeholder = translations[language][translationKey];
    } else {
      element.textContent = translations[language][translationKey];
    }
  });

  const languageItem = document.querySelector(
    "#myHeader a[data-i18n='english']"
  );
  const imageEn = document.querySelector(".en-image");
  const imageAr = document.querySelector(".ar-image");
  if (language === "ar") {
    imageEn.style.display = "none";
    imageAr.style.display = "inline";
  } else {
    imageAr.style.display = "none";
    imageEn.style.display = "inline";
  }

  document.body.style.direction = language === "ar" ? "rtl" : "ltr";
};
