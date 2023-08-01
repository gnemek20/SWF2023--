<template>
  <div id="banner">
    <img src="@/assets/ddp01.png" class="morning" ref="morning">
    <img src="@/assets/ddp02.png" class="afternoon none" ref="afternoon">
    <img src="@/assets/ddp03.png" class="evening none" ref="evening">
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null
    }
  },
  mounted() {
    let count = 0;
    const color = ['morning', 'afternoon', 'evening'];
    
    this.interval = setInterval(() => {
      this.$refs[color[count % 3]].className = `${color[count % 3]} fadeOut`;
      this.$refs[color[(count + 1) % 3]].className = `${color[(count + 1) % 3]} fadeIn`;
      this.$refs[color[(count + 2) % 3]].className = `${color[(count + 2) % 3]} none`;

      count++;
    }, 5000)
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 30%;
  }
}
.fadeIn {
  animation: fadeIn;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 30%;
  }
  100% {
    opacity: 0;
  }
}
.fadeOut {
  animation: fadeOut;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

#banner {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

#banner > * {
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 30%;
}
</style>