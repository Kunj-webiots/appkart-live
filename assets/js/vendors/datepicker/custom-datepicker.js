
document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('datepicker-inline');

    if (el) {
        new Datepicker(el, {
            autohide: false,
            format: 'dd/mm/yyyy',
            todayHighlight: true,
            inline: true
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#datePicker", {
        enableTime: false,
        dateFormat: "Y-m-d",
    });

    flatpickr("#timePicker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
    });

    flatpickr("#dateTimePicker", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });
});