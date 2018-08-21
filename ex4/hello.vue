
<template>
    <div>
        <ul>
            <li v-for="(item, idx) in lista" :key="idx">
                {{idx + 1}} - {{item.texto}}
            </li>
        </ul>
        <button v-on:click="mostraAlerta">{{txtBotao}}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lista:[
                {texto: "Texto 1"},
                {texto: "Texto 2"},
                {texto: "Texto 3"},
            ],
            mensagem: "olá!",
            txtBotao: "Clique aqui"
        }
    },
    methods:{
        mostraAlerta() {
            alert(this.mensagem);
            if(this.mensagem == "olá!"){
                this.mensagem = "tchau!";
                this.txtBotao = "Clique novamente";
            }
        },
    }
}
</script>

<style scoped>
    li{
        background: #aaa;
    }
</style>
