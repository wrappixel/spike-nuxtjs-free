<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import sidebarItems from '@/components/Layout/Full/vertical-sidebar/sidebarItem';
// Icon Imports
import { Menu2Icon, BellRingingIcon } from 'vue-tabler-icons';
const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);

</script>

<template>
    <v-navigation-drawer left v-model="sDrawer" app class="leftSidebar ml-sm-5 mt-sm-5 bg-containerBg" elevation="10"
        width="270">
        <div class="pa-5 pl-4 ">
            <LayoutFullLogoDark />
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <perfect-scrollbar class="scrollnavbar bg-containerBg overflow-y-hidden">
            <v-list class="py-4 px-4 bg-containerBg">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu">
                    <!---Item Sub Header -->
                    <LayoutFullVerticalSidebarNavGroup :item="item" v-if="item.header" :key="item.title" />
                    <!---Single Item-->
                    <LayoutFullVerticalSidebarNavItem :item="item" v-else class="leftPadding" />
                    <!---End Single Item-->
                </template>
                <!-- <Moreoption/> -->
            </v-list>
            <div class="py-0 px-6">
                <v-btn class="mr-2 bg-primary rounded-pill" size="large"
                    href="https://www.wrappixel.com/templates/spike-nuxtjs-admin-template/?ref=33" block target="_blank">Upgrade to
                    Pro</v-btn>
            </div>  
        </perfect-scrollbar>
    </v-navigation-drawer>
    <div class="container verticalLayout">
        <div class="maxWidth">
            <v-app-bar elevation="0" height="70">
                <div class="d-flex align-center justify-space-between w-100">
                    <div>
                        <v-btn class="hidden-lg-and-up text-muted" @click="sDrawer = !sDrawer" icon
                            variant="flat" size="small">
                            <Menu2Icon size="20" stroke-width="1.5" />
                        </v-btn>
                        <!-- Notification -->
                        <LayoutFullVerticalHeaderNotificationDD />
                    </div>
                    <div>
                        <!-- Upgrade button -->
                        <v-btn class="mr-2 bg-primary rounded-pill"
                            href="https://www.wrappixel.com/templates/spike-nuxtjs-admin-template/?ref=33"
                            target="_blank">Upgrade to Pro</v-btn>
                        <!-- User Profile -->
                        <LayoutFullVerticalHeaderProfileDD />
                    </div>
                </div>
            </v-app-bar>
        </div>
    </div>
</template>
