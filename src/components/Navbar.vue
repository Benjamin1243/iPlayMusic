<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

</script>
<template>
    <svg width="0" height="0" style="position:absolute;">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FF6A00" stop-opacity="1" />
          <stop offset="100%" stop-color="#EE0979" stop-opacity="1" />
        </linearGradient>
      </defs>
    </svg>
    <nav class="navBar">
        <ul class="navBar__list">
            <li class="navBar__listItem">
               <RouterLink class="navBar__link" to="/about?navbar=false"> <v-icon class="navBar__icon" name="io-pulse" /></RouterLink></li>
               <li class="navBar__listItem"> <RouterLink class="navBar__link" to="/about"> <v-icon class="navBar__icon" name="fa-microphone-alt"/></RouterLink>
                </li>
               <li class="navBar__listItem"><RouterLink class="navBar__link" to="/about"> <v-icon class="navBar__icon"  name="md-wifitethering-twotone"/></RouterLink></li>
               <li class="navBar__listItem"> <RouterLink class="navBar__link" to="/about"> <v-icon class="navBar__icon" name="io-contrast-outline"/></RouterLink></li>
               <li class="navBar__listItem"> <RouterLink class="navBar__link" to="/about"> <v-icon class="navBar__icon" name="bi-gear-fill"/></RouterLink>


            


        </li>
    </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use "../assets/variabels.scss";
.navBar{
    background-color: white;
    z-index: 10;
    height: 4rem;
    box-shadow: 0px -10px 10px #0000003b;
    
    padding: 0.85rem 10.8%;
    position: fixed;
    bottom: 0;
  
    width: 100%;
   &__list{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
   }
   &__link{
   height: 100%;

   

  
   
   }
   &__listItem{
       display: inline-block;

  list-style: none;
   }
   &__icon{
    width: 3rem;
    height: 2rem;
 
 
  fill: url(#grad1);
stroke: none;



   }
   
}
circle{
    background-color: antiquewhite;
}


</style>