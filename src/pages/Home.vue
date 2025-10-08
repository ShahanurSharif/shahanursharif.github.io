<template>
  <main id="main" class="home">
    <nav class="scroll-spy" aria-label="Page navigation">
      <ul>
        <li v-for="section in sections" :key="section.id">
          <a 
            :href="`#${section.id}`" 
            :class="{ active: activeSection === section.id }"
            data-smooth-scroll
          >
            {{ section.label }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="content">
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <SkillsSection id="skills" />
      <CertificationsSection id="certifications" />
      <EducationSection id="education" />
      <LeadershipSection id="leadership" />
      <MediaSection id="media" />
      <HobbiesSection id="hobbies" />
      <AwardsSection id="awards" />
      <ReferencesSection id="references" />
      <ContactSection id="contact" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import CertificationsSection from '@/components/sections/CertificationsSection.vue';
import EducationSection from '@/components/sections/EducationSection.vue';
import LeadershipSection from '@/components/sections/LeadershipSection.vue';
import MediaSection from '@/components/sections/MediaSection.vue';
import HobbiesSection from '@/components/sections/HobbiesSection.vue';
import AwardsSection from '@/components/sections/AwardsSection.vue';
import ReferencesSection from '@/components/sections/ReferencesSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'media', label: 'Media' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'awards', label: 'Awards' },
  { id: 'references', label: 'References' },
  { id: 'contact', label: 'Contact' }
];

const activeSection = ref('hero');

const updateActiveSection = () => {
  const scrollPos = window.scrollY + 100;
  
  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
        activeSection.value = section.id;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});
</script>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
}

.scroll-spy {
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}

.scroll-spy ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scroll-spy li {
  margin: 0.5rem 0;
}

.scroll-spy a {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--gray);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  border-left: 2px solid transparent;
  transition: all 0.2s ease;
}

.scroll-spy a:hover {
  color: var(--cyan);
  border-left-color: var(--cyan);
}

.scroll-spy a.active {
  color: var(--cyan);
  border-left-color: var(--cyan);
}

.content {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .scroll-spy {
    display: none;
  }

  .content {
    padding: 0 1rem;
  }
}
</style>
