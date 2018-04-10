import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _23adb3c4 = () => import('../pages/printpreview/index.vue' /* webpackChunkName: "pages/printpreview/index" */).then(m => m.default || m)
const _23df1c88 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



const scrollBehavior = function (to, from, savedPosition) {
      if(to.path === '/about' && from.path === '/about'){

      }else{

        if (savedPosition) {
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 10)
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 50)
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 100)
          // return savedPosition
        } else {
          return {
            x: 0,
            y: 0
          }
        }
      }
    }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/printpreview",
			component: _23adb3c4,
			name: "printpreview"
		},
		{
			path: "/",
			component: _23df1c88,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
