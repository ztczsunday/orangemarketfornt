<template>
  <div>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <van-card v-for="(item, index) in histories"
                :key="index"
                :desc="item.lastBrowserDate"
                :thumb="item.thumb"
                :title="item.title"
      />
    </van-list>
  </div>
</template>

<script>
class History {
  constructor(title, lastBrowserDate, thumb) {
    this.title = title;
    this.lastBrowserDate = lastBrowserDate;
    this.thumb = thumb;
  }
}

export default {
  name: "Histories",
  mounted() {
  },
  data() {
    return {
      loading: null,
      finished: true,
      histories: new Array(100).fill(new History("Ipad Pro", "0", "https://img01.yzcdn.cn/vant/ipad.jpeg"))
    }
  },
  methods: {
    onLoad() {
    }
  }
}
</script>

<style scoped>

</style>