<template>
    <div class="popover" @click.stop="xxx">
        <div class="content-wrapper" @click.stop="">
            <slot name="content" v-if="visible"></slot>
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
        xxx(){
            this.visible = !this.visible
            if(this.visible === true){
                setTimeout(()=>{
                    let eventHandler = ()=>{
                        this.visible = false
                        document.removeEventListener('click',eventHandler)
                    }
                    document.addEventListener('click', eventHandler)
                },20)
                
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper{
            position: absolute;
            left: 0;
            bottom: 100%;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0,0,0,.5);
        }
    }

</style>
