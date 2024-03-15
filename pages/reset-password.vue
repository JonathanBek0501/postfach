<template>
    <div class="h-screen grid grid-cols-2 p-4">
        <div class="h-full flex flex-col justify-between">
            <div class="p-3">
                <img src="/logo.svg" alt="logo">
            </div>
            <div class="max-w-[470px] mx-auto">
                <h2 class="text-4xl font-semibold mb-5">
                    Passwort <br>zurücksetzen
                </h2>
                <p class="font-light text-xl mb-9">
                    Setze dein Passwort zurück, <br>um dich wieder einloggen zu können.
                </p>
                <div class="bg-brand-blue-light rounded-lg p-6 mb-6">
                    <p class="text-center max-w-sm mx-auto">
                        Gebe deine E-Mail Adresse ein, um dein Passwort zurückzusetzen.
                    </p>
                </div>

                <CustomInput title="E-Mail Adresse" placeholder="testnutzer@gmail.com" type="email" id="email" />

                <ButtonPrimary title="Link zum Passwort-Zurücksetzen anfordern" class="w-full my-10" />

                <p class="text-center">
                    <span>
                        Du weist dein Passwort?
                    </span>
                    <nuxt-link to="/" class="font-semibold text-brand-blue">
                        Zurück zur Anmeldung.
                    </nuxt-link>
                </p>
            </div>
            <p class="text-xs font-light text-center pb-1">
                &copy; 2023 MegaChat. Alle Rechte vorbehalten.
            </p>
        </div>
        
        <div class="relative bg-bg-50 bg-cover bg-no-repeat rounded-md">
            <div class="text-center text-white pt-[20%]">
                <h2 class="text-4xl font-semibold mb-5">
                    Kundenservice, <br>plattformübergreifend.
                </h2>

                <p class="font-light text-xl">
                    Anmelden und loslegen. Plattformübergreifender <br>Kundenservice in einem Benutzerkonto.
                </p>
            </div>

            <div class="absolute bottom-0 w-full max-h-[630px] overflow-hidden">
                <img src="/illustration-reset-pasw.svg" alt="illustration" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>