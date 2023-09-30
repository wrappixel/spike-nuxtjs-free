<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logortldark from '/images/logos/logo-dark-rtl.svg';
</script>
<template>
    <div class="logo">
        <NuxtLink to="/">
            <img :src="logortldark" alt="home" />
        </NuxtLink>
    </div>
</template>
