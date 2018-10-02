<template>
    <div class="g-nav-item" :class="{selected}" @click="tabClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluNavItem',
    props:{
        name:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            selected:false
        }
    },
    methods:{
        tabClick(){
            this.$emit('add:selected',this.name)
        }
    }
}
</script>

<style lang='scss' scoped>
    .g-nav-item{
        padding: 10px 20px;
        &.selected{
            background-color: red;
        }
    }
</style>
