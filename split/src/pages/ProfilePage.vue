<template>
  <div class="profile-page">
    <div class="card">
      <h2>User Profile</h2>
      <div class="info">
        <label>Name</label>
        <p>{{ user.name }}</p>
      </div>
      <div class="info">
        <label>Email</label>
        <p>{{ user.email }}</p>
      </div>
      <div class="info">
        <label>Password</label>
        <p>{{ maskedPassword }}</p>
      </div>

      <button class="btn" @click="logout">Log Out</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Симулюємо дані користувача (можна передавати з попередньої сторінки)
const user = ref({
  name: localStorage.getItem('username') || 'John Doe',
  email: localStorage.getItem('email') || 'user@example.com',
  password: localStorage.getItem('password') || '12345678'
})

// Маскуємо пароль
const maskedPassword = computed(() => '*'.repeat(user.value.password.length))

// Вихід — повертає на головну чи логін
function logout() {
  localStorage.clear()
  router.push('/login')
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

.profile-page {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  color: #000;
}

.card {
  background: #fff;
  width: 380px;
  padding: 40px 36px;
  border-radius: 24px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  text-align: left;
  border: 1px solid #e0e0e0;
}

h2 {
  color: #000;
  margin-bottom: 28px;
  font-weight: 600;
  text-align: center;
}

.info {
  margin-bottom: 18px;
}

label {
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 6px;
}

p {
  background: #f7f7f7;
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 15px;
  color: #111;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: #222;
  transform: translateY(-2px);
}
</style>
