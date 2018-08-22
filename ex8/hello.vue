
<template>
    <div>
        <input type="text" v-model="nome">
        <input type="text" v-model="sobrenome">
        <br>
        <div>{{nomeCompleto }}</div>
    </div>

</template>

<script>
export default {
    components:{
        
    },
    data() {
        return {
            nome: "",
            sobrenome: ""
        }
    },
    computed:{
         nomeCompleto(){
             return this.nome + " " + this.sobrenome;
         }
    }
}
</script>

<style  scoped>

</style>
