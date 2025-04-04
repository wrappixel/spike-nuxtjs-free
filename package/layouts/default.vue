<script setup lang="ts">
import { ref, onMounted } from "vue";
import Topbar from "~/components/Layout/Topbar.vue";
const title = ref("spikeadmin Nuxt 3 - Vuetify 3 - vite - Typescript Based Free Dashboard");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript based Free Admin Dashboard Template`
      : "spikeadmin Nuxt 3 - Vuetify 3 - vite - Typescript Based Free Dashboard";
  },
});
</script>

<template>
    <v-locale-provider >
        <Topbar/>
        <v-app>
     
            <v-main>
                <LayoutMain/>
                <v-container fluid class="page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl">
                    <div class="maxWidth">
                        <NuxtPage  />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
