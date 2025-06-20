<script setup>
const props = defineProps({
    heading: String,
    type: String,
    img: String,
})
</script>

<template>
<article class="featuredCard" :style="{backgroundImage: `url(${img})`}">
   <div class="featuredCard__backgroundDiv"></div>
    <h3 class="featuredCard__heading">{{ heading }}</h3>
    <p class="featuredCard__text">{{ type }}</p>
</article>

</template>

<style scoped lang="scss">
@use "../assets/variabels.scss";
.featuredCard{
    display: grid;
   
    background-size: cover;
    padding-left: 1.2rem;
    margin: 0 auto;
     margin-top: 2rem;
     margin-bottom: 3rem;
     
    min-width: 20.3rem;
    width: 90%;
    max-width: 28rem;
    height: 26.5rem;
  
    grid-template-columns: 1fr;
    border-radius: 0.5rem;
    grid-template-rows: 1fr;
  
&__backgroundDiv{
    background: variabels.$filterGradient;
grid-row: 1/-1;
 border-radius: 0.5rem;
grid-column: 1/-1;
}
&__heading{
    grid-row: 1/-1;
    grid-column: 1/-1;
   
    color: variabels.$white;
    font-size: 2.1rem;
    align-self: flex-end;
    font-weight: bold;
    padding-bottom: 5rem;
}
&__text{
    align-self: flex-end;
    font-size: 0.75rem;
    padding-bottom: 3rem;
    color: variabels.$white;
    font-weight: 200;
     grid-row: 1/-1;
    grid-column: 1/-1;
}
}

</style>