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
        <VanUploader v-model="uploader" multiple
                     name="Uploader"
                     :max-count="5"
                     :before-read="beforeRead"
                     :after-read="afterReadGoods"
                     :before-delete = "upLoaderDelete"/>
      </template>
    </VanField>
    <VanField name="uploaderSubDefault" label="商品默认小图标上传">
      <template #input>
        <VanUploader v-model="uploaderSubDefault" multiple
                     name = "uploaderSubDefault"
                     :max-count="1"
                     :before-read="beforeRead"
                     :after-read="afterReadGoods"
                     :before-delete="upLoaderDelete"/>
      </template>
    </VanField>
    <VanField name="uploaderDetail" label="商品详情">
      <template #input>
        <VanUploader v-model="uploaderDetail" multiple
                     name="UploaderDetail"
                     :max-count="10"
                     :before-read="beforeRead"
                     :after-read="afterReadGoods"
                     :before-delete="upLoaderDelete"/>
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
              <VanUploader v-model="typeList[i].subPic" multiple
                           name = i
                           :max-count="1"
                           :before-read="beforeRead"/>
            </template>
          </VanField>
          <div style="margin: 16px;">
            <VanButton round block type="info" native-type="submit">确认</VanButton>
            <ARow :style="{'height' : '10px'}"></ARow>
            <VanButton round block type="danger" @click="deleteSub(i)">删除</VanButton>
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
            <VanUploader v-model="uploaderSub" multiple :max-count="1"
                         :before-read="beforeRead"/>
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
  async created() {
    const {$} = await  import('@/util/ajax');
    const result = await $.get('/commodity/labels')
    for(let i = 0; i < result.data.information.length; i++){
      this.options.push({
        text : result.data.information[i].itemName,
        value : result.data.information[i].recordId,
      })
    }
    console.log(this.options)

  },
  data() {
    return {
      label: [],
      //存商品图片
      uploader: [],
      uploaderName :[],
      //存该种类下的商品图标(临时的)
      uploaderSub:[],
      uploaderSubName : null,
      //存默认的商品图标
      uploaderSubDefault : [],
      uploaderSubDefaultName : null,
      //商品详情
      uploaderDetail: [],
      uploaderDetailName:[],

      goodsName : null,
      show: false,
      fieldValue: '',
      cascaderValue: '',
      showSub : [false],
      showAdd : false,
      subTypeName : null,
      subTypePrice : null,
      subTypeStock : null,
      options: [],
      typeList:[],
      postList:[],
    };
  },
  methods: {
    async onSubmit() {
      if(this.uploader.length === 0 || this.uploaderDetail.length === 0 || this.uploaderSubDefault.length === 0){
        Toast("缺少图片");
      }
      else if(this.typeList.length === 0){
        Toast("至少设置一个种类");
      }
      else{
        const config = {
          headers: { "Content-Type": "application/json;charset=UTF-8" }
        };
        const {$} = await  import('@/util/ajax');
        for(let i = 0; i < this.options.length; i++ ){
          if(this.options[i].text === this.fieldValue){
            this.label.push(this.options[i].value)
          }
        }

        for(let i = 0; i < this.typeList.length; i++){
          this.postList.push(
              {
                "cid": 0,
                "price": this.typeList[i].subPrice,
                "stock": this.typeList[i].subStock,
                "subCommodityStatus": true,
                "subIcon": this.typeList[i].subPicName,
                "subId": 0,
                "subName": this.typeList[i].subName,
              }
          )
        }
        const test ={
          "commodityDetails" : this.uploaderDetailName,
          "commodityName" : this.goodsName,
          "labelId" : this.label,
          "mainIcon":this.uploaderSubDefaultName,
          "mainIcons":this.uploaderName,
          "subCommodity":this.postList
        }
        console.log(test)
        const result = await $.post('/commodity', test,config);
        console.log(result);
      }
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
    async addSub(values){
      if(this.uploaderSub.length===0){
        Toast("至少上传一个图片")
      }
      else{
        const config = {
          headers: { "Content-Type": "multipart/form-data;boundary="+new Date().getTime() }
        };
        const {$} = await  import('@/util/ajax');
        const formData = new FormData();
        formData.append('file', this.uploaderSub[0].file);
        const result =await $.post('/upload', formData, config);
        const sub = {
          subName : values.subTypeName,
          subPrice : parseInt(values.subTypePrice),
          subStock : parseInt(values.subTypeStock),
          subPic : this.uploaderSub,
          subPicName : result.data.information,
        }
        this.showSub.push(false);
        this.typeList.push(sub);
        this.showAdd = false;
        this.uploaderSub = [];
        this.subTypeStock = null;
        this.subTypePrice = null;
        this.subTypeName = null;
      }
    },
    async upDateSub(i){
      const config = {
        headers: { "Content-Type": "multipart/form-data;boundary="+new Date().getTime() }
      };
      const {$} = await  import('@/util/ajax');
      const formData = new FormData();
      formData.append('file', this.typeList[i].subPic[0].file);
      console.log(this.typeList[i].subPic[0].file)
      const result =await $.post('/upload', formData, config);
      console.log(result);
      this.typeList[i].subPicName=result.data.information;
      Toast("修改成功");
      this.showSub[i] = false;
      this.showAdd = true;
      this.showAdd = false;
      console.log(this.typeList[i].subPicName);
    },
    async afterReadGoods(file,detail){
      const config = {
        headers: { "Content-Type": "multipart/form-data;boundary="+new Date().getTime() }
      };
      const {$} = await  import('@/util/ajax');
      const formData = new FormData();
      formData.append('file', file.file);
      const result =await $.post('/upload', formData, config);
      if(detail.name === "Uploader"){
        this.uploaderName.push(result.data.information);
      }
      else if(detail.name === "UploaderDetail"){
        this.uploaderDetailName.push(result.data.information)
      }
      else if(detail.name === "uploaderSubDefault"){
        this.uploaderSubDefaultName = result.data.information
      }
      console.log(this.uploaderName);
    },
    upLoaderDelete(detail){
      if(detail.name === "Uploader"){
        this.uploaderName.splice(detail.index,1);
      }
      else if(detail.name === "UploaderDetail"){
        this.uploaderDetailName.splice(detail.index,1);
      }
      else if(detail.name === "uploaderSubDefault"){
        this.uploaderSubDefaultName = null;
      }
      console.log(this.uploaderName)
      return Promise;
    },
    deleteSub(i){
      this.typeList.splice(i,1);
      Toast("删除成功");
      this.showSub[i] = false;
      this.showAdd = true;
      this.showAdd = false;
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