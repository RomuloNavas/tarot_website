<script setup lang="ts">

</script>

<template>
  <AppTopBar />
  <main flex flex-col center items-center justify-center class="text-center " h-full mt-10>
    <RouterView />
    <RomuloLogo class="dev_logo" />
  </main>
</template>

<style lang="scss">
main {
  position: relative;
}

.dev_logo {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
