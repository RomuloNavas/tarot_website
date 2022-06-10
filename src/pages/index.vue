<script>
// const user = useUserStore()
// const name = $ref(user.savedName)
// const router = useRouter()
// const go = () => {
//   if (name)
//     router.push(`/hi/${encodeURIComponent(name)}`)
// }
// const { t } = useI18n()
export default {
  data() {
    return {
      riderWaite: [
        {
          name: 'The Magician',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
        },
        {
          name: 'The Sun',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
        },
        {
          name: 'The World',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
        },
        {
          name: 'King of Swords',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg',
        },
        {
          name: 'Knight of Pentacles',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg',
        },
        {
          name: 'The Hanged Man',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
        },
        {
          name: 'The Emperor',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
        },
        {
          name: 'The Lovers',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg',
        },
      ],
      longitudeInPixelsToTranslateX: 21,
      numberOfCards: 8,
      isClosed: true,
    }
  },
  methods: {
    shuffleTheCards(index) {
      // Open the cards
      if (this.isClosed)
        this.isClosed = false
      // Close the cards
      if (!this.isClosed && index === 0)
        this.isClosed = true
    },
  },
}
</script>

<template>
  <button @click="isClosed = !isClosed">
    open
  </button>
  <section class="card-list">
    <article
      v-for=" (card, index) in riderWaite" :key="index" class="card" :class="isClosed ? 'closed' : 'opened'"
      :style="{ backgroundImage: `url(${card.imgSrc})` }" @click="shuffleTheCards(index)"
    >
      <div class="card-author" />
    </article>
  </section>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
$backgroundColor: #17141d;
$cardColor: #17141d;
body {
    padding: 0;
    margin: 0;
    color: white;
    font-family: 'DM Mono', monospace;
    background: $backgroundColor;
}
a {
    text-decoration: none;
}

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
    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
}

.card-list::-webkit-scrollbar-track {
    background: linear-gradient(90deg,#201c29,#201c29 1px,#17141d 0,#17141d);
}

.card {
    width: 300px;
    aspect-ratio: auto 2.75 / 4.75;
    padding: 1.5rem;
    border-radius: 16px;
    background: $cardColor;
    box-shadow: -1rem 0 3rem #000;
    display: flex;
    flex-direction: column;
    transition:  .2s, background-image 0s;
    margin: 0;
    scroll-snap-align: start;
    clear: both;
    position: relative;
    background-size: contain; // Can't aply an anymation to backgound-size
    transform: rotateY(-180deg);
  &::before{
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

.card:focus-within~.card, .card:hover~.card {
    transform: translateX(130px);
}

.card:hover {
    transform: translateY(-1rem);
}
.card.closed:not(:first-child) {
    transition: .3s, background-image 0s;
    margin-left: -308px;
}
.card.closed:not(:last-child) {
    pointer-events: none;
}
.card.closed:last-child {
    &:hover{
      transform:  rotateY(-180deg) translate(-2rem ,0rem);
    }
}
.card.opened:first-child {
  transform: none;
  background-image: url(../../public/backsideOfCard.png) !important;
  transition: transform 0.6s, background-image 0s;
  transform: none;
  &:hover{
  transition: 0.3s, background-image 0s;
  transform: translateX(-1rem) rotateY(0deg);
  }
}
.card.closed{
  transform: none;
  background-image: url(../../public/backsideOfCard.png) !important; // I made the opacity 0.25 by my own in adobe illustrator
  transition: transform .6s, background-image 0s;
  transform: none;
  transform: translateX(1rem) rotateY(-180deg);
  &:hover{
  transform: translateX(2rem)  rotateY(-180deg);

  }
}

// Animation when cards open
.card.opened:not(:first-child) {
    transform: rotateY(0deg);
    transition: transform 0.6s ease-in, margin-left 0.6s,  background-image 0s 0.3s ease-in;
    margin-left: -130px;
    background-size: contain;
    &:hover {
      transform: translateY(-2rem)rotateY(0deg);
      transition: 0.3s, background-image 0s;
    }
}
</style>
