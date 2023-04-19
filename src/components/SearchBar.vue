<script>
import { store } from "../store"

export default {
    name: "SearchBar",
    emits: ["chiamataAlPadre"],       //dichiaro gli eventi figlio che saranno presenti
    data() {
        return {
            options: ["Alien", "Ally of Justice", "Ancient Gear"],
            store,
            numberCard: "",
            numberOffset: "",
            sceltaColor:""
        }
    },

}
</script>

<template>
    <div class="container mb-3 d-flex justify-content-center align-items-center gap-4">
        <div class="container-input d-flex flex-column">
            <label  for="findcard" id="findcardlabel">Inserisci il numero di Card che vuoi importare e l'archetipo</label>
            <input class="rounded-pill border px-3" id="findcard" v-model="store.num" type="number">
            <label  for="setOffset" id="offSetLabel">Inserisci il numero offset</label>
            <input class="rounded-pill border px-3" id="setOffset" v-model="numberOffset" @input="store.offset = numberOffset" type="number">
        </div>
        <select v-model="store.statoSelezionato" class="mb-4 text-start rounded-pill border" name="status" id="status">
            <option value="">TUTTE</option>
            <option v-for="option in options" :value="option">{{ option }}</option>
        </select>
        <button  @click="$emit('chiamataAlPadre')" class="btn btn-success">Search</button>
        
    </div>
</template>

<style scoped lang="scss">
.container {
    label {
        color: rgb(9, 9, 189);
        font-size: 1.2rem;
    }
       

    select {
        max-width: 350px;
        margin-top: 30px;
    }

    button {
        max-width: 100px;
    }
}
</style>