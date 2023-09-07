// Start Multi language
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
    اعمالنا: "اعمالنا",
    الرئيسية: "الرئيسية",
    السابقة: "جميع اعمالنا السابقة",
    المقالات: "المقالات",
    "اخر المقالات": "اخر المقالات",
    "المكان الصحيح": "في المكان الصحيح",
    "نوع المحتوى": "ما المحتوى الذي يجب أن أقدمه لعملائي؟",
    فوائد: "فوائد الموشن جرافك",
    "كيف تجعل": "كيف تجعل عميلك يتحدث عنك؟",
    الخدمة: "خدمة الزبائن",
    الشراء: "من الذي يتخذ قرار الشراء؟",
    "هدف التسويق": "ما هو الهدف من تسويق المحتوى؟",
    "اعلانات سناب": "اعلانات سناب شات",
    "اعلانات جوجل": "اعلانات جوجل",
    "إعلانات فيس": "إعلانات الفيسبوك",
    "اعلانات تويت": "اعلانات تويتر",
    "إعلانات يوتيوب": "إعلانات يوتيوب",
    "تسويق شركات": "تسويق الشركات العالمية",
    حملات: "الحملات الإعلانية داخل مواقع التواصل الاجتماعي",
    "الاتجاه نحو": "الاتجاه نحو التسويق الرقمي",
    "مميزات تسويق": "مميزات التسويق الالكتروني",
    "أهداف الحملة": "أهداف الحملة الإعلانية",
    "تسويق قديم": "التسويق القديم والجديد",
    "فوائد تسوق": "فوائد التسويق العملاقة",
    "تسويق عبر": "التسويق عبر القارات",
    تنفق: "تنفق بحكمة",
    "كلمات رئيسية": "الكلمات الرئيسية السلبية في إعلانك",
    "انواع مطابقة": "أنواع المطابقة في الكلمات الرئيسية",
    "أعلن بذكاء": "أعلن بذكاء",
    "هدفك للتسويق": "هدفك للتسويق",
    "مكان مناسب": "المكان المناسب للترويج لإعلانك",
    "تسويق محتوى": "تسويق المحتوى",
    "اختر وقت": "اختر الوقت المناسب لإعلاناتك",
    "فوائد موشن": "فوائد الموشن جرافيك",
    "ايش اقدم": "ايش اقدم محتوى لعملائي",
    "إعادة استهداف": "إعادة استهداف إعلاناتك",
    الاستهداف: "الاستهداف عن طريق رقم الجوال",
    "كيف تخلي": "كيف تخلي عميلك يتكلم عنك",
    "خدمه عملاء": "خدمه العملاء والاهتمام بالعميل",
    "اعلانات انستا": "اعلانات انستغرام",
    "اعلانك في": "إعلانك في وقت عملك",
    الاستبعاد: "الاستبعاد هو أفضل طريقة للاستهداف",
    "متخذ القرار": "من هو متخذ القرار الشرائي؟",
    فائدة: "ايش الفائده من التسويق بالمحتوى",
    "اعلانات سناب": "الإعلان على سناب شات",
    "إعلانات فيس": "الإعلان على فيسبوك",
    "افكار جماعية": "أفكار جماعية للكلمات الرئيسية على إعلانات جوجل",
    "اعلانات انستا": "الإعلان على الإنستغرام",
    "عرض توقعات": "عرض التوقعات الجغرافية لإعلانات جوجل الخاصة بك",
    "فهم سوق": "فهم سوق إعلانات جوجل",
    "توقع نجاحك": "توقع نجاحك لإعلاناتك",
    "كلمات رئيسية": "الكلمات الرئيسية في إعلانات جوجل",
    "إعلانات قوقل": "إعلانات جوجل",
    "تسويق شركات": "تسويق الشركات العالمية",
    "حملات اعلانية": "الحملات الإعلانية على السوشيال ميديا",
    "اتجاه للتسويق": "الاتجاه للتسويق الرقمي",
    "مميزات التسويق": "مميزات التسويق الاكتروني",
    "اهداف حملات": "اهداف الحملات الاعلانية",
    "تسويق قديما": "التسويق قديماً وحديثاً",
    "فوائد تسويق": "فوائد التسويق الإلكتروني",
    "تسويق عابر": "التسويق العابر للقارات",
    "تحرق فلوسك": "لا تحرق فلوسك على الإعلانات",
    "كلمات رئيسية": "الكلمات الرئيسية السلبية",
    "أنواع المطابقة": "أنواع المطابقة في الكلمات الرئيسية",
    "إعلن بذكاء": "إعلن بذكاء على جوجل",
    هدفك: "هدفك من التسويق",
    "تسويق عن طريق": "التسويق عن طريق المحتوى",
    "إختيار الوقت": "إختيار الوقت المناسب لإعلانك",
    "إعادة استهداف": "إعادة الإستهداف لحملتك الإعلانية",
    "الإستهداف برقم": "الإستهداف برقم الجوال",
    "ما هو الوقت": "ما هو الوقت المناسب لإعلانك",
    "الإستبعاد أفضل": "الإستبعاد أفضل طرق الإستهداف لإعلانك",
    "أفكار مجمعة": "أفكار مجمعة للكلمات الرئيسية على جوجل",
    "الإطلاع على": "الإطلاع على التوقعات الجغرافية لإعلانك",
    "إدراك سوق": "إدراك سوق إعلانات جوجل",
    "توقع نجاحك": "توقع نجاحك لإعلانك",
    "الكلمات الرئيسية": "الكلمات الرئيسية في جوجل ",
    ديسمبر: "ديسمبر",
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
    اعمالنا: "Our projects",
    الرئيسية: "Home",
    السابقة: "OUR PROJECTS",
    المقالات: "Blogs",
    "اخر المقالات": "Recent blogs",
    "المكان الصحيح": "In The Right Place",
    "نوع المحتوى": "What content should I provide to my clients?",
    فوائد: "Motion graphics benefits",
    "كيف تجعل": "How do you get your customer to talk about you?",
    الخدمة: "Customer Service",
    الشراء: "Who makes the purchasing decision?",
    "هدف التسويق": "What is the point of content marketing?",
    "اعلانات سناب": "snapchat ads",
    "اعلانات جوجل": "Google Ads",
    "إعلانات فيس": "Facebook ads",
    "اعلانات تويت": "Twitter ads",
    "إعلانات يوتيوب": "youtube ads",
    "تسويق شركات": "Global Corporate Marketing",
    حملات: "Advertising campaigns within social networking sites",
    "الاتجاه نحو": "The trend to Digital Marketing",
    "مميزات تسويق": "Advantages of e-marketing",
    "أهداف الحملة": "Advertising campaign goals",
    "تسويق قديم": "the old and new Marketing",
    "فوائد تسوق": "Giant Marketing Benefits",
    "تسويق عبر": "Transcontinental Marketing",
    تنفق: "spend prudently",
    "كلمات رئيسية": "negative keywords in your ad",
    "انواع مطابقة": "Matching types in keywords",
    "أعلن بذكاء": "Declare smartly",
    "هدفك للتسويق": "Your goal for marketing",
    "مكان مناسب": "The right place to promote your ad",
    "تسويق محتوى": "Content Marketing",
    "اختر وقت": "Choose the right time for your ads",
    "فوائد موشن": "Motion Graphic Benefits",
    "ايش اقدم": "Live The Oldest Content For My Clients",
    "إعادة استهداف": "Retargeting your ads",
    الاستهداف: "Targeting by mobile number",
    "كيف تخلي": "How to Let Your Customer Talk About You",
    "خدمه عملاء": "Customer Service and Customer Interest",
    "اعلانات انستا": "Instagram ads",
    "اعلانك في": "Your ad in your working time",
    الاستبعاد: "Exclusion is the best targeting method",
    "متخذ القرار": "Who made the purchase decision?",
    فائدة: "What is the benefit of content marketing",
    "اعلانات سناب": "Snapchat ads",
    "إعلانات فيس": "Facebook ads",
    "افكار جماعية": "Collective Ideas for Keywords on Google Ads",
    "اعلانات انستا": "Instagram asd",
    "عرض توقعات": "View geographical forecasts for your google ads",
    "فهم سوق": "Understanding the Google Ads market",
    "توقع نجاحك": "Expect your success for your ads",
    "كلمات رئيسية": "keywords on Google Ads",
    "إعلانات قوقل": "Google Ads",
    "تسويق شركات": "Marketing of Global Companies",
    "حملات اعلانية": "Advertising campaigns on social media",
    "اتجاه للتسويق": "Direction for Digital Marketing",
    "مميزات التسويق": "Features of Electronic Marketing",
    "اهداف حملات": "Objectives of advertising campaigns",
    "تسويق قديما": "Marketing is old and modern",
    "فوائد تسويق": "Benefits of e-marketing",
    "تسويق عابر": "Intercontinental Marketing",
    "تحرق فلوسك": "Don't burn flusk on ads",
    "كلمات رئيسية": "Negative Keywords",
    "أنواع المطابقة": "Types of matching in keywords",
    "إعلن بذكاء": "Advertise smartly on Google Ad",
    هدفك: "Your Goal of Marketing",
    "تسويق عن طريق": "Content Marketing",
    "إختيار الوقت": "Choose the right time to announce you",
    "إعادة استهداف": "Re-targeting your advertising campaign",
    "الإستهداف برقم": "Targeting Mobile Number",
    "ما هو الوقت": "What is the right time to announce you",
    "الإستبعاد أفضل": "Exclude the best targeting methods for your advertising",
    "أفكار مجمعة": "Combined keyword ideas on Google Ad",
    "الإطلاع على": "See the geographical projections of your ad",
    "إدراك سوق": "Perception of Google Advertising Market",
    "توقع نجاحك": "Expect your success to announce you",
    "الكلمات الرئيسية": "Keywords in Google",
    ديسمبر: "December",
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
// End Multi language

// Start Toggle Menu
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
// End Toggle Menu

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
// End download page items gradually when I do scroll down in js

// Start Shufill Images
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return;
  timeoutId = setTimeout(() => (carousel.scrollLeft -= firstCardWidth), 2000);
};

autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseleave", autoPlay);
// End Shufill Images

// Start Full Screen Image
const modal = document.getElementById("imageModal");
const closeModal = document.getElementById("closeModal");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

// احصل على عناصر الصورة في العرض الأصلي
const images = document.querySelectorAll(
  ".latest-business .container .image img"
);

let currentImageIndex = 0;

// تكبير الصورة عند النقر
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    document.body.style.overflow = "hidden"; // تعطيل التمرير في الخلفية
    currentImageIndex = index;

    // تطبيق التكبير التدريجي وزيادة الشفافية
    modalImage.style.transform = "scale(0.8)"; // تصغير بدءًا
    modalImage.style.opacity = "0"; // شفافية بدءًا
    setTimeout(() => {
      modalImage.style.transform = "scale(1.2)"; // تكبير الصورة
      modalImage.style.opacity = "1"; // زيادة الشفافية
    }, 0);
  });
});

// إغلاق نافذة العرض المكبرة
closeModal.addEventListener("click", () => {
  closeModalAnimation();
});

// إغلاق نافذة العرض المكبرة عند النقر خارج الصورة
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalAnimation();
  }
});

// إغلاق نافذة العرض المكبرة عند الضغط على مفتاح الإسكيب
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "flex") {
    closeModalAnimation();
  }
});

// التبديل بين الصور باستخدام أزرار الأسهم
prevImage.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  changeImageAnimation();
});

nextImage.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  changeImageAnimation();
});

// تطبيق انميشن لتغيير الصورة
function changeImageAnimation() {
  modalImage.style.transform = "scale(0.8)"; // تصغير
  modalImage.style.opacity = "0"; // شفافية منخفضة
  setTimeout(() => {
    modalImage.src = images[currentImageIndex].src; // تغيير الصورة
    modalImage.alt = images[currentImageIndex].alt;
    modalImage.style.transform = "scale(1.2)"; // تكبير الصورة الجديدة
    modalImage.style.opacity = "1"; // زيادة الشفافية
  }, 300); // انتظر لحظة بعد تطبيق الانتقال التدريجي للصورة الحالية
}

// تطبيق انميشن لإغلاق نافذة العرض المكبرة
function closeModalAnimation() {
  modalImage.style.transform = "scale(0.8)"; // تصغير
  modalImage.style.opacity = "0"; // شفافية منخفضة
  setTimeout(() => {
    modal.style.display = "none"; // إخفاء النافذة
    document.body.style.overflow = "auto"; // تمكين التمرير مرة أخرى
  }, 300); // انتظر لحظة بعد تطبيق الانتقال التدريجي للصورة الحالية
}

// احصل على عنصر زر الشاشة الكاملة وعنصر الصورة
const fullscreenButton = document.getElementById("fullscreenButton");
const modalImage = document.getElementById("modalImage");

// تفعيل وإلغاء وضع الشاشة الكاملة
let isFullscreen = false;

fullscreenButton.addEventListener("click", () => {
  if (!isFullscreen) {
    openFullscreen(modalImage);
    isFullscreen = true;
  } else {
    closeFullscreen();
    isFullscreen = false;
  }
});

// استجابة للضغط على زر "esc" للخروج من وضع الشاشة الكاملة
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isFullscreen) {
    closeFullscreen();
    isFullscreen = false;
  }
});

// دالة لفتح وضع الشاشة الكاملة
function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// دالة لإغلاق وضع الشاشة الكاملة
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

// End Full Screen Image
