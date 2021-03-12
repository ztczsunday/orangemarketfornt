<template>
  <ARow>
    <ARow :style="{height : '5vw','margin-left':'10px','margin-top':'2px', color : 'grey',fontSize : '3vw'}">
      <ACol span="4" :style="{'font-size':'3vw','margin-top':'2vw'}">
        店铺名
      </ACol>
      <ACol span="12" :style="{'font-size': '5vw','font-weight':'bold'}">
        仙贝红茶铺
      </ACol>
    </ARow>
    <ARow :style="{height : '5vw','margin-left':'10px','margin-top':'2px', color : 'grey',fontSize : '3vw'}">
      <ACol span="4" :style="{'font-size':'3vw','margin-top':'1vw'}">
        简介
      </ACol>
      <ACol span="18" :style="{'font-size': '4vw'}">
        主营：精品红茶、高山红茶、批发红茶、阿萨姆红茶、适合泡奶茶，多买多送
      </ACol>
    </ARow>
  </ARow>

</template>

<script>
export default {
name: "ShopBlock"
}
</script>

<style scoped>

</style>