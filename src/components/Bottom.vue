<script setup lang="ts">
const text = ref('КОНТАКТЫ')
const dividedText = text.value.split(' ', 32)
const myArray = ref([''])
const index = 0
const appState = useAppStateStore()
function smokeTheSpan(letter: String, event: MouseEvent) {
  event.target.className = 'active smoked letters'
  // eslint-disable-next-line no-console
  console.log(event.target.className)
}
</script>

<template>
  <div class="smoked">
    <span v-for=" (letter, index) in text" :key="index" header3 class="smoked letters" :class="appState.isBigFire ? 'isBigFire' : ''" @mouseover="smokeTheSpan(letter, $event)">
      {{ letter !== ' ' ? letter : '&nbsp' }}
    </span>
  </div>
  <Candle />
</template>

<style lang="scss" scoped>
.smoked {
  position: relative;
}
.smoked span {
  position: relative;
  display: inline-block;
  cursor: default;
}
span{
  color: #9dbbe9;
}
span.isBigFire {
  background: -webkit-linear-gradient(gold,orange,orange,white,white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Words and Letters have separate animations since larger blocks didn't look as realistic with the letter keyframes */

/* Words animation */
.smoked.words.active {
  animation: smokeWords 2s linear forwards;
}

@keyframes smokeWords {
  0% {
    opacity: 1;
    filter: blur(0px);
    transform: translateX(0) translateY(0) rotate(0deg) scale(1);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    filter: blur(50px);
    transform: translateX(300px) translateY(-300px) rotate(45deg) scale(3);
  }
}

/* Letters animation */

.smoked.letters.active {
  color: #374151;
  animation: smokeLetters 2s linear forwards;
}

@keyframes smokeLetters {
  0% {
    opacity: 1;
    filter: blur(0px);
    transform: translateX(0) translateY(0) rotate(0deg) scale(1);
  }
  50% {
    opacity: 0.3;
    pointer-events: none;
  }
  100% {
    opacity: 0;
    filter: blur(30px);
    transform: translateX(300px) translateY(-300px) rotate(360deg) scale(5);
  }
}
</style>
