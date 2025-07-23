document
  .querySelectorAll(".filter-row li, .filter-color li, .size-select li")
  .forEach((item) => {
    item.addEventListener("click", function () {
      // Remove 'active' class from siblings
      this.parentElement.querySelectorAll(".active").forEach((sibling) => {
        sibling.classList.remove("active");
      });

      // Add 'active' class to the clicked element
      this.classList.add("active");
    });
  });



/*===========
 food filter CSS 
=============*/
document.querySelectorAll('.filter-left-box a').forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.filter-left-box a').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
    const target = link.dataset.filterTarget;
    document.querySelectorAll('.filter-right-box').forEach(section =>
      section.classList.toggle('d-none', section.dataset.filter !== target)
    );
  })
);