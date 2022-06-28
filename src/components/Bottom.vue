<script setup lang="ts">
const text = ref('Записаться на консультацию')
const dividedText = text.value.split(' ', 32)
const myArray = ref([''])
const index = 0
const appState = useAppStateStore()
function smokeTheSpan(letter: String, index: Number, event: MouseEvent) {
  if (index !== 3 && index !== 11 && index !== 16 && index !== 22)
    event.target.className = 'active smoked letters'
}
</script>

<template>
  <div class="bottom">
    <!-- <div class="smoked">
    <span v-for=" (letter, index) in text" :key="index" header3 class="smoked letters" :class="appState.isBigFire ? 'isBigFire' : ''" @mouseover="smokeTheSpan(letter, index, $event)">
      {{ letter !== ' ' ? letter : '&nbsp' }}
    </span>

    <p font-body mt-2>
      WhatsApp: <a :class="appState.isBigFire ? 'isBigFire' : ''" href="@">+7 918 546-09-57</a>
    </p>
    <p font-body>
      Telegram: <a :class="appState.isBigFire ? 'isBigFire' : ''" href="@">t.me/inamoto_taro</a>
    </p>
    <p font-body>
      Мобильный Номер: <a :class="appState.isBigFire ? 'isBigFire' : ''" href="@">+7 918 546-09-57</a>
    </p>
  </div> -->
    <Candle />
  </div>
</template>

<style lang="scss" scoped>
.bottom {
  position: relative;
}

#candle_animation {
  position: absolute;
  right: 32px;
  bottom: -50%;
}

.smoked {
  position: relative;
}

a {
  color: #9dbbe9;
}

a.isBigFire {
  background: -webkit-linear-gradient(#fbf348, #ff9224, #ffb224, rgb(244, 218, 151), white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.smoked span {
  position: relative;
  display: inline-block;
  cursor: default;
}

span {
  color: #9dbbe9;
}

span.isBigFire {
  background: -webkit-linear-gradient(#fbf348, #ff9224, #ffb224, rgb(244, 218, 151), white);
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
