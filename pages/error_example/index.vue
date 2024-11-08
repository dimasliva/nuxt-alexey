<template>
    <div>
        <div>error_example page</div>
        <div>
            <div>{{ count }}</div>
            <button @click="onCountClick">add count</button>
        </div>
    </div>
</template>

<script setup>
const count = ref(0)

function onCountClick() {
    count.value += 1
    if(count.value > 5) {
        throw createError({
            statusCode: 404,
            statusMessage: `Всё сломалось: ${count.value}`,
            data: {
                customErrorMessage: count.value
            },
            fatal: true,
        })
    }
    console.log('count.value', count.value)
}
definePageMeta({
    layout: 'home-layout'
})
</script>

<style>

</style>