document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      {
        threshold: 0.3 // Element must be 30% visible
      }
    );

    const animatedElements = document.querySelectorAll(".animate-slide-left, .animate-slide-right, .animate-fade-up");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  });