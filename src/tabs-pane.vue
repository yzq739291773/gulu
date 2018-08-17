<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluTabsPane',
    inject:['eventBus'],
    data(){
        return{
            active:false
        }
    },
    props:{
        name:{
            type:Number|String,
            required:true
        }
    },
    computed:{
        classes(){
            return{
                active:this.active
            }
        }
    },
    created(){
        this.eventBus.$on('update:selected', (name)=>{
            if(name === this.name){
                console.log(`pane${this.name}被选中了`)
                this.active = true
            }else{
                console.log(`pane${this.name}没被选中了`)
                this.active = false
            }
        })
    }
    
}
</script>

<style scoped lang="scss">
    .tabs-pane{
        &.active{
            background-color: red;
        }
    }
</style>
