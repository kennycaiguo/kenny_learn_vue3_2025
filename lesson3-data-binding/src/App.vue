<template>
  <div>
    <p v-text="name"></p>
    <p v-text="age"></p>
    <p v-html="name"></p>
    <p v-html="age"></p>
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        name: "Marycake",
        age:"<span style='color:deeppink'>18</span>"
      }
    },
  }

</script>

<style scoped>

</style>
