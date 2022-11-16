<script>
import { auth } from "../stores/auth.js"
import songList from "../data/songs"
import { player } from "../stores/player.js"
import IconPlay from '../components/icons/IconPlay.vue'
import IconCaretUp from '../components/icons/IconCaretUp.vue'
import IconHeart from '../components/icons/IconHeart.vue'

export default {
    data() {
        return{
            search : "",
            show_favorite : false,
            sortByTitle : false,
            sortByLength : false,
            sortByStageT : 1,
            sortByStageL : 1,
            sortStage : 1,
            songs : songList,
            
        }
    },
    methods: {
        handleScroll(event) {
            this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
        },
        sortBy(val) {
            if(val == 1) {
                this.sortByTitle = true;
                this.sortByLength = false;
                this.sortByStageT += 1;
                this.sortByStageL = 1;
                this.sortStage = this.sortByStageT;
            } else if(val == 2) {
                this.sortByTitle = false;
                this.sortByLength = true;
                this.sortByStageT = 1;
                this.sortByStageL += 1;
                this.sortStage = this.sortByStageL;
            }
            if(this.sortStage > 3){
                this.sortByTitle = false;
                this.sortByLength = false;
                this.sortByStageT = 1;
                this.sortByStageL = 1;
                this.sortStage = 1;
            }
            if(this.sortByTitle == true){

            } else if(this.sortByLength == true){
                
            }
        },
        getTime(mil){
            let min = Math.floor(mil / 60000);
            let sec = ((mil % 60000) / 1000).toFixed(0);
            return sec == 60 ? (min+1) + ":00" : min + ":" + (sec < 10 ? "0" : "") + sec;
        },
        getArtists(artists) {
            var list = '';
            artists.forEach(element => {
                list = list.concat(element.name).concat(", ")
            })
            list = list.slice(0, -2)
            return list;
        },
        selectSong(song){
            player.setNowPlaying(song);
        },
        isPlaying(song){
            return player.getNowPlaying() == song;
        },
        show_favorites(){
            this.show_favorite = this.show_favorite?false:true;

        }
    },
    computed: {
        filtered_songs : ""
    },
    components: {
        IconCaretUp, 
        IconHeart,
        IconPlay
    }
}
</script>


<template>
    <div id="songs-view" @scroll="handleScroll">
        <div class="wrapper-header">
            <h1>SONGS</h1>
            <div class="wrapper-search">
                <input id="input-search" v-model="this.search" placeholder="Search by title..." />
            </div>
            <div class="wrapper-settings">
                <button id="btn-show-favorites" :class="{active: show_favorite}" @click="show_favorites()">Show Favorites</button>
            </div>
        </div>
        <div class="wrapper-songs">
            <table cellspacing="0" cellpadding="0">
                <tr ref="header">
                    <th id="th-id" >#</th>
                    <th id="th-title" :class="{active: sortByTitle}" @click="sortBy(1)">
                        Title
                        <IconCaretUp v-show="sortByTitle" :class="{'flip-vertical': sortByStageT == 3}" />
                    </th>
                    <th id="th-artist">Artist</th>
                    <th id="th-album">Album</th>
                    <th id="th-duration" :class="{active: sortByLength}" @click="sortBy(2)">
                        Duration
                        <IconCaretUp v-show="sortByLength" :class="{'flip-vertical': sortByStageL == 3}"/>
                    </th>
                </tr>
                <!-- Loop goes on this <tr> element -->
                <tr class="song" v-for="(song, index) in songs" :key="index" @dblclick="selectSong(song)" :class="{active : isPlaying(song)}">
                    <td id="td-index">
                        <IconPlay />
                        <span id="txt-index" v-text="index+1" ></span>
                    </td>
                    <td id="td-title">
                        <img :src="song.album.images[0].url" />
                        {{song.name}}
                    </td>
                    <td id="td-artist">{{getArtists(song.artists)}}</td>
                    <td id="td-album">{{song.album.name}}</td>
                    <td id="td-duration">
                        {{getTime(song.duration_ms)}}
                        <IconHeart />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
