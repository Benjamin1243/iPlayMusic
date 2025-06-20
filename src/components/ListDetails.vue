<script setup>
const props = defineProps({
    heading: String,
    elements: Array,

})

</script>


<template>

    <section class="listdetail">
        <div class="listdetail__topDiv">
            <h3 class="listdetail__heading">{{ heading }}</h3>
            <p>View All</p>
        </div>
        <div class="listdetail__flexDiv">
            <div v-for="element in elements" class="listdetail__element">
                <img :src="element.img" class="listdetail__img" alt="">
                <div class="listdetail__textDiv">
                    <h3 class="listdetail__elementHeading">{{ element.heading }}</h3>
                    <p class="listdetail__artist"> {{ element.text }}</p>
                </div>
                <p class="listdetail__elementLastInfo"> {{ element.lastInfo }}</p>
            </div>
            
        </div>
    </section>


</template>

<style lang="scss" scoped> 

.listdetail{
    margin-top: 2.3125rem /* 37 / 16 = 2.3125 */;
    padding-left: 1.625rem /* 26 / 16 = 1.625 */;
    padding-right: 1.5rem /* 24 / 16 = 1.5 */;
    &__topDiv{
        display: flex;
        margin-bottom: 1.3125rem /* 21 / 16 = 1.3125 */;
        justify-content: space-between;
       
    }
    &__flexDiv{
        display: flex;
        flex-direction: column;
        gap: 1.5rem /* 24 / 16 = 1.5 */;
    }
    &__element{
        display: flex;
        gap: 1.125rem /* 18 / 16 = 1.125 */;
       
    }
    &__textDiv{
        align-self: center;
        & h2{
            font-size: 0.9375rem /* 15 / 16 = 0.9375 */;
        }
        & p{
            font-size: 0.75rem /* 12 / 16 = 0.75 */;
        }
    }
    &__img{
      flex-shrink: 0;
      border-radius: 0.5rem /* 8 / 16 = 0.5 */;
       aspect-ratio: 1/1;
        width: 16%;
    }
    &__elementLastInfo{
        align-self: center;
        justify-self: end;
        margin-left: auto;
        font-weight: lighter;
        font-size: 0.75rem /* 12 / 16 = 0.75 */;
    }
}
</style>