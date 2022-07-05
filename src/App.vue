<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Инна Таро',
  meta: [
    { name: 'description', content: 'Меня зовут Инна. Я - практикующий Таролог. Для меня Таро - это не гадание "на будущее", а инструмент для анализа ситуации и создания событий.' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#17141d' : '#17141d'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>

