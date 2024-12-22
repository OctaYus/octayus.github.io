// Open external links in a new tab
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', event => {
        window.open(link.href, '_blank');
        event.preventDefault();
    });
});
document.querySelectorAll('a[target="bugcrowd"]').forEach(link => {
    link.addEventListener('click', event => {
        window.open(link.href, 'bugcrowd');
        event.preventDefault();
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    this.classList.toggle('open');
    nav.classList.toggle('active');
});
