import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import plugin from './plugin.js'

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
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi'

    },
    created() {

    },
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