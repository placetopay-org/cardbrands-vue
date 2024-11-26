<script setup lang="ts">
import {
  SComboboxBlock,
  SComboboxOption,
} from "@placetopay/spartan-vue";
import { BRAND_NAMES } from "@lib";
import { Toaster } from 'vue-sonner'
import { ref, watchEffect } from "vue";
import { codeToHtml } from "shiki";
import { Cardcase, CopyLine } from "./components";
import GithubSvg from "./assets/github.svg?component";
import SunSvg from "./assets/sun.svg?component";
import MoonSvg from "./assets/moon.svg?component";

const name = ref(BRAND_NAMES[0]);
const importHtml = ref("");
const importContent = `import { CardBrand } from '@placetopay/cardbrands-vue';`;
const useHtml = ref("");
const useContent = `<CardBrand name="${name.value}" />`;
const darkMode = ref(false);

watchEffect(() => {
  document.documentElement.classList.toggle("dark", darkMode.value);
});

watchEffect(async () => {
  const newImportHtml = await codeToHtml(
    importContent,
    {
      lang: "jsx",
      themes: {
        dark: "github-dark",
        light: "github-light",
      },
    },
  );

  const newUseHtml = await codeToHtml(useContent, {
    lang: "jsx",
    themes: {
      dark: "github-dark",
      light: "github-light",
    },
  });

  importHtml.value = newImportHtml;
  useHtml.value = newUseHtml;
});
</script>

<template>
  <Toaster />
  <div :class="['min-h-screen p-8', darkMode ? 'bg-dark' : 'bg-light']">
    <section class="absolute right-8 flex gap-2">
      <button
        class="h-7 w-7 sm:h-10 sm:w-10 bg-black dark:bg-white rounded-lg hover:scale-110 duration-200 flex items-center justify-center"
        @click="darkMode = !darkMode"
      >
        <SunSvg v-if="darkMode" class="text-white dark:text-gray-900" />
        <MoonSvg v-else class="text-white dark:text-gray-900" />
      </button>
      <a
        class="h-7 w-7 sm:h-10 sm:w-10 fill-black dark:fill-white hover:scale-110 duration-200"
        target="_blank"
        href="https://github.com/placetopay-org/cardbrands-vue"
      >
        <GithubSvg />
      </a>
    </section>

    <header>
      <h1 class="text-2xl text-center text-gray-900 dark:text-white">
        Cardbrands <span class="text-[#42b883] font-bold">Vue</span>
      </h1>
      <p class="text-center text-gray-500 dark:text-gray-400">
        A web sandbox for the @placetopay/cardbrands-vue package.
      </p>
      <p class="text-center text-gray-500 dark:text-gray-400">Version: 0.0.1</p>
    </header>

    <main
      class="border border-gray-300 dark:border-gray-950 rounded-lg mt-4 max-w-2xl mx-auto bg-white dark:bg-gray-700 shadow"
    >
      <section
        class="p-4 bg-gray-50 dark:bg-gray-800 w-full rounded-t-lg flex justify-center dark:[&_label]:text-white"
      >
        <div>
          <SComboboxBlock
            label="Name"
            v-model="name"
            search="auto"
            flipOptions
            :displayButtonText="
              (item: string) =>
                item && item.charAt(0).toUpperCase() + item.slice(1)
            "
          >
            <SComboboxOption v-for="item in BRAND_NAMES" :value="item"
              >🪪 {{ item }}</SComboboxOption
            >
          </SComboboxBlock>
        </div>
      </section>

      <section class="p-4 flex justify-center divide-x">
        <Cardcase :name="name" :size="24" />
        <Cardcase :name="name" :size="40" />
        <Cardcase :name="name" :size="80" />
        <Cardcase class="hidden sm:flex" :name="name" :size="120" />
        <Cardcase class="hidden md:flex" :name="name" :size="200" />
      </section>

      <section
        class="p-4 bg-gray-50 dark:bg-gray-800 w-full gap-4 rounded-b-lg flex flex-col"
      >
       <CopyLine :source="importHtml" :copy="importContent" />
       <CopyLine :source="useHtml" :copy="useContent" />
      </section>
    </main>
  </div>
</template>

<style>
.shiki {
  width: 100%;
  padding: 16px;
}
.bg-light {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d5db' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
.bg-dark {
  background-color: #111827;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}

html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
}
</style>
