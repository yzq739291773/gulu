const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })

    describe('属性', () => {
        it('接收 autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: true,
                    autoCloseDelay: 1
                }
            }).$mount(div)
            setTimeout(() => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            }, 1500)
        })

        it('接收 closeButton', (done) => {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭吧',
                        callback,
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
                // 注意：这里的不加延时偶尔会产生bug,代码里面再读取元素的时候，就被这个吧toast关掉了，所以会报错。
                // 加上延时，保证代码的正常运行，同时也可以测试
            setTimeout(() => {
                closeButton.click()
                expect(callback).to.have.been.called
                done()
            }, 1500)

        })

        it('接收 enableHTML', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = [`<strong id="test">hi</strong>`]
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })

        it('接收 position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })

    })
})