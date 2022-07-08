<template>
  <AppTopBar />
  <main class="text-center  py-14">
    <RouterView />

    <RomuloLogo mt-20 pt-20 class="dev_logo" />
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
