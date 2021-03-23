<template>
<div>
<AddressBlock>
</AddressBlock>
<OrderBlock>
</OrderBlock>
  <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
</div>
</template>

<script>
import AddressBlock from "@/components/subcomponents/AddressBlock";
import OrderBlock from "@/components/subcomponents/OrderBlock";
export default {
  name: "setOrder",
  components: {OrderBlock, AddressBlock},
  data(){
    return{
      totalPrice : 2000,
    }
  },
  methods:{
    onSubmit(){
      console.log("submit")
    }
  }
}
</script>

<style scoped>

</style>