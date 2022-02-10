<template>
  <div id="auth-layout">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "../Nav.vue";
export default {
  mounted() {
    // this is dashboard layout
  },
  components: { Nav },
};
</script>
