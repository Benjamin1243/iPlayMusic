<script setup>

const props = defineProps({
   
   heading: String,
  
})
</script>
<template>
<h2 class="gradient__heading">{{ heading }}</h2>

</template>

<style scoped lang="scss">
@use "../assets/variabels.scss";
.gradient__heading{
 padding-left: 1.6rem; 
 background: variabels.$iconColor;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 padding-top: 3rem;
 margin: 0 auto;
 font-size: 2rem;

 max-width: 2000px;
}

</style>