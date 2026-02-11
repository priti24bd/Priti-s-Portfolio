console.log("Welcome to Priti Das Dipa's Website!");
// Scroll Animation for sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

console.log("Priti Das Dipa Portfolio Loaded Successfully!");
