<template>
    <button type="button" class="rounded-lg border border-brand-blue bg-transparent transition-all ease-in-out hover:bg-brand-blue active:bg-transparent hover:text-white active:text-brand-black font-semibold p-3">
        {{ title }}
    </button>
</template>

<script setup>
defineProps({
    title: String
})
</script>