<template>
    <button type="button" class="rounded-lg bg-brand-blue hover:bg-blue-500 text-white font-semibold p-3">
        {{ title }}
    </button>
</template>

<script setup>
defineProps({
    title: String
})
</script>