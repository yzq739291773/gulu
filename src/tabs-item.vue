<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluTabsItem',
    inject:['eventBus'],
    data(){
        return{
            active:false
        }
    },
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        name:{
            type:Number|String,
            required:true
        }
    },
    created(){
        this.eventBus.$on('update:selected', (name)=>{
            if(name === this.name){
                console.log(`我${this.name}被选中了`)
                this.active = true
            }else{
                console.log(`我${this.name}没被选中了`)
                this.active = false
            }
        })
    },
    computed:{
        classes(){
            return{
                active:this.active
            }
        }
    },
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name,this)
        }
    }
}
</script>

<style scoped lang="scss">
    $blue:blue;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            // background-color: red;
            color: $blue;
        }
    }
</style>
