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
            <button ref="uploadButton" @click="clickedUploadButton">Image Upload</button>
            <div class="uploadInput flex justify-center" ref="uploadInput">
              <div class="flex full-width full-height">
                <label class="flex justify-center align-center full-width full-height pointer" for="inputImages">
                  <h3>Image Upload</h3>
                </label>
                <input id="inputImages" ref="inputImages" class="none" type="file" accept="image/*" @change="uploadedImages" multiple>
              </div>
            </div>
          </div>
        </SectionVue>
        <hr>
        <SectionVue>
          <div class="flex justify-center">
            <p>Show off Your Awesome Side</p>
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
    },
    uploadedImages() {
      const input = this.$refs['inputImages'];
      const images = input.files;

      // if (images.length > 0) {

      // }
    }
  }
}
</script>

<style scoped>
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
  transition: all 0.8s;
}

.uploadInput:hover {
  border: 5px dashed dimgray;
}
</style>