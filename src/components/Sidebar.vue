<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>E-mail: {{ email }}</h3>
    <ul>
      <li><router-link to="/contador">Contador</router-link></li>
      <li><router-link to="/lista-de-tareas">Lista de Tareas</router-link></li>
      <li><router-link to="/registro">Registro</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegistarStore } from "@/modules/registro/stores/registroStore";
import { ref, watch } from "vue";
const registrarStore = useRegistarStore();
const nombre = ref(registrarStore.nombre);
const email = ref(registrarStore.email);
watch(
  () => registrarStore.nombre,
  (newValue) => {
    nombre.value = newValue;
  }
);
watch(
  () => registrarStore.email,
  (newValue) => {
    email.value = newValue;
  }
);
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
