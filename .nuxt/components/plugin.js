import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  NuxtLogo: () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  Tutorial: () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c)),
  About: () => import('../..\\components\\about\\index.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c)),
  IndexFooter: () => import('../..\\components\\index\\Footer.vue' /* webpackChunkName: "components/index-footer" */).then(c => wrapFunctional(c.default || c)),
  IndexHeader: () => import('../..\\components\\index\\Header.vue' /* webpackChunkName: "components/index-header" */).then(c => wrapFunctional(c.default || c)),
  Index: () => import('../..\\components\\index\\Index.vue' /* webpackChunkName: "components/index" */).then(c => wrapFunctional(c.default || c)),
  IndexLandingPage: () => import('../..\\components\\index\\LandingPage.vue' /* webpackChunkName: "components/index-landing-page" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
