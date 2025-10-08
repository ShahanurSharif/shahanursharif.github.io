<template>
  <section id="skills" class="skills section">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>
      
      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.title" class="skill-category">
          <h3 class="category-title">{{ category.title }}</h3>
          <div class="chips-container">
            <button
              v-for="skill in category.skills"
              :key="skill"
              class="chip skill-chip"
              :title="`Click to see projects using ${skill}`"
              @click="highlightSkill(skill)"
            >
              {{ skill }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    title: 'Backend',
    skills: ['Django', 'DRF', 'Flask', 'Laravel', 'Express', 'FastAPI']
  },
  {
    title: 'Frontend',
    skills: ['Vue', 'React', 'Nuxt', 'Next.js', 'Vuetify', 'Materialize', 'Bootstrap', 'Tailwind', 'SharePoint']
  },
  {
    title: 'Languages',
    skills: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'C++']
  },
  {
    title: 'Data & Databases',
    skills: ['SQL', 'R', 'BigQuery', 'Kaggle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Security & Auth',
    skills: ['OAuth', 'Auth0', 'JWT', 'ACL']
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'OpenShift']
  },
  {
    title: 'AI & Machine Learning',
    skills: ['OpenAI', 'AI Foundry', 'AWS Bedrock', 'Watson', 'Hugging Face', 'AI Vision', 'Data Intelligence']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Jira', 'Azure DevOps', 'CI/CD']
  },
  {
    title: 'Testing',
    skills: ['Pest', 'PyTest', 'Jest', 'Selenium']
  }
];

const highlightSkill = (skill: string) => {
  console.log(`Highlighting projects with: ${skill}`);
  // This could dispatch an event to filter projects
};
</script>

<style scoped>
.skills {
  background: var(--bg-secondary);
}

.skills-grid {
  display: grid;
  gap: var(--space-xl);
}

.skill-category {
  content-visibility: auto;
}

.category-title {
  font-size: 1.25rem;
  color: var(--cyan);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 2px solid var(--border);
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.skill-chip {
  cursor: pointer;
  border: 1px solid transparent;
}

.skill-chip:hover {
  border-color: var(--cyan);
}

.skill-chip:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
</style>
