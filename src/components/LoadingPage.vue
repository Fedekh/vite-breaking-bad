<script>
export default {
  name: "Loader"
}
</script>

<template>
  <div class="container">
    <div class="loader-wrapper d-flex justify-content-center align-items-start">
      <h2 class="calm">CALMA</h2>
      <div class="loader"></div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.container {
  position: relative;
}
.calm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(194, 36, 205);
  
}

.loader {
  border: 8px solid rgba(0, 0, 0, 0.2);
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 230px;
  height: 230px;
  animation: spin 1.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }


}
</style>