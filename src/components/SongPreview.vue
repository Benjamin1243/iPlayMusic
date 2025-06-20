<script setup>
const props = defineProps({
    title: String,
    artist: String,
    playTime: Number
    
})

</script>

<template>

<article class="songPreview">
<v-icon name="fa-play-circle" class="songPreview__icon"></v-icon>
<div class="songPreview__textDiv">
    <h3 class="songPreview__heading">{{ title }}</h3>
    <p class="songPreview__artist">{{ artist }}</p>
</div>
<p class="songPreview__time">{{ playTime }}</p>
</article>

    
</template>

<style lang="scss" scoped>
@use "../assets/variabels.scss";
.songPreview{
   
    display: flex;
    gap: 1rem;
    padding: 0 1.5rem;
    max-width: 80rem;
    margin: 1rem auto;
    &__icon{
        font-size: 5rem;
        width: 2rem;
        height: 2rem;
        color: #EE0979;
    }
    &__heading{
        color: variabels.$black;
        font-size: 0.9rem;
    }
    &__artist{
        font-size: 0.75rem;
        font-weight: lighter;
    }
    &__time{
        margin-left: auto;
        font-weight: lighter;
       font-size: 0.75rem /* 12 / 16 = 0.75 */;
    }
}
</style>