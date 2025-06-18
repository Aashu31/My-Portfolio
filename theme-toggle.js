// theme-toggle.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.title = 'Toggle Dark Mode';
    
    // Insert the toggle button in the navbar
    const navbar = document.querySelector('.navbar .container');
    navbar.appendChild(themeToggle);
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        enableDarkMode();
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            enableDarkMode();
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            disableDarkMode();
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
    
    function enableDarkMode() {
        const darkTheme = document.createElement('link');
        darkTheme.rel = 'stylesheet';
        darkTheme.href = 'dark-mode.css';
        darkTheme.id = 'dark-theme-style';
        document.head.appendChild(darkTheme);
    }
    
    function disableDarkMode() {
        const darkTheme = document.getElementById('dark-theme-style');
        if (darkTheme) {
            darkTheme.remove();
        }
    }
});