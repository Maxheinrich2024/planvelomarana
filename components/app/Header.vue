<template>
  <Popover id="navigation-header" class="relative z-50 bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-3 sm:py-6 md:justify-start md:space-x-10">
        <!-- Logo -->
        <div class="flex justify-start items-center lg:w-0 lg:flex-1">
          <NuxtLink to="/" class="flex space-x-2">
            <span class="sr-only">Marana Golo</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="/logo-marana-golo.png" 
              alt="Logo Marana Golo"
            >
          </NuxtLink>
        </div>

        <!-- Menu principal -->
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <!-- Menu Carte Interactive -->
          <NuxtLink
            to="/carte-interactive"
            class="text-base font-medium text-gray-500 hover:text-lvv-blue-600"
          >
            Carte interactive
          </NuxtLink>
        </PopoverGroup>

  
      </div>
    </div>
  </Popover>
</template>

<script setup>
import { Popover, PopoverGroup } from '@headlessui/vue';
</script>
