<script setup lang="ts">
import { toast } from 'vue-sonner';
import { ClipboardTextIcon } from "@placetopay/iconsax-vue/broken";

const { source, copy } = defineProps<{
  source: string;
  copy: string;
}>();

const copyToClipboard = () => {
  navigator.clipboard.writeText(copy);
  toast.success('Copied to clipboard');
};
</script>

<template>
  <div class="flex gap-2">
    <div
      class="w-full border bg-white dark:bg-[#24292e] border-gray-300 dark:border-gray-950 rounded-lg overflow-auto"
      v-html="source"
    />
    <button
        @click="copyToClipboard"
      class="border border-gray-300 dark:border-gray-950 rounded-lg aspect-square bg-white dark:bg-[#24292e] h-[58px] flex justify-center items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
    >
      <ClipboardTextIcon class="w-6 h-6" />
    </button>
  </div>
</template>
