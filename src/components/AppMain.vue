<script>
import AppCard from "./AppCard.vue"

export default {
    name: "AppMain",
    components: {
        AppCard
    }
}
</script>

<template>
    <div class="wrapper-main">
        <div class="wrapper-container ">
            <section class="container">
                <select name="" id="">
                    <option value="">prova1</option>
                    <option value="">prova2</option>
                    <option value="">prova3</option>
                </select>
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
    // border: 1px solid rgb(8, 181, 109);
    // height: calc(100vh - $headerheight);

    section {
        padding: 40px 0 0 0;

        select {
            width: 180px;
        }
    }

    .wrapper-card {
        // border: 1px solid rgb(107, 38, 52);

    }
}</style>
