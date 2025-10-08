<template>
  <section id="awards" class="awards section">
    <div class="container">
      <h2 class="section-title">Awards & Recognition</h2>
      
      <div class="award-highlight card">
        <div class="award-icon">🏆</div>
        <h3 class="award-title">Bangladesh Hi-Tech Park Authority Startup Winner</h3>
        <p class="award-description">
          Received seed funding and 1-year coworking space at Bangladesh Hi-Tech Park for 
          innovative SaaS solutions. Recognized among top startups in Bangladesh.
        </p>
        <div class="award-benefits">
          <span class="benefit chip">💰 Seed Funding</span>
          <span class="benefit chip">🏢 1-Year Coworking Space</span>
          <span class="benefit chip">🎯 Mentorship Program</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.awards {
  background: var(--bg-secondary);
}

.award-highlight {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: var(--space-xl);
}

.award-icon {
  font-size: 4rem;
  margin-bottom: var(--space-lg);
}

.award-title {
  font-size: 1.75rem;
  margin-bottom: var(--space-md);
  background: linear-gradient(120deg, var(--cyan), var(--mango));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.award-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
}

.award-benefits {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.benefit {
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .award-highlight {
    padding: var(--space-lg);
  }
  
  .award-icon {
    font-size: 3rem;
  }
  
  .award-title {
    font-size: 1.5rem;
  }
}
</style>
