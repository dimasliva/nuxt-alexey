<template>
    <div>
        <div>Home page</div>
        <div>
            <button @click="getUser">Get user</button>
            <button @click="getBlog">Get blog</button>
        </div>
        <NuxtLink to="/admin_panel">To Admin</NuxtLink>
        <NuxtLink to="/block">To Block</NuxtLink>
    </div>
</template>

<script setup>

function getUser() {
    console.log('111')
    setCookie('access_token', "iodjqwiodjoiwqjdoiqwj983298hjt23")
}
function getBlog() {
    console.log('111')

    setCookie('blog_token', "glob")
}
</script>

<style></style>