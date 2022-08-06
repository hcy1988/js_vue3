<template>
    <h2>{{title}}</h2>
    <p>{{desc}}</p>
    <button @click="btnClick">click it</button>
</template>

<script>
    export default {
    data(){
        return {
            title:'hahaha',
            desc:'neirong'
        }
    },
    methods:{
        btnClick(){
            console.log(this.title, this.desc)
        }
    }
}
</script>

<style scoped>
</style>