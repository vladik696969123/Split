<template> 
  <div class="admin-container">
    <transition name="fade-slide">
      <h2 key="title">Адмін-панель</h2>
    </transition>

    <transition name="fade-up">
      <p key="welcome" class="welcome">Вітаємо, <span>{{ username }}</span>!</p>
    </transition>

    <transition name="scale-fade">
      <button key="logout" class="logout-btn" @click="logout">Вийти</button>
    </transition>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      username: localStorage.getItem("authUser") || "",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("authUser");
      this.$router.push("/");
    },
  },
  beforeMount() {
    if (!this.username) {
      this.$router.push("/login");
    }
  },
};
</script>
  
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.admin-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: radial-gradient(circle at top, #0a0f14, #06080d 90%);
  color: white;
  font-family: "Inter", sans-serif;
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0 0 30px rgba(0, 184, 252, 0.15);
  animation: fadeInBg 1.2s ease-in-out;
}

h2 {
  font-size: 2rem;
  color: #00b8fc;
  margin-bottom: 15px;
  font-weight: 700;
  text-shadow: 0 0 12px rgba(0, 184, 252, 0.5);
}

.welcome {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
}

.welcome span {
  font-weight: 600;
  color: #00b8fc;
}

.logout-btn {
  padding: 12px 40px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(90deg, #00b8fc, #0066ff);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 184, 252, 0.4);
  transition: all 0.3s ease;
}

.logout-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(0, 184, 252, 0.7);
}

.logout-btn:active {
  transform: scale(0.97);
  opacity: 0.9;
}

/* Анімації */
.fade-slide-enter-active {
  animation: fadeSlideIn 0.7s ease;
}

.fade-up-enter-active {
  animation: fadeUp 0.8s ease;
}

.scale-fade-enter-active {
  animation: scaleFade 0.6s ease;
}

/* Ключові кадри */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleFade {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInBg {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>