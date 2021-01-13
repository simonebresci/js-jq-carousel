// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utilizziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS

// Esegui codice JQuery al termine del caricamento della pagina
// console.log('pagina non ready');


// FUNZIONI *******************************************************************



// ****************************************************************************

$(document).ready(function(){

  // Bottone sx - carica immagine precedente
  $('.prev').click(function(){
      // Controlla se raggiunto limite sinistro
      var classListPrev = $('.images .active').attr('class');

      // Vai indietro solo se non prima immagine
      if(!classListPrev.includes('first')){
          $('.images .active').removeClass('active').prev().addClass('active');
      }
  });


  // Bottone dx - carica immagine successiva
  $('.next').click(function(){
      // Controlla se raggiunto limite destro
      var classListNext = $('.images .active').attr('class');

      // Vai indietro solo se non ultima immagine
      if(!classListNext.includes('last')){
          $('.images .active').removeClass('active').next().addClass('active');
      }

  });

});
