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

/* todo:
- keypress non funziona

*/

// FUNZIONI *******************************************************************



// ****************************************************************************

$(document).ready(function(){

  // Scorrimento slider con tastiera
  $(document).keyup(function (event){
    // Salva lista classi dell'elemento attuale
    // var classList = $('.images .active').attr('class');

    // Freccia sinistra premuta da tastieras
    if(event.key === 'ArrowLeft'){
      // Vai indietro solo se non prima immagine
      if(!$('.images .active').hasClass('first')){
          $('.images .active').removeClass('active').prev().addClass('active');
          $('.nav .active').removeClass('active').prev().addClass('active');
      }
    }

    // Freccia destra premuta da tastiera
    if(event.key === 'ArrowRight'){
      // Vai indietro solo se non ultima immagine
      if(!$('.images .active').hasClass('last')){
          $('.images .active').removeClass('active').next().addClass('active');
          $('.nav .active').removeClass('active').next().addClass('active');
      }
    }

  });

  // Bottone sx - carica immagine precedente
  $('.prev').click(function(){
      // Controlla se raggiunto limite sinistro
      // var classListPrev = $('.images .active').attr('class');

      // Vai indietro solo se non prima immagine
      if(!$('.images .active').hasClass('first')){
          $('.images .active').removeClass('active').prev().addClass('active');
          $('.nav .active').removeClass('active').prev().addClass('active');
      }


  });


  // Bottone dx - carica immagine successiva
  $('.next').click(function(){
      // Controlla se raggiunto limite destro
      var classListNext = $('.images .active').attr('class');

      // Vai indietro solo se non ultima immagine
      if(!$('.images .active').hasClass('last')){
          $('.images .active').removeClass('active').next().addClass('active');
          $('.nav .active').removeClass('active').next().addClass('active');
      }

  });




  // BONUS ---------------------------------------------------------------------
  // Click su Bottone
  $('.nav .fas').click(function(){
    //rimuovi classe active a tutti i bottoni
    $('.nav .fas').removeClass('active');
    $(this).addClass('active');

    // Salva indice bottone cliccato
    var index = $('.nav .fas').index(this) + 1;

    // Mostra immagine corretta con nth-child
    $('.images img').removeClass('active');
    $('.images img:nth-child(' + index  + ')').addClass('active');


  });






  // /BONUS --------------------------------------------------------------------

});
