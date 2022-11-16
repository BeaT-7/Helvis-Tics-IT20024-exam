<script>
import { auth } from "./stores/auth.js"
export default{
    data() {
        return{
            isAut : auth.is_authenticated
        }
    }
}
</script>

<template>
    <Header v-show="isAut"></Header>
    <div id="section-body" >
        <Navigation v-show="isAut"></Navigation>
        <router-view class="section-router"></router-view>
    </div>
    <div id="section-player" v-show="isAut">
        <AudioPlayer />
    </div>
</template>
