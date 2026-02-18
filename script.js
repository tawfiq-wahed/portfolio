
var menu = document.getElementById("menu-button");
var navMenu = document.getElementById("nav-menu");

menu.onclick = function() {
 navMenu.classList.toggle("active");
};
var link = navMenu.getElementsByTagName("a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function(e) {
        e.preventDefault(); 
        var targetId = this.getAttribute("href");
        var targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
        navMenu.classList.remove("active");
    }
}
