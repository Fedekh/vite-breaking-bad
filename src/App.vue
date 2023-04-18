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
      if (this.store.num !== 0){
        this.store.controlloErrori ='';
        this.store.loading = true;
        axios.get(this.store.apiURL, {
          params: {
            num: this.store.num,
            offset: this.store.offset,
            ...(this.store.statoSelezionato && { archetype: this.store.statoSelezionato })
          }
        }).then(resp => { this.store.characters = resp.data.data; })
        .catch(error => { console.log(error); this.store.error = "Oops, quacosa è andato storto...prova a ricaricare la pagina o inserire un nuovo valore numerico" })
        .finally(() => { this.store.loading = false; });
      }else {
        this.store.controlloErrori="error"
      }
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain  @filter="cardSelected" />
</template>

<style lang="scss">
@use "./styles/general.scss";
body{
  background-color: gray;
  
  h1.text-center {
    font-size: 4rem;
    color: rgb(115, 0, 255);
    animation: pulsate 1s ease-out;
    animation-iteration-count: infinite;
  }
  
  @keyframes pulsate {
    0% {
      opacity: 0.5;
      transform: scale(0.9);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0.5;
      transform: scale(0.9);
    }
  }
}
  
</style>
