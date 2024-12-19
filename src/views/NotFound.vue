<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <RouterLink to="/" class="home-link">Go back to Home</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #ff5252;
}

p {
  margin: 1rem 0;
  font-size: 1.2rem;
  color: #666;
}

.home-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

.home-link:hover {
  background-color: #555;
}
</style>
