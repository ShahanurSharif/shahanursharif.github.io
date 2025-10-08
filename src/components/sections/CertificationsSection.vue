<template>
  <section id="certifications" class="certifications section">
    <div class="container">
      <h2 class="section-title">Certifications & Courses</h2>
      
      <div class="cert-grid grid grid-3">
        <div v-for="cert in certifications" :key="cert.title" class="cert-card card">
          <h3 class="cert-title">{{ cert.title }}</h3>
          <p class="cert-issuer">{{ cert.issuer }}</p>
          <p v-if="cert.status" class="cert-status">{{ cert.status }}</p>
        </div>
      </div>
      
      <div class="credly-link">
        <a href="https://www.credly.com/users/shahanur-md-sharif.39b9aafc" 
           class="btn btn-primary"
           target="_blank"
           rel="noopener noreferrer">
          🏆 View All Certifications on Credly
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const certifications = [
  { title: 'IBM Full Stack Software Developer', issuer: 'IBM' },
  { title: 'Google Data Analytics Professional', issuer: 'Google' },
  { title: 'Google Project Management Professional', issuer: 'Google' },
  { title: 'AWS Solutions Architect Associate', issuer: 'AWS', status: 'In Progress' },
  { title: 'Generative AI on Amazon Bedrock', issuer: 'AWS' },
  { title: 'Developing Applications with Flask', issuer: 'IBM' },
  { title: 'Containers, Kubernetes & OpenShift', issuer: 'IBM' }
];
</script>

<style scoped>
.certifications {
  background: var(--bg-primary);
}

.cert-card {
  text-align: center;
}

.cert-title {
  font-size: 1.125rem;
  margin-bottom: var(--space-sm);
}

.cert-issuer {
  color: var(--cyan);
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.cert-status {
  color: var(--mango);
  font-size: 0.875rem;
  font-style: italic;
}

.credly-link {
  display: flex;
  justify-content: center;
  margin-top: var(--space-xl);
}
</style>
