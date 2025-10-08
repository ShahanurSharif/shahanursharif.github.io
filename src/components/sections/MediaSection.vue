<template>
  <section id="media" class="media section">
    <div class="container">
      <h2 class="section-title">Media & Publications</h2>
      
      <div class="media-grid grid grid-2">
        <div class="media-category">
          <h3 class="category-title">News Features</h3>
          <div class="media-items">
            <a href="https://images.thedailystar.net/toggle/news/bangladesh-freelancer-development-society-launches-bangladesh-054173" 
               class="media-card card"
               target="_blank"
               rel="noopener noreferrer">
              <h4>The Daily Star</h4>
              <p>Bangladesh Freelancer Development Society launches in Bangladesh</p>
            </a>
            <a href="https://today.thefinancialexpress.com.bd/stock-corporate/seminar-on-it-held-in-khulna-1551630656" 
               class="media-card card"
               target="_blank"
               rel="noopener noreferrer">
              <h4>The Financial Express</h4>
              <p>Seminar on IT held in Khulna</p>
            </a>
          </div>
        </div>
        
        <div class="media-category">
          <h3 class="category-title">Software Publications</h3>
          <div class="media-items">
            <a href="http://accounts.microdreamit.com/login" 
               class="media-card card"
               target="_blank"
               rel="noopener noreferrer">
              <h4>AMSL Accounting</h4>
              <p>Multi-company accounting system</p>
            </a>
            <a href="https://tag101.tagateway.com/" 
               class="media-card card"
               target="_blank"
               rel="noopener noreferrer">
              <h4>Xero Input</h4>
              <p>SaaS inventory management platform</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.media {
  background: var(--bg-secondary);
}

.media-grid {
  gap: var(--space-xl);
}

.category-title {
  font-size: 1.25rem;
  color: var(--cyan);
  margin-bottom: var(--space-lg);
  text-align: center;
}

.media-items {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.media-card {
  display: block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-base);
}

.media-card:not(:disabled):hover {
  transform: translateY(-4px);
  border-color: var(--cyan);
}

.media-card:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.media-card h4 {
  font-size: 1.125rem;
  margin-bottom: var(--space-xs);
}

.media-card p {
  color: var(--text-secondary);
  margin: 0;
}

.media-note {
  font-size: 0.875rem;
  font-style: italic;
}

@media (max-width: 768px) {
  .media-grid {
    grid-template-columns: 1fr;
  }
}
</style>
