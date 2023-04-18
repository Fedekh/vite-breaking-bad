<script>
import AppCard from "./AppCard.vue"
import SearchBar from "./SearchBar.vue"
import { store } from '../store';

export default {
    name: "AppMain",
    emits: ["filter"],       //dichiaro gli eventi figlio che saranno presenti
    components: {
        SearchBar,
        AppCard,
     
    },
    data() {
        return {
            store
            
        }
    }
}
</script>

<template>
    <div class="wrapper-main">
        <div class="wrapper-container ">
            <section class="container">
                <SearchBar @chiamataAlPadre="$emit('filter')" />
                <AppCard v-if="(this.store.controlloErrori=='')"  />
                <h1 v-else class="text-center">{{ this.store.error }}</h1>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;


.wrapper-main {
    width: 100%;
    background-color: $maincolor;

    section {
        padding: 40px 0 0 0;

        select {
            width: 180px;
        }
    }
}
</style>
