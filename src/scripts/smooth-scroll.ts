// Smooth scroll functionality with prefers-reduced-motion support
export function initSmoothScroll() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) return;

  const scrollLinks = document.querySelectorAll('[data-smooth-scroll], a[href^="#"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      const event = e as MouseEvent;
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, '', href);
        }
      }
    });
  });
}
