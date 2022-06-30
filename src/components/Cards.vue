<script setup lang="ts">
const appState = useAppStateStore()
const isClosed = ref(true)
const riderWaite = reactive([
  {
    name: 'The Magician',
    imgSrc: '/images/rider_waite/magician.jpg',
  },
  {
    name: 'The Sun',
    imgSrc: '/images/rider_waite/sun.jpg',
  },
  {
    name: 'The World',
    imgSrc: '/images/rider_waite/world.jpg',
  },
  {
    name: 'King of Swords',
    imgSrc: '/images/rider_waite/swords.jpg',
  },
  {
    name: 'Knight of Pentacles',
    imgSrc: '/images/rider_waite/pentacles.jpg',
  },
  {
    name: 'The Hanged Man',
    imgSrc: '/images/rider_waite/hanged_man.jpg',
  },
  {
    name: 'The Emperor',
    imgSrc: '/images/rider_waite/emperor.jpg',
  },
  {
    name: 'The Lovers',
    imgSrc: '/images/rider_waite/lovers.jpg',
  },
])
const prideTarot = reactive([
  {
    name: 'The Magician',
    imgSrc: '/images/pride/magician.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/pride/justice.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/pride/seven_pentacles.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/pride/star.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/pride/pentacles.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/pride/six_of_cups.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/pride/king_of_wands.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/pride/eight_of_wands.jpg',
  },
])
const devianMoonTarot = reactive([
  {
    name: 'The Magician',
    imgSrc: '/images/devian/kolezo_fortuny.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/devian/luna.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/devian/poveshenyi.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/devian/durak.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/devian/imperator.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/devian/tuz_kubkov.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/devian/cemyorka_djezlov.jpg',
  },
  {
    name: 'The Magician',
    imgSrc: '/images/devian/dvoyka_monet.jpg',
  },

])

const decks = reactive([
  {
    name: 'Rider Waite',
    cards: riderWaite,
  },
  {
    name: 'Pride Tarot',
    cards: prideTarot,
  },
  {
    name: 'Devian Moon',
    cards: devianMoonTarot,
  },
])
const currentDeck = ref(decks[0])
function shuffleCards(index: Number) {
  // Open the cards
  if (isClosed.value)
    isClosed.value = false
  // Close the cards
  if (!isClosed.value && index === 0)
    isClosed.value = true
}
function setCurrentDeck(nameOfClickedDeck: string) {
  decks.forEach((deck) => {
    if (deck.name === nameOfClickedDeck)
      currentDeck.value = deck
  })
  isClosed.value = true
  setTimeout(() => {
    isClosed.value = false
  }, 300)
  // eslint-disable-next-line no-console
  console.log(currentDeck.value)
}
</script>

<template>
  <div class="deck_buttons-main_container" font-button>
    <button v-for="deck in decks" :key="deck.name" class="button"
      :class="[currentDeck.name === deck.name ? 'active' : '', appState.isBigFire ? 'isBigFire' : '']"
      @click="setCurrentDeck(deck.name)">
      <p>{{ deck.name }}</p>
      <div class="button__horizontal" />
      <div class="button__vertical" />
    </button>
  </div>
  <section class="card-list">
    <article v-for=" (cards, index) in currentDeck.cards" :key="index" class="card"
      :class="[isClosed ? 'closed' : 'opened', appState.isBigFire ? 'isBigFire' : '']"
      :style="{ backgroundImage: `url(${cards.imgSrc})` }" bg-bg @click="shuffleCards(index)" />
  </section>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
@import "../styles/global.scss";

.deck_buttons-main_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 128px;

  .button {
    margin: 8px 24px;
    --offset: 10px;
    --border-size: 2px;
    opacity: 0.8;
    display: block;
    position: relative;
    padding: 20px 32px;
    appearance: none;
    border: 0;
    background: transparent;
    color: var(--color-button-primary);
    text-transform: uppercase;
    letter-spacing: .25em;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0;
    box-shadow: inset 0 0 0 var(--border-size) currentcolor;
    transition: background .1s ease;

    p {
      color: #ffffff;
    }

    &.active {
      opacity: 1;
      background: var(--color-button-primary);

      p {
        color: #17141d;
      }

      .button__horizontal {
        transform: scaleX(1);
      }

      .button__vertical {
        transform: scaleY(1);

      }

    }

  }
}

.button:hover {
  opacity: 1;
}

.button {

  &__horizontal,
  &__vertical {
    position: absolute;
    top: var(--horizontal-offset, 0);
    right: var(--vertical-offset, 0);
    bottom: var(--horizontal-offset, 0);
    left: var(--vertical-offset, 0);
    transition: transform .8s ease;
    will-change: transform;

    &::before {
      content: '';
      position: absolute;
      border: inherit;
    }
  }

  &__horizontal {
    --vertical-offset: calc(var(--offset) * -1);
    border-top: var(--border-size) solid currentcolor;
    border-bottom: var(--border-size) solid currentcolor;

    &::before {
      top: calc(var(--vertical-offset) - var(--border-size));
      bottom: calc(var(--vertical-offset) - var(--border-size));
      left: calc(var(--vertical-offset) * -1);
      right: calc(var(--vertical-offset) * -1);
    }

    transform: scaleX(0);

  }

  &:hover &__horizontal {
    transform: scaleX(1);
  }

  &__vertical {
    --horizontal-offset: calc(var(--offset) * -1);
    border-left: var(--border-size) solid currentcolor;
    border-right: var(--border-size) solid currentcolor;

    &::before {
      top: calc(var(--horizontal-offset) * -1);
      bottom: calc(var(--horizontal-offset) * -1);
      left: calc(var(--horizontal-offset) - var(--border-size));
      right: calc(var(--horizontal-offset) - var(--border-size));
    }

    transform: scaleY(0);
  }

  &:hover &__vertical {
    transform: scaleY(1);
  }

}

a {
  text-decoration: none;
}

// CARDS
// CARDS
// CARDS

.card-list {
  display: flex;
  padding: 3rem;
  overflow-x: scroll;
}

.card-list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.card-list::-webkit-scrollbar-thumb {
  background: #201c29;
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, .25), inset -2px -2px 2px rgba(0, 0, 0, .25);
}

.card-list::-webkit-scrollbar-track {
  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);
}

.card {
  width: 280px;
  max-width: 280px;
  aspect-ratio: auto 2.55 / 4.73;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: -0.1rem 0 3rem #000;
  display: flex;
  flex-direction: column;
  transition: .2s, background-image 0s;
  margin: 0;
  scroll-snap-align: start;
  clear: both;
  position: relative;
  background-size: contain; // Can't aply an anymation to backgound-size
  transform: rotateY(-180deg);
  filter: brightness(70%);

  &::before {
    padding: 0 3.2rem;
    content: "";
    z-index: 0;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    zoom: 1;
    filter: alpha(opacity=25);
    -webkit-opacity: 0.25;
    -moz-opacity: 0.25;
    opacity: 0.25;
  }
}

.card:focus-within~.card,
.card:hover~.card {
  transform: translateX(130px);
}

.card:hover {
  transform: translate(-1rem);
  ;
}

.card.closed:not(:first-child) {
  transition: .3s, background-image 0s;
  margin-left: -288px;
}

.card.closed:not(:last-child) {
  pointer-events: none;
}

.card.closed:last-child {
  &:hover {
    transform: rotateY(-180deg) translate(-2rem, 0rem);
  }
}

.card.opened:first-child {
  transform: none;
  background-image: url(../../public/backsideOfCard.png) !important;
  transition: transform 0.6s, background-image 0s;
  transform: none;

  &:hover {
    transition: 0.3s, background-image 0s;
    transform: translateX(-1rem) rotateY(0deg);
  }
}

.card.closed {
  transform: none;
  background-image: url(../../public/backsideOfCard.png) !important; // I made the opacity 0.25 by my own in adobe illustrator
  transition: transform .6s, background-image 0s;
  transform: none;
  transform: translateX(1rem) rotateY(-180deg);

  &:hover {
    transform: translateX(2rem) rotateY(-180deg);

  }
}

// Animation when cards open
.card.opened:not(:first-child) {
  transform: rotateY(0deg);
  // When card turns around, it shows an image and it gets darker.
  transition: transform 0.8s ease-in, margin-left 0.6s, background-image 0s 0.55s ease-in, filter 0.3s 0s ease-in;
  margin-left: -110px;
  background-size: contain;

  &:hover {
    transform: translateY(-2rem)rotateY(0deg) rotateZ(12deg) translateX(-3rem);
    transition: 0.3s, background-image 0s;
  }
}

.card.opened.isBigFire:not(:first-child) {
  transition: transform 0.8s ease-in, margin-left 0.6s, background-image 0s 0.55s ease-in, filter 0.3s 0s ease-in;
  filter: brightness(100%);
  transform: rotateY(0deg);
  // When card turns around, it shows an image and it gets darker.
  margin-left: -130px;
  background-size: contain;

  &:hover {
    transform: translateY(-2rem)rotateY(0deg) rotateZ(12deg) translateX(-3rem);
    transition: 0.3s, background-image 0s;
  }
}
</style>
