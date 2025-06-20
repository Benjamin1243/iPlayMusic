<script setup>

const props = defineProps({
    imgs: Array
})
</script>

<template>
    <div class="imageSlideScroller">
    
   <h2 class="imageSlideScroller__Holeheading">Playlist</h2>
    <img class="imageSlideScroller__backGroundImg" src="/sound-wave.png" alt="">
 <div class="imageSlideScroller__flexDiv">
        <img  class="imageSlideScroller__img imageSlideScroller__img--little" src="/hard.png" alt="">
        <div><img  class="imageSlideScroller__img" src="/hard.png" alt="">
        <h3 class="imageSlideScroller__heading">wewe</h3></div>
        <img  class="imageSlideScroller__img imageSlideScroller__img--little" src="/hard.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped >

.imageSlideScroller{
  position: relative;
  
   
    top: 0;
    
    
    z-index: -1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    &__flexDiv{
        margin-top: 10vh;
        width: 100%;
    display: flex;
    align-self: center;
    grid-column: 1;
    grid-row: 1;
    justify-content: space-between;
    overflow: hidden;
    }
    &__Holeheading{
        font-size: 2.25rem;
        color: white;
        padding: 2rem;
        grid-column: 1;
        grid-row: 1;
        z-index: 10;
      
    }
    &__backGroundImg{
       max-height: 30rem;
        object-fit: cover;
        margin-top: -5rem;
        grid-column: 1;
        grid-row: 1;
    }
    &__img{
      
        width: 9.68rem;
        border-radius: 0.2rem;
        align-self: center;
        height: 9.68rem;
        &--little{
            width: 6.25rem;
            margin-left: -2rem;
            height: 6.25rem;

        }
        &:nth-child(3){
            margin-right: -2rem;
        }

    }
    &__heading{
        text-align: center;
        font-size: 1.25rem;
    }
}
</style>