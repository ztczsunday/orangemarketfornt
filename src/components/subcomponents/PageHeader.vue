<template>
  <div>
    <APageHeader
        v-if="!(title === '' || title === '商城页面')"
        :title="title"
        style="border: 1px solid rgb(235, 237, 240);"
        @back="$router.go(-1)"
    />
    <AMenu v-model="current" mode="horizontal" style="text-align: center;">
      <AMenuItem key="main" style="width: 50%;text-align: center;">
        <AIcon type="mail"/>
        主页
      </AMenuItem>
      <AMenuItem key="user" style="width: 50%;text-align: center;">
        <AIcon type="user"/>
        个人页面
      </AMenuItem>
    </AMenu>
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
      title: '',
      current: ['mail']
    }
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>