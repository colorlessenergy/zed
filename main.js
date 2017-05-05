var responsiveNav = document.getElementById("nav");
var menuIcon = document.getElementsByClassName("menuIcon");

for (var i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener("click", function () {
    responsiveNav.classList.toggle("toggle-nav");
  });

}
