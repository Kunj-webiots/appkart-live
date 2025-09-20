// var cacheName = "Appkart-app";
// var filesToCache = [
//   "./",
//   "./index.html",
//   "../assets/css/vendors/aos/dist/aos.css",
//   "../assets/css/vendors/bootstrap/dist/css/bootstrap.min.css",
//   "../assets/css/vendors/bootstrap/dist/css/bootstrap.rtl.min.css",
//   "../assets/css/vendors/swiper/swiper-bundle.min.css",
//   "../assets/css/vendors/swiper/swiper.min.css",
//   "../assets/css/apexcharts.min.css",
//   "../assets/css/datepicker.min.css",
//   "../assets/css/flatpickr.min.css",
//   "../assets/css/iconly.css",
//   "../assets/css/iconsax.css",
//   "../assets/css/lightgallery.css",
//   "../assets/css/metropolis-font.css",
//   "../assets/css/style.css",
//   "../assets/css/sweetalert2.css",
//   "../assets/js/apexchart/apexcharts.min.js",
//   "../assets/js/apexchart/custom.js",
//   "../assets/js/sweet-alert-plugin/app.js",
//   "../assets/js/sweet-alert-plugin/sweetalert.min.js",
//   "../assets/js/vendors/aos/dist/aos.js",
//   "../assets/js/vendors/bootstrap/bootstrap.bundle.min.js",
//   "../assets/js/vendors/bootstrap/bootstrap.min.js",
//   "../assets/js/vendors/bootstrap/popper.min.js",
//   "../assets/js/vendors/datepicker/custom-datepicker.js",
//   "../assets/js/vendors/datepicker/datepicker.min.js",
//   "../assets/js/vendors/datepicker/flatpickr.js",
//   "../assets/js/vendors/swiper/swiper-bundle.min.js",
//   "../assets/js/vendors/custom-lightgallery.js",
//   "../assets/js/vendors/lightgallery.min.js",
//   "../assets/js/active-section.js",
//   "../assets/js/avatar-change.js",
//   "../assets/js/calender.js",
//   "../assets/js/chat.js",
//   "../assets/js/custom-swiper.js",
//   "../assets/js/filter-select.js",
//   "../assets/js/homescreen-popup.js",
//   "../assets/js/iconsax.js",
//   "../assets/js/image-change.js",
//   "../assets/js/model.js",
//   "../assets/js/otp.js",
//   "../assets/js/quantity.js",
//   "../assets/js/range-slider.js",
//   "../assets/js/script.js",
//   "../assets/js/scroll-header.js",
//   "../assets/js/search.js",
//   "../assets/js/show-mode.js",
//   "../assets/js/template-setting.js",
//   "../assets/js/text-type.js",
//   "../assets/js/timer.js",
//   "../assets/js/toast.js",
//   "../assets/js/typed.js",
// ];

// /* Start the service worker and cache all of the app's content */
// setTimeout(() => {
//   self.addEventListener("install", function (e) {
//     e.waitUntil(
//       caches.open(cacheName).then(function (cache) {
//         return cache.addAll(filesToCache);
//       })
//     );
//     self.skipWaiting();
//   });
// }, 500);













const cacheName = "Appkart-app";
const filesToCache = [
  "./",
  "./index.html",
  "../assets/css/vendors/aos/dist/aos.css",
  "../assets/css/vendors/bootstrap/dist/css/bootstrap.min.css",
  "../assets/css/vendors/bootstrap/dist/css/bootstrap.rtl.min.css",
  "../assets/css/vendors/swiper/swiper-bundle.min.css",
  "../assets/css/vendors/swiper/swiper.min.css",
  "../assets/css/apexcharts.min.css",
  "../assets/css/datepicker.min.css",
  "../assets/css/flatpickr.min.css",
  "../assets/css/iconly.css",
  "../assets/css/iconsax.css",
  "../assets/css/lightgallery.css",
  "../assets/css/metropolis-font.css",
  "../assets/css/style.css",
  "../assets/css/sweetalert2.css",
  "../assets/js/apexchart/apexcharts.min.js",
  "../assets/js/apexchart/custom.js",
  "../assets/js/sweet-alert-plugin/app.js",
  "../assets/js/sweet-alert-plugin/sweetalert.min.js",
  "../assets/js/vendors/aos/dist/aos.js",
  "../assets/js/vendors/bootstrap/bootstrap.bundle.min.js",
  "../assets/js/vendors/bootstrap/bootstrap.min.js",
  "../assets/js/vendors/bootstrap/popper.min.js",
  "../assets/js/vendors/datepicker/custom-datepicker.js",
  "../assets/js/vendors/datepicker/datepicker.min.js",
  "../assets/js/vendors/datepicker/flatpickr.js",
  "../assets/js/vendors/swiper/swiper-bundle.min.js",
  "../assets/js/vendors/custom-lightgallery.js",
  "../assets/js/vendors/lightgallery.min.js",
  "../assets/js/active-section.js",
  "../assets/js/avatar-change.js",
  "../assets/js/calender.js",
  "../assets/js/chat.js",
  "../assets/js/custom-swiper.js",
  "../assets/js/filter-select.js",
  "../assets/js/homescreen-popup.js",
  "../assets/js/iconsax.js",
  "../assets/js/image-change.js",
  "../assets/js/model.js",
  "../assets/js/otp.js",
  "../assets/js/quantity.js",
  "../assets/js/range-slider.js",
  "../assets/js/script.js",
  "../assets/js/scroll-header.js",
  "../assets/js/search.js",
  "../assets/js/show-mode.js",
  "../assets/js/template-setting.js",
  "../assets/js/text-type.js",
  "../assets/js/timer.js",
  "../assets/js/toast.js",
  "../assets/js/typed.js",
];

/* Start the service worker and cache all of the app's content */
/* ============================
   Install event
   ============================ */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Service Worker: Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* ============================
   Activate event
   ============================ */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            console.log("Service Worker: Removing old cache", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

/* ============================
   Fetch event
   ============================ */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response OR fetch from network
      return (
        cachedResponse ||
        fetch(event.request).catch(() => {
          // Optional: return offline fallback page here
          // return caches.match("/offline.html");
        })
      );
    })
  );
});