<script>
import { auth } from "../stores/auth.js"

export default{
    data() {
        return{
            email : "",
            password : ""
        }
    },
    methods: {
        login(){
            auth.authenticate(this.email, this.password);
        },
    },
    computed: {
        isDisabled() {
            if(Object.keys(this.password).length >= 6 && Object.keys(this.email).length > 1){
                return 0;  
            } 
            return 1;
        }
    }

}
</script>


<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" v-model="email" placeholder="E-mail" />
            <input id="input-password" v-model="password" placeholder="Password" />
            <button id="btn-submit" @click="login" :disabled=isDisabled>LOGIN</button>
        </form>
    </div>
</template>