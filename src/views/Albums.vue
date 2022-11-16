<script>
import IconGrid from "../components/icons/IconGrid.vue"
import IconList from "../components/icons/IconList.vue"
import songList from "../data/songs.js"

export default {
    data(){
        return{
            isGrid : false,
            songs : songList,
        }
    },
    components: {
        IconGrid,
        IconList,
    },
    methods: {
        toGrid(val){
            if(val == 1){
                this.isGrid = true;
            } else if(val == 2) {
                this.isGrid = false;
            }
        },
    },
    computed:{
    }
}
</script>
<template>
    <div id="album-view">
        <div class="wrapper-header">
            <h1>ALBUMS</h1>
            <div class="settings">
                <button id="btn-grid" :class="{active: isGrid}" @click="toGrid(1)">
                    <IconGrid />
                </button>
                <button id="btn-list" :class="{active: !isGrid}" @click="toGrid(2)">
                    <IconList />
                </button>
            </div>
        </div>
        <ul id="list-albums" :class="{grid: isGrid}">
            <li class="album">
                <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                <div class="album-info">
                    <h4 id="txt-album-name">We May Grow Old But We Never Grow Up</h4>
                    <p id="txt-album-artists">Example</p>
                    <div class="album-year">
                        <p id="txt-album-year">2022</p>
                        <p id="txt-album-tracks">2</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>