const backToTopButton = document.querySelector(".back-to-top")

//hide button 
const showOnPx  = 100;
const  scrollContainer = () => {
    return document.documentElement || document.body;
};

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
}
backToTopButton.addEventListener('click', goToTop)

//back to top button
document.addEventListener("scroll", () => {
    if(scrollContainer().scrollTop > showOnPx){
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }
})

