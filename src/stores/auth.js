import { reactive } from 'vue'

export const auth = reactive({
    
    user : {
        name            :   "Helvis",
        surname         :   "Tīcs",
        code            :   "IT20024",
        favorite_songs  :   []
    },
    
    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) {
        this.user.name = name;
        this.user.surname = surname;
        this.user.code = code;
    },

    authenticate(email, password) {
        if(email == "helvis.tics@va.lv" && password == "123456"){
            localStorage.is_authenticated = true;
            this.is_authenticated = true;
            router.push("/");
        }
    },

    logout() {
        localStorage.clear();
        this.is_authenticated = false;
        router.push("/login");
    },

    toggleFavorite(songID) {
        if(!this.user.favorite_songs.includes(songID)){
            this.user.favorite_songs.push(songID);
        } else {
            this.user.favorite_songs.splice(this.user.favorite_songs.findIndex(songID), 1);
        }
        localStorage.setItem("favorite_songs", this.user.favorite_songs);
    },

    getFavoriteSongs() {
        return this.user.favorite_songs;
    }
})
