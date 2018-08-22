import Vue from "vue/dist/vue.esm"
import Hello from "./hello.vue"

var app = new Vue({
    el: "#app",
    components:{
        Hello
    },
    template: "<Hello></Hello>"
});