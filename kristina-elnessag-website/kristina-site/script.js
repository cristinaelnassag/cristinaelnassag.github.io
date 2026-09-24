document.addEventListener("DOMContentLoaded", () => {
  // 1. تحديث سنة الحقوق تلقائياً في التذييل (Footer)
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. التمرير السلس للروابط داخل الصفحة
  const links = document.querySelectorAll('.nav a, .hero-actions a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 3. تأثير ظهور العناصر أثناء التمرير (Reveal on Scroll)
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animatedSections = document.querySelectorAll('.section, .card');
  animatedSections.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });
});
