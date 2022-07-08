<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { defineProps } from 'vue'
const props = defineProps({
    text: { type: String, default: 'Created by Romulo.' },
    fromTop: { type: Boolean, default: true },
})
const handIsWaving = ref(false)
function handSayHello() {
    // eslint-disable-next-line no-console
    console.log(handIsWaving)
    handIsWaving.value = true
}
const cssTranslate = props.fromTop ? 'translateY(-150%)' : 'translateY(150%)'
const myArray = ref([''])
const dividedText = props.text.split('')
let index = 0
const splitTextAnimation = () => {
    const addLetters = setInterval(() => {
        if (index < dividedText.length) {
            myArray.value.push(dividedText[index])
            index++
        }
        else {
            clearInterval(addLetters)
        }
    }, 100)
    if (index >= dividedText.length) {
        myArray.value = ['']
        index = 0
    }
}
const animateTextAndHand = () => {
    splitTextAnimation()
    handSayHello()
}
splitTextAnimation()
</script>

<template>
    <div class="dev_logo romulo-logo" @mouseenter="animateTextAndHand" @mouseleave="handIsWaving = false">
        <a href="https://romulonavas.com/" target="_blank" flex content-center items-end p-xs min-w-45 relative m-xs>
            <h1 class="logo" text-lg font-bold font-romulo>
                <TransitionGroup name="list" tag="span">
                    <strong v-for="(letter, index) in myArray" :key="index" class="animated-letter">
                        {{ letter !== ' ' ? letter : '&nbsp' }}
                    </strong>
                </TransitionGroup>
            </h1>
            <img class="js-lazy lazy hand is-loaded" :class="handIsWaving ? 'handWavingOnce' : 'handWavingInfinite'"
                width="30" height="30" src="https://threejs-journey.com/assets/images/hand-emoji-100x100.png"
                alt="Hand Waving - Icon">
        </a>
    </div>
</template>

<style lang="scss" scoped>
.dev_logo {
    width: fit-content;
}

.hand {
    transform-origin: 75% 75%;
    position: absolute;
    right: 4px;
    width: 30px;
    height: 30px;
    transform: rotate(15deg);
    z-index: 3;
}

// THIS ANIMATION RUNS ALL THE TIME
.hand.handWavingInfinite {
    animation: hand-waving-infinite 8s infinite 2s;
}

@keyframes hand-waving-infinite {
    4% {
        transform: rotate(65deg);
    }

    8% {
        transform: rotate(25deg);
    }

    10% {
        transform: rotate(55deg);
    }

    18% {
        transform: rotate(25deg);
    }
}

// THIS ANIMATION RUNS WHEN WE HOVER
.hand.handWavingOnce {
    animation: hand-waving-once 2s infinite 1.3s;
    pointer-events: none;
}

@keyframes hand-waving-once {
    0% {
        transform: rotate(15deg) translateY(0px);
    }

    8% {
        transform: rotate(-10deg);
    }

    24% {
        transform: rotate(45deg);
    }

    40% {
        transform: rotate(15deg);
    }

    65% {
        transform: rotate(20deg) translateY(-8px);
    }

    75% {
        transform: rotate(20deg) translateY(0px);
    }

    90% {
        transform: rotate(20deg) translateY(-8px);
    }

    0% {
        transform: rotate(15deg) translateY(0px);
    }
}

.list-enter-active {
    transition: all 0.5s ease 0s;
}

.list-leave-active {
    transition: all 0s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: v-bind(cssTranslate);
}

.logo {
    overflow: hidden;
    width: fit-content;
}

.animated-letter {
    display: inline-block;
}
</style>
