<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logodark from '/images/logos/logo-dark.svg';
</script>
<template>
    <div class="logo">
        <NuxtLink to="/">
            <img :src="logodark" alt="home" />
        </NuxtLink>
    </div>
</template>
