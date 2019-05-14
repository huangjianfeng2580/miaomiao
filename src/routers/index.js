import Vue from 'vue'
import Router from 'vue-router'
import mineRouter from '@/routers/mine'
import cinemaRouter from '@/routers/cinema'
import movieRouter from '@/routers/movie'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    mineRouter,
    cinemaRouter,
    movieRouter,
    {
  	path:'/',
  	redirect:'/movie'
  	
 		}
  ]
  
})
