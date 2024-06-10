document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollToPlugin);

    var goToSlide2 = document.getElementById("goToSlide2");
    var slide2 = document.getElementById("slide2");

    goToSlide2.addEventListener("click", function() {
        // Afficher la slide 2
        slide2.style.display = 'block';

        // Animer le défilement vers la slide 2
        gsap.to(window, {duration: 1, scrollTo: "#slide2"});
    });

    // Ajoutez des écouteurs similaires pour les autres slides si nécessaire
});
