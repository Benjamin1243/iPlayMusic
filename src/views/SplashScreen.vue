<script setup>
import { useRouter } from 'vue-router';
import 'animate.css';

let router = useRouter()

setTimeout(animation2, 2000);
function animation2(){
    document.querySelector("img").classList.add("animate__backOutDown")
     document.querySelector("h1").classList.add("animate__backOutUp")
     setTimeout(out, 2000);
}
function out(){
   router.push("/login?navbar=false&header=false")
}
 setTimeout(animation2, 2000);

 if(router.query?.navbar !== "false"){
router.push("/?navbar=false&header=false")
 }

</script>

<template>
    <section class="splashScreen animate__animated animate__bounceInDown">
    <img class="splashScreen__image animate__animated" src="/music-logo-solid.png" alt="">
    <h1 class="splashScreen__heading animate__animated">iPlayMusic</h1>
  
    </section>
    
</template>

<style lang="scss" scoped>
@use "../assets/variabels.scss";
.splashScreen{

    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    height: 90vh;
    margin: auto;
    &__heading{
        margin-top: 1.9rem;
        font-family: variabels.$poppins;
        font-weight: bolder;
        font-size: 2rem;
    }
}

</style>