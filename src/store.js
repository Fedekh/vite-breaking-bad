import {reactive} from 'vue'

export const store = reactive({
    characters:[],     //array vuoto che si riempe con i dati della chiamata API
    apiURL:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    loading:null         //variabile che indica se la chiamata API è in corso
})