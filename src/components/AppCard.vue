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
    <div class="wrapper-list p-4">
        <div class="container p-4">
            <div class="container">
                <p class="title text-white">TROVATE 39 CARDS</p>
                <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-5 g-3">
                    <div  v-for="card in store.characters " :key="card.id">
                        <ListCards class="col" :character="card" />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.wrapper-list {
    width: 100%;
    // height: 700px;
    padding: 10px 0;
    background-color: white;
    .title {
        height: 40px;
        width: 100%;
        background-color: black;
    }
    
}
</style>
