<template>
  <section id="contact" class="contact section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      
      <div class="contact-content">
        <div class="contact-text">
          <p class="contact-intro">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div class="contact-links">
          <a href="mailto:iyaanasehrish@gmail.com" class="contact-btn btn btn-primary">
            ✉️ Email
          </a>
          <a href="tel:+61490071821" class="contact-btn btn btn-primary">
            📞 Phone
          </a>
          <a href="https://www.linkedin.com/in/shahanursharif" 
             class="contact-btn btn btn-secondary"
             target="_blank"
             rel="noopener noreferrer">
            💼 LinkedIn
          </a>
          <a href="https://www.upwork.com/freelancers/shahanurmds" 
             class="contact-btn btn btn-secondary"
             target="_blank"
             rel="noopener noreferrer">
            🎯 Upwork
          </a>
          <a href="https://github.com/ShahanurSharif" 
             class="contact-btn btn btn-secondary"
             target="_blank"
             rel="noopener noreferrer">
            💻 GitHub
          </a>
          <a href="https://www.freelancer.com/u/babusharif" 
             class="contact-btn btn btn-secondary"
             target="_blank"
             rel="noopener noreferrer">
            🌐 Freelancer
          </a>
          <a href="https://www.codester.com/microsharif" 
             class="contact-btn btn btn-secondary"
             target="_blank"
             rel="noopener noreferrer">
            🛒 Codester
          </a>
          <a href="https://www.microdreamit.com/" 
             class="contact-btn btn btn-secondary"
             target="_blank"
             rel="noopener noreferrer">
            🏢 MicroDreamIT
          </a>
        </div>
      </div>
      
      <footer class="site-footer">
        <p>&copy; 2025 Shahanur Md Sharif. All rights reserved.</p>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact {
  background: var(--bg-secondary);
  padding-bottom: var(--space-xl);
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.contact-intro {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
}

.contact-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

.contact-btn {
  justify-content: center;
}

.site-footer {
  text-align: center;
  padding-top: var(--space-xl);
  border-top: 1px solid var(--border);
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .contact-links {
    grid-template-columns: 1fr;
  }
}
</style>
