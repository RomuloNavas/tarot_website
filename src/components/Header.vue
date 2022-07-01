<script setup lang="ts">
const appState = useAppStateStore()
</script>

<template>
    <header>
        <div class="image-main_container" :class="[appState.isBigFire ? 'isBigFire' : '']">
            <img src="/images/inna.jpg" alt="">
        </div>
        <div class="header_text-main_container" font-body>
            <h4 header4>
                ОБО МНЕ
            </h4>
            Я - практикующий Таролог. <br>
            Для меня Таро - это не гадание "на будущее", а инструмент для анализа ситуации и создания
            событий.

            <h4 header4>
                МОИ МЕТОДЫ РАБОТЫ
            </h4>
            <ul>
                <li>
                    Выявляю, какие негативные установки мешают тебе встретить "своего" человека для отношений или
                    зарабатывать
                    больше денег.
                </li>
                <li>Помогаю наладить и улучшить отношения (любовные, дружеские, деловые и детско-родительские).</li>
                <li>Работаю без стереотипов - с запросами на отношения не только пар "мужчина и женщина".</li>
                <li>Помогаю тебе понять, как можно улучшить ситуацию в денежной сфере.</li>
                <li>
                    Вместе с тобой создаю нужные тебе события, которые исполняют твои желания и помогают достичь целей.
                </li>
                <li>Помогаю тебе найти свой путь к успеху - твоё предназначение.</li>
            </ul>
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

.header_text-main_container {
    max-width: 600px;
    padding: 16px 32px;
    text-align: left;

    h4 {
        margin-top: 16px;
    }

    ul {
        list-style: disc;
        margin-left: 1rem;
    }
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
