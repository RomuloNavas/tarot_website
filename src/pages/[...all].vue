<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()

const isClosed = ref(true)

const devianMoonTarot = reactive([
  {
    name: 'The Magician',
    imgSrc: '/images/page_not_found/404-card1.jpg', // YOU CAN CHANGE THIS IMAGE ONLY IN THE SCSS CODE BELOW IN STYLE (BACKGROUND IMAGE)
  },
  {
    name: 'The Magician',
    imgSrc: '/images/page_not_found/404-card2.jpg',
  },

])

const decks = reactive([

  {
    name: 'Deviant Moon',
    cards: devianMoonTarot,
    description: 'decks.deviant-description',
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
}
</script>

<template>
  <section id="page-404" center text-center flex flex-col justify-center items-center>
    <div class="card-list">
      <div v-for=" (cards, index) in currentDeck.cards" id="card-404" :key="index" class="card"
        :class="[isClosed ? 'closed' : 'opened']" :style="{ backgroundImage: `url(${cards.imgSrc})` }" bg-bg
        @click="isClosed = !isClosed" />
    </div>
    <div class="content">
      <SmokeLetters msg="404" />
      <p text-lg>
        {{ t('not-found') }}
      </p>
    </div>
    <br>
    <AppButton @click="router.push('/')">
      {{ t('button.home') }}
    </AppButton>
  </section>
  <RomuloLogo class="dev_logo" />
</template>

<route lang="yaml">
meta:
  layout: 404
</route>

<style lang="scss">
main {
  min-width: 90vw !important;
  max-width: 1600px;
  width: 100%;
}

@media (max-width:800px) {
  .card-list {
    display: none !important;
  }

}

#page-404 {
  .card-list {
    overflow-x: hidden !important;
    padding: 12px 96px;
  }

  .card {
    // width: 280px;
    // height: 482px;
    // aspect-ratio: 2.;
    width: 240px;
    aspect-ratio: auto 2.55 / 5.57;
    padding: 1.5rem;
  }

  .card.opened:first-child {
    transform: none;
    background-image: url(/images/page_not_found/404-card1.jpg) !important; //!!! CHANGE HERE THE FIST IMAge
    transition: transform 0.6s, background-image 0s;
    transform: none;
    transform: translateY(0rem)rotateY(0deg) rotateZ(0deg) translateX(-2rem);

    &:hover {
      transform: translateY(-2rem)rotateY(0deg) rotateZ(-4deg) translateX(-2rem);
      transition: 0.3s, background-image 0s;
    }

  }

  .card.opened {
    transform: translateY(-0rem)rotateY(0deg) rotateZ(0deg) translateX(2rem);

    &:hover {
      transform: translateY(-2rem)rotateY(0deg) rotateZ(4deg) translateX(2rem);
      transition: 0.3s, background-image 0s;
    }
  }

  #card-404.closed {
    transform: none;
    background-image: url(/images/page_not_found/404-cardBack.jpg) !important; // CHANGE HERE THE BACK SIDE IMAGE OF CARD
    transition: transform .6s, background-image 0s;
    transform: none;
    transform: translateY(-0rem) rotateY(-180deg);

    &:hover {
      transform: translateY(-1rem) rotateY(-180deg);

    }
  }
}
</style>
