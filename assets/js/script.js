/*========================
    Manifest js
 ==========================*/
// window.onload = () => {
//   "use strict";
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("../sw.js");
//   }
// };

/*====================
 Ratio js
=======================*/
window.addEventListener("load", () => {
  const bgImg = document.querySelectorAll(".bg-img");
  for (i = 0; i < bgImg.length; i++) {
    let bgImgEl = bgImg[i];

    if (bgImgEl.classList.contains("bg-top")) {
      bgImgEl.parentNode.classList.add("b-top");
    } else if (bgImgEl.classList.contains("bg-bottom")) {
      bgImgEl.parentNode.classList.add("b-bottom");
    } else if (bgImgEl.classList.contains("bg-center")) {
      bgImgEl.parentNode.classList.add("b-center");
    } else if (bgImgEl.classList.contains("bg-left")) {
      bgImgEl.parentNode.classList.add("b-left");
    } else if (bgImgEl.classList.contains("bg-right")) {
      bgImgEl.parentNode.classList.add("b-right");
    }

    if (bgImgEl.classList.contains("blur-up")) {
      bgImgEl.parentNode.classList.add("blur-up", "lazyload");
    }

    if (bgImgEl.classList.contains("bg_size_content")) {
      bgImgEl.parentNode.classList.add("b_size_content");
    }

    bgImgEl.parentNode.classList.add("bg-size");
    const bgSrc = bgImgEl.src;
    bgImgEl.style.display = "none";
    bgImgEl.parentNode.setAttribute(
      "style",
      `
      background-image: url(${bgSrc});
      background-size:cover;
      background-position: center;
      background-repeat: no-repeat;
      display: block;
      `
    );
  }
});

/*=====================
    wishlist added start
==========================*/
const divs = document.querySelectorAll(".wishlist-btn");
divs.forEach((el) =>
  el.addEventListener("click", (event) => {
    event.target.parentNode.classList.toggle("animate");
    event.target.parentNode.classList.toggle("active");
    event.target.parentNode.classList.toggle("inactive");
  })
);

/*==================
  Loader js
======================*/
// const loaderSpan = document.querySelector(".loader").children;
// const animate = function () {
//   document.querySelector(".loader").classList.toggle("animate");
// };

// const timeOutAnimation = setInterval(animate, 2000);
// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     timeOutAnimation;
//   } else {
//     setTimeout(function () {
//       document.querySelector(".loader-wrapper").classList.add("hidden");
//       clearInterval(timeOutAnimation);
//     }, 3000);
//   }
// };


/*==================
Custom Select Js 
=====================*/

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".plant-otp-form .form-control");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      if (event.inputType !== "deleteContentBackward" && event.target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !event.target.value) {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });

    input.addEventListener("focus", () => {
      input.select();
    });
  });
});


/* ===========
bottom header 
==============*/
const navItems = document.querySelectorAll('.bottom-header ul li');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

/* ===============
rtl
==================*/
const toggle = document.getElementById('rtlToggle');

const isRTL = localStorage.rtl === '1';
document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
if (toggle) toggle.checked = isRTL;

toggle?.addEventListener('change', (e) => {
  const enabled = e.target.checked;
  document.documentElement.setAttribute('dir', enabled ? 'rtl' : 'ltr');
  localStorage.rtl = enabled ? '1' : '0';
});

/* =================
change password 
====================*/
document.querySelectorAll('.password-icon').forEach(icon => {
  icon.onclick = () => {
    const input = icon.closest('.form-group').querySelector('input');
    const [eye, eyeSlash] = [icon.querySelector('.eye-icon'), icon.querySelector('.eye-slash')];
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    eye.style.display = show ? 'inline' : 'none';
    eyeSlash.style.display = show ? 'none' : 'inline';
  };
});


// function toggleMute(el) {
//   el.classList.toggle('active');
// }



/* ====================
rating button 
=======================*/
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".loadMore");
  if (!btn) return;

  btn.addEventListener("click", e => {
    e.preventDefault();

    const hiddenItems = [...document.querySelectorAll(".rating-item")].filter(el => el.style.display === "none" || getComputedStyle(el).display === "none");

    hiddenItems.slice(0, 3).forEach(el => el.style.display = "block");

    if (hiddenItems.length <= 3) {
      btn.textContent = "No more ratings";
      btn.disabled = true;
    }
  });
});

/* ======================
chatting dark mode js
=========================*/

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btn = document.getElementById('toggleDarkMode');
  if (localStorage.darkMode === 'enabled') body.classList.add('dark-mode');
  btn?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.darkMode = body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
  });
});




/* ================
Hotel Booking link 
===================*/
function copyLink(el) {
  // Find the closest input with class "link"
  const input = el.parentElement.querySelector('.link');

  if (input) {
    input.select(); // Optional: select the text visually
    navigator.clipboard.writeText(input.value)
      .then(() => alert("Link copied!"))
      .catch(() => alert("Failed to copy link."));
  } else {
    alert("Input not found");
  }
}
