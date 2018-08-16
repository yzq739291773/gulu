const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })

    // describe('属性', () => {
    //     it('接收 autoClose', (done) => {
    //         let div = document.createElement('div')
    //         document.body.appendChild(div)
    //         const Constructor = Vue.extend(Toast)
    //         const vm = new Constructor({
    //             propsData: {
    //                 autoClose: true,
    //                 autoCloseDelay: 1000
    //             }
    //         }).$mount(div)
    //         setTimeout(() => {
    //             expect(document.body.contains(vm.$el)).to.eq(false)
    //             done()
    //         }, 1500)
    //     })

    // })
})