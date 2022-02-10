<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      greeting: "Hello",
    };
  },
};
</script>
