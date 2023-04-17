<script>
export default{
    name: "AppHeader"
}
</script>

<template>
    <div class="header-container d-flex align-items-center gap-4 container">
        <div class="logo"><img src="../assets/img/logo.jpg" alt=""></div>
        <h1> YU-GI-OH API</h1>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.header-container{
    height: $headerheight;
    .logo {
        width: 200px;
    }
}
</style>
