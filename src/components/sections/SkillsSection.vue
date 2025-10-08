<template>
  <section id="skills" class="skills section">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>
      
      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.title" class="skill-category">
          <h3 class="category-title">
            <i :class="['bx', category.icon]"></i>
            {{ category.title }}
          </h3>
          <div class="chips-container">
            <button
              v-for="skill in category.skills"
              :key="skill"
              class="chip skill-chip"
              :title="`Click to see projects using ${skill}`"
              @click="highlightSkill(skill)"
            >
              <i v-if="skillIcons[skill]" :class="['bx', skillIcons[skill]]"></i>
              {{ skill }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillIcons: Record<string, string> = {
  // Backend
  'Django': 'bxl-django',
  'DRF': 'bx-code',
  'Flask': 'bx-flask',
  'Laravel': 'bxl-php',
  'Express': 'bxl-nodejs',
  'FastAPI': 'bx-rocket',
  // Frontend
  'Vue': 'bxl-vuejs',
  'React': 'bxl-react',
  'Nuxt': 'bxl-vuejs',
  'Next.js': 'bx-code-block',
  'Vuetify': 'bxl-vuejs',
  'Materialize': 'bx-palette',
  'Bootstrap': 'bxl-bootstrap',
  'Tailwind': 'bxl-tailwind-css',
  'SharePoint': 'bxl-microsoft',
  // Languages
  'Python': 'bxl-python',
  'PHP': 'bxl-php',
  'JavaScript': 'bxl-javascript',
  'TypeScript': 'bxl-typescript',
  'C++': 'bx-code-curly',
  // Data & Databases
  'SQL': 'bx-data',
  'R': 'bx-math',
  'BigQuery': 'bxl-google-cloud',
  'Kaggle': 'bx-bar-chart-alt-2',
  'MySQL': 'bx-data',
  'PostgreSQL': 'bxl-postgresql',
  'MongoDB': 'bxl-mongodb',
  'Redis': 'bx-data',
  // Security & Auth
  'OAuth': 'bx-key',
  'Auth0': 'bx-lock-alt',
  'JWT': 'bx-shield',
  'ACL': 'bx-shield-quarter',
  // Cloud & Infrastructure
  'Azure': 'bxl-microsoft',
  'AWS': 'bxl-aws',
  'Docker': 'bxl-docker',
  'Kubernetes': 'bxl-kubernetes',
  'OpenShift': 'bx-cube-alt',
  // AI & Machine Learning
  'OpenAI': 'bx-brain',
  'AI Foundry': 'bx-chip',
  'AWS Bedrock': 'bxl-aws',
  'Watson': 'bx-bot',
  'Hugging Face': 'bx-happy-heart-eyes',
  'AI Vision': 'bx-show',
  'Data Intelligence': 'bx-bulb',
  // DevOps & Tools
  'Git': 'bxl-git',
  'Jira': 'bx-task',
  'Azure DevOps': 'bxl-microsoft',
  'CI/CD': 'bx-git-branch',
  // Testing
  'Pest': 'bx-bug',
  'PyTest': 'bxl-python',
  'Jest': 'bx-test-tube',
  'Selenium': 'bx-bot'
};

const skillCategories = [
  {
    title: 'Backend',
    icon: 'bx-server',
    skills: ['Django', 'DRF', 'Flask', 'Laravel', 'Express', 'FastAPI']
  },
  {
    title: 'Frontend',
    icon: 'bx-code-alt',
    skills: ['Vue', 'React', 'Nuxt', 'Next.js', 'Vuetify', 'Materialize', 'Bootstrap', 'Tailwind', 'SharePoint']
  },
  {
    title: 'Languages',
    icon: 'bx-code-curly',
    skills: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'C++']
  },
  {
    title: 'Data & Databases',
    icon: 'bx-data',
    skills: ['SQL', 'R', 'BigQuery', 'Kaggle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Security & Auth',
    icon: 'bx-shield-quarter',
    skills: ['OAuth', 'Auth0', 'JWT', 'ACL']
  },
  {
    title: 'Cloud & Infrastructure',
    icon: 'bx-cloud',
    skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'OpenShift']
  },
  {
    title: 'AI & Machine Learning',
    icon: 'bx-brain',
    skills: ['OpenAI', 'AI Foundry', 'AWS Bedrock', 'Watson', 'Hugging Face', 'AI Vision', 'Data Intelligence']
  },
  {
    title: 'DevOps & Tools',
    icon: 'bx-git-branch',
    skills: ['Git', 'Jira', 'Azure DevOps', 'CI/CD']
  },
  {
    title: 'Testing',
    icon: 'bx-test-tube',
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
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.category-title i {
  font-size: 1.5rem;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.skill-chip {
  cursor: pointer;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.skill-chip i {
  font-size: 1.1rem;
}

.skill-chip:hover {
  border-color: var(--cyan);
}

.skill-chip:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
</style>
