<template> 
  <div class="dashboard-wrapper">
    <header class="nav-bar">
      <div class="nav-left">
        <a href="#" class="logo-icon">Split</a>
      </div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrIfehLlIc2QwyIOQ1df7q-NvHz2TAlCfVA&s"
        alt="split"
        class="split"
      />

      <button class="menu-btn" @click="toggleMenu">
        ☰
      </button>

      <nav class="nav-links" :class="{ 'show-menu': menuOpen }">
        <router-link to="/admin/products" active-class="active-link">Main</router-link>
        <router-link to="/admin/reviews" active-class="active-link">Reviews</router-link>
        <router-link 
          :to="isLoggedIn ? '/profile' : '/login'" 
          class="account-link"
          active-class="active-link"
        >
          <template v-if="isLoggedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
              />
            </svg>
          </template>
          <template v-else>
            Account
          </template>
        </router-link>
      </nav>
    </header>

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
      isLoggedIn: false,
      menuOpen: false
    };
  },
  created() {
    // Перевірка, чи користувач авторизований
    this.isLoggedIn = !!localStorage.getItem('username');
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
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

.nav-bar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%; /* ✅ тепер на всю ширину */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px; /* замість відсотків — фіксовані відступи */
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  animation: slideDown 0.6s ease-out;
  box-sizing: border-box; /* щоб padding не зменшував ширину */
}

.logo-icon {
  font-size: 22px;
  font-weight: 700;
  color: black;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 40px;
  align-items: center;
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

.nav-links a:hover {
  color: #000000;
  transform: translateY(-1px);
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

.split {
  border-radius: 10px;
  height: 30px;
  margin-right: auto;
  margin-left: 20px;
}

.menu-btn {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.main-content {
  flex: 1;
  padding: 40px 8%;
}

@keyframes slideDown {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    padding: 20px 0;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .nav-links.show-menu {
    display: flex;
  }

  .menu-btn {
    display: block;
  }

  .split {
    display: none;
  }

  .main-content {
    padding: 20px 5%;
  }
}
</style>
