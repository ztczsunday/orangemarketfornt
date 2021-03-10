<template>
  <APageHeader
      v-if="$store.state.title !== 'Index'"
      style="border: 1px solid rgb(235, 237, 240);;"
      :title="$store.state.title"
      @back="() => $router.push('/')"
  />
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>