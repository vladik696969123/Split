<template>
  <div class="cart-container">
    <h2>Кошик покупок</h2>
    <p v-if="cartItems.length === 0" class="empty">Кошик порожній</p>
    <ul v-else>
      <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <div class="item-info">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <span class="item-name">{{ item.name }}</span>
        </div>
        <div class="item-actions">
          <span class="item-price">{{ item.price }} грн</span>
          <button v-on:click="removeItem(index)" class="remove-button">✖</button>
        </div>
      </li>
    </ul>
    <p v-if="cartItems.length > 0" class="total">
      Загальна сума: <span>{{ totalPrice }} грн</span>
    </p>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const cartItems = inject("cartItems");
    const totalPrice = inject("totalPrice");
    const removeItem = inject("removeItem");

    return { cartItems, totalPrice, removeItem };
  },
};
</script>

<style scoped>
.cart-container {
  background: #0a0f14;
  border: 1px solid white;
  width: 90%;
  margin: 40px auto;
  padding: 20px;
  font-family: "Inter", sans-serif;
  transition: 0.3s;
}

.cart-container h2 {
  color: #00b8fc;
  margin-bottom: 20px;
  font-size: 24px;
}

.empty {
  color: #6b7280;
  font-style: italic;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #111827;
  margin-bottom: 12px;
  padding: 10px 15px;
  border-radius: 10px;
  transition: 0.3s;
}

.cart-item:hover {
  background: #1e293b;
  box-shadow: 0 0 10px rgba(0, 184, 252, 0.2);
}

.item-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-image {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
}

.item-name {
  font-weight: 500;
  color: #f1f5f9;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-price {
  font-weight: bold;
  color: #00b8fc;
}

.remove-button {
  background: transparent;
  border: 1px solid #ff3b3b;
  color: #ff3b3b;
  border-radius: 6px;
  padding: 4px 8px;
  cursor: pointer;
  transition: 0.3s;
}

.remove-button:hover {
  background: #ff3b3b;
  color: white;
  box-shadow: 0 0 10px rgba(255, 59, 59, 0.5);
}

.total {
  font-size: 18px;
  margin-top: 20px;
  text-align: right;
}

.total span {
  color: #00b8fc;
  font-weight: 700;
}
</style>