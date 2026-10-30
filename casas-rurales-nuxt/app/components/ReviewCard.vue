<script setup lang="ts">
import type { Review } from "~/types/house";

defineProps<{
  review: Review;
}>();
</script>

<template>
  <article class="review-card">
    <h3>{{ review.author }}</h3>

    <p>
      <time :datetime="review.date">
        {{ review.date }}
      </time>
    </p>

    <p>
      <span aria-hidden="true">
        {{ "★".repeat(review.rating) }}
      </span>
      <span>Valoración: {{ review.rating }} de 5</span>
    </p>

    <p>{{ review.comment }}</p>
  </article>
</template>

<style scoped>
.review-card {
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 1.5rem;
}

h3 {
  margin-top: 0;
}

p {
  margin-bottom: 0.75rem;
}
</style>