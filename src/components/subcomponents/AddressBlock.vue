<template>
<div class="outerBlock">
  <van-cell title="选择地址" is-link @click="showPopup"/>
  <van-popup v-model="show" closeable position="bottom" style="height: 70%">
    <div style="margin-top: 10px;margin-left: 20px; font-weight: bold">
      选择你的地址
    </div>
    <div style="margin-top: 20px">
      <van-cell title="地址1" value="默认" size="large" label="北京市朝阳区下北泽大学"
                @click="changeAddress"/>
    </div>

  </van-popup>
</div>
</template>

<script>
export default {
  name: "AddressBlock",
  data(){
    return{
      show : false
    }
  },
  methods:{
    showPopup(){
      this.show = true;
    },
    changeAddress(){
      console.log("adressChange")
    }
  }
}
</script>

<style scoped>
.outerBlock{
  margin: 5px;
  padding: 5px;
  border-radius: 25px;
  background-color: white;
}
</style>