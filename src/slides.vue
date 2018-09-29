<template>
    <div class="g-slides">
        <div class="g-slides-window" ref="window">
            <div class="g-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div>
            <!-- {{selectedIndex}} -->
            <span v-for="n in childrenLength" 
                :class="{active:selectedIndex == n-1}"
                @click="select(n-1)" >
                {{n}}
            </span>
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
    data(){
        return{
            childrenLength:0,
            lastSelectedIndex:undefined
        }
    },
    mounted(){
        this.updateChildren()
        this.playAutomatically()
        this.childrenLength = this.$children.length
    },
    computed:{
        selectedIndex(){
            return this.names.indexOf(this.selected) || 0
        },
        names(){
            return this.$children.map((vm)=>vm.name)
        }
    },
    updated(){
        this.updateChildren()
    },
    methods:{
        playAutomatically(){
            let run= ()=>{
                let index = this.names.indexOf(this.getSelected())
                let newIndex = index - 1;
                if(newIndex === -1){
                    newIndex = this.names.length - 1
                }
                if(newIndex === this.names.length){newIndex = 1}
                this.select(newIndex)
                setTimeout(run, 3000)
            }
            setTimeout(run, 3000)
        },
        select(index){
            this.lastSelectedIndex = this.selectedIndex
            this.$emit('update:selected',this.names[index])
        },
        getSelected(){
            let first = this.$children[0]
            return this.selected || first.name
        },
        updateChildren(){
            let selected = this.getSelected()
            this.$children.forEach((vm)=>{
                vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false :true
                this.$nextTick(()=>{
                    vm.selected = selected
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .g-slides{
        border: 1px solid black;
        .g-slides-window{
            overflow: hidden;
            .g-slides-wrapper{
                position: relative;
            }
        }
        
    }
</style>
