<template>
  <div id="app">
    <div id="app" style="padding:100px;">
        {{selected}}
        <h1>cascader</h1>
        <g-cascader
            height="200px" 
            :source="source"
            :selected.sync="selected"></g-cascader>
        <h2>kjdskfjks</h2>
    </div>
    <!-- <div id="app6" style="padding:100px; display:none">
        <g-button>默认按钮</g-button>
        <g-collapse :selected.sync="selectTab ">
            <g-collapseitem title="标题1 " name="1 ">内容1</g-collapseitem>
            <g-collapseitem title="标题2 " name="2 ">内容2</g-collapseitem>
            <g-collapseitem title="标题3 " name="3 ">内容3</g-collapseitem>
        </g-collapse>
        {{selectTab}}
    </div>
    <div id="app5 " style="padding: 100px; display: none ">
        <div style="overflow:hidden ">
            <div style="margin-bottom:100px; ">
                <g-popover position="top ">
                    <template slot="content ">
                        <div>popover内容</div>
                    </template>
                    <g-button>点我</g-button>
                </g-popover>
                <g-popover position="bottom ">
                    <template slot="content ">
                        <div>popover内容</div>
                    </template>
                    <g-button>点我</g-button>
                </g-popover>
                <g-popover position="left ">
                    <template slot="content ">
                        <div>popover内容</div>
                    </template>
                    <g-button>点我</g-button>
                </g-popover>
                <g-popover position="right ">
                    <template slot="content ">
                        <div>popover内容</div>
                    </template>
                    <g-button>点我</g-button>
                </g-popover>
            </div>
            <div>
                <g-popover position="top " trigger="hover ">
                    <template slot="content ">
                        <div>popover内容</div>
                    </template>
                    <g-button>点我</g-button>
                </g-popover>
                <g-popover position="bottom " trigger="hover ">
                    <template slot="content ">
                        <div>popover内容</div>
                    </template>
                    <g-button>点我</g-button>
                </g-popover>
                <g-popover position="left " trigger="hover ">
                    <template slot="content ">
                        <div>popover内容</div>
                    </template>
                    <g-button>点我</g-button>
                </g-popover>
                <g-popover position="right " trigger="hover ">
                    <template slot="content ">
                        <div>popover内容</div>
                    </template>
                    <g-button>点我</g-button>
                </g-popover>
            </div>

        </div>
    </div>
    <div id="app4 " style="display: none ">
        <g-tabs :selected.sync="selectedTab ">
            <g-tabs-head>
                <template slot="actions ">
                    <button>我是按钮</button>
                </template>
                <g-tabs-item name="woman " disabled>
                    <g-icon name="settings "></g-icon>
                    美女
                </g-tabs-item>
                <g-tabs-item name="finance ">财经</g-tabs-item>
                <g-tabs-item name="sports ">体育</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="woman ">
                    美女相关资讯
                </g-tabs-pane>
                <g-tabs-pane name="finance ">
                    财经相关资讯
                </g-tabs-pane>
                <g-tabs-pane name="sports ">
                    体育相关资讯
                </g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
    <div id="app3 " style="display: none ">
        <button @click="showToast1 ">top</button>
        <button @click="showToast2 ">middle</button>
        <button @click="showToast3 ">bottom</button>
    </div>
    <div id="app2 " style="display: none ">
        <g-layout style="height: 100vh; ">
            <g-sider class="demo ">sider</g-sider>
            <g-layout class="demo ">
                <g-header class="demo ">header</g-header>
                <g-content class="demo ">content</g-content>
                <g-footer class="demo ">footer</g-footer>
            </g-layout>

        </g-layout>
    </div>
    <div id="app1 " style="display: none ">
        <div class="box " style="border:1px solid black; ">
            <g-row gutter="20 ">
                <g-col span="24 " :ipad="{span:8} " :narrow-pc="{span:4} " :pc="{span:2} " :wide-pc="{span:1} ">1</g-col>
                <g-col span="24 " :ipad="{span:16} " :narrow-pc="{span:20} " :pc="{span:22} " :wide-pc="{span:23} ">2</g-col>
            </g-row>

            <g-row gutter="20 ">
                <g-col>
                    <g-row align="left ">
                        <g-col>1</g-col>
                        <g-col>2</g-col>
                        <g-col>3</g-col>
                    </g-row>
                </g-col>
                <g-col>
                    <g-row align="right ">
                        <g-col>1</g-col>
                        <g-col>2</g-col>
                        <g-col>3</g-col>
                        <g-col>4</g-col>
                        <g-col>5</g-col>
                    </g-row>
                </g-col>
            </g-row>
            <g-row gutter="20 ">
                <g-col>1</g-col>
                <g-col>2</g-col>
                <g-col>3</g-col>
                <g-col>4</g-col>
            </g-row>
            <g-row gutter="20 ">
                <g-col span='2'>1</g-col>
                <g-col span='22'>2</g-col>
            </g-row>
            <g-row>
                <g-col span='2'>1</g-col>
                <g-col span='20' offset='2'>2</g-col>
            </g-row>
        </div>
        <div class="box ">
            <g-input value="张三 " disabled></g-input>
            <g-input value="李四 " :readonly="true "></g-input>
            <g-input value="王五 "></g-input>
            <g-input value="麻子 " @input="myInput " v-model="message "></g-input>
            {{message}}
        </div>
        <div class="box ">
            <g-input value="麻子 " @change="inputChange " error="用户名为英文 "></g-input>
        </div>
        <div class="box ">
            <g-button :loading="loading1 " @click="loading1=! loading1 ">按钮</g-button>
            <g-button icon="settings " :loading="loading2 " @click="loading2=! loading2 ">按钮</g-button>
            <g-button icon="settings " icon-position="right " :loading="loading3 " @click="loading3=! loading3 "> 按钮</g-button>
            <g-icon name="download "></g-icon>
            <g-button-group>
                <g-button icon="left ">上一页</g-button>
                <g-button>更多</g-button>
                <g-button icon-position="right " icon="right ">下一页</g-button>
            </g-button-group>
            <div id="test "></div>
        </div>

    </div> -->
  </div>
</template>

<script>
import Cascader from './cascader.vue'

export default {
  name: 'app',
  components: {
    'g-cascader':Cascader
  },
  data(){
    return({
            loading1: false,
            loading2: false,
            loading3: false,
            message: 'hi',
            selectedTab: 'sports',
            selectTab: ['2'],
            selected:[],
            source: [{
                    name: '浙江',
                    children: [{
                            name: '杭州',
                            children: [
                                { name: '上城' },
                                { name: '下城' },
                                { name: '江干' }
                            ]
                        },
                        {
                            name: '嘉兴',
                            children: [
                                { name: '南湖' },
                                { name: '秀洲' },
                                { name: '嘉善' }
                            ]
                        }
                    ]
                },
                {
                    name: '福建',
                    children: [{
                        name: '福州',
                        children: [{
                            name: '鼓楼',
                            name: '台江',
                            name: '仓山'
                        }]
                    }]
                }
            ]

        })
  },
    methods: {
        inputChange(e, arg) {
            console.log(e, arg)
        },
        myInput(e, arg) {
            console.log(e, arg)
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast('卡萨积分卡洛斯卡萨斯卡萨积分卡洛斯卡萨积分卡洛斯卡萨积分卡洛斯', {
                enableHtml: false,
                position: position
                    // closeButton: {
                    //     text: '我知道了',
                    //     callback: () => {
                    //         console.log('他告诉我他已经知道了')
                    //     }
                    // }
            })
        }
    }
}
</script>

<style lang="scss">
@import './var.scss';
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
         :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
        
        #app {
            /* margin: 20px; */
        }
        
        body {
            font-size: var(--font-size);
        }
        
        .box {
            margin: 20px;
        }
        
        .demo {
            border: 1px solid #666;
            min-height: 100px;
        }
</style>
