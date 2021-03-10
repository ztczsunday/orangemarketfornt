<template>
  <div>
    <VanNavBar
        v-if="shouldNavbar"
        :title="title"
        left-arrow
        @click-left="$router.go(-1)"
        @click-right="() => {}"
    />
    <VanSearch
        v-else
        v-model="value"
        clearable
        placeholder="请输入搜索关键词"
        shape="round"
        show-action
        @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">
          搜索
        </div>
      </template>
    </VanSearch>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  created() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'changeTitle') {
        this.title = mutation.payload;
        this.shouldNavbar = this.title !== '' && this.title !== '商城页面';
      }
    });
    this.shouldNavbar = document.title !== '' && document.title !== '商城页面';
    this.title = document.title;
  },
  data() {
    return {
      title: '',
      value: '',
      shouldNavbar: false
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