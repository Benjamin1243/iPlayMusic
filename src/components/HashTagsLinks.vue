<script setup>
const props = defineProps({
text: String
})
</script>

<template>
<RouterLink class="hashTagLink">#{{text }}</RouterLink>

</template>

<style scoped lang="scss">
@use "../assets/variabels.scss";
.hashTagLink{
    display: block;
    color: white;
    background-color: variabels.$pink;
    margin-right: 0.5rem;
    padding: 0.6875rem /* 11 / 16 = 0.6875 */;
    flex-shrink: 0;
    text-align: center;
    font-size: 0.9375rem /* 15 / 16 = 0.9375 */;
    text-decoration: none;
    width: auto; /* 41 / 16 = 2.5625 */;
    border-radius: 3.125rem /* 50 / 16 = 3.125 */;
    font-weight: 600;
    
   
}



</style>