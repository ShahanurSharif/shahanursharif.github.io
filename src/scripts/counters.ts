// Counter animation with intersection observer
export function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const animateCounter = (element: Element) => {
    const target = parseInt(element.getAttribute('data-counter') || '0', 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    
    let current = 0;
    const valueElement = element.querySelector('.metric-value');
    
    if (!valueElement) return;
    
    const updateCounter = () => {
      current += increment;
      
      if (current >= target) {
        valueElement.textContent = target + suffix;
        return;
      }
      
      valueElement.textContent = Math.floor(current) + suffix;
      requestAnimationFrame(updateCounter);
    };
    
    updateCounter();
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  counters.forEach(counter => observer.observe(counter));
}
