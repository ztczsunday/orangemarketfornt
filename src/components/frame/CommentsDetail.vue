<template>
  <ARow>
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
        <van-popup v-model="show" :style="{'height':'70%'}" closeable position="bottom" round>
          <SubComments></SubComments>
        </van-popup>
      </van-cell>
    </van-list>

  </ARow>
</template>

<script>
import SubComments from "@/components/subcomponents/SubComments";

export default {
  name: "CommentsDetail",
  components: { SubComments },
  data() {
    return {
      //弹窗是否弹出
      show: false,
      allLoaded: false,
      //评论列表
      list: [],
      //是否在加载
      loading: false,
      //是否全部加载完毕
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
}
</script>

<style scoped>

</style>