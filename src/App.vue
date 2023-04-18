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
    this.cardSelected();
  },

  methods: {
    cardSelected() {
      this.store.loading = true;
      const params = {
        ... this.store.statoSelezionato && { archetype: this.store.statoSelezionato }
      }
      axios.get(this.store.apiURL, {
        params
      }).then(resp => { this.store.cards = resp.data.data; })
        .catch(error => { console.log(error); this.store.error = "Oops, quacosa è andato storto.." })
        .finally(() => { this.store.loading = false; });
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
