<template>
  <div id="Community" class="relative">
    <div class="header fixed flex flex-column full-width">
      <div class="title flex">
        <h2>SEOUL 3.0</h2>
      </div>
    </div>
    <div class="content flex flex-column align-center full-width">
      <div class="area flex flex-column">
        <SectionVue>
          <div class="uploadArea flex justify-center" ref="uploadArea">
            <button ref="uploadButton" @click="clickedUploadButton">upload</button>
            <div class="uploadInput flex justify-center" ref="uploadInput">
              <div class="flex full-width full-height">
                <label class="flex justify-center align-center full-width full-height pointer" for="inputImage">
                  <h3>이미지 업로드</h3>
                </label>
                <input id="inputImage" class="none" type="file" accept="image/*" multiple>
              </div>
            </div>
          </div>
        </SectionVue>
        <hr>
        <SectionVue>
          <div class="flex justify-center">
            <p>당신의 멋진 모습을 보여주세요!</p>
          </div>
        </SectionVue>
      </div>
      <div class="area flex flex-column">
        <SectionVue>
          <img src="@/assets/ddp01.png">
        </SectionVue>
        <hr>
        <SectionVue>
          <img src="@/assets/ddp02.png">
        </SectionVue>
      </div>
      <div class="area flex flex-column">
        <SectionVue>
          <img src="@/assets/ddp03.png">
        </SectionVue>
      </div>
    </div>
  </div>
</template>

<script>
import SectionVue from '@/components/Section.vue';

export default {
  components: {
    SectionVue
  },
  methods: {
    clickedUploadButton() {
      this.$refs['uploadButton'].className = 'none';
      this.$refs['uploadInput'].style.width = '100%';
      this.$refs['uploadInput'].style.height = '100px';
      this.$refs['uploadArea'].style.height = '100%';
    }
  }
}
</script>

<style>
body {
  background-color: #F0F2F5;
}

hr {
  margin: 0 20px;
}

img {
  border-radius: 5px;
}

.header {
  top: 0;
  background-color: white;
  box-shadow: 0px 0px 3px 0px;
}

.header > .title {
  margin: 3px 0px 3px 20px;
}

.title > h2 {
  background: linear-gradient(to right, #a5e2ab 0%, #f8708d 55%, #aacfee 80%);
  color: transparent;
  background-clip: text;
}

.content {
  margin: 38px 0;
}

.content > .area {
  width: 700px;
  border-radius: 5px;
  /* border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px; */
  margin-top: 80px;
  background-color: white;
}

.uploadArea {
  height: 27.6px;
  transition: all 1s;
}

.uploadInput {
  width: 0px;
  height: 0px;
  overflow: hidden;
  border: 5px dashed white;
  transition: all 1s;
}

.uploadInput:hover {
  border: 5px dashed dimgray;
}
</style>