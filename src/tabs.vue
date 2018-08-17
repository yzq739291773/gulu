<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluTabs',
    props:{
        selectedTab:{
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
    data(){
        return{
        }
    },
    mounted(){
        this.$emit('update:selectedTab','xxx')
    },
    methods:{
    }
}
</script>

<style scoped lang="scss">
    .tabs{
        
    }
</style>
