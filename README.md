# Product Showcase - Vue + TypeScript

Questo progetto è stato creato come parte del mio percorso di apprendimento di TypeScript in combinazione con Vue.js. L'obiettivo principale è stato quello di sviluppare una piccola applicazione per visualizzare e presentare i dettagli di un prodotto, utilizzando Vue 3 e TypeScript per comprendere meglio le funzionalità offerte da TypeScript in un ambiente di sviluppo moderno.

## Tecnologie utilizzate

- **Vue 3**: Framework JavaScript per la creazione di interfacce utente reattive.
- **TypeScript**: Superset di JavaScript che aggiunge la tipizzazione statica per migliorare la qualità del codice e la manutenibilità.
- **SCSS**: Estensione di CSS che facilita la gestione di stili complessi.

## Funzionalità

1. **Visualizzazione dei Prodotti**:
   - La pagina mostra una card con i dettagli di un prodotto, tra cui immagine, titolo, categoria, valutazione e prezzo.
2. **Gestione dei Dati**:

   - I dati del prodotto vengono recuperati tramite una chiamata API (simulata dal servizio `ProductService`), utilizzando il metodo `getProductDetails`.

3. **Componentizzazione**:

   - Il progetto utilizza componenti Vue modulari: una card prodotto (`ProductCard`) e una pagina che mostra il prodotto selezionato.

4. **Gestione del Ciclo di Vita**:

   - Viene utilizzato `onMounted` per recuperare i dati del prodotto una volta che il componente è stato montato sulla pagina.

5. **Error Handling**:

   - Viene gestito un errore di rete con un semplice log nel caso di fallimento della chiamata API.

6. **Tipizzazione con TypeScript**:
   - L'intero progetto è stato sviluppato utilizzando TypeScript per imparare come dichiarare e gestire tipi di dati, sia per le risposte dell'API che per gli oggetti in Vue.
