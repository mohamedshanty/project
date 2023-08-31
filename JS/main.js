// Start Shufill img
const images = [
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-16-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-15-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-23-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-1-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-19-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-2-min-1.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-9-min-1.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-11-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-30-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-34-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-3-min-1.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-25-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-18-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-31-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-26-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-10-min-1.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-5-min-1.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-12-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-24-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-17-min.png",
  "https://motawaj.com/wp-content/uploads/2022/07/Asset-36-min.png",
];

const imageContainers = document.querySelectorAll(
  ".customers .container .image"
);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const numVisibleImages = 5;
let currentIndex = 0;

function updateImage() {
  imageContainers.forEach((container) => container.classList.remove("active"));

  for (let i = currentIndex; i < currentIndex + numVisibleImages; i++) {
    const imageIndex = i % images.length;
    imageContainers[imageIndex].classList.add("active");
    imageContainers[imageIndex].querySelector("img").src = images[imageIndex];
  }
}

function showNextImages() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

setInterval(showNextImages, 2000);

updateImage();

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener("click", showNextImages);

// End Shufill img

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
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = errorMessage;

  inputElement.classList.add("error");
  inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
}

function removeError(inputElement) {
  const errorMessages =
    inputElement.parentNode.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => errorMessage.remove());

  inputElement.classList.remove("error");
}

function displayError(inputElement, errorMessage) {
  const errorMessages =
    inputElement.parentNode.querySelectorAll(".error-message");

  let hasErrorMessage = false;
  errorMessages.forEach((message) => {
    if (message.textContent === errorMessage) {
      hasErrorMessage = true;
    }
  });

  if (!hasErrorMessage) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = errorMessage;

    inputElement.classList.add("error");
    inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
  }
}

function removeError(inputElement) {
  const errorMessages =
    inputElement.parentNode.querySelectorAll(".error-message");

  if (errorMessages.length > 0) {
    errorMessages.forEach((errorMessage) => errorMessage.remove());
    inputElement.classList.remove("error");
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
      scrollToTop.style.display = "block";
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
