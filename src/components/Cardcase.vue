<script setup lang="ts">
import { CardBrand, BRAND_NAMES } from '@lib';
import { SCaption } from '@placetopay/spartan-vue';

defineProps<{
  name: typeof BRAND_NAMES[number];
  size: number;
}>();
</script>

<template>
  <div class="flex flex-col justify-center relative px-4">
    <CardBrand :name="name" :size="size" />
    <SCaption class="absolute bottom-0 right-1/2 translate-x-1/2" variant="info">
        {{ size }}px
    </SCaption>
  </div>
</template>
