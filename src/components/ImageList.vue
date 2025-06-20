<script setup>
const props = defineProps({
    elements : Array,
    heading : String
})
</script>

<template>
    <section class="imageList">
        <div class="imageList__topDiv">
            <h3 class="imageList__heading">{{ heading }}</h3>
            <p>View All</p>
        </div>
        <div class="imageList__flexDiv">
            <img class="imageList__img" :src="element" v-for="element in elements" alt="">
            
        </div>
    </section>


</template>
<style lang="scss" scoped>
.imageList{
    margin-top: 2.3125rem /* 37 / 16 = 2.3125 */;
   
  &__topDiv{
    padding-left: 1.625rem /* 26 / 16 = 1.625 */;
    display: flex;
    justify-content: space-between;
    padding-right:  1.625rem /* 26 / 16 = 1.625 */ ;
    padding-bottom: 0.9375rem /* 15 / 16 = 0.9375 */;
  }

    &__flexDiv{
    display: flex;
    overflow: scroll;
    gap: 0.9375rem /* 15 / 16 = 0.9375 */;
   

    }
    &__img:first-of-type{
        margin-left: 1.625rem /* 26 / 16 = 1.625 */;
    }
    &__img{
       max-width: 20rem;
      flex-shrink: 0;
       width: calc(33vw + 1rem);
       
       height: calc(33vw + 1rem);
        border-radius: 0.5rem /* 8 / 16 = 0.5 */;
        max-width: 20rem;
        max-height: 20rem;
    }
}
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

</style>