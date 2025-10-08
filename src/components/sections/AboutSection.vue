<template>
  <section id="about" class="about section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      
      <div class="about-content">
        <div class="about-text">
          <p class="lead">
            <strong>Transforming Business Challenges into Scalable Digital Solutions.</strong>
          </p>
          
          <p>
            I'm a battle-tested full-stack architect with 13+ years of hands-on experience building enterprise-grade 
            systems that drive real business impact. From selling computers on retail floors to founding MicroDreamIT 
            and delivering 3,331+ hours of top-rated work on Upwork with a perfect 100% Job Success Score—my journey 
            embodies resilience, innovation, and relentless execution.
          </p>
          
          <p>
            I excel at <strong>architecting secure, high-performance SaaS platforms</strong>, integrating complex APIs, 
            and leading cross-functional teams to ship mission-critical applications. My technical arsenal spans 
            <strong>Python (Django, Flask), PHP (Laravel), JavaScript/TypeScript (Vue, React, Node.js)</strong>, 
            with deep expertise in cloud infrastructure, database optimization, and modern DevOps practices.
          </p>
          
          <p>
            What sets me apart? A <span class="philosophy">learn → improve → deliver</span> mindset combined with 
            entrepreneurial grit and enterprise-level rigor. Whether you need a technical co-founder who codes, 
            a senior engineer who scales systems, or a strategic problem-solver who drives ROI—
            <strong>I deliver solutions that move the needle.</strong>
          </p>
          
          <p class="cta-text">
            Ready to build something exceptional? Let's talk about turning your vision into reality.
          </p>
        </div>
        
        <div class="about-visual" data-doodle="coffee-cup" aria-hidden="true">
          <!-- Coffee cup doodle injected here -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  background: var(--bg-secondary);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  align-items: center;
}

.about-text {
  font-size: 1.125rem;
  line-height: 1.8;
}

.lead {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-primary);
}

.philosophy {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(120deg, var(--cyan), var(--mango));
  color: var(--ink);
  border-radius: var(--radius-md);
  font-weight: 600;
}

.cta-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--cyan);
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 2px solid var(--border);
}

.about-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
