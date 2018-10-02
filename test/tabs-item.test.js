const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tab/tabs.vue'
import TabsHead from '../src/tab/tabs-head.vue'
import TabsBody from '../src/tab/tabs-body.vue'
import TabsItem from '../src/tab/tabs-item.vue'
import TabsPane from '../src/tab/tabs-pane.vue'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })

    describe('属性', () => {
        it('接收 name', () => {
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    name: 'xxx',
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('xxx')

        })

        it('接收 disabled', () => {
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    disabled: true,
                }
            }).$mount()
            expect(vm.$el.classList.contains('disabled')).to.be.true
            const callback = sinon.fake()
            vm.$on('click', callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called

        })

    })
})