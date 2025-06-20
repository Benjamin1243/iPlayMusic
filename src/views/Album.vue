<script setup>
import HashTagsLinks from '@/components/HashTagsLinks.vue';
import SongPreview from '@/components/SongPreview.vue';


const songs = [
  { title: 'Song One', artist: 'Artist A', playTime: 210 },
  { title: 'Song Two', artist: 'Artist B', playTime: 180 },
  { title: 'Song Three', artist: 'Artist C', playTime: 240 }
]
const tags = [
    "hesja", "lejsa"
]
</script>

<template>
<div class="introDiv">
    <h2 class="introDiv__heading">Old Town Road</h2>
    <p class="introDiv__text">12 songs </p>
    <img class="introDiv__img" src="/postMalone.png" alt="">

    <div class="introDiv__bottomDiv">
        <p class="introDiv__bottomText">Genres Hashtag</p>
        <div class="introDiv__linkFlex">
            <HashTagsLinks v-for="tag in tags" :text="tag"></HashTagsLinks>
            <!--Component incomming-->
        </div>
    </div>
</div>
<SongPreview v-for="song in songs" :artist="song.artist" :title="song.title" :play-time="song.playTime"></SongPreview>

</template>

<style scoped lang="scss">
.introDiv{
    margin-bottom: 3.9375rem /* 47 / 16 = 2.9375 */;
   display: flex;
   flex-direction: column;
    
    height: 25rem /* 400 / 16 = 25 */;
    padding-left: 1.5625rem /* 25 / 16 = 1.5625 */;
    &__img{
       height: 30.3125rem /* 453 / 16 = 28.3125 */;
        object-fit: cover;
        position: absolute;
       margin-top: -3.3125rem /* 53 / 16 = 3.3125 */;
        margin-left: -1.5625rem /* 25 / 16 = 1.5625 */;
        z-index: -1;
    }
    &__heading{
        margin-top: 2.1875rem /* 35 / 16 = 2.1875 */;
       font-size: 2.25rem /* 36 / 16 = 2.25 */;

        color: white;
    }
    &__text{
        color: white;
    }
    &__bottomDiv{
      margin-top: auto;
        color: white;
    }
    &__linkFlex{
        display: flex;
        margin-top: 0.8125rem /* 13 / 16 = 0.8125 */;
    }
}
</style>