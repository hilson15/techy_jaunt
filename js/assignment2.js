const menuList = document.getElementById("menu");
const toggleBtn = document.querySelector('.menu-toggle');

function toggleMenu() {
    console.log("Toggle Menu Clicked"); // Check if the function is triggered
    menuList.classList.toggle('show'); // Toggle the class on #menu

    if (menuList.classList.contains("show")) {
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleBtn.innerHTML = '&times;'; // Change icon to close
    } else {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '&#9776;'; // Change icon to hamburger
    }
}

toggleBtn.addEventListener('click', toggleMenu);
