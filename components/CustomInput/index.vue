<template>
    <div>
      <label :for="id" class="block text-sm font-semibold leading-6">{{title}}</label>
      <div class="mt-2">
        <input :type="type" :name="id" :id="id" class="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 py-3 px-4" :placeholder="placeholder" />
      </div>
    </div>
</template>

<script setup>
defineProps({
    id: String,
    type: String,
    title: String,
    placeholder: String,
})
</script>