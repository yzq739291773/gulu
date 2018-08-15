const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('属性', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: '123456'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('123456')
        })
        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerHTML).to.equal('你错了')
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 input/change/focus/blur 事件', () => {
                ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                    vm = new Constructor({}).$mount()
                    const callback = sinon.fake();
                    vm.$on(eventName, callback)
                        // 触发input 的change事件
                    let event = new Event(eventName)
                        // let inputElement = vm.$el.querySelector('input')
                        // inputElement.dispatchEvent(event)
                        // console.log(eventName)
                        // expect(callback).to.have.been.calledWith(event)

                    // 为了兼容v-model属性，测试用例得这样改
                    Object.defineProperty(event, 'target', {
                        value: { value: 'hi' },
                        enumerable: true
                    })
                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    console.log(eventName)
                    expect(callback).to.have.been.calledWith('hi')
                })
            })
            // it('支持 focus 事件', () => {
            //     vm = new Constructor({}).$mount()
            //     const callback = sinon.fake();
            //     vm.$on('focus', callback)
            //         // 触发input 的change事件
            //     let event = new Event('focus')
            //     let inputElement = vm.$el.querySelector('input')
            //     inputElement.dispatchEvent(event)
            //     expect(callback).to.have.been.calledWith(event)
            // })
            // it('支持 blur 事件', () => {
            //     vm = new Constructor({}).$mount()
            //     const callback = sinon.fake();
            //     vm.$on('blur', callback)
            //         // 触发input 的change事件
            //     let event = new Event('blur')
            //     let inputElement = vm.$el.querySelector('input')
            //     inputElement.dispatchEvent(event)
            //     expect(callback).to.have.been.calledWith(event)
            // })
            // it('支持 change 事件', () => {
            //     vm = new Constructor({}).$mount()
            //     const callback = sinon.fake();
            //     vm.$on('change', callback)
            //         // 触发input 的change事件  
            //     let event = new Event('change')
            //     let inputElement = vm.$el.querySelector('input')
            //     inputElement.dispatchEvent(event)
            //     expect(callback).to.have.been.calledWith(event)
            // })
    })

})