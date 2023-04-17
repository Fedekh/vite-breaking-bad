<script>
export default {
    name: "ListCards",
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="text-center d-lg-flex flex-lg-column justify-content-lg-between
        flex-md-column justify-content-md-start">
        <img :src="character.card_images[0].image_url" alt="">
        <h5 class="text-white">{{ character.name }}</h5>
        <p>{{ character.type }}</p>
        <p class="text-black">{{ character.archetype }}</p>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.text-center {
    background-color: $maincolor;
    height: 470px;

    @media screen and (max-width: 768px) {
        @media screen and (max-width: 576px) {
            font-size: 1rem;
            max-width: 50%;
            margin: 0 auto;

        }
    }

}
</style>