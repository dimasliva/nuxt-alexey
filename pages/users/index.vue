<template>
    <div>
        <div v-for="user in users" :key="user.id">
            <div>{{ user.username }}</div>
            <div>{{ user.email }}</div>
        </div>
        user page
    </div>
</template>

<script setup>
// https://jsonplaceholder.typicode.com/users
const users = await $fetch('https://jsonplaceholder.typicode.com/users')
    console.log('users:', users)
</script>