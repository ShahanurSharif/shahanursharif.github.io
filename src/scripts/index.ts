// Main entry point for vanilla JS enhancements
import { initSmoothScroll } from './smooth-scroll';
import { initCounters } from './counters';
import { initDoodles } from './doodles';

// Initialize all enhancements when DOM is ready
function init() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInit);
  } else {
    runInit();
  }
}

function runInit() {
  initSmoothScroll();
  initCounters();
  initDoodles();
}

init();
