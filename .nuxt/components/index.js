import { wrapFunctional } from './utils'

export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as About } from '../..\\components\\about\\index.vue'
export { default as IndexFooter } from '../..\\components\\index\\Footer.vue'
export { default as IndexHeader } from '../..\\components\\index\\Header.vue'
export { default as Index } from '../..\\components\\index\\Index.vue'
export { default as IndexLandingPage } from '../..\\components\\index\\LandingPage.vue'

export const LazyNuxtLogo = import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorial = import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const LazyAbout = import('../..\\components\\about\\index.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyIndexFooter = import('../..\\components\\index\\Footer.vue' /* webpackChunkName: "components/index-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyIndexHeader = import('../..\\components\\index\\Header.vue' /* webpackChunkName: "components/index-header" */).then(c => wrapFunctional(c.default || c))
export const LazyIndex = import('../..\\components\\index\\Index.vue' /* webpackChunkName: "components/index" */).then(c => wrapFunctional(c.default || c))
export const LazyIndexLandingPage = import('../..\\components\\index\\LandingPage.vue' /* webpackChunkName: "components/index-landing-page" */).then(c => wrapFunctional(c.default || c))
