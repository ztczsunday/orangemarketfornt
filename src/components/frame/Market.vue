<template>
  <div>
    <div class="row align-center">
      <code>RouterList:</code>
    </div>
    <ARow>
      <ACol span="6" class="align-center" v-for="(router, index) in routes" :key="index">
        <AButton class="fillfull align-center" @click="$router.push(router.path)">{{ router.meta.title }}</AButton>
      </ACol>
    </ARow>
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
