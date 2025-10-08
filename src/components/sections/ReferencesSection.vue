<template>
  <section id="references" class="references section">
    <div class="container">
      <h2 class="section-title">References</h2>
      
      <div class="references-grid">
        <details 
          v-for="(reference, index) in references" 
          :key="index" 
          class="reference-accordion card"
        >
          <summary class="reference-header">
            <div>
              <h3 class="reference-name">{{ reference.name }}</h3>
              <p class="reference-title">{{ reference.title }}</p>
            </div>
            <span class="expand-icon" aria-hidden="true">▼</span>
          </summary>
          
          <div class="reference-details">
            <div class="reference-contact">
              <div class="contact-item">
                <strong>Institution:</strong> {{ reference.institution }}
              </div>
              <div class="contact-item">
                <strong>Phone:</strong> 
                <a :href="`tel:${reference.phone}`">{{ reference.phone }}</a>
              </div>
              <div class="contact-item">
                <strong>Email:</strong>
                <a :href="`mailto:${reference.email}`">{{ reference.email }}</a>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const references = [
  {
    name: 'Abu Zafar Shahriar, PhD',
    title: 'Senior Lecturer',
    institution: 'Monash Business School',
    phone: '+61 3 9903 2652',
    email: 'shahriar.abuzafar@monash.edu'
  },
  {
    name: 'Sardar Haque, PhD',
    title: 'Associate Professor',
    institution: 'Oryx Universal College',
    phone: '+974 4021 0000 Ext 562',
    email: 'sardar.h@oryx.edu.qa'
  }
];
</script>

<style scoped>
.references {
  background: var(--bg-primary);
}

.references-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.reference-accordion {
  padding: 0;
  overflow: hidden;
}

.reference-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg);
  cursor: pointer;
  list-style: none;
  user-select: none;
}

.reference-header::-webkit-details-marker {
  display: none;
}

.reference-name {
  font-size: 1.25rem;
  margin-bottom: var(--space-xs);
}

.reference-title {
  color: var(--cyan);
  font-weight: 600;
  margin: 0;
}

.expand-icon {
  flex-shrink: 0;
  font-size: 0.875rem;
  color: var(--cyan);
  transition: transform var(--transition-base);
}

details[open] .expand-icon {
  transform: rotate(180deg);
}

.reference-details {
  padding: 0 var(--space-lg) var(--space-lg);
  border-top: 1px solid var(--border);
  animation: fadeInUp 0.3s ease-out;
}

.reference-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding-top: var(--space-md);
}

.contact-item {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.contact-item strong {
  color: var(--text-secondary);
  min-width: 90px;
}

.contact-item a {
  color: var(--cyan);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.contact-item a:hover {
  color: var(--mango);
}

@media (max-width: 768px) {
  .reference-header {
    padding: var(--space-md);
  }
  
  .reference-details {
    padding: 0 var(--space-md) var(--space-md);
  }
  
  .contact-item {
    flex-direction: column;
    gap: var(--space-xs);
  }
}
</style>
