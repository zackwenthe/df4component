
var app = new Vue({
  Vue.prototype.GLOBAL = window.uniname;
  el: '#example_vue_unicorn',
  data: {
    name: GLOBAL,
    mainColor: '#662d91',
    tailAccentColor: '#36c1d9',
    bodyColor: '#efe2B4',
    footColor: '#05f1CD',
    wingColor: '#fff',
    hornColor: '#c69'
  }
})
