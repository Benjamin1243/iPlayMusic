<script setup>
import ImageSlideScroller from '@/components/ImageSlideScroller.vue';
import SongPreview from '@/components/SongPreview.vue';
const songs = [
  { title: 'Song One', artist: 'Artist A', playTime: 210 },
  { title: 'Song Two', artist: 'Artist B', playTime: 180 },
  { title: 'Song Three', artist: 'Artist C', playTime: 240 }
]

</script>

<template>
 
    <ImageSlideScroller class="imageScroller"></ImageSlideScroller>
    <SongPreview v-for="song in songs" :title="song.title" :artist="song.artist" :playTime="song.playTime"></SongPreview>
    
</template>

<style scoped lang="scss">
@use "../assets/variabels.scss";
.waweImg{
    position: absolute;
    top: 0;
    z-index: -10;
    max-height: 30rem;
    object-fit: cover;
}
.playlistHeading{
    color: variabels.$white;
    padding-left: 1.8rem;
    margin-top: 2rem;
}
.imageScroller{
    margin-top: 1rem;
}
</style>