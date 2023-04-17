<script>
import ListCards from "./ListCards.vue"
import { store } from '../store';

export default {
    name: "AppCard",
    components: {
        ListCards
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="wrapper-list">
        <div class="container-list">
        <h2 class="text-center mb-3">Lista dei personaggi</h2>
        <div class="row row-cols-4 g-4">
            <div class="col">
            </div>
        </div>

    </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.wrapper-list {
    width: 100%;
    height: 700px;
    padding: 10px 0;
    background-color: white;
}
</style>
