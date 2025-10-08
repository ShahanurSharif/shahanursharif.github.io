// Lazy inject SVG doodles
const doodles: Record<string, string> = {
  'split-brain': `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 400px;">
      <!-- Left side: PCB traces -->
      <g id="left-brain">
        <circle cx="60" cy="100" r="50" fill="none" stroke="var(--cyan)" stroke-width="2"/>
        <path d="M 30 100 L 50 100 M 40 80 L 40 100 M 40 100 L 40 120" stroke="var(--cyan)" stroke-width="2" fill="none"/>
        <path d="M 60 70 L 60 90 M 50 80 L 70 80" stroke="var(--cyan)" stroke-width="2"/>
        <circle cx="50" cy="80" r="3" fill="var(--cyan)"/>
        <circle cx="70" cy="80" r="3" fill="var(--cyan)"/>
        <rect x="55" y="110" width="10" height="10" fill="var(--cyan)"/>
      </g>
      <!-- Right side: Paint splash -->
      <g id="right-brain">
        <circle cx="140" cy="100" r="50" fill="none" stroke="var(--mango)" stroke-width="2"/>
        <path d="M 120 90 Q 130 95 140 90 Q 150 95 160 90" stroke="var(--mango)" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="125" cy="105" r="8" fill="var(--mango)" opacity="0.6"/>
        <circle cx="145" cy="110" r="12" fill="var(--mango)" opacity="0.7"/>
        <circle cx="155" cy="100" r="6" fill="var(--mango)" opacity="0.5"/>
        <path d="M 135 120 Q 140 125 145 120" stroke="var(--mango)" stroke-width="2" fill="none"/>
      </g>
      <!-- Connection -->
      <path d="M 110 100 L 130 100" stroke="var(--gray)" stroke-width="2" stroke-dasharray="5,5"/>
    </svg>
  `,
  
  'rubber-duck': `
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" style="max-width: 200px;">
      <!-- Duck body -->
      <ellipse cx="75" cy="90" rx="40" ry="35" fill="var(--mango)" opacity="0.9"/>
      <!-- Head -->
      <circle cx="75" cy="50" r="25" fill="var(--mango)"/>
      <!-- Eye -->
      <circle cx="82" cy="45" r="4" fill="var(--ink)"/>
      <!-- Beak -->
      <path d="M 95 50 Q 100 52 98 55 Q 96 52 95 50" fill="var(--mango)" opacity="0.7"/>
      <!-- Wing -->
      <ellipse cx="65" cy="85" rx="15" ry="20" fill="var(--mango)" opacity="0.6" transform="rotate(-20 65 85)"/>
      <!-- Laptop -->
      <rect x="20" y="110" width="45" height="30" fill="var(--gray)" rx="2"/>
      <rect x="23" y="113" width="39" height="24" fill="var(--cyan)"/>
      <line x1="25" y1="120" x2="60" y2="120" stroke="var(--ink)" stroke-width="1"/>
      <line x1="25" y1="125" x2="55" y2="125" stroke="var(--ink)" stroke-width="1"/>
    </svg>
  `,
  
  'coffee-cup': `
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" style="max-width: 200px;">
      <!-- Cup -->
      <path d="M 50 60 L 45 120 L 105 120 L 100 60 Z" fill="var(--off-white)" stroke="var(--gray)" stroke-width="2"/>
      <!-- Coffee -->
      <path d="M 52 75 L 48 115 L 102 115 L 98 75 Z" fill="var(--mango)" opacity="0.7"/>
      <!-- Handle -->
      <path d="M 105 75 Q 125 85 125 95 Q 125 105 105 110" fill="none" stroke="var(--gray)" stroke-width="2"/>
      <!-- Steam (hover animated) -->
      <g class="steam" opacity="0.6">
        <path d="M 65 50 Q 60 40 65 30" stroke="var(--cyan)" stroke-width="2" fill="none" stroke-linecap="round">
          <animate attributeName="d" dur="2s" repeatCount="indefinite" 
                   values="M 65 50 Q 60 40 65 30; M 65 50 Q 70 40 65 30; M 65 50 Q 60 40 65 30"/>
        </path>
        <path d="M 75 55 Q 80 45 75 35" stroke="var(--cyan)" stroke-width="2" fill="none" stroke-linecap="round">
          <animate attributeName="d" dur="2.5s" repeatCount="indefinite" 
                   values="M 75 55 Q 80 45 75 35; M 75 55 Q 70 45 75 35; M 75 55 Q 80 45 75 35"/>
        </path>
        <path d="M 85 50 Q 90 40 85 30" stroke="var(--cyan)" stroke-width="2" fill="none" stroke-linecap="round">
          <animate attributeName="d" dur="3s" repeatCount="indefinite" 
                   values="M 85 50 Q 90 40 85 30; M 85 50 Q 80 40 85 30; M 85 50 Q 90 40 85 30"/>
        </path>
      </g>
    </svg>
  `,
  
  'rocket-cat': `
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" style="max-width: 180px;">
      <!-- Cat face sticker -->
      <circle cx="75" cy="60" r="30" fill="var(--off-white)" stroke="var(--gray)" stroke-width="2"/>
      <!-- Ears -->
      <path d="M 50 45 L 55 30 L 60 45" fill="var(--off-white)" stroke="var(--gray)" stroke-width="2"/>
      <path d="M 90 45 L 95 30 L 100 45" fill="var(--off-white)" stroke="var(--gray)" stroke-width="2"/>
      <!-- Eyes -->
      <circle cx="65" cy="55" r="3" fill="var(--ink)"/>
      <circle cx="85" cy="55" r="3" fill="var(--ink)"/>
      <!-- Nose -->
      <circle cx="75" cy="65" r="2" fill="var(--mango)"/>
      <!-- Mouth -->
      <path d="M 75 65 L 75 70 M 75 70 Q 70 72 65 70 M 75 70 Q 80 72 85 70" stroke="var(--ink)" stroke-width="1" fill="none"/>
      <!-- Rocket flames -->
      <path d="M 70 85 L 65 100 L 70 95 L 75 105 L 80 95 L 85 100 L 80 85" fill="var(--mango)" opacity="0.7"/>
      <path d="M 72 95 L 70 105 L 75 100 L 80 105 L 78 95" fill="var(--cyan)" opacity="0.6"/>
    </svg>
  `,
  
  'robot-hand': `
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" style="max-width: 200px;">
      <!-- Robot hand -->
      <g id="robot">
        <rect x="20" y="70" width="30" height="40" fill="var(--gray)" rx="3"/>
        <rect x="23" y="73" width="24" height="8" fill="var(--cyan)"/>
        <!-- Fingers -->
        <rect x="20" y="110" width="6" height="15" fill="var(--gray)" rx="2"/>
        <rect x="28" y="110" width="6" height="18" fill="var(--gray)" rx="2"/>
        <rect x="36" y="110" width="6" height="16" fill="var(--gray)" rx="2"/>
        <rect x="44" y="110" width="6" height="14" fill="var(--gray)" rx="2"/>
      </g>
      <!-- Human hand -->
      <g id="human">
        <ellipse cx="110" cy="90" rx="18" ry="25" fill="var(--off-white)" opacity="0.9"/>
        <!-- Fingers -->
        <path d="M 105 65 Q 103 60 105 55" stroke="var(--off-white)" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
        <path d="M 110 65 Q 110 58 110 52" stroke="var(--off-white)" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
        <path d="M 115 65 Q 117 60 115 55" stroke="var(--off-white)" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
        <path d="M 95 95 Q 90 98 87 95" stroke="var(--off-white)" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
      </g>
      <!-- Paintbrush -->
      <rect x="55" y="75" width="35" height="4" fill="var(--mango)" rx="2"/>
      <path d="M 90 75 L 95 70 L 98 77 L 90 79" fill="var(--cyan)"/>
    </svg>
  `
};

export function initDoodles() {
  const doodleElements = document.querySelectorAll('[data-doodle]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const doodleName = element.getAttribute('data-doodle');
        
        if (doodleName && doodles[doodleName]) {
          element.innerHTML = doodles[doodleName];
          observer.unobserve(element);
        }
      }
    });
  }, {
    rootMargin: '50px'
  });
  
  doodleElements.forEach(el => observer.observe(el));
}
