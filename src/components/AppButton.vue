<script setup lang="ts">
const appState = useAppStateStore()
</script>

<template>
    <button class="button" :class="[appState.isBigFire ? 'isBigFire' : '']">
        <p>
            <slot />
        </p>
        <div class="button__horizontal" />
        <div class="button__vertical" />
    </button>
</template>

<style lang="scss" scoped>


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
    min-width: 60px;

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
</style>
