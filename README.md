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
--------------------------------------------------------------------------------------------------
Descrizione:
Continuate a lavorare nella stessa repo di ieri e aggiungete una select per filtrare i risultati in base all'archetipo:  Alien, Ally of Justice o Ancient Gear.
Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con le cards corrispondenti.
Bonus:
Creare un componente che mostri il numero totale di risultati ottenuti.
Nota:
Per capire come comunicare alle API l'archetipo, è necessario fare riferimento alla documentazione che trovate qui: https://ygoprodeck.com/api-guide/