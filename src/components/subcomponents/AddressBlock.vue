<template>
<div class="outerBlock">
  <VanCell title="没有收货地址？立即添加！" is-link @click="toAddressManage" style="border-radius: 25px" v-if="noAddress"/>
  <VanCell :title="addressNow.addressDetails" is-link @click="showPopup" style="border-radius: 25px" v-else center/>
  <VanPopup v-model="show" closeable position="bottom" style="height: 70%" v-if="!noAddress">
    <div style="margin-top: 10px;margin-left: 20px; font-weight: bold;border-radius: 25px">
      选择你的地址
    </div>
    <div style="
    margin-top: 20px;
    border:1px solid #96c2f1;
    background:#eff7ff">
      <VanCell title="默认地址" size="large" :label= "addressList[0].addressDetails"
                @click="changeAddress(0)"/>
    </div>
    <div style="
    margin-top: 20px;
    border:1px solid #96c2f1;
    background:#eff7ff"
    v-for="(item,index) in addressList" :key="index">
      <VanCell :title="'地址'+index" size="large" :label= "addressList[index].addressDetails"
                @click="changeAddress(index)"
                v-if="index !== 0"/>
    </div>
  </VanPopup>
</div>
</template>

<script>
export default {
  name: "AddressBlock",
  data(){
    return{
      show : false,
      noAddress : true,
      addressList : [],
      addressNow : null
    }
  },
  methods:{
    showPopup(){
      this.show = true;
    },
    changeAddress(index){
      this.addressNow = this.addressList[index];
      this.$emit('postaddress',this.addressNow)
    },
    toAddressManage(){
     alert("todo");
    }
  },
  async created() {
    const {$} = await import('@/util/ajax');
    const result = await $.get(`/address`);
    if(result.data.information.length === 0){
      this.noAddress = true
    }
    else{
      for(let i = 0; i < result.data.information.length; i++){
        if(result.data.information[i].isDefault === true){
          this.addressList.unshift(result.data.information[i]);
        }
        else{
          this.addressList.push(result.data.information[i]);
        }
      }
      this.addressNow = this.addressList[0];
      this.noAddress = false
      this.$emit('postaddress',this.addressNow)
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