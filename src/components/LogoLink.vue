<script setup>
const props = defineProps({
   red: Boolean,
   text: String,
   clickFunc: Function
})

</script>
<template>

    <button @click="clickFunc" href="" class="logoLink" :class="red ?'logoLink--red': '' ">
        <slot ></slot>
    
       
    </button>
     <p v-if="text" class="logoLinkText" >{{ text }}</p>
</template>

<style lang="scss" >
@use "../assets/variabels.scss";
.logoLink{
    transition: 0.4s;
    width: 4.6rem;
    height: 4.6rem;
    display: block;
    border-radius: 100%;
    margin: 0 auto;
    border: 0px solid transparent;
    display: grid;
    justify-content: center;
    align-content: center;
    padding: 1rem;
    background-color: white;
    border: 3px solid black;
    color: black;
    &--red{
    background-color: variabels.$pink;
    border: transparent;
    color: white;
     svg{
        color: white !important
    }
   

    }
    svg{
        color: black
    }
   
    svg{
        transition: 0.4s;
       
       
       
       width: 1.9rem;
       height: 1.9rem
    }
}
.logoLinkText{
     
   font-weight: lighter;
    text-align: center;
    margin: 1rem auto;
}
</style>