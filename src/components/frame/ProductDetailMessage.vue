<template>
  <van-row :style="{'height' : '400px'}">
    <van-row>
      <img src = "https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2201415902533/O1CN01h1HQc41Ua9tRJo9ly_!!0-item_pic.jpg_580x580Q90.jpg_.webp" width = 100% height = 400px>
    </van-row>
    <van-row :style="{'height' : '10px'}"></van-row>
    <van-row class = "buy">
      <van-row>
        <van-row span=""></van-row>
        <van-col span="3" >
          <div class = "moneyBlock">
            ￥
          </div>
        </van-col>
      </van-row>
    </van-row>
  </van-row>
</template>

<script>
export default {
name: "ProductDetailMessage"
}
</script>

<style scoped>
.buy{
  background-color: white;
  height: 200px;
  border-radius: 25px 25px 0px 0px;
  width: 95%;
  margin: auto;
}
.moneyBlock{
  color: red;
  font-size: x-small;
  height: 40px;
  display:table-cell;
  vertical-align:bottom;
}

</style>