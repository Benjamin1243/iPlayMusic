<script setup>
import DropDown from '@/components/DropDown.vue';
import GradientHeading from '@/components/GradientHeading.vue';
const dropdowns = [
  {
    title: "Genre",
    items: ["Pop", "Rock", "Jazz", "Hip Hop"]
  },
  {
    title: "Artist",
    items: ["Taylor Swift", "The Beatles", "Miles Davis", "Kendrick Lamar"]
  },
  {
    title: "Year",
    items: ["2020", "2021", "2022", "2023"]
  }
]

const colors = ["rgb(215, 0, 96)", "rgb(229, 64, 40)", "rgb(241, 141, 5)", "rgb(242, 188, 6)", "rgb(94, 177, 28)", "rgb(58, 118, 52)"]



</script>

<template>
<GradientHeading heading="Categories">Categories</GradientHeading>
<DropDown  v-for="dropDown, index in dropdowns" :color="colors[index]" :title="dropDown.title" :elements="dropDown.items"></DropDown>


</template>


<style lang="scss" scoped>
</style>