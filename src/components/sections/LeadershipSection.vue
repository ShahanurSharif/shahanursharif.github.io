<template>
  <section id="leadership" class="leadership section">
    <div class="container">
      <h2 class="section-title">Leadership & Community</h2>
      
      <div class="leadership-grid grid grid-2">
        <div v-for="role in roles" :key="role.title" class="role-card card">
          <h3 class="role-title">{{ role.title }}</h3>
          <p class="role-org">{{ role.organization }}</p>
          <p class="role-description">{{ role.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const roles = [
  {
    title: 'President & Founder',
    organization: 'Startup Jashore',
    description: 'Leading local startup community, organizing events, mentoring entrepreneurs, and fostering innovation.'
  },
  {
    title: 'Community Leader',
    organization: 'GrameenPhone Accelerator',
    description: 'Guiding early-stage startups through acceleration program, providing technical mentorship.'
  },
  {
    title: 'Member',
    organization: 'Investor Association of Jashore',
    description: 'Connecting entrepreneurs with investors, facilitating funding opportunities for local businesses.'
  },
  {
    title: 'Ex-President',
    organization: 'Bangladesh Freelancer Development Society (BFDS), Jashore',
    description: 'Led initiatives to train and support freelancers, organized workshops on digital skills.'
  }
];
</script>

<style scoped>
.leadership {
  background: var(--bg-primary);
}

.role-card {
  text-align: center;
}

.role-title {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
}

.role-org {
  color: var(--mango);
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.role-description {
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
