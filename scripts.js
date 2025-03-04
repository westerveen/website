document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-container img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });

    // Check login status
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
        document.getElementById('apply-menu-item').style.display = 'inline';
        document.getElementById('complaints-menu-item').style.display = 'inline';
        document.getElementById('vog-menu-item').style.display = 'inline';
        document.getElementById('dashboard-menu-item').style.display = 'inline';
        document.getElementById('login-menu-item').style.display = 'none';
        document.getElementById('logout-menu-item').style.display = 'inline';

        if (document.getElementById('dashboard-content')) {
            document.getElementById('dashboard-content').innerHTML = 'Hier kun je solliciteren, klachten indienen en VOG-formulieren bekijken.';
        }
    } else {
        document.getElementById('dashboard-menu-item').style.display = 'inline';
        if (document.getElementById('dashboard-content')) {
            document.getElementById('dashboard-content').innerHTML = 'Log in om te solliciteren, klachten in te dienen en VOG-formulieren te bekijken.';
        }
    }
});

function login(event) {
    event.preventDefault();
    // Simulate login (you should replace this with real authentication logic)
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
}

function logout() {
    // Simulate logout (you should replace this with real logout logic)
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}