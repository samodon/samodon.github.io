function toggleDarkMode() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
    document.body.setAttribute('data-theme', 'dark');
} else {
    document.body.removeAttribute('data-theme');
}

// Add an event listener for theme toggle button
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
});
