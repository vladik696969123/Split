<template> 
  <div class="dashboard-wrapper">
    <header class="nav-bar">
      <div class="nav-left">
        <a href="#" class="logo-icon">Split</a>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrIfehLlIc2QwyIOQ1df7q-NvHz2TAlCfVA&s" alt="split" class="split">
      <nav class="nav-links">
        <router-link to="/admin/products" active-class="active-link">Main</router-link>
        <router-link to="/admin/reviews" active-class="active-link">Reviews</router-link>
        <router-link 
    :to="isLoggedIn ? '/profile' : '/login'" 
    class="account-link"
    active-class="active-link"
  >
    <template v-if="isLoggedIn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
      </svg>
    </template>
    <template v-else>
      Account
    </template>
  </router-link>
      </nav>
    </header>

    <!-- Сіра лінія під навбаром -->

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'AdminDashboard',
  data() {
    return {
      isLoggedIn: false
    }
  },
  created() {
    // Перевіряємо, чи користувач авторизований (наприклад через localStorage)
    this.isLoggedIn = !!localStorage.getItem('username');
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

.dashboard-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  color: #000;
}

/* === Навбар === */
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85); /* прозорий білий фон */
  backdrop-filter: blur(10px); /* ефект прозорості / розмиття */
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 8%;
  transition: background 0.4s ease-in-out;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08); /* легка тінь для виділення */
  animation: slideDown 0.6s ease-out;
}

.nav-left {
  font-weight: 700;
  font-size: 22px;
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.5px;
}

.logo-icon {
  font-size: 22px;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links a {
  color: #757575;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0%;
  background: #3b82f6;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a:hover {
  color: #000000;
  transform: translateY(-1px);
}

/* Сіра лінія під навбаром */
.bottom-line {
  width: 100%;
  height: 1px;
  background-color: #cccccc; /* сірий колір */
}

/* Основний контент */
.main-content {
  flex: 1;
  padding: 40px 8%;
}

/* === Анімації === */
@keyframes slideDown {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.12); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.split{
  border-radius: 10px;
  height: 30px;
  position: absolute;
  right: 1750px;
}

.account-link svg {
  width: 24px;
  height: 24px;
  color: #757575;
  transition: color 0.3s, transform 0.2s;
}

.account-link svg:hover {
  color: #000;
  transform: translateY(-2px);
}

</style>
