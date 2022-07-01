<script setup lang="ts">
const appState = useAppStateStore()
</script>

<template>
    <header>
        <div class="image-main_container" :class="[appState.isBigFire ? 'isBigFire' : '']">
            <img src="/images/inna.jpg" alt="">
        </div>
        <div class="header_text-main_container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis harum fugit autem, debitis quos,
            sint dolorem, animi reprehenderit inventore consequatur quas dolores ex mollitia tenetur fugiat eum quis?
            Debitis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis harum fugit autem, debitis quos,
            sint dolorem, animi reprehenderit inventore consequatur quas dolores ex mollitia tenetur fugiat eum quis?
            Debitis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis harum fugit autem, debitis quos,
            sint dolorem, animi reprehenderit inventore consequatur quas dolores ex mollitia tenetur fugiat eum quis?
            Debitis!
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    margin: 64px 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header_text-main_container{
 max-width: 600px;
 padding: 16px 32px;
}
.image-main_container {
    img {
        width: 350px;
        border-radius: 22px;
        filter: brightness(0.8);
        transition: filter 0.3s ease, ;
    }

}

.image-main_container.isBigFire {
    img {
        filter: brightness(1);
    }

}
</style>
