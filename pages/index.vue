<template>
    <Toaster />

    <div class="animate__animated animate__fadeIn">

        <div class="h-screen flex flex-col">
            <div class="px-8 container flex flex-row justify-between items-center py-2">
                <a href="/" class="flex flex-row items-center gap-1">
                    <NuxtImg loading="lazy" src="/solana-icon.png" class="h-12 w-12" alt="" />
                    <div class="hidden sm:block font-bold text-xl">SolanaStakingValidator</div>
                </a>

                <div class="flex flex-row gap-4 sm:gap-6">
                    <a href="#about">{{ $t('navabout') }}</a>
                    <a href="#services">{{ $t('navservices') }}</a>
                    <a href="#contacts">{{ $t('navcontacts') }}</a>
                </div>
            </div>
            <div class="container flex-1 flex flex-col items-center justify-center space-y-4 text-center">
                <div class="space-y-2">
                    <div class="badge bg-muted">
                        {{ $t('badgetop') }}
                    </div>
                    <h1>
                        {{ $t('h1top') }}
                    </h1>
                    <p class="text-muted-foreground">
                        {{ $t('p1topfirst') }}, <span
                            class="bg-zinc-800 text-muted-foreground px-2 rounded-2xl">SolanaStakingValidator</span>,
                        {{ $t('p1topsecond') }}
                    </p>
                </div>
                <div class="space-x-2">
                    <a href="#about">
                        <Button size="sm">
                            {{ $t('buttonmore') }}
                        </Button>
                    </a>
                    <a href="#contacts">
                        <Button variant="outline" size="sm">
                            {{ $t('buttoncontuct') }}
                        </Button>
                    </a>
                </div>
            </div>
            <NuxtImg loading="lazy" src="/solana3.jpg" width="1270" height="300" alt="Hero"
                class="mx-auto  overflow-hidden rounded-t-lg object-cover" />
        </div>
        <a name="about"></a>
        <div class="bg-muted w-full py-12 lg:py-24 flex flex-col gap-6">
            <div class="container mb-10">
                <div class="space-y-2 text-center">
                    <div class="badge bg-black">
                        {{ $t('badgeabout') }}
                    </div>
                    <h1 class="">
                        {{ $t('h1about') }}
                    </h1>
                    <p class="">
                        {{ $t('p1about') }}
                    </p>
                </div>
            </div>
            <div class="px-4 sm:container sm:px-16">
                <div class="member__list">
                    <div class="member">
                        <Avatar class="avatar__img">
                            <LazyAvatarImage src="/avatar.jpg"></LazyAvatarImage>
                        </Avatar>
                        <div class="member__titles">
                            <div class="member__name">{{ $t('frontendname') }}</div>
                            <div class="member__job">{{ $t('frontendjob') }}</div>
                        </div>
                    </div>
                    <div class="member">
                        <Avatar class="avatar__img">
                            <LazyAvatarImage src="/backend.jpeg">
                            </LazyAvatarImage>
                        </Avatar>
                        <div class="member__titles">
                            <div class="member__name">{{ $t('backendname') }}</div>
                            <div class="member__job">{{ $t('backendjob') }}</div>
                        </div>
                    </div>
                    <div class="member">
                        <Avatar class="avatar__img">
                            <LazyAvatarImage src="/project.jpg">
                            </LazyAvatarImage>
                        </Avatar>
                        <div class="member__titles">
                            <div class="member__name">{{ $t('projectname') }}</div>
                            <div class="member__job">{{ $t('projectjob') }}</div>
                        </div>
                    </div>
                    <div class="member">
                        <Avatar class="avatar__img">
                            <LazyAvatarImage src="/founder.jpg">
                            </LazyAvatarImage>
                        </Avatar>
                        <div class="member__titles">
                            <div class="member__name">{{ $t('foundername') }}</div>
                            <div class="member__job">{{ $t('founderjob') }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a name="services"></a>
        <div class="bg-muted-foreground w-full py-12 lg:py-24 flex flex-col gap-6 text-black">
            <div class="badge bg-muted text-white mx-auto">
                {{ $t('badgeservices') }}
            </div>
            <div class="px-16 container grid sm:grid-cols-2 gap-8">
                <div class="flex flex-col justify-center items-center gap-4">
                    <h1 class="leading-tight text-center">{{ $t('h1services') }} <span
                            class="bg-zinc-800 text-muted-foreground px-2 rounded-2xl">solana</span> {{ $t('stackwithus') }}?
                    </h1>
                    <NuxtImg loading="lazy" style="width: 200px;" class="hidden sm:inline-block" src="/Solana_logo.png"
                        alt="" />
                </div>
                <div>
                    <div class="flex flex-col gap-4 divide-y divide-solid">
                        <div class="service">
                            <h2>
                                {{ $t('h2services1') }}
                            </h2>
                            <p class="pt-2 text-lg text-justify">{{ $t('p1services') }}</p>
                        </div>
                        <div class="service">
                            <h2>
                                {{ $t('h2services2') }}
                            </h2>
                            <p class="pt-2 text-lg text-justify">{{ $t('p2servicesfirst') }}
                            </p>
                        </div>
                        <div class="service">
                            <h2>
                                {{ $t('h2services3') }}
                            </h2>
                            <p class="pt-2 text-lg text-justify">{{ $t('p3services') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a name="contacts"></a>
        <div class="bg-muted w-full py-12 lg:py-24 flex flex-col gap-6">
            <div class="container">
                <div class="space-y-2 text-center">
                    <div class="badge bg-black">
                        {{ $t('badgecontacts') }}
                    </div>
                    <h1 class="">
                        {{ $t('h1contacts') }}
                    </h1>
                    <p class="">
                        {{ $t('p1contacts') }}
                    </p>
                    <div class="grid grid-cols-2 max-w-[700px] mx-auto gap-3">
                        <Input type="name" placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <Textarea class="col-span-2" placeholder="Type your message here..." />
                    </div>
                    <br>
                    <Button class="mx-auto" size="sm" @click="() => {
                        toast({
                            title: 'Mail was sended',
                        });
                    }">{{ $t('buttonsend') }}</Button>
                </div>
            </div>
        </div>
        <div class="divide-y divide-solid">
            <div class="px-8 container flex flex-col justify-between py-10">
                <div class="mx-auto w-full sm:w-1/2">
                    <div class="flex flex-row justify-center gap-3">
                        <div>ru</div>
                        <Switch :checked="currentlang" @update:checked="changelang(); currentlang = !currentlang" />
                        <div>en</div>
                    </div>
                    <h2 class=" py-6">{{ $t('h2FAQ') }}</h2>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{{ $t('question1') }}</AccordionTrigger>
                            <AccordionContent>
                                {{ $t('answer1') }}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{{ $t('question2') }}
                            </AccordionTrigger>
                            <AccordionContent>
                                {{ $t('answer2') }}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{{ $t('question3') }}
                            </AccordionTrigger>
                            <AccordionContent>
                                {{ $t('answer3') }}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{{ $t('question4') }}
                            </AccordionTrigger>
                            <AccordionContent>
                                {{ $t('answer4') }}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div class="px-8 container flex flex-row justify-between items-center py-2">
                <a href="/" class="flex flex-row items-center gap-1 font-bold text-xl">
                    <NuxtImg loading="lazy" src="/solana-icon.png" class="h-12 w-12" alt="" />
                    <div class="hidden sm:block">SolanaStakingValidator</div>
                </a>
                <div class="flex flex-row gap-4 sm:gap-6">

                    <a href="">Telegram</a>
                    <a href="">VK</a>
                    <a href="">WhatsUp</a>
                </div>
            </div>
            <div
                class="px-8 container flex flex-col sm:flex-row justify-between items-center py-4 text-secondary-foreground gap-4">
                <div class="sm:w-1/2">
                    <span class="font-bold">SolanaStakingValidator</span> {{ $t('footercompanytext') }}
                </div>
                <div class="flex flex-col gap-3">
                    <div class="flex flex-col divide-y divide-solid">
                        <a class="text-3xl" href="tel:+7800555535">+7800555535</a>
                        <div class="text-center">{{ $t('telephonemanager') }}</div>
                    </div>
                    <div class="flex flex-col divide-y divide-solid">
                        <a class="text-3xl" href="tel:+7800555535">+7800555535</a>
                        <div class="text-center">{{ $t('telephonegeneraldirector') }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "SolanaStakingValidator",
});
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'
import { Toaster } from '@/components/ui/toast'

const { locale, setLocale } = useI18n()

const { toast } = useToast()

const currentlang = ref(false);

setLocale('ru')

function changelang() {
    if (currentlang.value) {
        setLocale('ru')
    }
    else {
        setLocale('en')
    }
}

useHead({
    title: 'SolanaStakingValidator',
    meta: [
        { name: 'description', content: 'Staking solana with SolanaStakingValidator.' }
    ],
})


</script>

<style></style>
