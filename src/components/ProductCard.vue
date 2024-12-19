<script setup lang="ts">
import { PropType } from 'vue';
import { Product } from '@/types';
defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'ProductDetails', params: { id: product.id } }">
    <div class="product-card">
      <figure>
        <img :src="product.images[0]" :alt="product.title" />
      </figure>
      <div class="product-info">
        <h2>{{ product.title }}</h2>
        <p class="category">{{ product.category }}</p>
        <div class="rating">
          <span class="stars">{{ '★'.repeat(product.rating) }}</span>
          <span class="votes">({{ product.rating }} / 5)</span>
        </div>
        <p class="price">€{{ product.price }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  max-width: 450px;
  height: 550px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    background-color: #f9f9f9;
  }

  figure {
    height: 200px;
    background-color: red;
    margin-bottom: 15px;
    overflow: hidden;
    border-radius: 8px;
    display: block;


    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;
    height: auto;
    color: #333;

    h2 {
      font-size: 1.2rem;
      color: #222;
      font-weight: bold;
      margin-bottom: 10px;
      transition: color 0.3s ease;
    }

    p.category {
      font-size: 0.9rem;
      color: #777;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 8px;

      .stars {
        color: #ffd700;
        font-size: 1rem;
      }

      .votes {
        color: #aaa;
        font-size: 0.85rem;
      }
    }

    .price {
      font-size: 1.1rem;
      color: #28a745;
      font-weight: bold;
      margin-top: 15px;
      transition: color 0.3s ease;

      &:hover {
        color: #218838;
      }
    }
  }
}
</style>
