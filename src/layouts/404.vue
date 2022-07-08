<script setup lang="ts">

</script>

<template>
  <AppTopBar />
  <main flex flex-col center items-center justify-center class="text-center " h-full>
    <RouterView />
  </main>
</template>

<style lang="scss">
main {
  position: relative;
  max-height: 1200px;
  max-width: 1600px;
}

.dev_logo {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
