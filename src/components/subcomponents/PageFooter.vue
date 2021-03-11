<template>
  <VanTabbar v-if="shouldTabbar" v-model="active">
    <VanTabbarItem icon="home-o" @click="$router.push('/')">商城主页</VanTabbarItem>
    <VanTabbarItem icon="friends-o" @click="$router.push('/')">标签</VanTabbarItem>
    <VanTabbarItem icon="user-o" @click="$router.push('/')">标签</VanTabbarItem>
  </VanTabbar>
</template>

<script>
export default {
  name: "PageFoot",
  created() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'changeTitle') {
        this.title = mutation.payload;
        this.shouldTabbar = this.title !== '' && this.title !== '商城页面';
        this.shouldTabbar = !this.shouldTabbar;
      }
    });
    this.shouldTabbar = document.title !== '' && document.title !== '商城页面';
    this.shouldTabbar = !this.shouldTabbar;
  },
  data() {
    return {
      title: '',
      shouldTabbar: false,
      active: 0
    }
  },
  computed: {},
  methods: {
    onSearch() {
    }
  }
}
</script>

<style scoped>

</style>