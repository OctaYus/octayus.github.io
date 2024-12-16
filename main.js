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