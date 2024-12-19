<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div id="layout">
    <header>
      <nav>
        <div class="nav-container">
          <h1>Shop</h1>
          <div class="nav-links">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
            <RouterLink to="/about" class="nav-link">About Us</RouterLink>
            <RouterLink :to="{ name: 'productsList', params: { page: 1 } }" class="nav-link">Products</RouterLink>
          </div>
        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
