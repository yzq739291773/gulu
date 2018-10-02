<template>
  <div id="app">
      <h1>1111111</h1>
      <g-nav :selected="selected" :multiple="false">
          <g-nav-item name="home">首页</g-nav-item>
          <g-nav-item name="about">关于</g-nav-item>
          <g-nav-item name="hire">招聘</g-nav-item>
      </g-nav>
  </div>
</template>

<script>
import GNav from './nav/nav';
import GNavItem from './nav/nav-item.vue'
import GSubNav from './nav/sub-nav'

export default {
  name: 'app',
  components: {
    GNav,
    GNavItem,
    GSubNav
  },
  created(){

    
  },
  data(){
    return({
            // source: [{
            //         name: '浙江',
            //         children: [{
            //                 name: '杭州',
            //                 children: [
            //                     { name: '上城' },
            //                     { name: '下城' },
            //                     { name: '江干' }
            //                 ]
            //             },
            //             {
            //                 name: '嘉兴',
            //                 children: [
            //                     { name: '南湖' },
            //                     { name: '秀洲' },
            //                     { name: '嘉善' }
            //                 ]
            //             }
            //         ]
            //     },
            //     {
            //         name: '福建',
            //         children: [{
            //             name: '福州',
            //             children: [{
            //                 name: '鼓楼',
            //                 name: '台江',
            //                 name: '仓山'
            //             }]
            //         }]
            //     }
            // ]

        })
  },
    methods: {
       
    }
}
</script>

<style lang="scss">
@import '../styles/var';
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
         :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
        
        body {
            font-size: var(--font-size);
        }
        
        .demo {
            border: 1px solid #666;
            min-height: 100px;
        }
</style>
