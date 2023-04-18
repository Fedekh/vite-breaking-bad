<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.loading = true;
    axios.get(store.apiURL).then((resp) => {
      console.log(resp);
      this.store.characters = resp.data.data;
      this.store.loading = false;
    })
  }
  // this.store.loading = true;
  //   this.store.error = "";
  //  axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", 
  //{ params:
  // { 
  //    num: 10,
  //   offset: 0
  // }
  // }).then(resp => {   this.store.cards = resp.data.data;  })
  //.catch(error => {console.log(error); this.store.error = "Oops, quacosa è andato storto..";})
  //.finally(() => {      this.store.loading = false;    });
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
