<script setup lang="ts">
import GradientHeading from '@/components/GradientHeading.vue';
import ImageList from '@/components/ImageList.vue';
import ListDetails from '@/components/ListDetails.vue';

const imgs = ["/hard.png", "/hard.png", "/hard.png", "/hard.png", "/hard.png", "/hard.png"]
const elements = [
  {
    img: '/hard.png',
    heading: 'Titel 1',
    text: 'Kunstner 1',
    lastInfo: 'Ekstra info 1'
  },
  {
    img: 'hard.png',
    heading: 'Titel 2',
    text: 'Kunstner 2',
    lastInfo: 'Ekstra info 2'
  },
  {
    img: '/hard.png',
    heading: 'Titel 3',
    text: 'Kunstner 3',
    lastInfo: 'Ekstra info 3'
  }
]

</script>

<template>
  <div class="about">
    <GradientHeading heading="All Albums"></GradientHeading>
      <ImageList heading="Hejsa" :elements="imgs"></ImageList>
      <ListDetails :elements="elements" heading="New Realese"></ListDetails>
  </div>
</template>

<style>


</style>
