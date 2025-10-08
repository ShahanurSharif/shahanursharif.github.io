<template>
  <section id="experience" class="experience section">
    <div class="container">
      <h2 class="section-title">Experience</h2>
      
      <div class="timeline">
        <div 
          v-for="(job, index) in jobs" 
          :key="index" 
          class="timeline-item"
          :class="{ expanded: expandedIndex === index }"
        >
          <div class="timeline-marker"></div>
          
          <div class="timeline-content card">
            <button 
              class="timeline-header" 
              @click="toggleExpand(index)"
              :aria-expanded="expandedIndex === index"
              :aria-controls="`job-details-${index}`"
            >
              <div>
                <h3 class="job-title">{{ job.title }}</h3>
                <p class="job-company">{{ job.company }}</p>
                <p class="job-period">{{ job.period }}</p>
              </div>
              <span class="expand-icon" aria-hidden="true">
                {{ expandedIndex === index ? '−' : '+' }}
              </span>
            </button>
            
            <div 
              :id="`job-details-${index}`"
              class="timeline-details"
              v-show="expandedIndex === index"
            >
              <ul class="highlights">
                <li v-for="(highlight, hIndex) in job.highlights" :key="hIndex">
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const expandedIndex = ref<number | null>(0);

const jobs = [
  {
    title: 'Founder & Lead Developer',
    company: 'MicroDreamIT',
    period: 'Feb 2014 – Sep 2024',
    highlights: [
      'Founded and led software company building custom SaaS solutions',
      'Developed Hospital Management System (Django/DRF)',
      'Built Visitor & Guard Management for BHTPA (Government project)',
      'Created LPG Cylinder Tracking System (Laravel/Vue)',
      'Delivered SaaS Inventory Management (XeroInput) with Redis caching',
      'Managed development team and client relationships'
    ]
  },
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Upwork',
    period: 'Jan 2020 – Present',
    highlights: [
      '3331+ hours with 100% Job Success Score',
      'Architected secure, scalable REST APIs for multiple SaaS clients',
      'Integrated third-party services (payment gateways, CRMs, analytics)',
      'Led development for Trans LLC (2,584 hrs) - built 10-module SaaS ERP',
      'Developed LapSpend lab platform (742 hrs) - complex inventory management'
    ]
  },
  {
    title: 'Freelance Web Developer',
    company: 'Freelancer.com',
    period: 'Jan 2013 – Jan 2020',
    highlights: [
      'Completed 40+ projects with 1000+ websites delivered',
      'Developed custom product configurator for e-commerce',
      'Built aviation marketplace with complex booking system',
      'Created meter tracking system for utility companies',
      'Specialized in PHP, WordPress, and custom CMS solutions'
    ]
  }
];

const toggleExpand = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.75rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--cyan), var(--mango));
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-lg);
}

.timeline-marker {
  position: absolute;
  left: -2.375rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: var(--cyan);
  border: 3px solid var(--bg-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--bg-secondary);
  transition: all var(--transition-base);
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.3);
  box-shadow: 0 0 0 4px var(--bg-secondary), var(--shadow-glow);
}

.timeline-content {
  margin-left: 1rem;
}

.timeline-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-md);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  color: var(--text-primary);
}

.job-title {
  font-size: 1.5rem;
  margin-bottom: var(--space-xs);
}

.job-company {
  color: var(--cyan);
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.job-period {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.expand-icon {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--cyan);
  border: 2px solid var(--cyan);
  border-radius: 50%;
  transition: all var(--transition-base);
}

.timeline-item.expanded .expand-icon {
  transform: rotate(180deg);
  background: var(--cyan);
  color: var(--ink);
}

.timeline-details {
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border);
  animation: fadeInUp 0.3s ease-out;
}

.highlights {
  list-style: none;
  padding: 0;
}

.highlights li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: var(--space-sm);
  line-height: 1.6;
}

.highlights li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--mango);
  font-weight: bold;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 2rem;
  }
  
  .timeline-marker {
    left: -1.625rem;
  }
  
  .job-title {
    font-size: 1.25rem;
  }
  
  .expand-icon {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1.25rem;
  }
}
</style>
