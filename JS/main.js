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
let isMenuOpen = false;
document.getElementById("menu-toggle").addEventListener("click", function () {
  var nav = document.querySelector("header .container nav");
  var overlay = document.querySelector("#menu-overlay");

  if (!isMenuOpen) {
    nav.style.right = "0px";
    overlay.style.display = "block";
    document.body.classList.add("menu-open");
    isMenuOpen = true;
  } else {
    nav.style.right = "-300px";
    overlay.style.display = "none";
    document.body.classList.remove("menu-open");
    isMenuOpen = false;
  }
});

document.getElementById("menu-overlay").addEventListener("click", function () {
  var nav = document.querySelector("header .container nav");
  var overlay = document.querySelector("#menu-overlay");

  nav.style.right = "-300px";
  overlay.style.display = "none";
  document.body.classList.remove("menu-open");
  isMenuOpen = false;
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
  distance: "50px",
  reset: false,
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
  const delay = 200 * index;

  sr.reveal(img, {
    origin: "bottom",
    delay,
  });
});

sr.reveal(".title", {
  origin: "bottom",
});

sr.reveal(".customers .image", {
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

// const sr = ScrollReveal({
//   duration: 1000,
//   distance: "50px",
//   reset: true,
//   delay: 200,
// });

// const elementsToAnimate1 = document.querySelectorAll(".art");
// sr.reveal(elementsToAnimate1, {
//   origin: "bottom",
//   distance: "50px",
//   delay: 200,
//   easing: "cubic-bezier(0.5, 0, 0, 1)",
//   scale: 1,
//   viewFactor: 0.5,
//   mobile: true,
// });

// const elementsToAnimate2 = document.querySelectorAll(".title");
// sr.reveal(elementsToAnimate1, {
//   origin: "bottom",
//   distance: "50px",
//   delay: 200,
//   easing: "cubic-bezier(0.5, 0, 0, 1)",
//   scale: 1,
//   viewFactor: 0.5,
//   mobile: true,
// });
// End download page items gradually when I do scroll down in js
