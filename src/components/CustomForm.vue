<script setup>
const params = defineProps({
   
    submit: Function
})

</script>

<template>
    <form class="customForm" :onsubmit="submit">
        <slot></slot>
        <input class="customForm__submit" type="submit">
    </form>
</template>

<style lang="scss"  scoped>

.customForm{
     margin-bottom: 3rem;
    &__submit{
        display: block;
        margin: 0 auto;
        width: 20.3rem;
        margin-top: 2.1rem;
        font-size: 0.95rem;
        height: 3.75rem;
        font-weight: bolder;
        background-color: transparent;
        border: 3px solid black;
        border-radius: 3rem;
        transition: 0.4s;
        &:hover{
            background-color: black;
            color: white;
        }
    }
   
}

</style>