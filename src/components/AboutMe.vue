<script setup lang="ts">
const appState = useAppStateStore()
const { t } = useI18n()
</script>

<template>
    <section id="about_me">
        <h3 class="section-title" header1>
            {{ t("about_me.about_me") }}
        </h3>
        <div class="main_container">
            <div class="image-main_container">
                <img width="400px" src="/images/inna.jpg" alt="ИННА ТАРО">
                <h4>
                    {{ t("appointment") }}
                </h4>
                <a target="_blank" href="https://wa.me/79185460957">
                    <AppButton class="active">
                        +7 (918) 546-09-57
                    </AppButton>
                </a>
            </div>
            <div class="text-main_container" font-body>
                <p text-textSecondary>
                    {{ t("about_me.hello") }}
                </p>

                <h4 header4>
                    {{ t("about_me.my_methods") }}
                </h4>
                <ul text-textSecondary>
                    <li>
                        {{ t("about_me.my_methods-description1") }}
                    </li>
                    <li>{{ t("about_me.my_methods-description1") }}</li>
                    <li>{{ t("about_me.my_methods-description3") }}</li>
                    <li>{{ t("about_me.my_methods-description4") }}</li>
                    <li>{{ t("about_me.my_methods-description5") }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@media (max-width:820px) {
    h3 {
        position: relative;
        display: none;
    }
}

.main_container {
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1600px;
    gap: 12px;
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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

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

        h4 {
            font-size: 32px;
            line-height: 32px;
            margin-top: 22px;
            margin-bottom: 12px;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 12px;

            button {
                padding: 8px;
                width: 100%;
                font-size: 1.4rem;
            }
        }
    }
}
</style>
