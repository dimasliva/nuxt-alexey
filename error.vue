<template>
    <div v-if="error">
        <h1>Custorm error</h1>
        <div>{{ error.statusCode }}</div>
        <div>{{ error.statusMessage }}</div>
        <div v-if="error.data">
            <div v-if="error.data">{{ error.data.customErrorMessage }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    // import type { NuxtPayload } from '#app';
    import type { NuxtError } from '#app';

    // const error: Ref<NuxtPayload["error"]> = useError() 
    interface ExtendNuxtError extends NuxtError {
        data?: {customErrorMessage: number};
    }
    const props = defineProps<{error: ExtendNuxtError}>()

</script>

<style>

</style>