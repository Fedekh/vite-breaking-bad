<script>
import AppCard from "./AppCard.vue"
import SearchBar from "./SearchBar.vue"



export default {
    name: "AppMain",
    components: {
        SearchBar,
        AppCard
    },
    methods:{
        gestioneScelta(){
            console.log("filter");
        }
    }
}
</script>

<template>
    <div class="wrapper-main">
        <div class="wrapper-container ">
            <section class="container">
                <SearchBar @filter="gestioneScelta" />
                <AppCard />
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
