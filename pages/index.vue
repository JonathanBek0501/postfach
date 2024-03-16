<template>
    <div class="h-screen w-full p-4">
        <div class="relative flex items-center bg-bg-100 bg-no-repeat bg-cover h-full">
            <div class="max-w-xl mx-auto w-full">
                <h2 v-if="activeTab === 1" class="text-3xl text-white text-center">
                    Erstelle jetzt <span class="font-semibold">deinen Account.</span>
                </h2>
                <h2 v-if="activeTab === 2" class="text-3xl text-white text-center">
                    Erstelle jetzt <span class="font-semibold">deinen Account.</span>
                </h2>
                <h2 v-if="activeTab === 3" class="text-3xl text-white text-center">
                    Ein paar Details <span class="font-semibold">zum Unternehmen.</span>
                </h2>
                <h2 v-if="activeTab === 4" class="text-3xl text-white text-center">
                    <span class="font-semibold">... fast geschafft.</span>
                </h2>

                <div class="space-y-3 my-10">
                    <div class="flex items-center justify-center gap-2.5 px-12 sm:px-0">
                        <div :class="activeTab !== 1 ? 'bg-brand-green' : 'bg-white'" class="size-6 rounded-full shrink-0 flex items-center justify-center">
                            <img v-if="activeTab !== 1" src="/tick.svg" alt="tick" />
                        </div>
                        <div class="h-0.5 w-full sm:w-28 bg-white"></div>
                        <div
                        :class="{
                            'bg-white': activeTab === 2,
                            'bg-white/50': activeTab === 1,
                            'bg-brand-green': activeTab !== 1 && activeTab !== 2
                        }"
                        class="size-6 rounded-full shrink-0 flex items-center justify-center">
                            <img v-if="activeTab !== 1 && activeTab !== 2" src="/tick.svg" alt="tick" />
                        </div>
                        <div :class="activeTab === 3 && activeTab === 4 ? 'bg-white' : 'bg-white/50'" class="h-0.5 w-full sm:w-28">
                        </div>
                        <div
                        :class="{
                            'bg-white': activeTab === 3,
                            'bg-white/50': activeTab === 1 || activeTab === 2,
                            'bg-brand-green': activeTab === 4
                        }"
                        class="size-6 rounded-full shrink-0 flex items-center justify-center">
                            <img v-if="activeTab === 4" src="/tick.svg" alt="tick" />
                        </div>
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

                <div class="rounded bg-brand-gray/90 py-8 px-4 sm:p-8">
                    <div v-if="activeTab === 1" class="space-y-4 sm:space-y-8">
                        <div class="grid grid-cols-2 gap-x-2.5 gap-y-4 sm:gap-y-8">
                            <CustomInput type="email" id="email" title="E-Mail Adresse*" placeholder="test@montary-ag" />
                            <CustomInput type="text" id="tel" title="Telefonnummer*" placeholder="012345678" />
                            <CustomInput type="text" id="vorname" title="Vorname" placeholder="Vorname" />
                            <CustomInput type="text" id="nachname" title="Nachname" placeholder="Nachname" />
                        </div>
    
                        <CustomInputPassword />
    
                        <div class="pt-3">
                            <ButtonPrimary @click="activeTab = 2" title="Nächster Schritt" class="w-full" />
                        </div>
                    </div>

                    <div v-if="activeTab === 2" class="space-y-4 sm:space-y-8">
                        <CustomInput type="text" id="tel" title="Unternehmensname*" placeholder="Montary Agency GmbH" />

                        <DropdownCompanyForm />

                        <div class="grid grid-cols-2 gap-2.5">
                            <ButtonSecondary @click="activeTab = 1" title="Schritt zurück" />
                            <ButtonPrimary @click="activeTab = 3" title="Jetzt registrieren" />
                        </div>
                    </div>

                    <div v-if="activeTab === 3" class="flex flex-col items-center text-center p-5 pb-0">
                        <IconEmailSent />

                        <h2 class="text-3xl font-semibold pt-8 pb-3.5">
                            E-Mail Bestätigung
                        </h2>

                        <p class="pb-14">
                            Wir haben eine E-Mail an <a @click.prevent="activeTab = 4" href="mailto:test@gmail.com" class="font-semibold text-brand-blue">test@gmail.com</a> zur Bestätigung deines Accounts geschickt. Folge nach Erhalt der E-Mail dem Link um deine Registrierung abzuschließen.
                        </p>

                        <p class="max-w-[364px] text-xs border-t border-[#0A0C0E]/25 pt-6">
                            Du hast keine E-Mail bekommen? <a href="" class="text-brand-blue font-semibold">E-Mail erneut senden.</a>
                        </p>
                    </div>

                    <div v-if="activeTab === 4" class="flex flex-col items-center text-center pt-7">
                        <IconMegaChat />

                        <h2 class="text-3xl font-semibold pt-8 pb-3.5">
                            Herzlichen Glückwunsch!
                        </h2>

                        <p class="max-w-md px-4 pb-11">
                            Dein Account wurde erfolgreich per E-Mail bestätigt. Du kannst dich jetzt ganz einfach anmelden und alle Vorteile von MegaChat genießen.
                        </p>

                        <ButtonPrimary title="Anmelden" class="w-full" />
                    </div>
                </div>
            </div>

            <div class="hidden lg:block absolute top-1/2 -translate-y-1/2 right-8">
                <CardSupport />
            </div>
        </div>
    </div>
</template>

<script setup>
const activeTab = ref(1)
</script>