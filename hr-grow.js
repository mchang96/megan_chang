const growers = document.querySelectorAll(".grow-trans");
const sliders = document.querySelectorAll(".slide");
const appearOptions = {
    threshold: 0
    // rootMargin: "0px 0px -100px 0px"
};


const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

growers.forEach(grower => {
    appearOnScroll.observe(grower);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});