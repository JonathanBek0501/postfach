<template>
    <button type="button" class="rounded-lg border border-brand-blue bg-brand-blue transition-all ease-in-out hover:bg-blue-500 active:bg-brand-blue text-white font-semibold p-3">
        {{ title }}
    </button>
</template>

<script setup>
defineProps({
    title: String
})
</script>