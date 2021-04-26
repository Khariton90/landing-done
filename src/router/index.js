import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'

Vue.use(VueRouter)

const routes = [
//Домашняя страница
  { path: '/', name: 'Home', component: Home,
children: [{ path: '/#contacts', name:'cont'} ]
   },
  { path: '/news', name: 'news', component: News,
   },
//Страница проекты
  { path: '/projects', name: 'projects', component: () => import('../views/Projects.vue'),props: true

   },
//Страница квиза
  { path: '/quiz', name: 'quiz',component: () => import('../views/quiz.vue')},
//
{ path: '/projects/garage', name:'garage',   component: () => import('../views/Garage.vue')},
{ path: '/projects/workshop', name:'workshop',  component: () => import('../views/Workshop.vue')},
{ path: '/projects/promotion', name:'promotion',  component: () => import('../views/Promotion.vue')},
{ path: '/projects/coach', name:'coach',  component: () => import('../views/Coach.vue')},
{ path: '/projects/courses', name:'courses',  component: () => import('../views/Courses.vue')},
{ path: '/projects/sales', name:'sales',  component: () => import('../views/Sales.vue')},
{ path: '/projects/creative', name:'creative',  component: () => import('../views/Creative.vue')},
{ path: '/projects/engineering', name:'engineering',  component: () => import('../views/Engineering.vue')},
{ path: '/projects/beauty', name:'beauty',  component: () => import('../views/Beauty.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
scrollBehavior: (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  };
  return { x: 0, y: 0 };
}
})

router.beforeEach((to, from, next) => {
  next()

})
//  Решение проблемы динамической навигации!!
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
    const result = originalPush.call(
        this,
        location,
        onComplete,
        onAbort
    );
    if (result) {
        return result.catch(err => {
            if (err.name !== 'NavigationDuplicated') {
                throw err;
            }
        });
    }
    return result;
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
    const result = originalReplace.call(
        this,
        location,
        onComplete,
        onAbort
    );
    if (result) {
        return result.catch(err => {
            if (err.name !== 'NavigationDuplicated') {
                throw err;
            }
        });
    }
    return result;
};
export default router
