
import Support from '~/components/Card/Support.vue';
<template>
    <div class="h-screen w-full p-4">
        <div class="relative flex items-center bg-bg-100 bg-no-repeat bg-cover h-full">
            <div class="max-w-xl mx-auto w-full">
                <h2 class="text-3xl text-white text-center">
                    Erstelle jetzt <span class="font-semibold">deinen Account.</span>
                </h2>

                <div class="space-y-3 my-10">
                    <div class="flex items-center justify-center gap-2.5 px-12 sm:px-0">
                        <div class="size-6 bg-white rounded-full shrink-0"></div>
                        <div class="h-0.5 w-full sm:w-28 bg-white/50"></div>
                        <div class="size-6 bg-white rounded-full shrink-0"></div>
                        <div class="h-0.5 w-full sm:w-28 bg-white/50"></div>
                        <div class="size-6 bg-white rounded-full shrink-0"></div>
                    </div>
                    <div class="grid grid-cols-3 justify-items-center max-w-[470px] mx-auto">
                        <div class="flex flex-col items-center text-center">
                            <span class="text-xs font-light text-white/50">
                                Schritt 1
                            </span>
                            <span class="text-sm font-semibold text-white">
                                Nutzer
                            </span>
                        </div>
                        <div class="flex flex-col items-center text-center">
                            <span class="text-xs font-light text-white/50">
                                Schritt 2
                            </span>
                            <span class="text-sm font-semibold text-white">
                                Unternehmen
                            </span>
                        </div>
                        <div class="flex flex-col items-center text-center">
                            <span class="text-xs font-light text-white/50">
                                Schritt 3
                            </span>
                            <span class="text-sm font-semibold text-white">
                                Bestätigen
                            </span>
                        </div>
                    </div>
                </div>

                <div class="rounded bg-brand-gray/90 space-y-4 sm:space-y-8 py-8 px-4 sm:p-8">
                    <div class="grid grid-cols-2 gap-x-2.5 gap-y-4 sm:gap-y-8">
                        <CustomInput type="email" id="email" title="E-Mail Adresse*" placeholder="test@montary-ag" />
                        <CustomInput type="text" id="tel" title="Telefonnummer*" placeholder="012345678" />
                        <CustomInput type="text" id="vorname" title="Vorname" placeholder="Vorname" />
                        <CustomInput type="text" id="nachname" title="Nachname" placeholder="Nachname" />
                    </div>

                    <CustomInputPassword />

                    <div class="pt-3">
                        <ButtonPrimary title="Nächster Schritt" class="w-full" />
                    </div>
                </div>
            </div>

            <div class="absolute top-1/2 -translate-y-1/2 right-8">
                <CardSupport />
            </div>
        </div>
    </div>
</template>