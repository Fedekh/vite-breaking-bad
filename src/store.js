import {reactive} from 'vue'

export const store = reactive({
    apiURL:"https://db.ygoprodeck.com/api/v7/cardinfo.php",
    characters:[],          //array vuoto che si riempe con i dati della chiamata API
    statoSelezionato:"",    //scelta dell utente
    error:""    ,             //messaggio eventuale d errore 
    loading:null,           //variabile che indica se la chiamata API è in corso
    num:"",
    offset:0,
     controlloErrori:"",
     sceltaColore
})

