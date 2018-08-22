
<template>
    <Tabela v-bind:valores="this.matriz" v-bind:cabecalho="this.cabecalho"></Tabela>
</template>

<script>
import Tabela from "./tabela.vue"

export default {
    components:{
      Tabela  
    },
    data(){
        return {
            cabecalho: ["a","b","c"],
        }
    },
    computed:{
        matriz(){
            var r = [];
            for(var i=0; i<10; i++){
                var temp = []
                for(var j=0; j<3; j++){
                    temp.push((j*i*3+i+j) % (8) );
                }
                r.push(temp)
            }
            return r;
        }
    }
}
</script>

<style  scoped>

</style>
