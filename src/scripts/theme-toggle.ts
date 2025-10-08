// Theme toggle functionality
export function initThemeToggle() {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  const updateTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const getCurrentTheme = (): string => {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  };

  toggle.addEventListener('click', () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateTheme(newTheme);
  });

  // Keyboard support
  toggle.addEventListener('keydown', (e: Event) => {
    const event = e as KeyboardEvent;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle.dispatchEvent(new Event('click'));
    }
  });
}
