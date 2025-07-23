/* ====================
model filter emoji
=======================*/
const emojiItems = document.querySelectorAll('.emoji-items li');
emojiItems.forEach(item => {
    item.addEventListener('click', function () {
        emojiItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});


/* ==================
Hotel booking Home JS
=====================*/
document.querySelectorAll('.hotel-tab li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.hotel-tab li').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});


/* =================
Blog select topic JS 
====================*/
document.querySelectorAll('.blog-topic-list li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.blog-topic-list li').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
})


/* ======================
Blog change follow button 
==========================*/
document.querySelectorAll('.follow-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('following');
        btn.textContent = btn.classList.contains('following') ? 'Following' : 'Follow';
    });
});


