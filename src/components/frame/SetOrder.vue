<template>
<div>
<AddressBlock @postaddress="getAddress" v-if="ready">
</AddressBlock>
<OrderBlock @postorder="getOrder" v-if="ready">
</OrderBlock>
</div>
</template>

<script>
import AddressBlock from "@/components/subcomponents/AddressBlock";
import OrderBlock from "@/components/subcomponents/OrderBlock";
import {Toast} from "vant"
export default {
  name: "setOrder",
  components: {OrderBlock, AddressBlock},
  data(){
    return{
      totalPrice : 2000,
      address : null,
      ready : false,
      order : Object,
      post : Object,
      message : "",
    }
  },
  created() {
    this.ready=true
  },
  methods:{
    getAddress(address){
      this.address = address;
    },
    async getOrder(order,post,message){
      const {$} = await import('@/util/ajax');
      const formData = new FormData;
      formData.append("subId",order.subId);
      formData.append("countCommodity",order.countCommodity);
      formData.append("receiveAddressId",this.address.receiveAddressId);
      formData.append("orderLogisticsId",post.logisticsId);
      const result = await $.post(`/order`,formData);
      console.log(result);
      if(result.data.success){
        Toast("下单成功")
      }
      if(message !== ""){
        const formDataMessage = new FormData;
        formDataMessage.append("myType","用户");
        formDataMessage.append("oppId",order.shopId);
        formDataMessage.append("oppType","商家");
        formDataMessage.append("chatContent",message);
        console.log(order.shopId);
        const messageResult = await $.post(`/user/sendChat`,formDataMessage);
        console.log(messageResult);
      }
    },
  }
}
</script>

<style scoped>

</style>