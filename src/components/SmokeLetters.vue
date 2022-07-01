<script setup lang="ts">
const text = ref('ИННА ТАРО')
const dividedText = text.value.split(' ', 32)
const myArray = ref([''])
const index = 0
const appState = useAppStateStore()
function smokeTheSpan(letter: String, index: Number, event: MouseEvent) {
  // if (index !== 3 && index !== 11 && index !== 16 && index !== 22)
  event.target.className = 'active smoked letters'
}

// ========= In case that you want to return the normal state of letters:
const smoke_letters_container = ref<HTMLElement | null>(null)
setInterval(() => {
  const parent1 = document.querySelector('.smoke_letters_container')

  if (parent1.children.length == parent1.querySelectorAll('.active').length) {
    const letters = smoke_letters_container.value?.children
    if (letters) {
      setTimeout(() => {
        for (let i = 0; i < letters.length; i++) {
          const letter = letters[i]
          letter.classList.remove('active')
          parent1.classList.add('appear')
        }
      }, 3000)
    }
  }
}, 2000)

// // eslint-disable-next-line no-console
// console.log(smoke_letters_container.value)
// // eslint-disable-next-line no-console
// console.log(letters)
</script>

<template>
  <div ref="smoke_letters_container" class="smoked smoke_letters_container">
    <span v-for=" (letter, index) in text" :key="index" header3 class="smoked letters"
      :class="appState.isBigFire ? 'isBigFire' : ''" @mouseover="smokeTheSpan(letter, index, $event)">
      {{ letter !== ' ' ? letter : '&nbsp' }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.smoke_letters_container {
  position: relative;

}

.smoked span {
  position: relative;
  display: inline-block;
  cursor: default;
  color: #eeeeee;
  font-size: 90px;
  height: 90px;
  padding: 32px 10px;

}

// span.isBigFire {
//   background: -webkit-linear-gradient(#fbf348, #ff9224, #ffb224, rgb(244, 218, 151), white);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

/* Words and Letters have separate animations since larger blocks didn't look as realistic with the letter keyframes */

/* Words animation */
.smoked.appear span {
  animation: smokeLetters 1s linear alternate-reverse;
}

.smoked span.active {
  color: #374151;
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
// .smoked.letters.active {
//   color: #374151;
//   animation: smokeLetters 2s linear forwards;
// }

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
