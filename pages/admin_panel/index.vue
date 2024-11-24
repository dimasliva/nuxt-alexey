<template>
    <div>
        <div>Admin page</div>
        <NuxtLink to="/">To Home</NuxtLink>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ["user-auth"]
})
</script>

<style></style>