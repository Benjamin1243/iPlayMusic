<script setup>
import navbar from './components/Navbar.vue'
import { RouterLink, RouterView, useRoute, } from 'vue-router'
import { computed, onActivated, onUpdated, ref, watch } from 'vue';
import { onMounted } from 'vue'
import TopNavBar from './components/TopNavBar.vue';
//UseRoute er automatisk en ref, så den opdatere automatisk
const route  = useRoute()
//en computed funktion skal bruge en getter funktion altså en data.data o
//den opretter så en ny ref som i dette tilfælde hedder updateRoute
//vue er selv vidne om at den skal holde øje med når variablen efter . opdatere
//så derfor opdatere den ref'en når .daten er opdatert
console.log()

watch(route, ()=>{
  console.log(route.matched[0].name)
  console.log(route)
})
const updatedRoute = computed(()=>{
  return route.query?.navbar == "false"

})
const topNavBarIf = computed(()=>{
  return route.query?.header == "false"

})




</script>

<template>
<header  v-if=!topNavBarIf>
  <TopNavBar>{{ route?.matched[0]?.name }}</TopNavBar>
</header>
<main>
  <RouterView v-slot="{Component}" ></RouterView>
  </main>
  <footer>
   <navbar v-if=!updatedRoute></navbar> 
  </footer>
</template>

<style scoped>
</style>
