
<template>
    <div>
        <input type="text" v-model="texto"/><button v-on:click="adicionaTarefa">{{txtBotao}}</button>

          
            <TodoItem v-on:deletar="() => deleta(idx)" v-for="(item, idx) in lista" v-bind:key="idx" v-bind:texto="item.texto" v-bind:num="idx+1"></TodoItem>
        
    </div>

</template>

<script>
import TodoItem from "./todo-item.vue";

export default {
    components:{
        TodoItem
    },
    data() {
        return {
            texto: "",
            lista: JSON.parse(localStorage["lista"] || "[]") ,
            mensagem: "olá!",
            txtBotao: "Adicionar Tarefa",
            cor: "#efefef"
        }
    },
    methods:{
        adicionaTarefa() {
            this.lista.push({texto: this.texto});
            localStorage["lista"] = JSON.stringify(this.lista);
            this.texto="";
        },
        deleta(idx){
            this.lista.splice(idx,1);
            localStorage["lista"] = JSON.stringify(this.lista);
        }
    }
}
</script>

<style  scoped>

</style>
