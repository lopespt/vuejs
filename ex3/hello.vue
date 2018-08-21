
<template>
    <div>
        <ul>
            <li v-for="(item, idx) in lista" :key="idx">
                {{idx + 1}} - {{item.texto}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            lista:[
                {texto: "Texto 1"},
                {texto: "Texto 2"},
                {texto: "Texto 3"},
            ]
        }
    }
}
</script>

<style scoped>
    li{
        background: #aaa;
    }
</style>
