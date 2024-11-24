<template>
    <div>
        <div>block page</div>

    </div>
</template>

<script setup>
const { todoList } = useTodo()
definePageMeta({
    middleware: ["block"]
})
</script>

<style></style>