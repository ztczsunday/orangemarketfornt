<template>
  <VanForm @submit="onSubmit">
    <VanField
        v-model="goodsName"
        name="goodsName"
        label="商品名"
        placeholder="商品名"
        :rules="[{ required: true, message: '请填写商品名' }]"
    />
    <VanField
        v-model="fieldValue"
        name="label"
        is-link
        readonly
        label="分类"
        placeholder="请选择您的商品分类"
        @click="show = true"
    />
    <VanPopup v-model="show" round position="bottom">
      <VanCascader
          v-model="cascaderValue"
          title="请选择商品分类"
          :options="options"
          @close="show = false"
          @finish="onFinish"
      />
    </VanPopup>
    <VanField name="uploader" label="商品图片上传">
      <template #input>
        <VanUploader v-model="uploader" multiple :max-count="5" :before-read="beforeRead"/>
      </template>
    </VanField>
    <VanField name="uploader" label="商品默认小图标上传">
      <template #input>
        <VanUploader v-model="uploaderSubDefault" multiple :max-count="1" :before-read="beforeRead"/>
      </template>
    </VanField>

    <div v-for="(item,i) in typeList" :key="i">
      <VanCell is-link @click="showPopup(i)">{{item.subName}}</VanCell>
      <VanPopup v-model="showSub[i]" position="bottom" height="700px" closeable round :style="{height : '70%'}">
        <div class="popBlock">
          您的品类
        </div>
        <VanForm @submit="upDateSub(i)">
          <VanField
              v-model="typeList[i].subName"
              name="subTypeName"
              label="子种类名"
              placeholder="子种类名"
              :rules="[{ required: true, message: '请填写子种类名' }]"
          />
          <VanField
              v-model="typeList[i].subPrice"
              name="subTypePrice"
              label="子种类单价"
              placeholder="子种类单价"
              :rules="[{ required: true, message: '请填写子种类单价' }]"
          />
          <VanField
              v-model="typeList[i].subStock"
              name="subTypeStock"
              label="子种类库存"
              placeholder="子种类库存"
              :rules="[{ required: true, message: '请填写子种类库存' }]"
          />
          <VanField name="uploaderSub" label="种类图标上传">
            <template #input>
              <VanUploader v-model="typeList[i].subPic" multiple :max-count="1" :before-read="beforeRead"/>
            </template>
          </VanField>
          <div style="margin: 16px;">
            <VanButton round block type="info" native-type="submit">确认</VanButton>
          </div>
        </VanForm>
      </VanPopup>
    </div>


    <VanCell is-link @click="showPopupAdd">新建子类</VanCell>
    <VanPopup v-model="showAdd" position="bottom" closeable round :style="{height : '70%'}">
      <div class="popBlock">
        新的子种类
      </div>
      <VanForm @submit="addSub">
        <VanField
            v-model="subTypeName"
            name="subTypeName"
            label="子种类名"
            placeholder="子种类名"
            :rules="[{ required: true, message: '请填写子种类名' }]"
        />
        <VanField
            v-model="subTypePrice"
            name="subTypePrice"
            label="子种类单价"
            placeholder="子种类单价"
            :rules="[{ required: true, message: '请填写子种类单价' }]"
        />
        <VanField
            v-model="subTypeStock"
            name="subTypeStock"
            label="子种类库存"
            placeholder="子种类库存"
            :rules="[{ required: true, message: '请填写子种类库存' }]"
        />
        <VanField name="uploaderSub" label="种类图标上传">
          <template #input>
            <VanUploader v-model="uploaderSub" multiple :max-count="1" :before-read="beforeRead"/>
          </template>
        </VanField>
        <div style="margin: 16px;">
          <VanButton round block type="info" native-type="submit">确认</VanButton>
        </div>
      </VanForm>
    </VanPopup>
    <div style="margin: 16px;">
      <VanButton round block type="info" native-type="submit">提交</VanButton>
    </div>
  </VanForm>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: "BuildGoods",
  data() {
    return {
      uploader: [],
      uploaderSub:[],
      uploaderSubDefault:[],
      goodsName : null,
      show: false,
      fieldValue: '',
      cascaderValue: '',
      showSub : [false],
      showAdd : false,
      subTypeName : null,
      subTypePrice : null,
      subTypeStock : null,


      options: [
        {
          text: '食品',
          value: '330000',
        },
        {
          text: '日用品',
          value: '320000',
        },
      ],
      typeList:[],
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }
      return true;
    },
    showPopup(i){
      this.showSub[i] = true;
      this.showAdd = true;
      this.showAdd=false;
    },
    showPopupAdd(){
      this.showAdd = true;
    },
    addSub(values){
      if(this.uploaderSub.length===0){
        Toast("至少上传一个图片")
      }
      else{
        let sub = {
          subName : values.subTypeName,
          subPrice : values.subTypePrice,
          subStock : values.subTypeStock,
          subPic : this.uploaderSub,
        }
        this.showSub.push(false);
        this.typeList.push(sub)
        console.log(values.subTypeName)
        console.log(this.uploaderSub)
        this.showAdd = false
      }
    },
    upDateSub(i){
      Toast("修改成功")
      this.showSub[i] = false
      this.showAdd = true
      this.showAdd = false
    }
  },
}
</script>

<style scoped>
.popBlock{
  padding-top: 20px;
  padding-left: 20px;
  font-weight: bold;
}

</style>