import Vue from 'vue'
import Button from './button/button.vue'
import Icon from './icon/icon.vue'
import ButtonGroup from './button/button-group.vue'
import Input from './input/input.vue'
import Row from './grid/row.vue'
import Col from './grid/col.vue'
import Layout from './layout/layout.vue'
import Header from './layout/header.vue'
import Sider from './layout/sider.vue'
import Content from './layout/content.vue'
import Footer from './layout/footer.vue'
import Toast from './toast/toast.vue'
import plugin from './plugin.js'
import Tabs from './tab/tabs.vue'
import TabsHead from './tab/tabs-head.vue'
import TabsBody from './tab/tabs-body.vue'
import TabsItem from './tab/tabs-item.vue'
import TabsPane from './tab/tabs-pane.vue'
import Popover from './popover.vue'
import Collapse from './collapse/collapse.vue'
import CollapseItem from './collapse/collapseItem.vue'
import Cascader from './cascader/cascader.vue'

Vue.component('g-cascader', Cascader)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapseitem', CollapseItem)

Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi',
        selectedTab: 'sports',
        selectTab: ['2'],
        source: [{
                name: '浙江',
                children: [{
                        name: '杭州',
                        children: [
                            { name: '上城' },
                            { name: '下城' },
                            { name: '江干' }
                        ]
                    },
                    {
                        name: '嘉兴',
                        children: [
                            { name: '南湖' },
                            { name: '秀洲' },
                            { name: '嘉善' }
                        ]
                    }
                ]
            },
            {
                name: '福建',
                children: [{
                    name: '福州',
                    children: [{
                        name: '鼓楼',
                        name: '台江',
                        name: '仓山'
                    }]
                }]
            }
        ]

    },
    created() {},
    methods: {
        inputChange(e, arg) {
            console.log(e, arg)
        },
        myInput(e, arg) {
            console.log(e, arg)
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast('卡萨积分卡洛斯卡萨斯卡萨积分卡洛斯卡萨积分卡洛斯卡萨积分卡洛斯', {
                enableHtml: false,
                position: position
                    // closeButton: {
                    //     text: '我知道了',
                    //     callback: () => {
                    //         console.log('他告诉我他已经知道了')
                    //     }
                    // }
            })
        }
    }
})