<template>
  <div>
    <ARow :style="{'margin-top':'10px'}" v-for="(item,index) in scl" :key="index">
      <ARow>
        <ACol :style="{'height':'5vw','font-size': '4vw','font-weight':'bold'}" push="1">
          更多评论
        </ACol>
      </ARow>
      <ARow :style="{'height':'10px'}"></ARow>
      <ARow>
        <ACol push="1" span="3">
          <a-avatar :src="item.userSelfie"/>
        </ACol>
        <ACol :style="{'height':'5vw','font-size': '4vw','font-weight':'bold'}" push="1" span="4">
          {{item.userName}}
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
  </div>
</template>

<script>
export default {
  name: "SubComments",
  props: {
    scl: Array
  },
  mounted() {
    console.log(this.scl[0].userSelfie)
  }
}

</script>

<style scoped>

</style>