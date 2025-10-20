<template> 
  <div class="page">
    <div class="card">
      <h2>{{ mode === 'login' ? 'Авторизація' : 'Реєстрація' }}</h2>

      <transition name="fade" mode="out-in">
        <div v-if="mode === 'login'" key="login">
          <div class="group">
            <input v-model="username" placeholder="Логін або email" />
          </div>
          <div class="group">
            <input v-model="password" type="password" placeholder="Пароль" />
          </div>

          <button class="btn" @click="login">Увійти</button>

          <p class="text">
            Немає акаунта?
            <span @click="switchMode" class="link">Зареєструйтесь</span>
          </p>
        </div>

        <div v-else key="register">
          <div class="group">
            <input v-model="email" type="email" placeholder="Введіть Gmail" />
          </div>

          <div class="group">
            <input
              v-model="password"
              type="password"
              placeholder="Введіть пароль"
              @input="validatePassword"
            />
          </div>

          <transition name="fade">
            <div v-if="passwordError" class="error-box">
              ⚠️ {{ passwordError }}
            </div>
          </transition>

          <button class="btn" @click="register">Зареєструватися</button>

          <transition name="fade">
            <div v-if="showCodeInput" class="verify">
              <div class="info-box">
                <div class="icon"></div>
                <div>
                  Лист надіслано на<br />
                  <strong>{{ email }}</strong>
                </div>
              </div>

              <input
                v-model="enteredCode"
                placeholder="Введіть код із листа"
                class="code-input"
              />
              <button class="btn confirm" @click="verifyCode">Підтвердити</button>
            </div>
          </transition>

          <p class="text">
            Вже маєте акаунт?
            <span @click="switchMode" class="link">Увійдіть</span>
          </p>
        </div>
      </transition>

      <transition name="fade">
        <p v-if="message" :class="{'error': isError, 'success': !isError}" class="msg">{{ message }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "login",
      username: "",
      email: "",
      password: "",
      message: "",
      isError: false,
      passwordError: "",
      verificationCode: "",
      enteredCode: "",
      showCodeInput: false,
    };
  },
  methods: {
    switchMode() {
      this.mode = this.mode === "login" ? "register" : "login";
      this.message = "";
      this.passwordError = "";
      this.showCodeInput = false;
    },

    validatePassword() {
      const pwd = this.password;
      if (pwd.length < 8) {
        this.passwordError = "Пароль має бути не менше 8 символів.";
        return false;
      }
      if (!/[A-Z]/.test(pwd)) {
        this.passwordError = "Додайте хоча б одну ВЕЛИКУ літеру.";
        return false;
      }
      if (!/[a-z]/.test(pwd)) {
        this.passwordError = "Додайте хоча б одну маленьку літеру.";
        return false;
      }
      if (!/[0-9]/.test(pwd)) {
        this.passwordError = "Додайте хоча б одну цифру.";
        return false;
      }
      if (!/[!@#$%^&*]/.test(pwd)) {
        this.passwordError = "Додайте спецсимвол (!@#$%^&*).";
        return false;
      }
      this.passwordError = "";
      return true;
    },

    login() {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u) => (u.email === this.username || u.email === this.email) && u.password === this.password
      );
      if (user) {
        this.message = "✅ Вхід успішний!";
        this.isError = false;
        localStorage.setItem("authUser", user.email);
        this.$router.push("/profile");
      } else {
        this.message = "❌ Невірний логін або пароль!";
        this.isError = true;
      }
    },

   async register() {
  if (!this.email || !this.password) {
    this.message = "Введіть email і пароль!";
    this.isError = true;
    return;
  }

  if (!this.validatePassword()) {
    this.isError = true;
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find((u) => u.email === this.email)) {
    this.message = "⚠️ Цей email уже зареєстрований!";
    this.isError = true;
    return;
  }

  try {
    const res = await fetch("https://my-shop-gqvg.onrender.com/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: this.email }),
    });
    const data = await res.json();

    if (data.success) {
      // Зберігаємо код як рядок без пробілів
      this.verificationCode = String(data.code).trim();
      localStorage.setItem("verificationCode", this.verificationCode);
      localStorage.setItem("registeredEmail", String(this.email).trim());
      localStorage.setItem("pendingUser", JSON.stringify({ email: this.email, password: this.password }));
      this.showCodeInput = true;
      this.message = "";

      console.log("Код підтвердження (dev):", this.verificationCode);
    } else {
      this.message = "Помилка при надсиланні листа.";
      this.isError = true;
    }
  } catch (err) {
    console.error(err);
    this.message = "Помилка сервера.";
    this.isError = true;
  }
},

    verifyCode() {
  const savedCode = (localStorage.getItem("verificationCode") || "").trim();
  const savedEmail = (localStorage.getItem("registeredEmail") || "").trim();
  const entered = (this.enteredCode || "").trim();

  if (!savedCode) {
    this.message = "Код не знайдено. Натисніть 'Зареєструватися' щоб отримати код ще раз.";
    this.isError = true;
    return;
  }

  if (!this.email && savedEmail) {
    this.email = savedEmail;
  }

  if (entered === savedCode) {
    const pendingUser = JSON.parse(localStorage.getItem("pendingUser") || "{}");
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (pendingUser && pendingUser.email) {
      if (!users.find(u => u.email === pendingUser.email)) {
        users.push(pendingUser);
        localStorage.setItem("users", JSON.stringify(users));
      }
    }

    localStorage.removeItem("verificationCode");
    localStorage.removeItem("pendingUser");
    localStorage.removeItem("registeredEmail");

    this.message = "✅ Реєстрація підтверджена!";
    this.isError = false;
    localStorage.setItem("authUser", this.email);
    this.$router.push("/profile");
    this.clearFields();
  } else {
    this.message = "❌ Невірний код!";
    this.isError = true;
    console.warn("Entered:", entered, "Expected:", savedCode);
  }
},
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

.page {
  min-height: 100vh;
  background: linear-gradient(145deg, #000000, #1a1a1a, #2d2d2d);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  color: white;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  width: 400px;
  padding: 40px 36px;
  border-radius: 24px;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

h2 {
  color: #ffffff;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.group {
  margin-bottom: 18px;
}

input {
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  transition: 0.2s;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input:focus {
  outline: none;
  border-color: #6a5acd;
  box-shadow: 0 0 8px rgba(106, 90, 205, 0.4);
}

.btn {
  width: 100%;
  padding: 12px;
  background: #6a5acd;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
}

.btn:hover {
  background: #7a6de0;
  transform: translateY(-2px);
}

.error-box {
  background: rgba(255, 77, 77, 0.1);
  border: 1px solid #ff6b6b;
  color: #ff8080;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 14px;
}

.confirm {
  background: #27ae60;
}

.confirm:hover {
  background: #2ecc71;
}

.text {
  margin-top: 14px;
  color: #ccc;
  font-size: 14px;
}

.link {
  color: #9b84ff;
  font-weight: 600;
  cursor: pointer;
}

.verify {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #d1cfff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 14px;
  font-size: 14px;
}

.icon {
  font-size: 20px;
}

.msg {
  margin-top: 14px;
  font-size: 14px;
}

.error {
  color: #ff6b6b;
}

.success {
  color: #27ae60;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.code-input {
  margin-top: 4px;
  margin-bottom: 6px;
}

.link {
  margin-top: 16px;
  font-size: 15px;
  color: white;
  cursor: pointer;
  font-weight: 500;
  display: inline-block;
  transition: all 0.25s ease;
}

.link:hover {
  color: white;
  transform: translateY(-2px);
  text-shadow: 0 2px 8px rgba(64, 104, 255, 0.3);
}

.link::after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
  margin-top: 2px;
}

.link:hover::after {
  width: 100%;
}
</style>