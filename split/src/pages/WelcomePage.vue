<template>
  <div class="welcome-page">
    <div class="card">
      <h1>Welcome, {{ username }}!</h1>
      <p class="subtitle">Your account has been successfully created.</p>
      <button class="btn" @click="goToDashboard">Go to Dashboard</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("User");

onMounted(() => {
  const authUser = localStorage.getItem("authUser");
  if (authUser && authUser.name) {
    username.value = authUser.name;
  }
});

function goToDashboard() {
  router.push("/");
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

.welcome-page {
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
  width: 400px;
  padding: 40px 36px;
  border-radius: 24px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  border: 1px solid #e0e0e0;
}

h1 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 15px;
  color: #555;
  margin-bottom: 30px;
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
