# gulu  一个ui组件
## 介绍
    系统的学习前端造轮子，希望其中的ui组件对你有帮助
## 开始使用
1，添加css样式
    使用本框架前，请在css中开启 border-box
    ```
    *,*::before,#::after{box-sizing:border:box;}
    ```
    IE 8 及以上浏览器都支持此样式

    你还需要设置默认颜色等变量
    ```
    html {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
    ```
    IE 15及以上浏览器都支持此样式(具体查看 can i use --- css var)
2.安装 gulu-yzq
    ```
    npm i --save gulu-yzq
    ```
3.引入 gulu-yzq
    ```
    import {Button, Icon, ButtonGroup } from 'gulu-yzq'
    import 'gulu-yzq/dist/index.css'
    export default {
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
    }
    ```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码
 
