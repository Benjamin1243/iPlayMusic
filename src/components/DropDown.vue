<script setup>
import { ref } from 'vue';
import 'animate.css';
import { RouterLink } from 'vue-router';

const props = defineProps({
     elements: Array,
     title: String,
     color: String
})
const show = ref(false)
function openOrClose(){
    show.value = !show.value
}

//Jeg mangler at adde link men det gør jeg når jeg kommer dertil
</script>



<template>

<div class="dropDown"  >
    <div @click="openOrClose" class="dropDown__topDiv" :style="{backgroundColor: color}">
    <h3 class="dropDown__title" >{{ title }} </h3>
    <v-icon class="dropDown__icon" name="md-morehoriz"></v-icon>
    </div>
    <div class="dropDown__dropDownDiv">
        <RouterLink class="dropDown__text " v-if="show" v-for="element, index in elements">{{element }} <v-icon   class="dropDown__Picon" name="ri-arrow-left-s-line"/>
        </RouterLink>
    </div>
</div>


</template>
<style scoped lang="scss">
@use  "../assets/variabels.scss";
.dropDown{
    margin-bottom: 1rem;
    max-width: 90rem;
    margin: 1rem auto;
    margin-top: 1.6875rem /* 27 / 16 = 1.6875 */;
   width:91%;
   max-width: 37.5rem /* 600 / 16 = 37.5 */;
   &__topDiv{
    padding-right: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

  
  align-content: center;
  height: 3rem;
  border-radius: 0.5rem;
   }
   &__icon{
    color: white;
   
   }
   &__dropDownDiv{
  
   }
   &__Picon{
  margin-left: auto;
  transition: 0.4s;
  transform: rotate(180deg);
   
   }
    &__title{
         padding-left: 1.3rem;
         
         
        color: white;
    }
    &__text{
        display: flex;
        text-decoration: none;
        color: variabels.$black;
        margin: 1rem 0;
        transition: 0.4s;
        padding-left: 1.3rem;
        
        &:hover{
          transform: scale(1.01);
          
        }
        &:hover svg{
            transform: scale(1.2);
            transform: rotate(-90deg);
        }
    }
}
</style>