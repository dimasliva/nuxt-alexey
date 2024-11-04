<template>
  <div class="card">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
    const props = defineProps<{text: string}>()

</script>

<style scoped>
    .card {
        border: 1px solid black;
        padding: 10px;
        margin: 10px 0;
    }

</style>