<script setup lang="ts">
const appState = useAppStateStore()

const whatsapp = {
    number: '79185460957',
    qrcode: '',
}
const telegram = {
    user: 'inamoto_taro',
    number: '79185460957',
    qrcode: '',
}
const instagram = {
    user: 'inamoto_taro',
    qrcode: '',
}
const skype = {
    number: '79185460957',
    mail: 'inamoto_kirikidzo@mail.ru',
    qrcode: '',
}
const socialMedia = {
    whatsapp,
    telegram,
    instagram,
    skype,
}

const formatPhoneNumber = (s: string, plus = true) => {
    const startsWith = plus ? '+7' : '8'

    let phone = s.replace(/[^0-9]/g, '')
    if (phone.startsWith('7') && plus)
        phone = phone.substring(1)

    if (phone.startsWith('8'))
        phone = phone.substring(1)

    return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, `${startsWith} ($1) $2 $3 $4`)
}
</script>

<template>
    <nav :class="[appState.isBigFire ? 'isBigFire' : '']">
        <div class="nav_main_container">
            <div class="contacts-main_container">
                <!-- -WHATSAPP -->

                <div id="whats" class="social_media-main_container">
                    <a target="_blank" :href="`https://wa.me/${socialMedia.whatsapp.number}`">
                        <svg class="icon-whats" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                            viewBox="0 0 102 102">
                            <defs>

                                <linearGradient id="whatsapp-bg_gradient" x1=".5" x2=".5" y2="1"
                                    gradientUnits="objectBoundingBox">

                                    <stop id="whats-light_green" offset="0" stop-color="currentColor" />

                                    <stop id="whats-dark_green" offset="1" stop-color="currentColor" />

                                </linearGradient>
                            </defs>
                            <g transform="translate(.021 -.978)">

                                <path fill="url(#whatsapp-bg_gradient)"
                                    d="M101.971,77.094c0,.558-.017,1.77-.051,2.705a53.717,53.717,0,0,1-.538,6.589,21.949,21.949,0,0,1-1.847,5.521,19.654,19.654,0,0,1-8.653,8.644A21.993,21.993,0,0,1,85.33,102.4a53.913,53.913,0,0,1-6.539.528c-.936.033-2.148.05-2.7.05l-50.223-.008c-.558,0-1.769-.017-2.705-.051a53.744,53.744,0,0,1-6.589-.538,21.951,21.951,0,0,1-5.521-1.847A19.654,19.654,0,0,1,2.4,91.881,21.988,21.988,0,0,1,.557,86.329,53.954,53.954,0,0,1,.029,79.79c-.033-.936-.05-2.148-.05-2.7l.008-50.224c0-.558.017-1.77.051-2.705a53.738,53.738,0,0,1,.538-6.589,21.946,21.946,0,0,1,1.847-5.521A19.655,19.655,0,0,1,11.076,3.4a22,22,0,0,1,5.552-1.848,53.912,53.912,0,0,1,6.539-.528c.936-.033,2.148-.05,2.7-.05L76.095.986c.559,0,1.77.017,2.705.051a53.744,53.744,0,0,1,6.589.538A21.946,21.946,0,0,1,90.91,3.422a19.653,19.653,0,0,1,8.644,8.653,21.988,21.988,0,0,1,1.848,5.552,53.974,53.974,0,0,1,.528,6.539c.033.936.05,2.148.05,2.7l-.008,50.223Z"
                                    data-name="Path 19" />
                                <g data-name="Group 2">

                                    <path class="letter" fill="currentColor"
                                        d="M216,146.311a36.58,36.58,0,0,0-57.568,44.119l-5.189,18.948,19.39-5.085a36.561,36.561,0,0,0,17.479,4.451h.015A36.578,36.578,0,0,0,216,146.311ZM190.13,202.568h-.012a30.361,30.361,0,0,1-15.473-4.236l-1.11-.659-11.506,3.017,3.071-11.215-.723-1.15a30.4,30.4,0,1,1,25.754,14.242ZM206.8,179.807c-.914-.457-5.407-2.668-6.245-2.973s-1.447-.457-2.056.457-2.361,2.973-2.894,3.582-1.066.686-1.98.229a24.963,24.963,0,0,1-7.349-4.535,27.531,27.531,0,0,1-5.084-6.329c-.533-.915-.057-1.409.4-1.865.411-.409.914-1.067,1.371-1.6a6.23,6.23,0,0,0,.914-1.524,1.682,1.682,0,0,0-.076-1.6c-.228-.457-2.056-4.954-2.818-6.783-.742-1.782-1.5-1.541-2.056-1.568-.533-.027-1.142-.032-1.752-.032a3.358,3.358,0,0,0-2.437,1.143,10.246,10.246,0,0,0-3.2,7.622c0,4.5,3.275,8.841,3.732,9.451s6.444,9.838,15.612,13.8a52.582,52.582,0,0,0,5.21,1.925,12.535,12.535,0,0,0,5.756.362c1.756-.262,5.407-2.21,6.169-4.344a7.635,7.635,0,0,0,.533-4.344c-.229-.381-.838-.61-1.752-1.067Z"
                                        data-name="Path 20" transform="translate(-138.001 -121.202)" />
                                </g>
                            </g>
                        </svg>
                    </a>
                    <div class="help_message" font-body text-black bg-white>
                        <p>
                            {{ formatPhoneNumber(socialMedia.whatsapp.number) }}
                        </p>
                        <!-- <img src="/images/whatsapp_qrcode.jpg" alt=""> -->

                        <div class="triangle triangle-whatsapp" />
                    </div>
                </div>
                <!-- - FACEBOOK -->
                <!-- <div id="facebook" class="social_media-main_container">
        <svg class="icon-facebook" width="44" height="44" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            id="facebook-background"
            fill="currentColor" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
          /><path
            class="letter"
            fill="currentColor" fill-rule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" clip-rule="evenodd"
          /></svg>
        <div class="help_message" font-body text-black bg-white>
          <img src="/images/telegram_qrcode.jpg" alt="">
          <div class="triangle triangle-whatsapp" />
        </div>
      </div> -->
                <!-- - TELEGRAM -->
                <div id="telegram" class="social_media-main_container">
                    <a :href="`https://t.me/${socialMedia.telegram.user}`" target="_blank">
                        <svg class="icon-telegram" xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                            viewBox="0 0 48 48">
                            <rect width="48" height="48" fill="url(#paint0_linear)" rx="24" />
                            <path class="letter" fill="currentColor"
                                d="M10.7874 23.4709C17.7667 20.3663 22.4206 18.3195 24.7493 17.3305C31.3979 14.507 32.7795 14.0165 33.68 14.0002C33.878 13.9968 34.3208 14.0469 34.6077 14.2845C34.8499 14.4852 34.9165 14.7563 34.9484 14.9465C34.9803 15.1368 35.02 15.5702 34.9884 15.9088C34.6281 19.774 33.0692 29.1539 32.276 33.483C31.9404 35.3148 31.2796 35.929 30.6399 35.9891C29.2496 36.1197 28.1938 35.051 26.8473 34.1497C24.7401 32.7395 23.5498 31.8615 21.5044 30.4854C19.1407 28.895 20.673 28.0209 22.0201 26.5923C22.3726 26.2185 28.4983 20.5295 28.6169 20.0135C28.6317 19.9489 28.6455 19.7083 28.5055 19.5813C28.3655 19.4543 28.1589 19.4977 28.0098 19.5322C27.7985 19.5812 24.4323 21.8529 17.9113 26.3473C16.9558 27.0172 16.0904 27.3435 15.315 27.3264C14.4602 27.3076 12.8159 26.833 11.5935 26.4273C10.0942 25.9296 8.90254 25.6666 9.0063 24.8215C9.06035 24.3813 9.65403 23.9311 10.7874 23.4709Z" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="24" x2="24" y2="47.644"
                                    gradientUnits="userSpaceOnUse">
                                    <stop id="telegram-blue_top" stop-color="currentColor" />
                                    <stop id="telegram-blue_bottom" offset="1" stop-color="currentColor" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                    <div class="help_message" font-body text-black bg-white>
                        <p>{{ formatPhoneNumber(socialMedia.telegram.number) }}</p>
                        <p text-sm>
                            @{{ socialMedia.telegram.user.toUpperCase() }}
                        </p>
                        <!-- <img src="/images/telegram_qrcode.jpg" alt=""> -->
                        <div class="triangle triangle-whatsapp" />
                    </div>
                </div>
                <div id="insta" class="social_media-main_container">
                    <!-- - INSTAGRAM -->

                    <a target="_blank"
                        :href="`https://instagram.com/${socialMedia.instagram.user}?igshid=YmMyMTA2M2Y=`">

                        <svg class="icon-insta" xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                            viewBox="0 0 102 102">
                            <defs>

                                <radialGradient id="a" cx="6.601" cy="99.766" r="129.502"
                                    gradientUnits="userSpaceOnUse">

                                    <stop id="insta-orange" offset=".09" stop-color="currentColor" />

                                    <stop id="insta-pink" offset=".78" stop-color="currentColor" />
                                </radialGradient>
                                <radialGradient id="b" cx="70.652" cy="96.49" r="113.963"
                                    gradientUnits="userSpaceOnUse">

                                    <stop id="insta-purple" offset=".64" stop-color="currentColor" stop-opacity="0" />

                                    <stop id="insta-purple" offset="1" stop-color="currentColor" />
                                </radialGradient>
                            </defs>

                            <path fill="url(#a)"
                                d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                                data-name="Path 16" />

                            <path fill="url(#b)"
                                d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                                data-name="Path 17" />

                            <path class="letter" fill="currentColor"
                                d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                                data-name="Path 18" transform="translate(-422.637 -426.196)" />

                        </svg>
                    </a>
                    <div class="help_message" font-body text-black bg-white>
                        <p text-sm>
                            @{{ socialMedia.instagram.user.toUpperCase() }}
                        </p>
                        <!-- <img src="/images/instagram_qrcode.png" alt=""> -->

                        <div class="triangle triangle-whatsapp" />
                    </div>
                </div>
                <div id="skype" class="social_media-main_container">
                    <!-- -SKYPE -->
                    <a target="_blank" :href="`skype:${socialMedia.skype.number}?chat`">

                        <svg class="icon-skype" width="44" height="44" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16">

                            <path id="skype-background" fill="currentColor"
                                d="M15.716 8.083c0-4.155-3.416-7.524-7.631-7.524-.444 0-.88.038-1.305.11A4.453 4.453 0 0 0 4.426 0C1.981 0 0 1.953 0 4.364a4.3 4.3 0 0 0 .608 2.207 7.464 7.464 0 0 0-.155 1.512c0 4.156 3.417 7.525 7.631 7.525a7.85 7.85 0 0 0 1.398-.126 4.46 4.46 0 0 0 2.093.518C14.019 16 16 14.046 16 11.637c0-.696-.166-1.354-.46-1.938a7.43 7.43 0 0 0 .176-1.616z" />

                            <path class="letter" fill="currentColor"
                                d="M11.999 11.679c-.353.493-.874.883-1.551 1.159-.669.274-1.47.415-2.384.415-1.096 0-2.015-.19-2.733-.566a3.547 3.547 0 0 1-1.256-1.1c-.325-.46-.488-.917-.488-1.36 0-.274.107-.514.318-.709.209-.195.477-.292.797-.292.262 0 .488.077.672.23.175.148.326.366.447.645.135.306.282.564.437.765.151.197.366.361.641.49.277.128.65.195 1.108.195.631 0 1.149-.134 1.537-.395.381-.255.565-.563.565-.939 0-.296-.097-.53-.294-.713a2.104 2.104 0 0 0-.814-.444 16.188 16.188 0 0 0-1.4-.342c-.793-.167-1.466-.364-2-.59-.547-.23-.989-.548-1.311-.945-.328-.406-.494-.913-.494-1.509 0-.568.174-1.08.518-1.522.341-.439.839-.782 1.482-1.015.633-.231 1.386-.347 2.239-.347.681 0 1.28.078 1.781.232.503.154.927.362 1.26.619.336.26.586.535.742.823.158.29.239.579.239.858 0 .269-.105.514-.313.726-.21.214-.474.322-.784.322-.282 0-.504-.069-.657-.202-.143-.125-.292-.32-.456-.598a2.507 2.507 0 0 0-.685-.836c-.257-.193-.685-.289-1.275-.289-.546 0-.992.108-1.322.322-.318.205-.473.441-.473.721 0 .171.05.314.153.437.108.132.261.245.455.341.2.099.407.179.614.235.212.058.567.145 1.056.256.618.13 1.185.277 1.687.436.509.159.947.356 1.307.587.365.235.654.535.86.895.206.363.31.808.31 1.326a2.833 2.833 0 0 1-.535 1.678z" />
                        </svg>
                    </a>
                    <div class="help_message" font-body text-black bg-white>
                        <p>{{ formatPhoneNumber(socialMedia.skype.number) }}</p>
                        <p text-sm>
                            {{ socialMedia.skype.mail }}
                        </p>
                        <!-- <img src="/images/skype_qrcode.png" alt=""> -->
                        <div class="triangle triangle-whatsapp" />
                    </div>
                </div>
            </div>
            <Languages />
        </div>
    </nav>
</template>

<style lang="scss">
.nav_main_container {
    width: 100%;
    height: 100%;
    position: relative;

max-width: 1800px;
    .languages {
        position: absolute;
        top: 0;
        right: 12px;
    }
}

nav {
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    height: 60px;
    width: 100%;
    max-height: 60px;
    background-color: var(--color-top_bar);
    filter: brightness(0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--color-top_bar);
        // border-right: solid 2px #73859F; // when bar is on left
    }

    .letter {
        color: #17141d;
    }

    .contacts-main_container {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .social_media-main_container {
            position: relative;
            margin: 4px 8px;
        }

        svg {
            margin-left: auto;
            margin-right: auto;
            color: var(--color-social_media-icons_background); // Default background of icons
            width: 44px;

            path,
            stop {
                transition: color 0.3s ease;
            }

            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.1);
            }
        }

        *:hover {

            //For each child
            .help_message {
                opacity: 1;
                visibility: visible;
                transform: scale(1);
                scale: (2.7, 0.7);
            }
        }

    }
}

nav {

    // &:hover {
    .letter {
        color: #ffffff;
    }

    .icon-facebook #facebook-background {
        color: #1976D2;
    }

    // SKYPE
    .icon-skype #skype-background {
        color: #03A9F4;
    }

    // Instagram
    .icon-insta #insta-orange {
        color: #fa8f21;
    }

    .icon-insta #insta-pink {
        color: #d82d7e;
    }

    .icon-insta #insta-purple {
        color: #8c3aaa;
    }

    // Telegram
    .icon-telegram #telegram-blue_top {
        color: #2AABEE;
    }

    .icon-telegram #telegram-blue_bottom {
        color: #229ED9;
    }

    // Whatsapp
    .icon-whats #whats-light_green {
        color: #61fd7d;
    }

    .icon-whats #whats-dark_green {
        color: #2bb826;
    }

    // }
}

@media (max-width:850px) {
    .help_message {
        display: none;
    }
}

@media (min-width:851px) {
    .help_message {
        transition: opacity 0.3s ease;
        opacity: 0;
        transform: scale(0);
        visibility: hidden;
        position: absolute;
        top: 42px;
        right: -150px - 16px;
        min-width: 220px;
        border-radius: 8px;
        color: #000;
        margin-top: 8px;
        padding: 8px;
        text-align: center;
        width: 100%;

        img {
            width: 100%;
            height: fit-content;
        }
    }

    .triangle {
        visibility: visible;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid white;
        transition: opacity 0.6s ease;
        transform: translate(22px, -11px) rotate(0deg);
    }
}
</style>
