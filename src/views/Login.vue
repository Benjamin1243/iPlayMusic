<script setup>
import CustomForm from '@/components/CustomForm.vue';
import LoginInput from '@/components/LoginInput.vue';
import LogoLink from '@/components/LogoLink.vue';
import { useRouter } from 'vue-router';

const inputs = [{label: "Username", placeholder: "erer", icon: "bi-person-circle", placeholder: "Enter you username" }, {label: "Password", placeholder: "erer", icon: "ri-key-2-fill", placeholder:"Enter you password" }]
const router = useRouter();
function submitter(evt){
    evt.preventDefault()
    router.push("/intro?navbar=false&header=false")
   

}

</script>


<template>
<h1 class="login__heading">Login</h1>
<CustomForm :submit="submitter">
<LoginInput v-for="input in inputs" :key="input.id" :placeholder="input.placeholder" :label=input.label>
   <v-icon class="icon" :name="input.icon"/>
</LoginInput>
</CustomForm>
<LogoLink text="OneTouch-login"><v-icon class="icon" name="io-finger-print-outline"/></LogoLink>
</template>

<style lang="scss" scoped>
.login{
    &__heading{
        margin-top: 2.2rem;
        margin-bottom: 10.8rem;
        margin-left: auto;
        max-width: 300px;
        margin-right: auto;
    }
}

</style>