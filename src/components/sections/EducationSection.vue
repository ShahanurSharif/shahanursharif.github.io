<template>
  <section id="education" class="education section">
    <div class="container">
      <h2 class="section-title">Education</h2>
      
      <div class="education-grid">
        <div v-for="edu in education" :key="edu.degree" class="edu-card card">
          <h3 class="edu-degree">{{ edu.degree }}</h3>
          <p class="edu-school">{{ edu.school }}</p>
          <p class="edu-period">{{ edu.period }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const education = [
  {
    degree: 'Advanced Diploma in Information Technology',
    school: 'Highgate International College',
    period: '2025 – Present'
  },
  {
    degree: 'Diploma in Information Technology',
    school: 'Highgate International College',
    period: '2024 – 2025'
  },
  {
    degree: 'BSc in Computer Science & Engineering',
    school: 'America Bangladesh University',
    period: '2004 – 2009'
  }
];
</script>

<style scoped>
.education {
  background: var(--bg-secondary);
}

.education-grid {
  display: grid;
  gap: var(--space-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.edu-card {
  text-align: center;
}

.edu-degree {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
}

.edu-school {
  color: var(--cyan);
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.edu-period {
  color: var(--text-secondary);
  font-size: 0.875rem;
}
</style>
