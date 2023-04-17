<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

// import { store } from "./store";

export default {
  components: {
    AppHeader,
    AppMain
  }
  // data() {
  //   return {
  //     store
  //   }
  // },
  // mounted() {
  //   this.store.loading = true;
  //   axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
  //     .then((resp) => {
  //       const myData = resp.data.data;
  //       this.store.loading = false;

  //     })
  // }
}
</script>
<!-- --------------------------------------------------------- -->


<template>
  <AppHeader />
  <AppMain />
  <AppCard />
</template>
<!-- --------------------------------------------------------- -->


<style lang="scss">
@use "./styles/general.scss";

</style>
