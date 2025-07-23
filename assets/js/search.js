/* =======================
search click full open 
==========================*/
const openBtn = document.getElementById("openSearchBtn");
const closeBtn = document.getElementById("closeSearch");
const searchBox = document.getElementById("searchBox");

openBtn.onclick = () => searchBox.classList.add("active");
closeBtn.onclick = () => searchBox.classList.remove("active");