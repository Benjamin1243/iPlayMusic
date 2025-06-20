<script setup>
import { ref } from 'vue'


const props = defineProps({
    heading: String,
   
})



const navColor = ref()



 setTimeout(() => {
    
  
let h1tjek = document.querySelector("h2")
let colorh1 = getComputedStyle(h1tjek).color
console.log(colorh1)
if(colorh1 == "rgb(255, 255, 255)"){
  
  navColor.value = "white"
}
}, 100)



</script>
<template>
<section class="topNavBar" :style="navColor == 'white' ?{color: 'white'}:'' ">
    <v-icon   class="topNavBar__icon" name="ri-arrow-left-s-line"/>
<h1 class="topNavBar__heading"><slot></slot></h1>
 <v-icon   class="topNavBar__icon" name="bi-search"/>
</section>

</template>

<style scoped lang="scss">

.topNavBar{
   
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    padding-top: 2rem;
    &__heading{
        font-size: 0.9rem;
        font-weight: lighter;
    }
}
</style>