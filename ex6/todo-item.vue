<template>
    <div v-bind:class="[num % 2 ==0 ? 'par' : 'impar']">{{num}} - {{texto}}<button v-on:click="deletar">deletar</button></div>
</template>

<script>
export default {
    props:[
        "texto",
        "num"
    ],
    methods: {
        deletar(){
            this.$emit("deletar");
        }
    },
}
</script>

<style>
    .par{
        background: #eee
    }
    .impar{
        background: #fff
    }
</style>
