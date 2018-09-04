
<template>
    <table>
        <tr>
            <th v-for="(nome, key) in cabecalho" :key="key">
                <a href="#" v-on:click="ordena(key)">{{nome}}</a>
            </th>
        </tr>
        <tr v-for="(linha, key) in ordenar" :key="key">
            <td v-for="(coluna, key2) in linha" :key="key2">
                {{coluna}}
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    props:[
        "cabecalho",
        "valores"
    ],
    data(){
        return {
            ord: -1,
            ordenados: this.valores.slice()
        }
    },
    methods:{
        ordena(k){
            if(this.ord == k)
                this.ord = -1;
            else
                this.ord=k;
        }
    },
    computed:{
        ordenar(){
            if(this.ord==-1)
                return this.valores;
    
             this.ordenados.sort( (a,b) =>
                a[this.ord] > b[this.ord]);
            return this.ordenados;
            ;
        }
    }
}
</script>

<style  scoped>

</style>
