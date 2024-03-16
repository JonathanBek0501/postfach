<template>
    <div class="space-y-3 rounded border border-black/25 bg-brand-gray text-xs w-fit p-3">
        <p class="max-w-[170px]">
            <strong>Beachte folgende Vorgaben</strong> um ein sicheres Passwort zu erstellen:
        </p>

        <ul class="space-y-2.5">
            <li v-for="(list, index) in lists" :key="index" class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                    <div class="w-5">
                        <component :is="list.icon" class="mx-auto" />
                    </div>
    
                    <span class="font-light">
                        {{ list.title }}
                    </span>
                </div>

                <div>
                    <IconX />
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const lists = ref([
    {
        icon: resolveComponent('IconFileStorage'),
        title: 'Min. acht Zeichen',
    },
    {
        icon: resolveComponent('IconNumber'),
        title: 'Min. eine Zahl',
    },
    {
        icon: resolveComponent('IconSymbol'),
        title: 'Min. ein Sonderzeichen',
    },
    {
        icon: resolveComponent('IconAlphabet'),
        title: 'Groß- & Kleinbuchstaben',
    }
])
</script>