<template>
  <div class="reviews-container">
    <h2>Відгуки клієнтів</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Ім’я</th>
            <th>Рейтинг</th>
            <th>Коментар</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(review, index) in reviews" 
            :key="index"
            class="fade-in"
            :style="{ animationDelay: (index * 0.05) + 's' }"
          >
            <td>{{ review.Name }}</td>
            <td>
              <span class="stars">
                <span v-for="n in review.Rating" :key="n">⭐ ⭐ ⭐ ⭐ ⭐</span>
              </span>
            </td>
            <td>{{ review.Comment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  name: "ReviewsPage",
  data() {
    return {
      reviews: [],
    };
  },
  created() {
    const csvContent = `
Name,Rating,Comment
Іван,5,Дякую за швидку доставку
Ольга,5,Все супер! Буду замовляти ще
Андрій,5,Обслуговування, як завжди - на висоті
Марина,4,Все чудово! Покупкою задоволена, але коробка була прим'ята.
Сергій,5,Рекомендую цей чудовий магазин усім!
Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
Анна,5,Дякую за чудові знижки
Раймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.
    `;
    Papa.parse(csvContent.trim(), {
      header: true,
      complete: (result) => {
        this.reviews = result.data;
      },
    });
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.reviews-container {
  width: 100%;
  min-height: calc(100vh - 100px);
  padding: 40px 5%;
  font-family: "Inter", sans-serif;
  background: #0a0f14;
  color: #2c3e50;
}

h2 {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 35px;
  color: white;
  letter-spacing: 0.5px;
}

.table-wrapper {
  overflow-x: auto;
  background: #0a0f14;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  padding: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th {
  background: #4068ff;
  color: white;
  padding: 14px 16px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
}

td {
  padding: 12px 14px;
  border-bottom: 1px solid #eee;
  vertical-align: top;
  font-size: 15px;
  line-height: 1.5;
}

tbody tr{
  background: #f9f9fb;
}

tbody tr:hover {
  background: #eef3ff;
  transition: 0.2s ease;
}

.stars {
  color: #ffcc00;
  font-size: 17px;
}

.fade-in {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInRow 0.5s ease forwards;
}

@keyframes fadeInRow {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 24px;
  }
  table {
    font-size: 13px;
  }
  th, td {
    padding: 10px;
  }
}
</style>