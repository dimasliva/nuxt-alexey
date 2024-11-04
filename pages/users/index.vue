<template>
    <div>
        <div :key="user.id" v-for="user in users">
            {{ user.address }}
        </div>
    </div>
</template>
<script setup lang="ts">
import type { ITypeUser } from '~/types/types';


const { data: users } = await useFetch<ITypeUser[]>("https://jsonplaceholder.typicode.com/users")

definePageMeta({
    layout: 'users-layout'
})
</script>
