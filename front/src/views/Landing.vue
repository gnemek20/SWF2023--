<template>
  <div id="Landing" class="relative flex justify-center align-center">
    <BannerVue class="absolute" />
    <div class="absolute area flex flex-column align-center">
      <div class="flex flex-column full-height">
        <div class="title flex full-width justify-center">
          <h2 class="text-center">Seoul Web 3.0 Festival</h2>
        </div>
        <div class="sign flex flex-column full-width full-height" @keydown.enter="$push('/community')">
          <input type="text">
          <input type="password">
          <button @click="$push('/community')">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerVue from '@/components/Banner.vue'

export default {
  components: {
    BannerVue
  }
}
</script>

<style>
#Landing {
  width: 100vw;
  height: 100vh;
}

.area {
  width: 250px;
  height: 250px;
  padding: 30px 20px 20px 15px;
  border-radius: 10%;
  box-shadow: 0px 0px 5px 0px;
  background-color: rgba(255, 255, 255, 0.8);
}

.title {
  margin-bottom: 30px;
}

.sign > input:nth-child(1) {
  margin-bottom: 10px;
}

.sign > input:nth-child(2) {
  margin-top: 10px;
}

.sign > button:nth-child(3) {
  margin-top: auto;
}
</style>