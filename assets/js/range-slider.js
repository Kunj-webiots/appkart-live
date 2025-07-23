// // /*=====================
// //     Ranger Slider
// // ==========================*/
// // // Controls the slider using from Input....
// // function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
// //   const [from, to] = getParsed(fromInput, toInput);
// //   fillSlider(
// //     fromInput,
// //     toInput,
// //     "rgba(var(--light-bg),1)",
// //     "rgba(var(--theme-color),1)",
// //     controlSlider
// //   );
// //   fromSlider.value = from;

// //   if (from > to) {
// //     fromSlider.value = to;
// //     fromInput.value = to;
// //   } else {
// //     fromSlider.value = from;
// //   }
// // }
// // // Controls the slider using to Input....
// // function controlToInput(toSlider, fromInput, toInput, controlSlider) {
// //   const [from, to] = getParsed(fromInput, toInput);
// //   fillSlider(
// //     fromInput,
// //     toInput,
// //     "rgba(var(--light-bg),1)",
// //     "rgba(var(--theme-color),1)",
// //     controlSlider
// //   );
// //   setToggleAccessible(toInput);
// //   toSlider.value = to;
// //   toInput.value = to;

// //   if (from <= to) {
// //     toSlider.value = to;
// //     toInput.value = to;
// //   } else {
// //     toInput.value = from;
// //   }
// // }
// // // Sliding event of the From slider
// // function controlFromSlider(fromSlider, toSlider, fromInput) {
// //   const [from, to] = getParsed(fromSlider, toSlider);
// //   fillSlider(
// //     fromSlider,
// //     toSlider,
// //     "rgba(var(--light-bg),1)",
// //     "rgba(var(--theme-color),1)",
// //     toSlider
// //   );
// //   fromInput.value = from;
// //   if (from > to) {
// //     fromInput.value = to;
// //     toInput.value = from;
// //   }
// // }
// // // Sliding event of the To slider
// // function controlToSlider(fromSlider, toSlider, toInput) {
// //   const [from, to] = getParsed(fromSlider, toSlider);
// //   fillSlider(
// //     fromSlider,
// //     toSlider,
// //     "rgba(var(--light-bg),1)",
// //     "rgba(var(--theme-color),1)",
// //     toSlider
// //   );
// //   setToggleAccessible(toSlider);
// //   toSlider.value = to;
// //   toInput.value = to;
// //   if (from > to) {
// //     fromInput.value = to;
// //     toInput.value = from;
// //   }
// // }
// // // Parsign values of the Inputs
// // function getParsed(currentFrom, currentTo) {
// //   const from = parseInt(currentFrom.value, 10);
// //   const to = parseInt(currentTo.value, 10);
// //   return [from, to];
// // }
// // // Changing and Filling the color in the selected part...
// // function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
// //   let rangeDistance = to.max - to.min;
// //   let fromPosition = from.value - to.min;
// //   let toPosition = to.value - to.min;
// //   if (fromPosition > toPosition) {
// //     let spare = fromPosition;
// //     fromPosition = toPosition;
// //     toPosition = spare;
// //   }
// //   controlSlider.style.background = `linear-gradient(
// //               to right,
// //               ${sliderColor} 0%,
// //               ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
// //               ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
// //               ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
// //               ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
// //               ${sliderColor} 100%)`;

// // }
// // // Making sure the toggle which we are using is accesible to change the range
// // function setToggleAccessible(currentTarget) {
// //   const toSlider = document.querySelector("#toSlider");
// //   if (Number(currentTarget.value) <= 0) {
// //     toSlider.style.zIndex = 2;
// //   } else {
// //     toSlider.style.zIndex = 0;
// //   }
// // }

// // const fromSlider = document.querySelector("#fromSlider");
// // const toSlider = document.querySelector("#toSlider");
// // const fromInput = document.querySelector("#fromInput");
// // const toInput = document.querySelector("#toInput");

// // // Initially filling the slider using default values...
// // fillSlider(
// //   fromSlider,
// //   toSlider,
// //   "rgba(var(--light-bg),1)",
// //   "rgba(var(--theme-color),1)",
// //   toSlider
// // );
// // setToggleAccessible(toSlider);

// // // Assigning listner methonds to respective events.
// // fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
// // toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
// // fromInput.oninput = () =>
// //   controlFromInput(fromSlider, fromInput, toInput, toSlider);
// // toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);





/* ========================
food range slider
==========================*/

// document.addEventListener('DOMContentLoaded', () => {






//     const COLOR_TRACK = "#CBD5E1";
//     const COLOR_RANGE = "#0EA5E9";

//     // Get the sliders and tooltips
//     const fromSlider = document.querySelector('#fromSlider');
//     const toSlider = document.querySelector('#toSlider');
//     const fromTooltip = document.querySelector('#fromSliderTooltip');
//     const toTooltip = document.querySelector('#toSliderTooltip');
//     const scale = document.getElementById('scale');

//     // Get min and max values from the fromSlider element
//     const MIN = parseInt(fromSlider.getAttribute('min')); // scale will start from min value (first range slider)
//     const MAX = parseInt(fromSlider.getAttribute('max')); // scale will end at max value (first range slider)
//     const STEPS = parseInt(scale.dataset.steps); // update the data-steps attribute value to change the scale points

//     function controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
//         const [from, to] = getParsed(fromSlider, toSlider);
//         fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
//         if (from > to) {
//             fromSlider.value = to;
//         }
//         setTooltip(fromSlider, fromTooltip);
//     }

//     function controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
//         const [from, to] = getParsed(fromSlider, toSlider);
//         fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
//         setToggleAccessible(toSlider);
//         if (from <= to) {
//             toSlider.value = to;
//         } else {
//             toSlider.value = from;
//         }
//         setTooltip(toSlider, toTooltip);
//     }

//     function getParsed(currentFrom, currentTo) {
//         const from = parseInt(currentFrom.value, 10);
//         const to = parseInt(currentTo.value, 10);
//         return [from, to];
//     }

//     function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
//         const rangeDistance = to.max - to.min;
//         const fromPosition = from.value - to.min;
//         const toPosition = to.value - to.min;
//         controlSlider.style.background = `linear-gradient(
//           to right,
//           ${sliderColor} 0%,
//           ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
//           ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
//           ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
//           ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
//           ${sliderColor} 100%)`;
//     }

//     function setToggleAccessible(currentTarget) {
//         const toSlider = document.querySelector('#toSlider');
//         if (Number(currentTarget.value) <= 0) {
//             toSlider.style.zIndex = 2;
//         } else {
//             toSlider.style.zIndex = 0;
//         }
//     }

//     function setTooltip(slider, tooltip) {
//         const value = slider.value;
//         tooltip.textContent = `$${value}`;
//         const thumbPosition = (value - slider.min) / (slider.max - slider.min);
//         const percent = thumbPosition * 100;
//         const markerWidth = 20; // Width of the marker in pixels
//         const offset = (((percent - 50) / 50) * markerWidth) / 2;
//         tooltip.style.left = `calc(${percent}% - ${offset}px)`;
//     }

//     function createScale(min, max, step) {

//         const range = max - min;
//         const steps = range / step;
//         for (let i = 0; i <= steps; i++) {
//             const value = min + (i * step);
//             const percent = (value - min) / range * 100;
//             const marker = document.createElement('div');
//             marker.style.left = `${percent}%`;
//             marker.textContent = `$${value}`;
//             scale.appendChild(marker);
//         }
//     }

//     // events
//     fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip);
//     toSlider.oninput = () => controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip);

//     // Initial load
//     fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
//     setToggleAccessible(toSlider);
//     setTooltip(fromSlider, fromTooltip);
//     setTooltip(toSlider, toTooltip);
//     createScale(MIN, MAX, STEPS);
// });









/* Food range js 
==================*/

const rangeMin = document.querySelector(".min-range");
const rangeMax = document.querySelector(".max-range");
const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");
const boxMin = document.querySelector(".input-min-box");
const boxMax = document.querySelector(".input-max-box");
const progress = document.querySelector(".progress-slider");

function updateSlider() {
    const min = parseInt(rangeMin.value);
    const max = parseInt(rangeMax.value);
    const maxVal = parseInt(rangeMin.max);

    if (max - min <= 0) return;

    progress.style.left = (min / maxVal) * 100 + "%";
    progress.style.right = 100 - (max / maxVal) * 100 + "%";

    inputMin.value = min;
    inputMax.value = max;

    const offset = 22; // adjust for box width
    boxMin.style.left = `calc(${(min / maxVal) * 100}% - ${offset}px)`;
    boxMax.style.left = `calc(${(max / maxVal) * 100}% - ${offset}px)`;
}

// Sync input to slider
inputMin.addEventListener("input", () => {
    rangeMin.value = inputMin.value;
    updateSlider();
});
inputMax.addEventListener("input", () => {
    rangeMax.value = inputMax.value;
    updateSlider();
});

// Sync slider to input
rangeMin.addEventListener("input", updateSlider);
rangeMax.addEventListener("input", updateSlider);

updateSlider();
