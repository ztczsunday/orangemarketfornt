<template>
  <div>
    <div class="row" style="text-align: center;">
      <code>RouterList:</code>
    </div>
    <div class="row" style="text-align: center;">
      <div class="col-3" style="text-align: center;" v-for="(router, index) in routes" :key="index">
        <AButton @click="$router.push(router.path)">{{ router.meta.title }}</AButton>
      </div>
    </div>
  </div>
</template>

<script>
import {routes} from "@/extend/router";
export default {
  name: "Market",
  created() {
  },
  data() {
    return {
      routes: routes
    }
  }
}
</script>

<style scoped src="../../assets/css/grid.css"/>
<style scoped>
</style>
