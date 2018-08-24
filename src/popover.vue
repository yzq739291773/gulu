<template>
    <div class="popover" @click="onClick" ref="popover">
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
        positionContent(){
            document.body.appendChild(this.$refs.contentWrapper)
            let {left, top, width, height} = this.$refs.triggerWrapper.getBoundingClientRect()
            // pageXOffset是scrollX的别名，前者无兼容性，后者有
            this.$refs.contentWrapper.style.left = left + window.pageXOffset+ 'px'
            this.$refs.contentWrapper.style.top = top + window.pageYOffset+'px'
        },
        onClickDocument(event){
            if(
                this.$refs.popover&& 
                (this.$refs.popover == event.target || this.$refs.popover.contains(event.target))
            ){return}
            this.close()
        },
        open(){
            this.visible = true
            this.$nextTick(()=>{
                this.positionContent()
                document.addEventListener('click',this.onClickDocument)
            })
        },
        close(){
            this.visible = false;
           document.removeEventListener('click',this.onClickDocument)
        },
        onClick(e){
            if(this.$refs.triggerWrapper.contains(e.target)){
                if(this.visible == true){
                   this.close()
                }else{
                    this.open()
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
