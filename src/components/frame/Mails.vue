<template>
  <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item">
      <ARow>
        <ARow>
          <ACol span="3">
            <a-avatar
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3062702743,253584811&fm=26&gp=0.jpg"/>
          </ACol>
          <ACol :style="{'height':'5vw','font-size': '4vw','font-weight':'bold'}" span="4">
            dio
          </ACol>
        </ARow>
        <ARow :style="{'font-size':'4vw','height':'5vw'}">
          ko no dio da!
        </ARow>
        <ARow>
          <ACol push="21" span="3">
            <van-icon :badge="item" name="chat-o" @click="showPopup"/>
          </ACol>
        </ARow>
        <ARow :style="{height : '5px'}"></ARow>
      </ARow>
      <van-popup v-model="show" :style="{'height':'95%'}" closeable position="bottom">
        <SubMails></SubMails>
      </van-popup>
    </van-cell>
  </van-list>
</template>

<script>
import SubMails from "@/components/subcomponents/SubMails";

export default {
  name: "Mails",
  data() {
    return {
      show: false,
      allLoaded: false,
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    showPopup() {
      this.show = true;
    },
  },
  components: {
    SubMails
  }
}
</script>

<style scoped>

</style>