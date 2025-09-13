
/*============
2. Two side range js
==================*/
document.addEventListener("DOMContentLoaded", () => {
    const rangeMin = document.querySelector(".min-range");
    const rangeMax = document.querySelector(".max-range");
    const inputMin = document.querySelector(".input-min");
    const inputMax = document.querySelector(".input-max");
    const boxMin = document.querySelector(".input-min-box");
    const boxMax = document.querySelector(".input-max-box");
    const progress = document.querySelector(".progress-slider");

    // Check if all required elements exist
    if (!rangeMin || !rangeMax || !inputMin || !inputMax || !boxMin || !boxMax || !progress) {
        console.warn("Two-side range slider elements missing.");
        return;
    }

    function updateSlider() {
        const min = parseInt(rangeMin.value);
        const max = parseInt(rangeMax.value);
        const maxVal = parseInt(rangeMin.max);

        if (max - min <= 0) return;

        progress.style.left = (min / maxVal) * 100 + "%";
        progress.style.right = 100 - (max / maxVal) * 100 + "%";

        inputMin.value = min;
        inputMax.value = max;

        const offset = 22;
        boxMin.style.left = `calc(${(min / maxVal) * 100}% - ${offset}px)`;
        boxMax.style.left = `calc(${(max / maxVal) * 100}% - ${offset}px)`;
    }

    inputMin.addEventListener("input", () => {
        rangeMin.value = inputMin.value;
        updateSlider();
    });

    inputMax.addEventListener("input", () => {
        rangeMax.value = inputMax.value;
        updateSlider();
    });

    rangeMin.addEventListener("input", updateSlider);
    rangeMax.addEventListener("input", updateSlider);

    updateSlider();
});


/*============
2.1 One side range js
==================*/
document.addEventListener("DOMContentLoaded", () => {
    const range = document.querySelector('.range-input');
    const tooltip = document.querySelector('.range-tooltip');

    if (!range || !tooltip) {
        console.warn("One-side range slider elements missing.");
        return;
    }

    const setValue = () => {
        const newValue = Number((range.value - range.min) * 100 / (range.max - range.min));
        const newPosition = 16 - (newValue * 0.32);
        tooltip.innerHTML = `<span>${range.value}</span>`;
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
    };

    range.addEventListener("input", setValue);
    setValue();
});





