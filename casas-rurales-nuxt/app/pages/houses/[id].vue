<script setup lang="ts">
import type { House } from "~/types/house";

const route = useRoute();

const { data: house, status, error } = await useFetch<House>(
  () => `http://localhost:3001/api/houses/${route.params.id}`
);
</script>

<template>
  <main class="container">
    <NuxtLink to="/">Volver al listado</NuxtLink>

    <p v-if="status === 'pending'">Cargando alojamiento...</p>

    <p v-else-if="error">
      No se ha podido cargar la casa rural.
    </p>

    <article v-else-if="house">
      <header class="details-header">
        <h1>{{ house.name }}</h1>
        <p class="price">{{ house.price }} € / noche</p>
      </header>

      <div class="details">
        <NuxtImg
          :src="`http://localhost:3001${house.image}`"
          :alt="house.name"
          width="800"
          height="500"
        />

        <div class="information">
          <section>
            <h2>Descripción</h2>
            <p>{{ house.description }}</p>
          </section>

          <section>
            <h2>Dirección</h2>
            <p>{{ house.address }}</p>
          </section>

          <ul class="features">
            <li>Habitaciones: <strong>{{ house.bedrooms }}</strong></li>
            <li>Camas: <strong>{{ house.beds }}</strong></li>
            <li>Baños: <strong>{{ house.bathrooms }}</strong></li>
          </ul>

          <ReserveButton :houseName="house.name" />
        </div>
      </div>
      <section class="reviews" aria-labelledby="reviews-title">
  <h2 id="reviews-title">Reviews</h2>

  <ul v-if="house.reviews?.length" class="reviews-list">
    <li v-for="review in house.reviews" :key="review.id">
      <ReviewCard :review="review" />
    </li>
  </ul>

  <p v-else>Este alojamiento todavía no tiene opiniones.</p>
</section>
    </article>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
}

.details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.details img {
  display: block;
  width: 100%;
  height: auto;
}

.information {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  margin-bottom: 0.5rem;
}

.reviews {
  margin-top: 2rem;
}

.reviews-list {
  display: grid;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

@media (max-width: 768px) {
  .details {
    grid-template-columns: 1fr;
  }

  .details-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>