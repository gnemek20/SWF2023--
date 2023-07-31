<template>
  <div id="Community" class="relative">
    <div class="header fixed flex flex-column full-width">
      <div class="title flex">
        <h2>SEOUL 3.0</h2>
      </div>
      <hr>
    </div>
    <div class="content flex justify-center full-width">
      <div class="area flex flex-column">
        <SectionVue>
          <div class="tool flex">
            <button>upload</button>
          </div>
        </SectionVue>
        <hr>
        <SectionVue>
          <div>
            <p>chicks</p>
          </div>
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

.header {
  top: 0;
  background-color: white;
  box-shadow: 0px 0px 2px 0px;
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
  margin-top: 38px;
}

.content > .area {
  width: 500px;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-top: 80px;
  background-color: white;
}

.tool > button {
  margin-left: auto;
}
</style>