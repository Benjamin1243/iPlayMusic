<script setup>
const props = defineProps({
    label: String,
    placeholder: String
})
</script>

<template>
 <div class="loginInput">
    <label class="loginInput__label" for="">{{ label }}</label>
    <input class="loginInput__input" :placeholder="placeholder" type="text">
    <slot ></slot>

 </div>
</template>
<style lang="scss" >
.loginInput{
    margin-top: 2rem;
    padding: 0 40%;
    display: grid;grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    &__label{
        grid-column: 1/-1;
    }
    &__input{
        font-size: 0.9rem;
      padding-bottom: 0.5rem;
        font-weight: normal;
        border: none;
        border-bottom: 3px solid black;
        grid-column: 1/-1;
        grid-row: 2/3;
        z-index: 1;
        background-color: transparent;
        &::placeholder{
           font-weight: lighter;
          
        }
    }
    .icon{
        grid-column: 1/-1;
      
        grid-row: 2/3; 
        width: 1.3rem;
        height: 1.3rem;
    justify-self: end;   }
}
</style>