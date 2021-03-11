<template>
  <VanTabbar v-if="shouldTabbar" v-model="active">
    <VanTabbarItem icon="home-o" @click="$router.push('/')">商城</VanTabbarItem>
    <VanTabbarItem icon="friends-o" @click="$router.push('/mails')">消息</VanTabbarItem>
    <VanTabbarItem icon="user-o" @click="$router.push('/personalinfo')">我的</VanTabbarItem>
  </VanTabbar>
</template>

<script>
export default {
  name: "PageFoot",
  async created() {
    const { mainRoutes } = await import('@/extend/router');
    this.$store.subscribe(mutation => {
      if (mutation.type === 'changeTitle') {
        this.shouldTabbar = mainRoutes.includes(this.title);
      }
    });
    this.shouldTabbar = mainRoutes.includes(document.title);
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