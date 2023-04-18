<script>
import ListCards from "./ListCards.vue";
import Loader from "./LoadingPage.vue";
import { store } from '../store';

export default {
    name: "AppCard",
    components: {
        ListCards,
        Loader
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
            <Loader v-if="store.loading"/>
            <div v-else class="container">
                <p class="title text-xs-center text-lg-center m-auto">TROVATE {{this.store.characters.length}} CARDS</p>
                <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-5 g-3">
                    <div v-for="card in store.characters " :key="card.id">
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
    padding: 10px 0;
    background-color: white;
    

    .title {
        height: 40px;
        width: 100%;
        text-align: center;
        line-height: 40px;
        background-color: black;
        color: rgb(17, 239, 17);
        font-size: 1.3rem;
        font-weight: bold;

            @media screen and (max-width: 576px) {
                max-width: 50%;
            }

        
    }

}
</style>
