<template>
   <div>
     <el-button @click="huoqu">测试</el-button>
     <el-button @click="shezhi">设置</el-button>
     <el-button @click="tijiao">提交</el-button>
       <el-input style="width:60%" v-model="myname" placeholder="请输入内容"></el-input>

   </div>
</template>

<script>

    export default {
        name: "testceshi",
        data(){
          return{
            myname:"ogdfhgdjkghdfjkhgkjdf",
          }
        },
        methods:{
          huoqu(){
             alert(this.$data.myname);
          },
          shezhi(){
             this.$data.myname=this.$data.myname+"pppp"
          },
          tijiao(){
              let qs=require("qs")
              let canshu={}
              canshu.myname=this.$data.myname
              this.$axios.post(this.domain.serverpath+'kaoshi/getScoreRangData',qs.stringify(canshu)).then((response)=>{

              })
          }
        },
        beforeCreate(){

        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>
