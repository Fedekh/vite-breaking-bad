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
    <div class="wrapper-main" :style="`background-color: ${store.sceltaSfondo}`">
        <div class="wrapper-container ">
            <section class="container">
                <SearchBar @chiamataAlPadre="$emit('filter')" />
                <AppCard v-if="(store.controlloErrori=='')"  />
                <h1 v-else class="text-center">{{ store.error }}</h1>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;


.wrapper-main {
    width: 100%;

    section {
        padding: 40px 0 0 0;

        select {
            width: 180px;
        }
    }
}
</style>
