<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="image" :alt="name" class="product-image" />
    </div>
    <h2>{{ name }}</h2>
    <p class="price">{{ price }} грн</p>
    <button class="buy-button" v-on:click="addToCart">Купити</button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    name: String,
    description: String,
    price: Number,
    image: String,
  },
  setup(props) {
    const addToCart = inject("addToCart");

    function handleAddToCart() {
      addToCart({
        name: props.name,
        price: props.price,
        image: props.image,
      });
    }

    return { addToCart: handleAddToCart };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.product-card {
  background: #0a0f14;
  border: 1px solid white;
  padding: 20px;
  text-align: center;
  color: #e5e7eb;
  font-family: "Inter", sans-serif;
  transition: transform 0.25s ease, box-shadow 0.3s ease;
  max-width: 300px;
  margin: 15px auto;
}

.product-card:hover {
  transform: translateY(-6px);
}



.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

h2 {
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
  margin: 15px 0 5px;
}

.price {
  font-size: 17px;
  color: #00b8fc;
  font-weight: 700;
  margin-bottom: 20px;
}

.buy-button {
  background: linear-gradient(135deg, #00b8fc, #007bff);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 100%;
  font-size: 15px;
  letter-spacing: 0.5px;
}

.buy-button:hover {
  background: linear-gradient(135deg, #00a4e4, #0066cc);
  transform: scale(1.03);
  box-shadow: 0 4px 15px rgba(0, 184, 252, 0.4);
}
</style>