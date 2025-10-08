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
              <i class='bx bxl-linkedin'></i>
              LinkedIn
            </a>
            <a href="https://github.com/ShahanurSharif" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn btn-secondary"
               aria-label="GitHub profile">
              <i class='bx bxl-github'></i>
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
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#6EE7FF', '#FFB86B', '#8A93A6']
        },
        shape: {
          type: ['circle', 'edge', 'triangle', 'char'],
          stroke: {
            width: 0,
            color: '#6EE7FF'
          },
          polygon: {
            nb_sides: 6
          },
          character: {
            value: ['♪', '♫', '{', '}', '<', '>', '◉', '○'],
            font: 'Arial',
            style: '',
            weight: '400'
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
          value: 20,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 10,
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
