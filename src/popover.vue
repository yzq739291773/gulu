<template>
    <div class="popover" @click.stop="onClick">
        <div class="content-rapper" v-if="visible" @click.stop="">
            <slot name="content"></slot>
        </div>
        <slot></slot>
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
    methods:{
        onClick(){
            this.visible = !this.visible
            console.log('切换visible')
            if(this.visible == true){
                this.$nextTick(()=>{
                    let eventHandler = ()=>{
                        console.log('关闭popover')
                        this.visible = false
                        console.log('移除监听函数')
                        document.removeEventListener('click',eventHandler)
                    }
                    console.log('绑定监听函数')
                    document.addEventListener('click',eventHandler)
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        position: relative;
        .content-rapper{
            position: absolute;
            left: 0;
            bottom: 100%;
            border: 1px solid red;
            box-shadow: 0 0 3px black;
        }
    }
</style>
