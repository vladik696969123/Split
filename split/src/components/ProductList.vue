<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :image="product.image"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
components: {
ProductCard,
},
props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>