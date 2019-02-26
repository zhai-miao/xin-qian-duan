<template>
   <div>
      <audio src="../../../static/tishiyin/yiliuyan.mp3" id="yiliuyan"></audio>
   </div>
</template>

<script>
    export default {
        name: "test2",
        data(){
          return{
             webSocket:null
          }
        },
        methods:{
          webSocketInit(){
             let userid=this.domain.userinfo.userid
             console.log("=====userid=====》"+userid)
             this.$data.webSocket=new WebSocket("ws://localhost:8888/webSocketTest/sendMessage/"+userid);
             this.$data.webSocket.onopen=this.webSocketOpen;
             this.$data.webSocket.onmessage=this.messageWebSocket;
          },
          webSocketOpen(evt){//发送发消息
             console.log("-========建立连接======")
            this.$data.webSocket.send("hello，我是前端!");
          },
          messageWebSocket(evt){//接收消息
             document.getElementById("yiliuyan").play();

            document.getElementById("yiliuyan").pause();

          },closeWebSocket(evt){
            //关闭通道提示音
            alert("=====关闭=====")

          }
        },
        mounted(){
          //初始化
          this.webSocketInit()
        }
    }
</script>

<style scoped>

</style>
