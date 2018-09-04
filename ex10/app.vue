
<template>
    <div>
        <h1>Chat muito loko!</h1>
        <div>
            <input type="text" @keypress.enter='enviaMsg' v-model="msg_atual"/>

            <mensagem v-for="(msg, idx) in messages" :key=idx v-bind:valor=msg v-bind:ehminha="msg.minha">
            </mensagem>

        </div>
    </div>
</template>

<script>
import mensagem from './mensagem.vue';
export default {
    mounted(){
        this.ws = new WebSocket('ws://localhost:8000')
        this.ws.addEventListener("message", this.chegouMsg);
    },
    components:{
          mensagem
    },
    methods:{
        chegouMsg(msg){
            console.log(msg)
            this.messages.push(msg.data)
        },
        enviaMsg(){
            this.ws.send(this.msg_atual);
            this.messages.push(this.msg_atual)
            this.msg_atual = '';
        }
    },
    data(){
        return {
            messages:[],
            msg_atual: ''
        }
    },
    
}
</script>

<style  scoped>

</style>
