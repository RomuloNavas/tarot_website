<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <SmokeLetters :msg="t('main_title-inna_taro')" />

  <div class="main_content">
    <Cards />
    <SectionSeparator />
    <AboutMe />
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  color: white;
  font-family: 'DM Mono', monospace;
  background-color: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;

  .main_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width:820px) {
    .main_content {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
