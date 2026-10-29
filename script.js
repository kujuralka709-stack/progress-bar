
document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector("#skills");
    const progressBars = document.querySelectorAll(".progress-bar");

    function animateBars() {
        progressBars.forEach(function (bar) {
            const percentage = Number(bar.dataset.progress);

            // Keep the progress between 0 and 100
            const safePercentage = Math.max(
                0,
                Math.min(100, percentage)
            );

            bar.style.width = safePercentage + "%";
        });
    }

    // Detect when the skills section becomes visible
    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateBars();
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    observer.observe(skillsSection);
});
