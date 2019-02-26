<template>
    <div>
       <audio src="" id="music" hidden preload ></audio>
    </div>
</template>

<script>
    export default {
        //使用webSoket
        name: "testwebsocket",
        data(){
          return{
            webSocket:null
          }
        },
        methods:{
          webSocketInit() {//webSocket初始化，得判断浏览器是否支持WebSocket
            this.$data.webSocket= new WebSocket("ws://localhost:8899/websocket/sendkaoshiMessage/10");
            this.$data.webSocket.onopen=this.openWebSocket;
            this.$data.webSocket.onmessage=this.messageWebSocket;
            this.$data.webSocket.onclose=this.closeWebSocket;
            this.$data.webSocket.onerror=this.errorWebSocket;
          },
          openWebSocket(evt){//打开通道
            this.$data.webSocket.send("hello，我是前端!");
          },
          messageWebSocket(evt){//接收消息
            this.$notify({
              title: '考试提醒',
              message: '这是服务端消息---》'+evt.data,
              type: 'success',
              duration:1000
            });
          },
          closeWebSocket(evt){
            this.$notify({
              title: '提示',
              message: '关闭通道',
              duration:1000
            });
          },
          errorWebSocket(evt){
            alert("error")
          }
        },
        mounted(){
           //初始化WebSocket
           this.webSocketInit();
        },
        destroyed(){
           this.closeWebSocket();
        }
    }
</script>

<style scoped>

</style>
