<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductService from '../services/ProductService.js';
import ProductCard from '@/components/ProductCard.vue';
import { ProductServiceResponse } from '@/types';
import { Product } from '@/types';

// Accesso a route e router
const route = useRoute();
const router = useRouter();

// Stato dei prodotti
const currentPage = ref<number>(parseInt(route.params.page as string, 10) || 1);
const products = ref<Product[] | null>(null);
const itemsPerPage: number = 10; // Numero di prodotti per pagina

// Funzione per recuperare i prodotti
const fetchProducts = () => {
  products.value = null; // Reset prodotti durante il caricamento
  const offset = (currentPage.value - 1) * itemsPerPage; // Calcolo dello skip
  ProductService.getProducts(offset, itemsPerPage)
    .then((res: ProductServiceResponse) => {
      products.value = res.data.products;
    })
    .catch((error) => {
      console.error(error);
    });
};

// Recupero prodotti al montaggio
onMounted(fetchProducts);

// Rilevazione cambiamenti nei parametri della rotta
watch(
  () => route.params.page,
  (newPage: string) => {
    const parsedPage = parseInt(newPage, 10);
    currentPage.value = isNaN(parsedPage) ? 1 : parsedPage;
    fetchProducts();
  }
);

// Navigazione tra le pagine
const goToPage = (page: number) => {
  if (page > 0) {
    router.push({ name: 'productsList', params: { page: String(page) } });
  }
};
</script>

<template>
  <main>
    <!-- Loading Spinner -->
    <div v-if="!products" class="loading">Loading products...</div>

    <!-- Lista Prodotti -->
    <div v-else class="product-list">
      <ProductCard v-for="item in products" :key="item.id" :product="item" />
    </div>

    <!-- Paginazione -->
    <div class="pagination">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1">
        Previous Page
      </button>
      <span>You are currently on page {{ currentPage }}</span>
      <button @click="goToPage(currentPage + 1)">
        Next Page
      </button>
    </div>
  </main>
</template>

<style lang="scss">
/* Layout e componenti principali */
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: var(--spacing-medium);
  background-color: var(--secondary-color);
  min-height: 100vh;
}

.loading {
  font-size: var(--font-size-large);
  font-weight: bold;
  color: var(--primary-color);
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  // gap: 1.5rem;
  width: 100%;
  justify-items: center;
  padding: var(--spacing-medium);
  margin-top: var(--spacing-large);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  padding-bottom: var(--spacing-large);
}

.pagination button {
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-color);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}

.pagination span {
  font-size: var(--font-size-base);
  font-weight: bold;
  color: var(--text-color);
}

@media (max-width: 1024px) {
  .pagination {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}
</style>
