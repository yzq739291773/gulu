<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose()">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'GuluToast',
        props:{
            autoClose:{
                type:Boolean,
                default: true
            },
            autoCloseDelay:{
                type:Number,
                default:50
            },
            closeButton:{
                type:Object,
                default(){
                    return{
                        text:'关闭',
                        callback:undefined
                        // ()=>{
                        //     console.log(3)
                        //     this.close()
                        //     console.log(4)
                        // }
                    }
                }
            },
            enableHtml:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top', 'middle', 'bottom'].indexOf(value) > 0
                }
            }
        },
        mounted(){
           this.execAutoClose() 
           this.updateStyles()
            
        },
        computed:{
            toastClasses(){
                return {[`position-${this.position}`] : true}
            }
        },
        methods:{
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay*1000)
                }
            },
            updateStyles(){
                this.$nextTick(()=>{
                    // 注意this.$refs.wrapper.style.height 只能获取内联样式，所以这里获取不到
                    // 这里为什么要给line赋值高度呢，因为父元素使用的min-height属性，子元素的百分比就会失效
                    this.$refs.line.style.height = 
                    `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            close(){
                console.log(2)
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                console.log(1)
                this.close();
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0,0,.75);
    .toast{
        font-size:$font-size;
        min-height: $toast-height;
        max-width: 400px;
        line-height: 1.8;
        position: fixed;
        // top:0;
        left: 50%;
        // transform:translateX(-50%);
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        color:white;
        padding:0 16px;
        .message{
            padding: 8px 0;
        }
        .close{
            padding-left: 16px;
            flex-shrink: 0;
        }
        .line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        &.position-top{
            top:0;
            transform:translateX(-50%);
        }
        &.position-bottom{
            bottom: 0;
            transform: translateX(-50%);
        }
        &.position-middle{
            top:50%;
            transform: translate(-50%, -50%);
        }

    }
</style>
