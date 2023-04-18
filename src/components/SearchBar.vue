<script>
export default {
    name: "SearchBar",
    // emits: ["search","pippo","carlo"],       //dichiaro gli eventi figlio che saranno presenti
    data() {
        return {
            choice:["alive", "dead", "unknown"]
        }
    },
 
}
</script>

<template>
    <div class="container d-flex justify-content-center align-content-center gap-2">
        <select class="mb-4 w-10 text-start" name="" id="">
            <option value="">TUTTE</option>
            <option v-for="status in choice" :value="status">{{ status }}</option>
        </select>
        <button @click="$emit('filter')" class="btn btn-warning">Search x</button>
    </div>
</template>

<style scoped lang="scss">
</style>