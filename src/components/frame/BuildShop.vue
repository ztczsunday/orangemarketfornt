<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="shopname"
        name="店名"
        label="店名"
        placeholder="店名"
        :rules="[{ required: true, message: '请填写店名' }]"
    />
    <van-field
        v-model="shopIntroduction"
        name="店铺简介"
        label="店铺简介"
        placeholder="店铺简介"
        :rules="[{ required: true, message: '请填写店铺简介' }]"
    />
    <van-field
      readonly
      clickable
      name="area"
      :value="value"
      label="地区选择"
      placeholder="点击选择省市区"
      @click="showArea = true"
  />
    <van-popup v-model="showArea" position="bottom">
      <van-area
          :area-list= "myArea"
          @confirm="onConfirm"
          @cancel="showArea = false"
      />
    </van-popup>
    <van-field
        v-model="shopAddress"
        name="店铺地址"
        label="店铺地址"
        placeholder="店铺地址"
        :rules="[{ required: true, message: '请填写店铺地址' }]"
    />

    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
import area from "@/util/area";
export default {
  created() {
    this.myArea = area;
    console.log(this.myArea);
  },
  name: "BuildShop",
  data() {
    return {
      myArea : {},
      value: '',
      showArea: false,
      shopname: '',
      shopIntroduction: '',
      shopAddress : null,
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onConfirm(values) {
      this.value = values
          .filter((item) => !!item)
          .map((item) => item.name)
          .join('/');
      this.showArea = false;
    },
  },
}
</script>

<style scoped>

</style>