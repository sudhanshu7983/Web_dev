window.onload = function () {
    window.scrollTo(0, 0);
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Engineer', 'Web Designer'],
        typeSpeed: 50,
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector('.rightsection img ');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                img.style.animation = 'blurAndRotate 3s linear';
            } else {
                img.style.animation = 'none';
            }
        });
    }, {
        threshold: 0.5 
    });

    observer.observe(img);
});
