import Vue from 'vue'
import Router from 'vue-router'

import error from '@/view/error/error'
import shouye from '@/view/shouye/shouye'
import system from '@/view/shouye/system'
import login  from '@/view/login/login'
import menuManger from '@/view/shouye/authmenu/menuManger'
import userManger from '@/view/shouye/user/userManager'
import datamenu from '@/view/shouye/datamenu'
import datamain from '@/view/shouye/datamain'
import roleManager from '@/view/shouye/role/roleManager'
import tikuguanli from '@/view/tiku/tikuguanli'
import xinzengshiti from '@/view/tiku/xinzengshiti'
import fenxikaoshi from '@/view/kaoshi/shijuan/fenxikaoshi'
import chengjifenxi from '@/view/kaoshi/shijuan/chengjifenxi'
import chengji      from '@/view/kaoshi/chengjifenxi2'

//========================测试组件start
//测试页面1
import testpage from '@/view/testpage/testpage'
//测试页面2
import testCheckbox from '@/view/testpage/testCheckbox'
//测试页面3
import testpagefenzhuang from '@/view/testpage/testpagefenzhuang'
//测试页面4 富文本编辑器
import testueditor from '@/view/testpage/testUEditer'
import testform from '@/view/testpage/testForm'
import testDanXuan from '@/view/testpage/testDanXuan'
import testceshi from '@/view/testpage/TestCeShi'
import websocket from '@/view/testpage/testWebSocket'
import websocketTest from '@/view/testpage/test2'
//========================测试组件end

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/view/shouye/shouye',
      name: 'shouye',
      component: shouye,
      meta:{
        require:true//该路径的访问需要登录
      },
      children:[
        {
          path:"/datamain",
          component:datamain,
          children:[//页面主显示区域的页面路由（采用嵌套路由的方式实现）
            {path:'/error',component:error,meta:{require:false}},
            {path:'/system',component:system,meta:{require:true}},
            {path:'/datamain/yewu/menuManger',component:menuManger,meta:{require:true}},
            {path:'/datamain/yewu/userManger',component:userManger,meta:{require:true}},
            {path:'/datamain/yewu/roleManager',component:roleManager,meta:{require:true}},
            {path:"/datamain/yewu/tiku",component:tikuguanli,meta:{require:true}},
            {path:"/datamain/yewu/xinzengshiti",component:xinzengshiti,meta:{require:true}},
            {path:"/datamain/yewu/fenxikaoshi",component:fenxikaoshi,meta:{require:true}},
            {path:"/datamain/yewu/chengjifenxi",component:chengjifenxi,meta:{require:true}},
            {path:"/datamain/yewu/chengji",component:chengji,meta:{require:true}},
            {path:"/datamain/yewu/testpage",component:testpage,meta:{require:true}},
            {path:"/datamain/yewu/testCheckbox",component:testCheckbox,meta:{require:true}},
            {path:"/datamain/yewu/testpagefenzhuang",component:testpagefenzhuang,meta:{require:true}},
            {path:"/datamain/yewu/testueditor",component:testueditor,meta:{require:true}},
            {path:"/datamain/yewu/testform",component:testform,meta:{require:true}},
            {path:"/datamain/yewu/testDanXuan",component:testDanXuan,meta:{require:true}},
            {path:"/datamain/yewu/testceshi",component:testceshi,meta:{require:true}},
            {path:"/datamain/yewu/websocket",component:websocket,meta:{require:true}},
            {path:"/datamain/yewu/websocketTest",component:websocketTest,meta:{require:true}}
          ]
        }
      ]
    },{
      path: '/',
      name: 'login',
      component: login,
      meta:{
        require:false//该路径的访问不需要登录
      }
    }/*,{
      path: '/error',
      name: 'error',
      component: error,
      meta:{
        require:false//该路径的访问不需要登录
      }
    }*/,
    {
      path:"/datamenu",
      component:datamenu,
      meta:{require:true}
    }
  ]
})
