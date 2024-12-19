<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import ProductService from '@/services/ProductService';
import { Product } from '@/types'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});

const product = ref<Product | null>(null);


onMounted(() => {
  ProductService.getProductDetails(props.id)
    .then((res) => {
      product.value = res.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="productPage">
    <div v-if="product" class="productCard">
      <figure>
        <img :src="product.images[0]" alt="boh">
      </figure>
      <h2>{{ product.title }}</h2>
      <div class="productInfo">
        <h3>Category: {{ product.category }}</h3>
        <h3>Vote: {{ product.rating }} / 5</h3>
        <h3>€{{ product.price }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.productPage {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
}

.productCard {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  width: 350px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  margin: 20px;

  &:hover {
    transform: translateY(-8px);
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    opacity: 0.95;
  }

  figure {
    height: 280px;
    width: 100%;
    margin-bottom: 24px;
    border-radius: 8px;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  h2 {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 16px;
    font-weight: 700;
    text-align: center;
  }

  .productInfo {
    font-size: 1rem;
    color: #555;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h3 {
      margin: 0;
      font-size: 1.1rem;
      color: #333;

      &:last-child {
        font-weight: bold;
        font-size: 1.2rem;
        color: #e67e22;
      }
    }
  }
}


@media (max-width: 768px) {
  .productCard {
    width: 90%;

    padding: 16px;
  }

  .productInfo {
    gap: 10px;
  }

  h2 {
    font-size: 1.2rem;

  }
}
</style>
