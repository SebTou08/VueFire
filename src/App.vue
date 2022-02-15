<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >    <h1>DEM</h1></v-app-bar>
    <div class="containerMain">
      <h2>sdsadas</h2>
      <v-radio-group v-model="radioGroup">
        <v-radio
            v-for="n in 3"
            :key="n"
            :label="`Radio ${n}`"
            :value="n"
        ></v-radio>
      </v-radio-group>
      <form-component v-if="radioGroup===1"></form-component>
      <colegios v-if="radioGroup===2"></colegios>
    </div>
  </v-app>


</template>

<script>

import FormComponent from "@/components/formComponent";
import Colegios from "@/components/colegios";
export default {
  name: 'App',

  components: {
    Colegios,
    FormComponent

  },
  data () {
    return {
      radioGroup: 1,
    }
  },
};
</script>

<style>
.containerMain{
  padding-top: 5%;
}
</style>
