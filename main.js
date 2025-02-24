document.querySelectorAll('a[target="_blank"], a[target="bugcrowd"]').forEach(link => {
    link.addEventListener('click', event => {
        window.open(link.href, link.target);
        event.preventDefault();
    });
});

document.querySelector('.menu-toggle')?.addEventListener('click', function () {
    const nav = document.querySelector('nav');
    this.classList.toggle('open');
    nav?.classList.toggle('active');
});
