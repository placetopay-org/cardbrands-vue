<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import * as assets from './assets';
import { BRAND_NAMES } from './constants';

defineProps<{
    name: typeof BRAND_NAMES[number];
    class?: string;
    size?: number;
}>();
</script>

<template>
    <component :is="assets[name]" :class="twMerge($props.class)" :height="size" :width="size" role="img" />
</template>
