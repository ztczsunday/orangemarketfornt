<template>
  <ARow :style="{'margin-top':'10px','margin-bottom':'10px'}">
    <ARow>
      <van-cell :style="{'border-radius' : '25px'}" is-link @click="toCommit">
        <div class="CommentsDetail">
          点击查看详细评论
        </div>
      </van-cell>

    </ARow>
    <ARow v-for="(item,i) in getCommentsInfo.Comments" :key="i" :style="{'margin-left':'10px'}">
      <ARow>
        <ARow>
          <ACol span="3">
            <a-avatar :src="item.face"/>
          </ACol>
          <ACol :style="{'height':'8.3vw','font-size': '3vw'}" span="4">
            {{ item.name }}
          </ACol>
        </ARow>
        <ARow :style="{'font-size':'4vw'}">
          {{ item.Comment }}
        </ARow>
        <ARow :style="{height : '5px'}"></ARow>
      </ARow>
    </ARow>
  </ARow>

</template>

<script>
export default {
  name: "CommentsBlock",
  data() {
    return {
      show: false,
      getCommentsInfo: {
        Comments: []
      },
    };
  },
  methods: {
    toCommit() {
      this.$router.push({ path: '/CommentsDetail' })
    }
  },
  mounted() {
    this.getCommentsInfo = require("@/assets/CommentsBlock.json")
  }
}
</script>

<style scoped>
.CommentsDetail {
  color: red;
  font-size: 3vw;
  height: 4vw;
}

</style>
