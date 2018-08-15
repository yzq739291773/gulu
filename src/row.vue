<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluRow',
    props:{
        gutter:{
            type:[Number,String]
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            vm.gutter = this.gutter
        })
    },
    computed:{
        rowStyle(){
            return{
                marginLeft:-this.gutter/2 + 'px', 
                marginRight:-this.gutter/2 + 'px'
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .row{
        // 注意：栅格布局gutter的关键就是col设置左右padding，然后row设置左右负margin,让row分别向左右延伸，
        // 但是设置负margin会延伸的前提是，该元素不能设置有width属性，width 100%都不行
        // margin: 0 -10px;
        display: flex;
        flex-wrap: nowrap;
    }
</style>
