<template>
  <section id="hero" class="hero section">
    <div id="particles-js" class="particles-bg"></div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          I am an engineer in brain, <br />
          <span class="highlight">artist in mind.</span>
        </h1>
        
        <div class="hero-description">
          <p class="tagline engineer-line">
            <strong>Engineer:</strong> 13+ years architecting secure, scalable ecosystems across SaaS, ERP, e-commerce, and fintech. 
            From sales floor to entrepreneurship to full-stack mastery—still writing millions of lines that matter.
          </p>
          <p class="tagline artist-line">
            <strong>Artist:</strong> Penned 100+ poems, captured thousands of moments through lens, 
            and composed guitar instrumentals that speak where words fall silent.
          </p>
        </div>
        
        <div class="metrics" role="list">
          <div class="metric-chip" role="listitem" data-counter="3331" data-suffix=" hrs">
            <span class="metric-value">3331</span>
            <span class="metric-label">Upwork Hours</span>
          </div>
          <div class="metric-chip" role="listitem" data-counter="100" data-suffix="%">
            <span class="metric-value">100%</span>
            <span class="metric-label">Job Success</span>
          </div>
          <div class="metric-chip" role="listitem" data-counter="10" data-suffix="+">
            <span class="metric-value">10+</span>
            <span class="metric-label">SaaS Systems</span>
          </div>
          <div class="metric-chip" role="listitem" data-counter="40" data-suffix="+">
            <span class="metric-value">40+</span>
            <span class="metric-label">Projects Shipped</span>
          </div>
        </div>
        
        <div class="hero-links">
          <p class="get-in-touch-label">Get in Touch</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/shahanursharif" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn btn-secondary"
               aria-label="LinkedIn profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/ShahanurSharif" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn btn-secondary"
               aria-label="GitHub profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div class="hero-visual" data-doodle="split-brain" aria-hidden="true">
        <!-- SVG doodle will be injected here by vanilla JS -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  if (typeof window !== 'undefined' && (window as any).particlesJS) {
    (window as any).particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#6EE7FF'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#6EE7FF',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
});
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  position: relative;
  z-index: 1;
}

.hero-text {
  width: 100%;
}

.hero-title {
  margin-bottom: var(--space-lg);
  animation: fadeInUp 0.8s ease-out;
}

.highlight {
  background: linear-gradient(120deg, var(--cyan), var(--mango));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  margin-bottom: var(--space-xl);
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.tagline {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: var(--space-md);
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.tagline strong {
  color: var(--cyan);
  font-weight: 600;
}

.engineer-line {
  color: var(--text-secondary);
}

.artist-line {
  color: var(--text-secondary);
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.metric-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-md);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.metric-chip:hover {
  border-color: var(--cyan);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.metric-value {
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--font-heading);
  color: var(--cyan);
  line-height: 1;
}

.metric-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: var(--space-xs);
  text-align: center;
}

.hero-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

.get-in-touch-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin: 0;
}

.social-links {
  display: flex;
  gap: var(--space-md);
}

.social-links .btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
}

.social-links .btn svg {
  width: 20px;
  height: 20px;
}

.hero-visual {
  margin-top: var(--space-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 1s ease-out 0.5s both, float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 968px) {
  .hero-content {
    padding: 0 var(--space-md);
  }
  
  .metrics {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .metrics {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    flex-direction: column;
    width: 100%;
  }
  
  .social-links .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-title,
  .hero-subtitle,
  .metrics,
  .hero-links,
  .hero-visual {
    animation: none;
  }
  
  .metric-chip:hover {
    transform: none;
  }
}
</style>
