<template>
  <section id="hobbies" class="hobbies section">
    <div class="container">
      <h2 class="section-title">Hobbies & Interests</h2>
      
      <div class="hobbies-grid grid grid-3">
        <a href="https://www.youtube.com/@shikhi247" class="hobby-card card" target="_blank" rel="noopener noreferrer">
          <div class="hobby-icon">
            <i class='bx bxl-youtube'></i>
          </div>
          <h3 class="hobby-title">YouTube Channel</h3>
          <p class="hobby-description">Shikhi247 - Coding lessons and IT education</p>
          <span class="hobby-link">Visit Channel →</span>
        </a>
        
        <a href="https://www.flickr.com/photos/shahanursharif/" class="hobby-card card" target="_blank" rel="noopener noreferrer">
          <div class="hobby-icon">
            <i class='bx bx-camera'></i>
          </div>
          <h3 class="hobby-title">Photography</h3>
          <p class="hobby-description">Flickr portfolio</p>
          <span class="hobby-link">View Photos →</span>
        </a>
        
        <a href="https://www.youtube.com/watch?v=-xbmfw5ZlHE" 
           class="hobby-card card" 
           target="_blank" 
           rel="noopener noreferrer">
          <div class="hobby-icon">
            <i class='bx bx-music'></i>
          </div>
          <h3 class="hobby-title">Guitarist</h3>
          <p class="hobby-description">Watch my guitar performance</p>
          <span class="hobby-link">Watch Video →</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hobbies {
  background: var(--bg-primary);
}

.hobby-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  transition: all var(--transition-base);
}

.hobby-card:hover {
  transform: translateY(-8px);
  border-color: var(--mango);
}

.hobby-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
  color: var(--mango);
}

.hobby-icon i {
  font-size: 3.5rem;
}

.hobby-title {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
}

.hobby-description {
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  flex-grow: 1;
}

.hobby-link {
  color: var(--mango);
  font-weight: 600;
  font-size: 0.875rem;
}
</style>
