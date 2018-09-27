<template>
    <div class="g-slides">
        <div class="g-slides-window" ref="window">
            <div class="g-slides-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'GuluSlides',
    props:{
        selected:{
            type:String,
        },
        autoPlay:{
            type:Boolean,
            default:true
        }
    },
    mounted(){
        this.updateChildren()
        this.playAutomatically()
    },
    updated(){
        this.updateChildren()
    },
    methods:{
        playAutomatically(){
            const names = this.$children.map(vm=>vm.name)
            let index = names.indexOf(this.getSelected())
            // setInterval(()=>{
            //     if(index == names.length){index = 0}
            //     this.$emit('update:selected',names[index+1])
            //     index ++
            // },3000)
            let run = ()=>{
                let newIndex = index -1 
                if(newIndex === -1){index = names.length -1}
                if(newIndex === names.length){index = 0}
                this.$emit('update:selected',names[newIndex])
                setTimeout(run,3000)
            }
            setTimeout(run,3000)
        },
        getSelected(){
            let first = this.$children[0]
            return this.selected || first.name
        },
        updateChildren(){
            let selected = this.getSelected()
            this.$children.forEach((vm)=>{
                vm.selected = selected
                const names = this.$children.map(vm => vm.name)
                let newIndex = names.indexOf(selected)
                let oldIndex = names.indexOf(vm.name)
                vm.reverse = newIndex > oldIndex ? false :true
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .g-slides{
        // display: inline-block;
        border: 1px solid black;
        .g-slides-window{
            overflow: hidden;
            .g-slides-wrapper{
                position: relative;
            }
        }
        
    }
</style>
