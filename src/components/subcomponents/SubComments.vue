<template>
<div>
  <ARow :style="{'margin-top':'10px'}">
    <ARow>
      <ACol push="1" :style="{'height':'5vw','font-size': '4vw','font-weight':'bold'}">
        更多评论
      </ACol>
    </ARow>
    <ARow :style="{'height':'10px'}"></ARow>
    <ARow>
      <ACol span="3" push="1">
        <a-avatar src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3062702743,253584811&fm=26&gp=0.jpg"/>
      </ACol>
      <ACol span="4" push="1" :style="{'height':'5vw','font-size': '4vw','font-weight':'bold'}">
        dio
      </ACol>
    </ARow>
    <ARow>
      <ACol push="1" :style="{'font-size':'4vw','height':'5vw'}">
        wryyyyyyyyyy
      </ACol>
    </ARow>
    <ARow :style="{height : '10px','border-bottomm-width':'0.5px','border-bottom-color':'grey','border-bottom-style':'solid'}"></ARow>
  </ARow>


  <ARow :style="{'height':'10px'}"></ARow>
  <ARow>
    <ACol span="3" push="1">
      <a-avatar src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3062702743,253584811&fm=26&gp=0.jpg"/>
    </ACol>
    <ACol span="4" push="1" :style="{'height':'5vw','font-size': '4vw','font-weight':'bold'}">
      dio
    </ACol>
  </ARow>
  <ARow>
    <ACol push="1" :style="{'font-size':'4vw','height':'5vw'}">
      wryyyyyyyyyy
    </ACol>
  </ARow>
  <ARow :style="{height : '10px','border-bottomm-width':'0.5px','border-bottom-color':'grey','border-bottom-style':'solid'}"></ARow>

</div>
</template>

<script>
export default {
  name: "SubComments"
}
</script>

<style scoped>

</style>