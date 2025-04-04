<script setup lang="ts">
import { ref, shallowRef } from "vue";
import sidebarItems from "@/components/Layout/Full/vertical-sidebar/sidebarItem";
// Icon Imports
import { Menu2Icon, BellRingingIcon } from "vue-tabler-icons";
const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);
</script>

<template>
  <v-navigation-drawer
    left
    v-model="sDrawer"
    app
    class="leftSidebar bg-containerBg"
    elevation="10"
    width="270"
  >
    <div class="pa-5 pl-4">
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
          <LayoutFullVerticalSidebarNavGroup
            :item="item"
            v-if="item.header"
            :key="item.title"
          />
          <!---If Has Child -->
          <LayoutFullVerticalSidebarNavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
          <!---Single Item-->
          <LayoutFullVerticalSidebarNavItem
            :item="item"
            v-else
            class="leftPadding"
          />
          <!---End Single Item-->
        </template>
        <!-- <Moreoption/> -->
      </v-list>
      <div class="pa-4">
        <v-sheet
          rounded="md"
          color="lightprimary"
          class="position-relative extrabox hide-menu mx-1 px-4 py-3"
        >
          <div class="d-flex align-center">
            <div>
              <h6 class="text-h6 text-10 mb-3">Check Pro Version</h6>
              <v-btn
                target="_blank"
                href="https://www.wrappixel.com/templates/spike-nuxtjs-admin-template/?ref=376#demos"
                color="primary"
                class="px-5"
                rounded="pill"
                flat
                >check</v-btn
              >
            </div>
            <div class="">
              <img
                src="/images/backgrounds/sidebar-buynow-bg.svg"
                height="100"
                width="100"
                class="px-2 ms-8"
              />
            </div>
          </div>
        </v-sheet>
      </div>
    </perfect-scrollbar>
  </v-navigation-drawer>
  <div class="container verticalLayout">
    <div class="maxWidth px-xl-0 px-sm-5 px-0">
      <v-app-bar elevation="0" height="70" class="top-header">
        <div class="d-flex align-center justify-space-between w-100">
          <div>
            <v-btn
              class="hidden-lg-and-up text-muted"
              @click="sDrawer = !sDrawer"
              icon
              variant="flat"
              size="small"
            >
              <Menu2Icon size="20" stroke-width="1.5" />
            </v-btn>
            <!-- Notification -->
            <LayoutFullVerticalHeaderNotificationDD />
          </div>
          <div>
            <!-- Upgrade button -->
            <v-btn
              class="mr-2 bg-primary rounded-pill"
              href="https://www.wrappixel.com/templates/spike-nuxtjs-admin-template/?ref=376#demos"
              target="_blank"
              >Check Pro Version</v-btn
            >
            <!-- User Profile -->
            <LayoutFullVerticalHeaderProfileDD />
          </div>
        </div>
      </v-app-bar>
    </div>
  </div>
</template>
