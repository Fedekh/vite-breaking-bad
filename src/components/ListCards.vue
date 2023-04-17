<script>
export default {
    name: "ListCards",
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="text-center d-flex flex-column justify-content-between">
        <img :src="character.card_images[0].image_url" alt="">
        <h5 class="text-white">{{ character.name }}</h5>
        <p >{{ character.type }}</p>
        <p class="text-black">{{ character.archetype }}</p>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.text-center{
        background-color: $maincolor;
        height: 430px;
        
    }

</style>