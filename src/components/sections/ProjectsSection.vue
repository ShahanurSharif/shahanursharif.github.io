<template>
  <section id="projects" class="projects section">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      
      <div class="filter-buttons">
        <button
          v-for="filter in filters"
          :key="filter"
          :class="['filter-btn', { active: activeFilter === filter }]"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>
      
      <div class="projects-grid grid grid-2">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card card"
        >
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="chip">
                {{ tag }}
              </span>
            </div>
          </div>
          
          <p class="project-description">{{ project.description }}</p>
          
          <div v-if="project.credentials" class="credentials">
            <p class="credentials-title">Demo Credentials:</p>
            <code class="credentials-code">
              {{ project.credentials }}
            </code>
          </div>
          
          <div class="project-links">
            <a
              v-if="project.demo"
              :href="project.demo"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Live Demo
            </a>
            <a
              v-if="project.code"
              :href="project.code"
              class="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 Code
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const activeFilter = ref('All');
const filters = ['All', 'SaaS', 'Python', 'PHP', 'Open Source'];

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  code?: string;
  credentials?: string;
  category: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SaaS Inventory (XeroInput)',
    description: 'Enterprise inventory management system with Redis caching, multi-tenancy, and real-time analytics. Built for scale with Docker deployment.',
    tags: ['Laravel', 'Vue', 'Vuetify', 'MySQL', 'Redis', 'Docker'],
    demo: 'https://tag101.tagateway.com/',
    credentials: 'Email: shahanur700@gmail.com | Pass: 123123',
    category: ['All', 'SaaS', 'PHP']
  },
  {
    id: 2,
    title: 'SaaS LPG Cylinder Tracking',
    description: 'Complete logistics and tracking solution for LPG cylinder distribution with real-time monitoring, route optimization, and customer management.',
    tags: ['Laravel', 'Vue', 'jQuery', 'MySQL'],
    demo: 'http://lpg.microdreamit.com/login',
    credentials: 'Email: demo@admin.com | Pass: lpg@123$',
    category: ['All', 'SaaS', 'PHP']
  },
  {
    id: 3,
    title: 'MDIT Hospital Management',
    description: 'Comprehensive hospital management system with patient records, appointment scheduling, billing, and pharmacy management.',
    tags: ['Django', 'DRF', 'Vue', 'Vuetify', 'PostgreSQL'],
    demo: 'http://hospital.microdreamit.com/accounts/login/',
    credentials: 'User: admin | Pass: 123123',
    category: ['All', 'SaaS', 'Python']
  },
  {
    id: 4,
    title: 'Visitor & Guard Management (BHTPA)',
    description: 'Government project for Bangladesh Hi-Tech Park Authority. Tracks visitors, manages security checkpoints, and generates detailed reports.',
    tags: ['Django', 'DRF', 'Vue', 'Vuetify'],
    demo: 'https://monitoring.microdreamit.com/accounts/login/',
    credentials: 'User: admin | Pass: 123123',
    category: ['All', 'Python']
  },
  {
    id: 5,
    title: 'AMSL Accounting',
    description: 'Multi-company accounting system with advanced reporting, bank reconciliation, and financial analytics.',
    tags: ['Laravel', 'Vue', 'jQuery', 'MySQL'],
    demo: 'http://accounts.microdreamit.com/login',
    category: ['All', 'PHP']
  },
  {
    id: 6,
    title: 'LapSpend',
    description: 'Microservices-based laboratory inventory and spending tracking system with complex approval workflows.',
    tags: ['Python', 'PHP', 'Vuetify', 'Microservices'],
    category: ['All', 'Python', 'PHP']
  },
  {
    id: 7,
    title: 'AI Apply Agent Job',
    description: 'Automated job application agent using Selenium and OpenAI. Intelligently fills forms and tracks applications.',
    tags: ['Python', 'Selenium', 'OpenAI', 'Hugging Face'],
    category: ['All', 'Python']
  },
  {
    id: 8,
    title: 'ShapeCSS',
    description: 'Open-source CSS library for creating complex geometric shapes with pure CSS. No images required.',
    tags: ['CSS', 'Open Source'],
    code: 'https://github.com/ShahanurSharif/ShapeCss',
    category: ['All', 'Open Source']
  },
  {
    id: 9,
    title: 'Hopscotch',
    description: 'Modern e-commerce template built with Nuxt 3. Features SSR, dynamic product filtering, and optimized checkout flow.',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind'],
    code: 'https://github.com/shahanursharif/hopscotch/',
    category: ['All', 'Open Source']
  }
];

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects;
  }
  return projects.filter(p => p.category.includes(activeFilter.value));
});
</script>

<style scoped>
.projects {
  background: var(--bg-primary);
}

.filter-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 2px solid var(--border);
  border-radius: var(--radius-full);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
}

.filter-btn:hover {
  border-color: var(--cyan);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: var(--cyan);
  color: var(--ink);
  border-color: var(--cyan);
}

.projects-grid {
  content-visibility: auto;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  height: 100%;
}

.project-header {
  margin-bottom: var(--space-sm);
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: var(--space-sm);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.project-tags .chip {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1;
}

.credentials {
  padding: var(--space-md);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--mango);
}

.credentials-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--mango);
  margin-bottom: var(--space-xs);
}

.credentials-code {
  display: block;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  color: var(--text-primary);
  word-break: break-all;
}

.project-links {
  display: flex;
  gap: var(--space-sm);
  margin-top: auto;
}

.project-links .btn {
  flex: 1;
  justify-content: center;
}

@media (max-width: 768px) {
  .project-links {
    flex-direction: column;
  }
}
</style>
