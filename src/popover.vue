<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click="">
            <slot name="content"></slot>
        </div>
        <div ref="triggerWrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'GuluPopover',
    data(){
        return{
            visible:false
        }
    },
    mounted(){
        
    },
    methods:{
        onClick(e){
            if(this.$refs.triggerWrapper.contains(e.target)){
                this.visible = !this.visible
                console.log('切换visible')
                if(this.visible == true){
                    this.$nextTick(()=>{
                        document.body.appendChild(this.$refs.contentWrapper)

                        let {left, top, width, height} = this.$refs.triggerWrapper.getBoundingClientRect()
                        // pageXOffset是scrollX的别名，前者无兼容性，后者有
                        this.$refs.contentWrapper.style.left = left + window.pageXOffset+ 'px'
                        this.$refs.contentWrapper.style.top = top + window.pageYOffset+'px'

                        let eventHandler = (event)=>{
                            if(this.$refs.contentWrapper.contains(event.target)){

                            }else{
                                console.log('关闭popover')
                                this.visible = false
                                console.log('移除监听函数')
                                document.removeEventListener('click',eventHandler)
                            }
                        }
                        console.log('绑定监听函数')
                        document.addEventListener('click',eventHandler)
                    })
                }
            }else{

            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px black;
        transform: translateY(-100%);
    }
    
</style>
