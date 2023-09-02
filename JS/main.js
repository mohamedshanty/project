// // Start Shufill img
// // const images = [
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-16-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-15-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-23-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-1-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-19-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-2-min-1.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-9-min-1.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-11-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-30-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-34-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-3-min-1.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-25-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-18-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-31-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-26-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-10-min-1.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-5-min-1.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-12-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-24-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-17-min.png",
// //   "https://motawaj.com/wp-content/uploads/2022/07/Asset-36-min.png",
// // ];

// // const imageContainers = document.querySelectorAll(
// //   ".customers .container .image"
// // );
// // const prevBtn = document.getElementById("prevBtn");
// // const nextBtn = document.getElementById("nextBtn");

// // const numVisibleImages = 5;
// // let currentIndex = 0;

// // function updateImage() {
// //   imageContainers.forEach((container) => container.classList.remove("active"));

// //   for (let i = currentIndex; i < currentIndex + numVisibleImages; i++) {
// //     const imageIndex = i % images.length;
// //     imageContainers[imageIndex].classList.add("active");
// //     imageContainers[imageIndex].querySelector("img").src = images[imageIndex];
// //   }
// // }

// // function showNextImages() {
// //   currentIndex = (currentIndex + 1) % images.length;
// //   updateImage();
// // }

// // setInterval(showNextImages, 2000);

// // updateImage();

// // prevBtn.addEventListener("click", () => {
// //   currentIndex = (currentIndex - 1 + images.length) % images.length;
// //   updateImage();
// // });

// // nextBtn.addEventListener("click", showNextImages);

// // End Shufill img

// // Start How Much Char In TextArea
// const textarea = document.getElementById("msg");
// const charCounter = document.querySelector(".char-counter");

// textarea.addEventListener("input", () => {
//   const currentLength = textarea.value.length;
//   charCounter.textContent = `${currentLength} / 180`;

//   if (currentLength > 180) {
//     charCounter.style.color = "red";
//   } else {
//     charCounter.style.color = "rgb(131, 127, 127)";
//   }
// });
// // End How Much Char In TextArea

// // Start If No Text Input In Name Input Or Email Show Error Msg
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const contactForm = document.getElementById("contact-form");

// contactForm.addEventListener("submit", function (event) {
//   const nameValue = nameInput.value.trim();
//   const emailValue = emailInput.value.trim();

//   if (nameValue === "" || emailValue === "") {
//     event.preventDefault();
//   }
// });

// nameInput.addEventListener("blur", function () {
//   if (nameInput.value.trim() === "") {
//     displayError(nameInput, "من فضلك، قم بإدخال اسمك الكامل.");
//   } else {
//     removeError(nameInput);
//   }
// });

// emailInput.addEventListener("blur", function () {
//   if (emailInput.value.trim() === "") {
//     displayError(emailInput, "من فضلك، قم بإدخال بريدك الإلكتروني.");
//   } else {
//     removeError(emailInput);
//   }
// });

// function displayError(inputElement, errorMessage) {
//   const errorDiv = inputElement.nextElementSibling;

//   if (!errorDiv) {
//     const newErrorDiv = document.createElement("div");
//     newErrorDiv.className = "error-message";
//     newErrorDiv.textContent = errorMessage;

//     inputElement.parentNode.appendChild(newErrorDiv);
//   }
// }

// function removeError(inputElement) {
//   const errorDiv = inputElement.nextElementSibling;
//   if (errorDiv && errorDiv.className === "error-message") {
//     errorDiv.remove();
//   }
// }
// // End If No Text Input In Name Input Or Email Show Error Msg

// // Start Scroll To Top
// document.addEventListener("DOMContentLoaded", function () {
//   let scrollableElement = document.body;
//   const scrollToTop = document.getElementById("scrollToTop");
//   scrollableElement.addEventListener("wheel", checkScrollDirection);

//   function checkScrollDirection(event) {
//     if (checkScrollDirectionIsUp(event)) {
//       scrollToTop.style.display = "block";
//     } else {
//       scrollToTop.style.display = "none";
//     }
//   }

//   function checkScrollDirectionIsUp(event) {
//     if (event.wheelDelta) {
//       return event.wheelDelta > 0;
//     }
//     return event.deltaY < 0;
//   }
//   scrollToTop.addEventListener("click", function () {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
// });

// // End Scroll To Top
// // Start download page items gradually when I do scroll down in js
// // Scroll Reveal
// const sr = ScrollReveal({
//   duration: 1000,
//   distance: "50px",
//   reset: false,
//   delay: 100,
// });

// const servicesImages = document.querySelectorAll(".services-img");

// servicesImages.forEach((img, index) => {
//   const delay = 200 * index;

//   sr.reveal(img, {
//     origin: "bottom",
//     delay,
//   });
// });

// const artImages = document.querySelectorAll(".art");

// artImages.forEach((img, index) => {
//   const delay = 200 * index;

//   sr.reveal(img, {
//     origin: "bottom",
//     delay,
//   });
// });

// const form = document.querySelectorAll("#contact-form");

// form.forEach((img, index) => {
//   const delay = 200 * index;

//   sr.reveal(img, {
//     origin: "bottom",
//     delay,
//   });
// });

// const allImg = document.querySelectorAll(".image");

// allImg.forEach((img, index) => {
//   const delay = 200 * index;

//   sr.reveal(img, {
//     origin: "bottom",
//     delay,
//   });
// });

// sr.reveal(".title", {
//   origin: "bottom",
// });

// sr.reveal(".customers .image", {
//   origin: "bottom",
// });

// sr.reveal(".def", {
//   origin: "bottom",
// });

// sr.reveal(".advantages .image", {
//   origin: "right",
// });

// sr.reveal(".advantages .our-advantages", {
//   origin: "left",
// });

// // const sr = ScrollReveal({
// //   duration: 1000,
// //   distance: "50px",
// //   reset: true,
// //   delay: 200,
// // });

// // const elementsToAnimate1 = document.querySelectorAll(".art");
// // sr.reveal(elementsToAnimate1, {
// //   origin: "bottom",
// //   distance: "50px",
// //   delay: 200,
// //   easing: "cubic-bezier(0.5, 0, 0, 1)",
// //   scale: 1,
// //   viewFactor: 0.5,
// //   mobile: true,
// // });

// // const elementsToAnimate2 = document.querySelectorAll(".title");
// // sr.reveal(elementsToAnimate1, {
// //   origin: "bottom",
// //   distance: "50px",
// //   delay: 200,
// //   easing: "cubic-bezier(0.5, 0, 0, 1)",
// //   scale: 1,
// //   viewFactor: 0.5,
// //   mobile: true,
// // });
// // End download page items gradually when I do scroll down in js

var paginationElement = document.getElementById("pagination");
var prevPageButton = document.getElementById("prevPage");
var nextPageButton = document.getElementById("nextPage");
var currentPage = 1;

function createPagination(totalPages, currentPage) {
  paginationElement.innerHTML = "";

  var firstPage = document.createElement("a");
  firstPage.href = "#";
  firstPage.textContent = "1";
  if (currentPage === 1) {
    firstPage.classList.add("active");
  }
  firstPage.addEventListener("click", function () {
    currentPage = 1;
    createPagination(totalPages, currentPage);
  });
  paginationElement.appendChild(firstPage);

  if (currentPage > 3) {
    var ellipsis1 = document.createElement("span");
    ellipsis1.textContent = "...";
    paginationElement.appendChild(ellipsis1);
  }

  for (
    let i = Math.max(2, currentPage - 2);
    i <= Math.min(currentPage + 1, totalPages - 1);
    i++
  ) {
    let link = document.createElement("a");
    link.href = "#";
    link.textContent = i;

    if (i === currentPage) {
      link.classList.add("active");
    }

    link.addEventListener("click", function () {
      currentPage = parseInt(this.textContent);
      createPagination(totalPages, currentPage);
    });

    paginationElement.appendChild(link);
  }

  if (currentPage < totalPages - 2) {
    var ellipsis2 = document.createElement("span");
    ellipsis2.textContent = "...";
    paginationElement.appendChild(ellipsis2);
  }

  var lastPage = document.createElement("a");
  lastPage.href = "#";
  lastPage.textContent = totalPages;
  if (currentPage === totalPages) {
    lastPage.classList.add("active");
  }
  lastPage.addEventListener("click", function () {
    currentPage = totalPages;
    createPagination(totalPages, currentPage);
  });
  paginationElement.appendChild(lastPage);

  if (currentPage === 1) {
    prevPageButton.style.display = "none";
  } else {
    prevPageButton.style.display = "inline-block";
  }

  if (currentPage === totalPages) {
    nextPageButton.style.display = "none";
  } else {
    nextPageButton.style.display = "inline-block";
  }

  // تحديد ما إذا كان يجب عرض العناصر في الصفحة الحالية أم لا
  var pageElements = document.querySelectorAll(".content.content1");
  for (var i = 0; i < pageElements.length; i++) {
    if (i + 1 === currentPage) {
      pageElements[i].style.display = "grid";
    } else {
      pageElements[i].style.display = "none";
    }
  }
}

prevPageButton.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    createPagination(7, currentPage);
  }
});

nextPageButton.addEventListener("click", function () {
  if (currentPage < 7) {
    currentPage++;
    createPagination(7, currentPage);
  }
});

createPagination(7, 1);

// عناصر الصفحة الأولى
var page1Items = [
  {
    image: "../Image/eng37-450x340.jpg",
    title: "In the right place",
    date: "ديسمبر 29, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng35-450x340.jpg",
    title: "?What content should I provide to my clients",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng36-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng34-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng33-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng33-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng31-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng30-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng25-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng29-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng27-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng26-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  // ... إكمال العناصر الأخرى هنا
];

// عناصر الصفحة الثانية
var page2Items = [
  {
    image: "../Image/eng24-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng23-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng22-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng21-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng20-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng19-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng18-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng17-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng16-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng15-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng14-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng13-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
];
// عناصر الصفحة الثالثة
var page2Items = [
  {
    image: "../Image/eng12-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/41111-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng11-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng10-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/43333-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/3999-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng9-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng8-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/422222-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/37777-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng28-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng7-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
];
// عناصر الصفحة الرابعة
var page2Items = [
  {
    image: "../Image/eng6.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/3555-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/3444-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/3111-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/3000-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng-5-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2999-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng4-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2888-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2777-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng3-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/eng2-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
];
// عناصر الصفحة الخامسة
var page2Items = [
  {
    image: "../Image/eng1-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2666-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2555-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2444-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2333-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2222-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2111-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/2000-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/1999-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/1888-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/1777-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/1666-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
];
// عناصر الصفحة السادسة
var page2Items = [
  {
    image: "../Image/1555-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/1414-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/1313-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/121212-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/إختيار-وقت-مناسب-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/إعادة-الإستهداف-لإعلانك-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/رقم-الجوال-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/الوقت-المناسب-للإعلان-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/الإستبعاد.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/555555-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/44444444-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/333333333-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
];
// عناصر الصفحة السابعة
var page2Items = [
  {
    image: "../Image/22222222222-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
  {
    image: "../Image/seo-3910506_960_720-450x340.jpg",
    title: "Motion graphics benefits",
    date: "ديسمبر 28, 2022",
    category: "سيو",
  },
];
