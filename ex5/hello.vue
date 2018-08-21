
<template>
    <div>
        <input type="text" v-model="texto"/>
        <ul>
            <li v-for="(item, idx) in lista" :key="idx">
                {{idx + 1}} - {{item.texto}}
            </li>
        </ul>
        <button v-on:click="adicionaTarefa">{{txtBotao}}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            texto: "",
            lista: JSON.parse(localStorage["lista"] || []) ,
            mensagem: "olá!",
            txtBotao: "Clique aqui"
        }
    },
    methods:{
        adicionaTarefa() {
            this.lista.push({texto: this.texto});
            localStorage["lista"] = JSON.stringify(this.lista)
        },
    }
}
</script>

<style scoped>
    li{
        background: #aaa;
    }
</style>
