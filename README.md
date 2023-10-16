# Sviluppare la logica di gioco

- Primo passo: Generare le bombe
  - bisogna generare un massimo di 16 bombe, il range dove verranno posizionate verrà stabilito dal livello di difficoltà scelto, es: con 100 caselle la bomba non potrà di certo essere posizionata nella cella 104.
  - I => generare un array contentente numeri casuali destinati alle bombe
    - creare una funzione che ci permetta di generare numeri da 1 a (difficoltà)
    - FINCHE' i numeri non sono tutti diversi e non sono 16 genera i numeri
    - tutti i numeri vengono immagazzinati in un array precedentemente inizializzato vuoto
  - II => 