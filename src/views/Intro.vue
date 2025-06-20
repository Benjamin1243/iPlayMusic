<script setup>
import LogoLink from '@/components/LogoLink.vue';
import { ref } from 'vue';
const buttons = ref([{id: 1, icon: "io-radio", red: true, text : "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.", heading:"Where Words Fail, Music Speaks" },{id: 2, icon: "bi-heart-fill", red: false, text: "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.", heading: "No Music No Life"},{id: 3, icon: "io-musical-note-sharp", red: false, text: "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.", heading : "Peace.Love Music"}])
const presentButton = ref(0)
function newStep(index){
    buttons.value[index -1].red = true
    buttons.value[presentButton.value].red = false
    presentButton.value = index -1


}

</script>

<template >
    <section class="intro">
<img class="intro__img" src="/colorWave.png" alt="">
<h1 class="intro__heading">{{ buttons[presentButton]?.heading }}</h1>
<p class="intro__text">{{ buttons[presentButton]?.text }}</p>
<div class="intro__flexDiv">
    <LogoLink :red="button?.red" v-for="button, index in buttons" :key="button?.id" :click-func="(evt,index)=>{
        newStep(button?.id)
    }" >
          <v-icon   class="icon" :name="button?.icon"/>
    </LogoLink>

</div>
<RouterLink class="intro__link" to="/featured">Skip</RouterLink>
</section>


</template>


<style lang="scss" scoped>
@use "../assets/variabels.scss";
.intro{
    &__img{
        max-width: 400px;
        display: block;
        margin: 0 auto;
    }
    &__flexDiv{
        display: flex;
        margin: 0 auto;
        max-width: 20rem;
    }
    &__text{
        font-size: 0.9rem;
        font-weight: lighter;
       width: 80%;
       max-width: 500px;
       text-align: center;
       margin: 0 auto;
       margin-bottom: 2.2rem;
    }
    &__heading{
        text-align: center;
        margin-top: 0.6rem;
        transition: 0.4s;
    }
    &__link{
        text-align: center;
        margin: 0 auto;
        display: block;
        margin-top: 2rem;
        text-decoration: none;
        color: variabels.$black;
        font-weight: lighter;
    }
}
</style>