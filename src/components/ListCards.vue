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
        <h5 class="name">{{ character.name }}</h5>
        <p class="type my-3">{{ character.type }}</p>
        <p class="archetype m-auto text-black">{{ character.archetype }}</p>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.text-center {
    background-color: $maincolor;
    height: 470px;
    .name{
        color: rgb(23, 16, 218);
    }
    .type{
        color: rgb(145, 11, 234);
    }
    .archetype{
        background-color: green;
        width: 70%;
    }
    @media screen and (max-width: 768px) {
        @media screen and (max-width: 576px) {
            font-size: 1rem;
            max-width: 50%;
            margin: 0 auto;

        }
    }

}
</style>