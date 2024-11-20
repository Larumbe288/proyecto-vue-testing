<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit()">
      <div class="form">
        <label for="nombre">Nombre: </label>
        <Field v-model="nombre"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingrese su nombre"
        />
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="email">E-mail: </label>
        <Field v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su e-mail"
        />
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form"><button type="submit">Registrar</button></div>
    </Form>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from "../schemas/ValidationSchema";
import { useRegistarStore } from "../stores/registroStore";
import { ref } from "vue";

const registrarStore = useRegistarStore();

const nombre = ref('');
const email = ref('');

const onSubmit = () => {
  registrarStore.guardarRegistro(nombre.value,email.value);
  console.log("Se ha enviado el formulario");
};
</script>
<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
