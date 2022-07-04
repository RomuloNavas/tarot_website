<script setup lang="ts">
const props = defineProps<{ msg: string }>()
const dividedText = props.msg.split(' ', 32)
const myArray = ref([''])
const index = 0
const appState = useAppStateStore()
function smokeTheSpan(letter: String, index: Number, event: MouseEvent) {
  // if (index !== 3 && index !== 11 && index !== 16 && index !== 22)
  if (event.target)
    event.target.className = 'active smoked letters'
}

const smoke_letters_container = ref<HTMLElement | null>(null)
setInterval(() => {
  const parent1 = document.querySelector('.smoke_letters_container')
  if (parent1) {
    const active_children = parent1.querySelectorAll('.active')

    active_children.forEach((children) => {
      children.classList.remove('active')
    })
  }
}, 2000)
</script>

<template>
  <div ref="smoke_letters_container" class="smoked smoke_letters_container appear">
    <span v-for=" (letter, index) in props.msg" :key="letter" header3 class="smoked letters"
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
  font-family: 'Arapey', serif;
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
  animation: smokeLetters 2s linear alternate-reverse;
}

@media (max-width:820px) {

  .smoked span.active {
    animation: none !important;
  }

  .smoked.appear span {
    animation: none !important;
  }
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

@media (max-width:850px) {
  .smoked {
    pointer-events: none;
    text-align: center;
    margin-left: auto;

  }

  .smoked span {
    user-select: none;
    position: relative;
    display: inline-block;
    cursor: default;
    color: #ffffff;
    font-size: 40px;
    height: 50px;
    height: fit-content;
    padding-top: 32px;
    padding-bottom: 16px;
    padding-left: 4px;
    padding-right: 4px;

  }
}
</style>
