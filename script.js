let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;


    if (top >= offset && top < offset  + height) {
        sec.classList.add('box-in-view');
    } else {
        sec.classList.remove('box-in-view');
    }
  });
};


document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".header .navbar a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Remove 'active' class from all links
      links.forEach(function (l) {
        l.classList.remove("active");
      });

      // Add 'active' class to the clicked link
      link.classList.add("active");

      // Prevent the default behavior of the link (e.g., following the href)
      event.preventDefault();
    });
  });
});