/* Bouton hamburger */
document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.querySelector('.responsive-header .menu-toggle');
  const navLinks = document.querySelector('.responsive-header .nav-links-index-responsive');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function(){
      navLinks.classList.toggle('active');
      // Bascule de l'icône : hamburger <=> croix
      if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '&times;';  // Croix
      } else {
        menuToggle.innerHTML = '&#9776;';  // Hamburger
      }
    });
  }
});

/*Surlignage liens bouton hamburger*/
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-links-index a, .nav-links-index-responsive a");
  const currentUrl = window.location.href;
  
  navLinks.forEach(link => {
    // Si l'URL du lien correspond exactement à l'URL actuelle,
    // on lui ajoute la classe "active"
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");

    function reveal() {
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Vérifier les sections visibles dès le chargement
});
