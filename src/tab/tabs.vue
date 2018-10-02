<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'GuluTabs',
    props:{
        selected:{
            type:String,
            default:'sports'
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal', 'vertical'].includes(value)
            }
        }
    },
    provide(){
        return{
            eventBus:this.eventBus
        }
    },
    data(){
        return{
            eventBus:new Vue()
        }
    },
    mounted(){
        if(this.$children.length === 0){
            console.warn('tabs的子组件应该是tabs-head 和 tabs-body，但你没有写子组件')
        }
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'GuluTabsHead'){
                vm.$children.forEach((childrenvm)=>{
                    if(childrenvm.$options.name === 'GuluTabsItem' && childrenvm.name === this.selected){
                       this.eventBus.$emit('update:selected',this.selected,childrenvm)
                    }
                })
            }
        })
    },
    methods:{
    }
}
</script>

<style scoped lang="scss">
    .tabs{
        
    }
</style>
