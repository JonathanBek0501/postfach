<template>
    <div class="relative bg-brand-gray rounded pt-9 p-5">
        <div class="absolute -top-7 left-1/2 -translate-x-1/2 size-14 rounded-full">
            <img src="/support-agent.png" alt="agent" class="w-full h-full object-cover">
        </div>

        <h3 class="font-semibold">
            Support erhalten
        </h3>

        <div class="space-y-2.5 mt-4">
            <a href="#" class="flex items-center gap-2.5">
                <IconIncomingCall />
                <div>
                    <span class="text-xs font-medium block">
                        Anruf erhalten
                    </span>
                    <span class="text-xxs font-light block">
                        Telefonat vereinbaren
                    </span>
                </div>
            </a>
            <a href="#" class="flex items-center gap-2.5">
                <IconHeadset />
                <div>
                    <span class="text-xs font-medium block">
                        Video-Chat
                    </span>
                    <span class="text-xxs font-light block">
                        Termin vereinbaren
                    </span>
                </div>
            </a>
            <a href="#" class="flex items-center gap-2.5">
                <IconChat />
                <div>
                    <span class="text-xs font-medium block">
                        Live-Chat
                    </span>
                    <span class="text-xxs font-light block">
                        Schreib mit uns
                    </span>
                </div>
            </a>
        </div>
    </div>
</template>