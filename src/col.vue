<template>
    <div class="col" :class="colClass" :style="colStyle">
        <!-- 这个div是为了更好的理解，真正的代码不应该有这个div -->
        <div style="border:1px solid green;height:100%;">
            <slot></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'GuluCol',
    props:{
        span:{
            type:[Number, String]
        },
        offset:{
            type:[Number, String]
        },
        
    },
    data(){
        return{
            gutter:0,
            
        }
    },
    computed:{
        colStyle(){
            return{
                paddingLeft : this.gutter/2+'px', 
                paddingRight : this.gutter/2+'px'
            }
        },
        colClass(){
            return [
                this.span && `col-${this.span}`, 
                this.offset &&  `offset-${this.offset}`
            ]
        }
    }
}
</script>

<style lang="scss" scoped >
    .col {
            // padding: 0 10px;
            height: 50px;
            width: 100%;
            // background-color: gray;
            // border: 1px solid red;

            $class-prefix: col-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
</style>
