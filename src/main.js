// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'

import App from './App'
import Personel from "./components/personel"
import About from "./components/about"
import Add from "./components/add"
import PersonelDetails from "./components/personel_detail"
import Edit from "./components/edit"


Vue.use(VueRouter)
Vue.use(VueAxios, axios)


Vue.config.productionTip = false

const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:"/",      component:Personel},
    {path:"/about", component:About},
    {path:"/add",   component:Add},
    {path:"/personel/:id",   component:PersonelDetails},
    {path:"/edit/:id",   component:Edit}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">VEU CRUD</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Personel</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">Add Personel</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
      <router-view></router-view>
    </div>
  `,
}).$mount("#app")
