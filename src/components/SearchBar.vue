<script>
import { store } from "../store"

export default {
    name: "SearchBar",
    emits: ["filter"],       //dichiaro gli eventi figlio che saranno presenti
    data() {
        return {
            options: ["Alien", "Ally of Justice", "Ancient Gear"],
            store
        }
    },

}
</script>

<template>
    <div class="container mb-3 d-flex justify-content-center align-items-baseline gap-4">
        <select v-model="store.statoSelezionato" class="mb-4 text-start" name="status" id="status">
            <option value="">TUTTE</option>
            <option v-for="option in options" :value="option">{{ option }}</option>
        </select>
        <button @click="$emit('filter')" class="btn btn-success">Search</button>
    </div>
</template>

<style scoped lang="scss">
.container {
    select {
        max-width: 350px;
    }
    button {
        max-width: 100px;
    }
}
</style>