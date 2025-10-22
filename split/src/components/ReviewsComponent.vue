<template>
  <div class="reviews-container">
    <h2>Customer's Reviews</h2>
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
<tbody>
  <tr 
    v-for="(review, index) in reviews" 
    :key="index"
    class="fade-in"
    :style="{ animationDelay: (index * 0.05) + 's' }"
  >
    <td data-label="Name">{{ review.Name }}</td>
    <td data-label="Rating">
      <span class="stars">
        <span v-for="n in review.Rating" :key="n">⭐</span>
      </span>
    </td>
    <td data-label="Comment">{{ review.Comment }}</td>
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
Emily Carter,5,Fast delivery, Telegram Stars arrived instantly!
Daniel Moore,5,Got my username quickly, smooth process.
Sophia Nguyen,5,Telegram Premium worked perfectly!
Liam Brown,5,Trusted site, super quick service.
Olivia Johnson,5,Support replied fast, great help!
Ethan Williams,5,Always buy my Stars here, 10/10.
Ava Martinez,5,Easy checkout and good prices.
Noah Smith,5,Rare username secured in seconds!
Mia Anderson,5,Everything worked flawlessly, thanks Split!
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
  background: white;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  text-align: center;
  font-size: 30px;
  font-weight: 1000;
  margin-bottom: 35px;
  color: #3b82f6;
  letter-spacing: 0.5px;
  background-size: 200% 200%;
  animation: gradient-animation 3s ease infinite;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
  background: white;
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
  min-width: 320px;
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

tbody tr {
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

/* === 📱 Мобільна адаптація === */

/* Великі ноутбуки */
@media (max-width: 1280px) {
  h2 {
    font-size: 26px;
  }
  th, td {
    font-size: 14px;
  }
}

/* Планшети */
@media (max-width: 992px) {
  h2 {
    font-size: 24px;
  }
  table {
    font-size: 14px;
  }
  .table-wrapper {
    padding: 20px;
  }
}

/* Телефони */
@media (max-width: 768px) {
  .reviews-container {
    padding: 20px 3%;
  }
  h2 {
    font-size: 22px;
  }
  th, td {
    padding: 10px;
    font-size: 13px;
  }
}

/* Маленькі телефони (наприклад iPhone SE, 375x667) */
@media (max-width: 400px) and (max-height: 700px) {
  .reviews-container {
    padding: 15px 2%;
  }
  h2 {
    font-size: 18px;
  }
  table {
    font-size: 12px;
  }
  th, td {
    padding: 8px;
  }
  .stars {
    font-size: 15px;
  }
}

/* Дуже маленькі екрани */
@media (max-width: 320px) {
  h2 {
    font-size: 16px;
  }
  th, td {
    font-size: 11px;
    padding: 6px;
  }
}
</style>