<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>E-mail: {{ registrarStore.email }}</h3>
    <ul>
      <li><router-link to="/contador">Contador</router-link></li>
      <li><router-link to="/lista-de-tareas">Lista de Tareas</router-link></li>
      <li><router-link to="/registro">Registro</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegistarStore } from "@/modules/registro/stores/registroStore";
const registrarStore = useRegistarStore();
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
