<template>
  <div id="app">
    <nav>
      <router-link to="/">LOGO</router-link>
      <router-link to="/" class="ml-6">Home</router-link>
      <router-link to="/product" class="ml-6">Product</router-link>
    </nav>

    <div class="w-full">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
