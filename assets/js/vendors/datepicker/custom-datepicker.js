// const calendarElem = document.getElementById('datepicker-inline');
// const elem = document.getElementById('my-datepicker');
// const datepicker = new Datepicker(elem, {
//     autohide: true,
//     format: 'dd/mm/yyyy',
//     todayHighlight: true,
//     inline: true,
// });


const calendarElem = document.getElementById('datepicker-inline');
const datepicker = new Datepicker(calendarElem, {
    autohide: false,
    format: 'dd/mm/yyyy',
    todayHighlight: true,
    inline: true
});