<script setup >
import GradientHeading from '@/components/GradientHeading.vue';
import TopNavBar from '../components/TopNavBar.vue';
import FeaturedCard from '@/components/FeaturedCard.vue';

</script>

<template>
    <GradientHeading heading="Featured"></GradientHeading>
   <FeaturedCard type="soundrtrack" heading="The Greatest Snowman" img="/album.png"></FeaturedCard>
      <FeaturedCard type="soundrtrack" heading="The Greatest Snowman" img="/hard.png"></FeaturedCard>

</template>

<style scoped>
</style>