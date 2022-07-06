<script setup lang="ts">
const { locale } = useI18n()

const currentLanguage = computed(() => locale.value)

const changeLanguageToEnglish = () => {
  locale.value = 'en'
}
const changeLanguageToRussian = () => {
  locale.value = 'ru'
}
// Set the language to the default user's browser language:
const userLang: string = navigator.language
switch (userLang.substring(0, 2)) {
  case 'en':
    changeLanguageToEnglish()
    break
  case 'ru':
    changeLanguageToRussian()
    break
  default:
    changeLanguageToEnglish()
    break
}
</script>

<template>
  <div class="languages-main_container languages" flex row absolute top-6 right-6 font-label z-5>
    <div class="english-container">
      <img class="language-icon english" :class="currentLanguage === 'en' ? 'active' : ''" src="/icons/english.svg"
        width="60" alt="Language-icon - Romulo Navas" ml-6 cursor-pointer @click="changeLanguageToEnglish">
      <img class="language-icon-ghost" :class="currentLanguage === 'en' ? 'active' : ''" src="/icons/english.svg"
        width="60" alt="Language-icon - Romulo Navas" ml-6 cursor-pointer block @click="changeLanguageToEnglish">
      <div class="languages-help_message">
        Change language to English
        <div class="triangle triangle-english" />
      </div>
    </div>

    <div class="russian-container">
      <img class="language-icon russian" :class="currentLanguage === 'ru' ? 'active' : ''" src="/icons/russian.svg"
        width="60" alt="Language-icon - Romulo Navas" ml-6 cursor-pointer @click="changeLanguageToRussian">
      <img class="language-icon-ghost" :class="currentLanguage === 'ru' ? 'active' : ''" src="/icons/russian.svg"
        width="60" alt="Language-icon - Romulo Navas" ml-6 cursor-pointer @click="changeLanguageToRussian">
      <div class="languages-help_message">
        Показать сайт на русском
        <div class="triangle triangle-russian" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.languages-main_container {
  position: absolute;
  right: 12px;
  bottom: 0;
}

.language-icon {
  transition: all 0.2s ease;
  transform: scale(0.9);
  z-index: 2;
  position: relative;
}

.language-icon.active {
  filter: contrast(120%);
  transform: scale(1.175);
}

/**
  language-icon-ghost is a shadow with the same color as the icon. It is added when the icons in active
*/
.language-icon-ghost {
  position: absolute;
  top: 0;
  transform: scale(1.28) !important;
  filter: blur(5px) !important;
  z-index: 0;
  opacity: 0;
  transition: all 0.2s ease;
}

.language-icon-ghost.active {
  opacity: 1;
}

/**
  Languages help message box
*/
.languages-help_message {
  position: absolute;
  top: 52px;
  right: 0;
  border-radius: 8px;
  margin-top: 8px;
  padding: 8px;
  text-align: center;
  width: 100%;
}

.languages-help_message {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.6s ease;
  background-color: #ffffff;
  color: black;
}

/**
 *Triangles
*/
.triangle-english {
  transform: translate(48px, -8px);
}

.triangle-spanish {
  transform: translate(104px, -8px);
}

.triangle-russian {
  // transform: translate(180px, -8px);
  transform: translate(127px, -8px);

}

@media (max-width: 900px) {

  .english-container:hover,
  .spanish-container:hover,
  .russian-container:hover {

    .languages-help_message,
    .triangle {
      visibility: hidden !important;
      opacity: 0;
    }
  }
}

// On hover shows the help-message and the correspondent triangle
.english-container:hover {

  .languages-help_message,
  .triangle-english {
    visibility: visible;
    opacity: 1;
  }
}

.spanish-container:hover {

  .languages-help_message,
  .triangle-spanish {
    visibility: visible;
    opacity: 1;
  }
}

.russian-container:hover {

  .languages-help_message,
  .triangle-russian {
    visibility: visible;
    opacity: 1;
  }
}

.triangle {
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #ffffff;
  opacity: 0;
  transition: opacity 0.6s ease;
}
</style>
