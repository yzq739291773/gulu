<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast" >
            <div class="message">
                <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose()">
                {{closeButton.text}}
            </span>
        </div>
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
                default:3
            },
            closeButton:{
                type:Object,
                default(){
                    return{
                        text:'关闭',
                        callback:undefined
                        // ()=>{
                        //     this.close()
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
                    // 注意this.$refs.toast.style.height 只能获取内联样式，所以这里获取不到
                    // 这里为什么要给line赋值高度呢，因为父元素使用的min-height属性，子元素的百分比就会失效
                    this.$refs.line.style.height = 
                    `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close(){
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            onClickClose(){
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
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0%);
        }
    }
     @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0%);
        }
    }
     @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    .wrapper{
         position: fixed;
        // top:0;
        left: 50%;
        transform:translateX(-50%);
        &.position-top{
            top:0;
            .toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down 1s;
            }
        }
        &.position-middle{
            top:50%;
            transform: translate(-50%, -50%);
        }
        &.position-bottom{
            bottom: 0;
            transform: translateX(-50%);
            .toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up .3s;
            }
        }
    }
    .toast{
        animation: fade-in 1s;
        font-size:$font-size;
        min-height: $toast-height;
        max-width: 400px;
        line-height: 1.8;
       
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
        
    }
</style>
