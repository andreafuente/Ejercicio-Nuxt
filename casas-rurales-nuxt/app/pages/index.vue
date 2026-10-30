<script setup lang="ts">
import type { House } from "~/types/house";

const {
  data: houses,
  status,
  error,
} = await useFetch<House[]>("http://localhost:3001/api/houses");

import { ref, computed } from "vue";

const search = ref("");

const filteredHouses = computed(() => {
  if (!houses.value) return [];

  const query = search.value.trim().toLocaleLowerCase();

  if (!query) return houses.value;

  return houses.value.filter((house) =>
    `${house.name} ${house.address}`
      .toLocaleLowerCase()
      .includes(query)
  );
});
</script>

<template>
  <main>
    <div class="search">
      <label for="search">Buscar</label>
      <input
        id="search"
        type="text"
        v-model="search"
        placeholder="Buscar por nombre o dirección"
      />
    </div>

    <p v-if="status === 'pending'">Cargando alojamientos...</p>

    <p v-else-if="error">No se han podido cargar las casas rurales.</p>

    <ul v-else-if="filteredHouses?.length" class="houses-grid">
  <li v-for="house in filteredHouses" :key="house.id">
    <HouseCard :house="house" />
  </li>
</ul>

    <p v-else>No hay casas rurales disponibles.</p>
  </main>
</template>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.houses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.houses-grid > li {
  min-width: 0;
  margin: 0;
}

.search {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 100%;
  margin-bottom: 1.5rem;
}

.search label {
  font-weight: 600;
}

.search input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #777;
  border-radius: 6px;
}

.search input:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}


</style>
