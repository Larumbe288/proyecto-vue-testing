import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/lista-de-tareas",
      name: "Lista de Tareas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("../modules/listaDeTareas/components/ListaDeTareas.vue"),
    },
    {
      path: "/contador",
      name: "contador",
      component: () => import("../modules/contador/components/Contador.vue"),
    },
    {
      path: "/registro",
      name: "registro",
      component: () => import("../modules/registro/views/RegistroView.vue"),
    },
    {
      path: "/calcular",
      name: "calcular",
      component: () => import("../modules/calcular/views/calcularView.vue"),
    },
  ],
});

export default router;
