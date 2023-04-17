<script>
export default {
    name: "ListCards",
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="text-center">
        <img class="rounded-circle" :src="character.image" alt="">
        <h3 class="mb-3">{{ character.name }}</h3>
        <p>{{ character.status }}</p>
        <p>{{ character.species }}</p>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.container-list {
    border: 1px solid red;
}


</style>