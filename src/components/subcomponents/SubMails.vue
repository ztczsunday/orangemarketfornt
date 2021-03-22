<template>
  <div>
    <ARow style="margin-top: 10px">
      <ARow>
        <ACol style="height:5vw; font-size: 4vw; font-weight: bold;" push="1" span="24">
          {{ oppName }}
        </ACol>
      </ARow>
      <ARow :style="{'height':'10px'}"></ARow>
      <ARow>
        <ACol push="1" span="3">
          <a-avatar
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3062702743,253584811&fm=26&gp=0.jpg"/>
        </ACol>
        <ACol :style="{'height':'5vw','font-size': '4vw','font-weight':'bold'}" push="1" span="4">
          dio
        </ACol>
      </ARow>
      <ARow>
        <ACol :style="{'font-size':'4vw','height':'5vw'}" push="1">
          wryyyyyyyyyy
        </ACol>
      </ARow>
      <ARow
          :style="{height : '10px','border-bottomm-width':'0.5px','border-bottom-color':'grey','border-bottom-style':'solid'}">
      </ARow>
    </ARow>


    <ARow :style="{'height':'10px'}"></ARow>
    <ARow>
      <ACol push="1" span="3">
        <a-avatar src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3062702743,253584811&fm=26&gp=0.jpg"/>
      </ACol>
      <ACol :style="{'height':'5vw','font-size': '4vw','font-weight':'bold'}" push="1" span="4">
        dio
      </ACol>
    </ARow>
    <ARow>
      <ACol :style="{'font-size':'4vw','height':'5vw'}" push="1">
        wryyyyyyyyyy
      </ACol>
    </ARow>
    <ARow
        :style="{height : '10px','border-bottomm-width':'0.5px','border-bottom-color':'grey','border-bottom-style':'solid'}"></ARow>

  </div>
</template>

<script>
export default {
  name: "SubComments",
  props: {
    oppName: String
  }
}
</script>

<style scoped>

</style>