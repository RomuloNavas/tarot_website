<script setup lang="ts">

</script>

<template>
    <div class="separator">
        <a class="circle" href="#about_me">
            <svg class="fade-in-down " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" class="nc-icon-wrapper">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#17141d" />
                </g>
            </svg>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.separator {
    background-color: #d1d5db;
    height: 2px;
    width: 100%;
    min-width: 100%;
    margin-top: 48px;
    margin-bottom: 48px;
}

.circle {
    height: 40px;
    width: 40px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transform: translateY(-50%);

    svg {
        animation: fade-in-down 2s ease infinite;

    }

}

@media (max-width:820px) {

    .separator {
        display: none;
    }
}

.fade-in-down {
    animation: fade-in-down 2s ease infinite;
}

@keyframes fade-in-down {
    0% {
        opacity: 0;
        transform: translateY(-4px);
    }

    100% {
        opacity: 1;
        transform: translateY(2px);
    }
}
</style>
