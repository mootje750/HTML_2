document.querySelectorAll('img').forEach(img => {
    img.ondragstart = () => false;
});

document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.getElementById("home");
    const infoSection = document.getElementById("information");
    const homeLink = document.querySelector('a[href="#home"]');
    const infoLink = document.querySelector('a[href="informatie.html"]');

    homeSection.classList.add("active");
    infoSection.classList.add("inactive");


    function showSection(sectionToShow, sectionToHide) {

        sectionToShow.classList.remove("inactive");
        sectionToShow.classList.add("active");

        sectionToHide.classList.add("inactive");
        sectionToHide.classList.remove("active");
    }


    homeLink.addEventListener("click", function() {
        showSection(homeSection, infoSection);
    });

 
    infoLink.addEventListener("click", function() {
        showSection(infoSection, homeSection);
    });
});

