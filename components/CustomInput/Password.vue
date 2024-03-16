<template>
    <div>
        <div class="relative flex items-center justify-between">
            <label for="password" class="block text-sm font-semibold leading-6">Passwort</label>
            
            <div class="group cursor-pointer flex items-center gap-2">
                <IconInfo />

                <span class="text-sm">
                    Tipps für dein Passwort
                </span>

                <CardTooltip class="group-hover:block hidden absolute -right-56 top-1/2 -translate-y-1/2 z-10"/>
            </div>

        </div>
        <div class="relative mt-2">
            <input :type="visible ? 'text' : 'password'" name="password" id="password" class="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 py-3 px-4" placeholder="Passwort vergeben" />

            <button type="button" @click="toggleVisibility" class="absolute right-5 top-1/2 -translate-y-1/2">
                <template v-if="visible">
                    <IconEyeCrossed />
                </template>
                <template v-else>
                    <IconEye />
                </template>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const password = ref('');

const toggleVisibility = () => {
    visible.value = !visible.value;
}
</script>