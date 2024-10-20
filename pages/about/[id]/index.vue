<template>
    <div v-for="el in result" :key="el.id">
        text-id: {{el.id}}
        text-title: {{el.title}}
    </div>
</template>
<script setup>
// https://jsonplaceholder.typicode.com/posts
// 



const result = await $fetch('https://jsonplaceholder.typicode.com/posts')

console.log('result:', result)
</script>