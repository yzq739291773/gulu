<template>
    <div class="g-nav">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluNav',
    provide(){
        return{
            root:this
        }
    },
    data(){
        return{
            items:[],
            namePath:[]
        }
    },
    props:{
        selected:{
            type:Array,
            default:()=>[]
        },
        multiple:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        addItem(vm){
            this.items.push(vm)
        },
        updateChildren(){
            this.items.forEach(vm => {
                if(this.selected.indexOf(vm.name)>=0){
                    vm.selected = true
                }else{
                    vm.selected = false
                }
            });
        },
        listenToChildren(){
            this.items.forEach(vm =>{
                vm.$on('add:selected', (name)=>{
                    if(this.multiple){
                        if(this.selected.indexOf(name)<0){
                            let copy = JSON.parse(JSON.stringify(this.selected))
                            copy.push(name)
                            this.$emit('update:selected',copy)
                        }
                    }else{
                        this.$emit('update:selected',[name])
                    }
                })
            })
        }
    },
    computed:{
        // items(){
        //     return this.$children.filter(vm => vm.$options.name == 'GuluNavItem')
        // }
    },
    mounted(){
        this.updateChildren()
        this.listenToChildren()
    },
    updated(){
        this.updateChildren()
    }
}
</script>

<style lang='scss' scoped>
    @import  'var';
    .g-nav{
        display: flex;
        border-bottom: 1px solid $grey;
        color: $color;
        cursor: default;
        user-select: none;
    }
</style>
