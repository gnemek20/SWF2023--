<template>
  <div>
    <p>hello world!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    const locationHref = document.location.href;
    const img = document.querySelectorAll('img');

    window.alert('check');
    console.log(locationHref);

    if (img !== null) {
      img.forEach((img, i) => {
        console.log(`${i}: ${img}`);
      })
    }
  },
  methods: {

  }
}
</script>

<style>

</style>