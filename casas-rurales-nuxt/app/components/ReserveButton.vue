<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  houseName: string;
}>();

const requested = ref(false);

function requestReservation() {
  requested.value = true;
}
</script>

<template>
  <div class="reservation">
    <button
      type="button"
      :disabled="requested"
      @click="requestReservation"
    >
      {{ requested ? "Solicitud iniciada" : "Reservar" }}
    </button>

    <p v-if="requested" role="status">
      Has iniciado una solicitud de reserva para {{ houseName }}.
      La reserva todavía no está confirmada.
    </p>
  </div>
</template>

<style scoped>
.reservation {
  width: 100%;
}

button {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #4169e1;
  color: white;
  border: 0;
  border-radius: 4px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

button:hover:not(:disabled) {
  background-color: #284dbb;
}

button:focus-visible {
  outline: 3px solid #111;
  outline-offset: 3px;
}

button:disabled {
  background-color: #6b7280;
  cursor: default;
}
</style>