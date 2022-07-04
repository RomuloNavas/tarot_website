<script setup lang="ts">
const appState = useAppStateStore()
</script>

<template>
    <h3 header1>
        Обо мне
    </h3>
    <section id="about_me">
        <div class="image-main_container" :class="[appState.isBigFire ? 'isBigFire' : '']">
            <img width="400px" src="/images/inna.jpg" alt="ИННА ТАРО">
        </div>
        <div class="text-main_container" font-body>
            <p text-textSecondary>
                Всем привет! Меня зовут Инна. Я - практикующий Таролог. <br>
                Для меня Таро - это не гадание "на будущее", а инструмент для анализа ситуации и создания
                событий.
            </p>

            <h4 header4>
                МОИ МЕТОДЫ РАБОТЫ
            </h4>
            <ul text-textSecondary>
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
    </section>
</template>

<style lang="scss" scoped>
#about_me {
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;
    max-width: 1600px;
    position: relative;
    padding: 16px;
    padding-bottom: 32px;

    .text-main_container {
        width: auto;
        text-align: left;
        width: 100%;
        max-width: 700px;

        h4 {
            margin-top: 20px;
            position: relative;

            &::after {
                content: "";
                width: 32px;
                height: 50%;
                border-bottom: solid 2px #eeeeee;
                position: absolute;
                transform: translateY(2px);

            }
        }

        ul {
            margin-left: 1rem;
            list-style-type: '— ';

            li {
                margin: 8px 0;
            }
        }
    }

    .image-main_container {
        img {
            aspect-ratio: auto 1/1;
            object-fit: contain;
            border-radius: 22px;
            filter: brightness(0.8);
            transition: filter 0.3s ease, ;
            width: 100%;
            max-width: 400px;
            height: auto;
        }
    }
}
</style>
