<script setup></script>

<template>
    <div class="player">
    <img class="player__img" src="/postMalone.png" alt="">
    <div class="player__middleImgDiv">
        <div class="player__middleImgDivInner">
        <img class="player__middleImg" src="/postMalone.png" alt="">
        </div>
    </div>
    <h2 class="player__title">hejsa</h2>
    <p class="player__title">hehehr</p>
    <div class="player__playBarDiv">
        <input type="range" max="300" min="0">
        <p class="player__minText">1</p>
        <p class="player__minText"></p>
    </div>
    </div>
</template>


<style lang="scss" scoped>

.player{
    width: 100%;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(1,1fr);
    top: 0;
    position: absolute;
    display: grid;
    height: 100vh;
    &__img{
        grid-column: 1/1;
       grid-row: 1/1;
        z-index: -1;
        top: 0;
        height: 100vh;
        object-fit: cover;
    }
    &__middleImgDiv{
         grid-column: 1/1;
       grid-row: 1/1;
       border-radius: 100%;
       padding: 1rem ;
       background-color: rgba(255, 17, 104, 0.153);
       justify-self: center;
       align-self: center;
       display: grid;
      width: 20.3125rem /* 325 / 16 = 20.3125 */;
      aspect-ratio: 1/1;
      justify-content: center;
      align-items: center;
      
       
    }
    &__middleImgDivInner{
        width: 17.1875rem /* 275 / 16 = 17.1875 */;
        aspect-ratio: 1/1;
       background-color: rgba(255, 17, 104, 0.218);
        border-radius: 100%;
        display: grid;
        justify-content: center;
        align-items: center;
    }
    &__middleImg{
        
         border-radius: 100%;
 width: 14.0625rem /* 225 / 16 = 14.0625 */;
        height: 14.0625rem /* 225 / 16 = 14.0625 */;
    }
    &__title{
        color: white;
    }
}
</style>