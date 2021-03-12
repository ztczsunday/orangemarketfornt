<template>
<ARow :style="{'margin-top':'10px','margin-bottom':'10px'}">
  <ARow>
    <van-cell is-link @click="toCommit" :style="{'border-radius' : '25px'}">
      <div class="CommentsDetail">
        点击查看详细评论
      </div>
    </van-cell>

  </ARow>
  <ARow :style="{'margin-left':'10px'}">
    <ARow>
      <ARow>
        <ACol span="3" >
          <a-avatar src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2263347095,3965097865&fm=26&gp=0.jpg" />
        </ACol>
        <ACol span="4" :style="{'height':'8.3vw','font-size': '3vw'}">
          可莉
        </ACol>
      </ARow>
      <ARow :style="{'font-size':'4vw'}">
        实在是太好喝了，下次还来flkjahufhahgnaoehgsahlfhagvnhnlsn
      </ARow>
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
    };
  },
  methods: {
    toCommit(){
      this.$router.push({path:'/CommentsDetail'})
    }
  },
}
</script>

<style scoped>
.CommentsDetail{
  color:red;
  font-size: 3vw;
  height:4vw;
}

</style>
