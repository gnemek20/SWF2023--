import router from "@/router/index.js"

export default {
  install(Vue) {
    Vue.prototype.$push = functions.push;
    Vue.prototype.$reload = functions.reload;
  }
}

export const functions = {
  push: (location) => {
    return router.push(location).catch(() => {});
  },
  reload: () => {
    return router.go();
  }
}