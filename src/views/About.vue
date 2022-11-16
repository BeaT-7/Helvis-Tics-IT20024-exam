<script>
import { auth } from "../stores/auth.js"
export default {
    data(){
        return{
            formEdit: false,
            code: auth.user.code,
            name: auth.user.name,
            surname: auth.user.surname
        }
    },
    methods:{
        editForm(){
            this.formEdit = this.formEdit?false:true;
        },
        updateUser(){
            auth.setUserData(this.name, this.surname, this.code);
        }
    }
}
</script>


<template>
    <div id="about-view">
        <div class="wrapper-header">
            <h1>ABOUT ME</h1>
            <div class="settings">
                <button id="btn-edit" @click="editForm()">{{formEdit?'Cancel':'EditForm'}}</button>
                <button id="btn-save" v-show="formEdit" @click="editForm(), updateUser()">Save Form</button>
            </div>
        </div>
        <form>
            <div class="wrapper-input">
                <label>NAME</label>
                <input id="input-name" v-model="this.name" v-show="formEdit" />
                <p id="txt-name" v-show="!formEdit">John</p>
            </div>
            <div class="wrapper-input">
                <label >SURNAME</label>
                <input id="input-surname" v-model="this.surname" v-show="formEdit" />
                <p id="txt-surname" v-show="!formEdit">Smith</p>
            </div>
            <div class="wrapper-input">
                <label>STUDENT CODE</label>
                <input id="input-code" v-model="this.code" v-show="formEdit" />
                <p id="txt-code" v-show="!formEdit">IT1234</p>
            </div>
            <div class="wrapper-songs">
                <label>FAVORITE SONGS</label>
                <ul>
                    <li>
                        <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                        <div class="song-info">
                            <p id="txt-song" class="song-name">DEEP (feat. Nonô)</p>
                            <p id="txt-artist" class="song-artists">Example</p>
                        </div>
                    </li>
                </ul>
                <div id="txt-empty" class="empty">NO SONGS FOUND</div>
            </div>
        </form>
    </div>
</template>