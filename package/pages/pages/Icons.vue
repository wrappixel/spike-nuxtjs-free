<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Icons"> 
                <div class="pa-7 pt-0">
                    <iframe class="w-100 " src="https://icon-sets.iconify.design/solar/" frameborder="0" data-simplebar="" height="600"></iframe>
                </div>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
