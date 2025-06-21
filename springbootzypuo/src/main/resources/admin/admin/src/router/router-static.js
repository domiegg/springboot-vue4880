import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import wentileixing from '@/views/modules/wentileixing/list'
    import yunweirenyuan from '@/views/modules/yunweirenyuan/list'
    import kehu from '@/views/modules/kehu/list'
    import discusswentixinxi from '@/views/modules/discusswentixinxi/list'
    import wentixinxi from '@/views/modules/wentixinxi/list'
    import discussjishuwendang from '@/views/modules/discussjishuwendang/list'
    import jishuwendang from '@/views/modules/jishuwendang/list'
    import storeup from '@/views/modules/storeup/list'
    import wentibaobiao from '@/views/modules/wentibaobiao/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '平台公告',
        component: news
      }
      ,{
	path: '/wentileixing',
        name: '问题类型',
        component: wentileixing
      }
      ,{
	path: '/yunweirenyuan',
        name: '运维人员',
        component: yunweirenyuan
      }
      ,{
	path: '/kehu',
        name: '客户',
        component: kehu
      }
      ,{
	path: '/discusswentixinxi',
        name: '问题信息评论',
        component: discusswentixinxi
      }
      ,{
	path: '/wentixinxi',
        name: '问题信息',
        component: wentixinxi
      }
      ,{
	path: '/discussjishuwendang',
        name: '技术文档评论',
        component: discussjishuwendang
      }
      ,{
	path: '/jishuwendang',
        name: '技术文档',
        component: jishuwendang
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/wentibaobiao',
        name: '问题报表',
        component: wentibaobiao
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
