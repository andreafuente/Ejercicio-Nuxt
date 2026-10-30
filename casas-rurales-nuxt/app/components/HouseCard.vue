<script setup lang="ts">
import type { House } from "~/types/house";

defineProps<{
  house: House;
}>();
</script>

<template>
  <article class="house-card">
    <h2>
      <NuxtLink :to="`/houses/${house.id}`">
        {{ house.name }}
      </NuxtLink>
    </h2>

    <NuxtImg
      :src="`http://localhost:3001${house.image}`"
      :alt="house.name"
      width="600"
      height="400"
    />
  </article>
</template>

<style scoped>
.house-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
}

h2,
p {
  padding: 0 1rem;
}

h2 {
  font-size: 1.2rem;
}

 img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
} 
</style>
    