<template>
    <div>User Id: {{ $route.params.some }}</div>
</template>

<script setup>
    const a = useRoute()
    console.log("a: ", a)
</script>

<style>

</style>