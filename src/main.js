// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

window.$= window.jQuery= require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)
import {routes } from './router/index'


const router = new VueRouter({
  routes,
  mode: 'history'
})

import Vuex from 'vuex'
Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    product : [],
    cart : []
  },
  getters: {
    getproduct(state){
      return state.product;
    },
    getcart(state){
      return state.cart;
    }
  },
  mutations:{
    addtocart(state,a){
      state.cart.push(a);
    },
    deletebtn(state,b){
      state.cart.splice(b,1);
    },
    allproduct(state,x){
      state.product= x
    },
    clearcart(state){
      state.cart= []
    }
  }
})





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
