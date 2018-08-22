<template>
    <div>
        <div>value.a = {{value.a}}</div>
        <div>value.b = {{value.b}}</div>
        <input type="text" v-model="value.a" v-on:input="dispara" />
        <input type="text" v-model="value.b" v-on:input="dispara" />
    </div>
</template>

<script>
export default {
    props:[
        "value"
    ],
    methods: {
        dispara(ev){
            this.$emit("input", this.value);
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
