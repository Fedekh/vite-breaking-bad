<script>
import { store } from "../store"

export default {
    name: "SearchBar",
    emits: ["chiamataAlPadre"],       //dichiaro gli eventi figlio che saranno presenti
    data() {
        return {
            options: ["Alien", "Ally of Justice", "Ancient Gear"],
            store,
            numberCard:""
        }
    },

}
</script>

<template>
    <div class="container mb-3 d-flex justify-content-center align-items-baseline gap-4">
        <label for="findcard" id="findcardlabel">Inserisci il numero di Card che vuoi importare</label>
        <input id="findcard" v-model="numberCard" @input="store.num = numberCard" type="number">
        <select v-model="store.statoSelezionato" class="mb-4 text-start" name="status" id="status">
            <option value="">TUTTE</option>
            <option v-for="option in options" :value="option">{{ option }}</option>
        </select>
        <button @click="$emit('chiamataAlPadre')" class="btn btn-success">Search</button>
    </div>
</template>

<style scoped lang="scss">
.container {
    #findcardlabel{
        color: rgb(9, 9, 189);
        font-size: 1.2rem;
    }
    select {
        max-width: 350px;
    }
    button {
        max-width: 100px;
    }
}
</style>