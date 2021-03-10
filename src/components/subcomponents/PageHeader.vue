<template>
  <div>
    <VanNavBar
        v-if="!(title === '' || title === '商城页面')"
        :title="title"
        left-arrow
        @click-left="$router.go(-1)"
        @click-right="() => {}"
    />
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  created() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'changeTitle') {
        this.title = mutation.payload;
      }
    });
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>