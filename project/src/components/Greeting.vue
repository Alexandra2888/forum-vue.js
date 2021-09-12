<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
 name: "Greeting",
  data() {
    return {
      msg: "Hello world",
    };
  },
};
</script>

<style scoped lang="scss">
p {
    color: red;
}
</style>
