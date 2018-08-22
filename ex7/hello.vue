
<template>
    <div>
        <TodoItem v-model="v"></TodoItem>
    </div>

</template>

<script>
import TodoItem from "./todo-item.vue";

export default {
    components:{
        TodoItem
    },
    data() {
        return {
            v:{
                a: "123",
                b: "txt"
            }
        }
    },
    methods:{
         
    }
}
</script>

<style  scoped>

</style>
