<template>
    <div class="g-slides" 
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd">
        <div class="g-slides-window" ref="window">
            <div class="g-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="g-slides-dots">
            <span @click="onClickPrev">
                <g-icon name="left"></g-icon>
            </span>
            <span v-for="n in childrenLength" 
                :class="{active:selectedIndex == n-1}"
                @click="select(n-1)" >
                {{n}}
            </span>
            <span @click="onClickNext"> 
                <g-icon name="right"></g-icon>
            </span>
        </div>
    </div>
</template>

<script>
import Gicon from './icon.vue'
export default {
    name:'GuluSlides',
    components:{
        "g-icon":Gicon
    },
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
            lastSelectedIndex:undefined,
            timerId:undefined,
            startTouch:undefined
        }
    },
    mounted(){
        this.updateChildren()
        this.playAutomatically()
        this.childrenLength = this.items.length
    },
    computed:{
        selectedIndex(){
            let index =  this.names.indexOf(this.selected)
            return index == -1 ? 0 :index
        },
        names(){
            return this.items.map((vm)=>vm.name)
        },
        items(){
            return this.$children.filter((vm)=>{
                return vm.$options.name == 'GuluSlidesItem'
            })
        }
    },
    updated(){
        this.updateChildren()
    },
    methods:{
        onClickPrev(){
            this.select(this.selectedIndex - 1);
        },
        onClickNext(){
            this.select(this.selectedIndex + 1);
        },
        onTouchStart(e){
            this.pause()
            this.startTouch = e.touches[0]
        },
        onTouchMove(e){
        },
        onTouchEnd(e){
            let endTouch = e.changedTouches[0]
            let {clientX:x1, clientY:y1} = this.startTouch
            let {clientX:x2, clientY:y2} = endTouch

            let distance = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
            let deltaY = Math.abs(y2-y1)
            let rate = distance / deltaY
            if(rate > 2){
                if(x2>x1){
                    this.select(this.selectedIndex -1)
                }else{
                    this.select(this.selectedIndex + 1)
                }
            }
            this.$nextTick(()=>{
                this.playAutomatically()
            })
        },
        onMouseEnter(){
            this.pause()
        },
        onMouseLeave(){
            this.playAutomatically()
        },
        playAutomatically(){
            if(this.timerId){return}
            let run= ()=>{
                let index = this.names.indexOf(this.getSelected())
                let newIndex = index + 1;
                this.select(newIndex)
                this.timerId = setTimeout(run, 2000)
            }
            this.timerId = setTimeout(run, 2000)
        },
        pause(){
            window.clearTimeout(this.timerId)
            this.timerId = undefined
        },
        select(newIndex){
            this.lastSelectedIndex = this.selectedIndex
            if(newIndex === -1){newIndex = this.names.length - 1}
            if(newIndex === this.names.length){newIndex = 0}
            
            this.$emit('update:selected',this.names[newIndex])
        },
        getSelected(){
            let first = this.items[0]
            return this.selected || first.name
        },
        updateChildren(){
            let selected = this.getSelected()
            this.items.forEach((vm)=>{
                let reverse  = this.selectedIndex > this.lastSelectedIndex ? false :true
                if(this.timerId){
                    if(this.lastSelectedIndex === this.items.length -1 && this.selectedIndex === 0){
                        reverse = false
                    }
                    if(this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1){
                        reverse = true
                    }
                }
                vm.reverse = reverse
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
        .g-slides-window{
            overflow: hidden;
            .g-slides-wrapper{
                position: relative;
            }
        }
        .g-slides-dots{
            padding: 8px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                width: 20px;
                height: 20px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                background-color: #ddd;
                border-radius: 50%;
                margin: 0 8px;
                font-size: 12px;
                &:hover{
                    cursor: pointer;
                }
                &.active{
                    background-color: black;
                    color: white;
                    &:hover{
                        cursor: default;
                    }
                }
            }
            
        }
        
    }
</style>
