document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  setTimeout(() => {
    heroContent.classList.add("show");
  }, 300);
  window.addEventListener("scroll", () => {
    const position = heroContent.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      heroContent.classList.add("show");
    }
  });
});