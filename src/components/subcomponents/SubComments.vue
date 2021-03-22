<template>
  <div>
    <div>
      <ARow style="margin-top: 10px">
        <ACol style="height:5vw ; font-size: 4vw ; font-weight:bold" push="1">
          更多评论
        </ACol>
      </ARow>
      <ARow style="height:10px"></ARow>
    </div>
    <div v-if="this.scl.length === 0">
      <ARow style="text-align: center ">
        还没有人评论，要来做沙发吗~~~~
      </ARow>
      <ARow :style="{'height':'10px'}"></ARow>
    </div>
    <div v-else="">
      <ARow :style="{'margin-top':'10px'}" v-for="(item,index) in scl" :key="index">
        <ARow :style="{'height':'10px'}"></ARow>
        <ARow>
          <ACol push="1" span="3">
            <a-avatar :src="item.userSelfie"/>
          </ACol>
          <ACol :style="{'height':'5vw','font-weight':'bold'}" push="1" span="21">
            {{item.userName}}
          </ACol>
          <ACol>
            {{item.subCommentTime[0]}}/{{item.subCommentTime[1]}}/{{item.subCommentTime[2]}}
            {{item.subCommentTime[3]}}:{{item.subCommentTime[4]}}:{{item.subCommentTime[5]}}
          </ACol>
        </ARow>
        <ARow>
          <ACol :style="{'font-size':'4vw','height':'5vw'}" push="1">
            {{item.subCommentDetails}}
          </ACol>
        </ARow>
        <ARow
            :style="{height : '10px','border-bottomm-width':'0.5px','border-bottom-color':'grey','border-bottom-style':'solid'}"></ARow>
      </ARow>
      <div class = footerDiv>
        <ARow class="footer" type="flex" justify="space-between">
          <ACol>
            <VanCellGroup>
              <van-field
                  v-model="message"
                  rows="1"
                  autosize
                  label="评论"
                  type="textarea"
                  placeholder="也来说两句吧"
              />
            </VanCellGroup>
          </ACol>
          <ACol>
            <van-button type="primary" color="orange" @click="addComments">评论</van-button>
          </ACol>
        </ARow>
      </div>
    </div>
  </div>
</template>

<script>
import{Toast}from 'vant';
export default {
  name: "SubComments",
  props: {
    scl: Array,
    fid : Number,

  },
  mounted() {
  },
  data(){
    return{
      message : ""
    }
  },
  methods:{
    async addComments(){
      if(this.message === ""){
        Toast("请输入评论")
      }
      else{
        const {$} = await import('@/util/ajax');
        const subCommentAdd = {
          "commentId" : this.fid,
          "subCommentDetails": this.message,
          "uid": this.$store.state.user.uid,
        }
        const result = await $.post("/user/comment/comments",subCommentAdd);
        if(result.data.information === true){
          Toast("评论成功");
          this.message="";
          this.$emit('reload');
        }
        else {
          Toast("评论失败")
        }
      }
    }
  }
}

</script>

<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
.footerDiv{
  width: 100vw;
  height: 44px;
}
</style>
