<template>
  <h3>Propiedades computadas</h3>
  <input type="text" v-model="valor" />
  <resultadoSection :resultado="valorCalculado"></resultadoSection>
</template>
<script setup>
import { ref, computed } from "vue";
import resultadoSection from "../components/resultadoSection.vue";
const valor = ref("");

const valorCalculado = computed(() => {
  return valor.value * 3;
});
</script>
<style scoped></style>
