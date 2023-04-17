<script>
export default {
  name: "Loader"
}
</script>

<template>
  <h1 class="wrapper">CIAOOOOOOOOOOOOOOOOOOOO</h1>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.cell {
  width: 25%;

  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    height: 10rem;
    margin: 1rem 1rem 0;
    padding-top: 2.2rem;
    background: rgba(255, 255, 255, .2);

    &::after {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0.2rem;
      text-align: center;
      background: rgba(255, 255, 255, .25);
      /* Increment the section counter */
      counter-increment: spinnerCount;
      /* Display the counter on pseudo-elements */
    }
  }
}


// SPINNERS STYLES
.spinner {
  // Common styles
  width: 4rem;
  height: 4rem;

  // Individual styles
  &.spinner1 {
    border: 3px solid rgba(255, 255, 255, .25);
    border-top-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
    animation: rotation .8s ease infinite;
  }
}</style>