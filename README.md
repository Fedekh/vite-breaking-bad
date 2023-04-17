Descrizione:

Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu-Gi-Oh.

Ho trovato come fare la paginazione e prendere solo 20 cards direttamente dall'api. Utilizzate questo link nella chiamata, così non dovrete selezionare i 20 items manualmente:

https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0

Quindi la chiamata axios diveta:

 axios
  .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
  .then((resp) => {
      const myData = resp.data.data;
    })

Bonus:

Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.


Come installare diverse dipendenze:

per sass: npm add -D sass

per bootstrap: npm i bootstrap
per axios: npm i axios
in general.scss aggiungere: @import "bootstrap/scss/bootstrap";
nel file dove usate axios: import axios from "axios";