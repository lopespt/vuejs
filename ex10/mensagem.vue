<template>
    <div v-bind:class="{'ehMinha': ehminha}" >{{valor}}</div>
</template>

<script>
export default {
    props:[
        'valor',
        'ehminha'
    ]
}
</script>

<style>
.ehMinha{
    background: yellow;
}
</style>
