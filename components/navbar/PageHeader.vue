<template>
    <header class="navbar">
        <NuxtLink class="link" to="/">Home page</NuxtLink>
        <NuxtLink class="link" to="/users">Users page</NuxtLink>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    padding: 10px;
    background: #111;
}
.link {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}
</style>