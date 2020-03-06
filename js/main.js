$(document).ready(function () {

    attivaChat("#primo-utente"); //così si vede qualcosa ricaricando la pagina, non rimane uno sfondo vuoto. 

    //per eliminare i messaggi
    $(".fa-chevron-down").click(function () {
        $(".elimina-mex").slideUp(); //li tiro su tutti;
        $(this).next(".elimina-mex").toggle(); //mostro e nascondo al click solo quello con cui sto interagendo.
    });

    $(".elimina-mex").click(function () {
        $(this).parents(".row").remove();
    });

    //in base a quale contatto clicco per chattarci, il suo avatar e il suo nome devono apparire nella barra in alto:

    $(".contatto").click(function () {
        var nomeContatto = $(this).find("h3").text();
        $(".nome-contatto-chattante").children("h4").text(nomeContatto);

        var immagineUtente = $(this).children("img").clone();
        $(".box-img").html(immagineUtente);
    });

    // carrellata di attivazioni chat in base al numeo di utenti.

    $(".contatto1").click(function () {
        attivaChat("#primo-utente");
    });

    $(".contatto2").click(function () {
        attivaChat("#secondo-utente");
    });

    $(".contatto3").click(function () {
        attivaChat("#terzo-utente");
    });

    $(".contatto4").click(function () {
        attivaChat("#quarto-utente");
    });

    $(".contatto5").click(function () {
        attivaChat("#quinto-utente");
    });

    $(".contatto6").click(function () {
        attivaChat("#sesto-utente");
    });

    $(".contatto7").click(function () {
        attivaChat("#settimo-utente");
    });

    $(".contatto8").click(function () {
        attivaChat("#ottavo-utente");
    });

    $(".contatto9").click(function () {
        attivaChat("#nono-utente");
    });

    $(".contatto10").click(function () {
        attivaChat("#decimo-utente");
    });



    $("textarea").keypress(function () {
        if (event.which == 13) {
            var msg = $(this).val();

            if (msg.trim().length < 1) {  //trim toglie dal testo gli spazi vuoti all'inizio e alla fine del testo. In questo modo non posso inviare messaggi vuoti (visto che iniziano con uno spazio vuoto).  
                return
            }

            var rowClonata = $('.template1 .messaggio-inviato').clone(); // ha"display: none" nel CSS
            rowClonata.find('p').text(msg); //nel testo del P metto quanto scritto (msg) nella text-area
            rowClonata.find('small').text(data()); //aggiungo l'ora
            $(".active").append($(rowClonata));

            $("textarea").val("");

            setTimeout(function () {
                generaMessaggioRicevuto(msg);
            }, 3000);
            $(".active").scrollTop(100000); //visto che "pixelScroll();" non funziona, l'ho tolta... così è meglio di niente :(


            // collego il click all'oggetto clonato (altrimenti non funziona)
            rowClonata.find(".fa-chevron-down").click(function () {
                $(".elimina-mex").slideUp(); //li tiro su tutti;
                $(this).next(".elimina-mex").toggle(); // "del fa-chevron-down prendi il prossimo fratello  ".elimina-mex" e mostralo/nascondilo al click dello chevron con cui sto interagendo);
            });

            rowClonata.find(".elimina-mex").click(function () {
                (rowClonata).remove();


            });


            /* se voglio eliminare anche un messaggio ricevuto, incollo questo nella funzione generaMessaggioRicevuto

        rowClonata2.find(".fa-chevron-down").click(function () {
            $(".elimina-mex").slideUp(); //li tiro su tutti;
            $(this).next(".elimina-mex").toggle(); //mostro e nascondo al click solo quello con cui sto interagendo.
        });

        rowClonata2.find(".elimina-mex").click(function () {
            rowClonata2.remove();


        }); */

        }




    });


    $('#find-chat').keyup(function (event) {
        var carattereFiltro = $(this).val().toLowerCase();
        $('.contatto').each(function () {
            var nome = $(this).find('.nome-contatto h3').text().toLowerCase();
            console.log(nome);
            if (nome.includes(carattereFiltro)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });



});



/************************************************************ FUNZIONI ************************************************************/


/********** funzione orario: la richiamo con data() dove mi serve *********/

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function data() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    return h + ":" + m;
}


function generaMessaggioRicevuto(msg) {
    var rowClonata2 = $('.template2 .messaggio-ricevuto').clone();
    rowClonata2.find('p').html("'" + msg + "' a te!");
    rowClonata2.find('small').text(data());
    //$(rowClonata2).insertBefore(".ultima-riga");
    $(".active").append($(rowClonata2)); ///append inserisce l'elemento all'interno di un altro come figlio, mentre insertBefore inserisce un elemento sopra un altro, sullo stesso livello (come fratelli). Con append, rowClonata è diventata figlia di contenitore-messaggi. Con insert-before era sorella di ultima-riga. Cambiando chat si cancellava anche "ultima-riga" perché cancello tutto l'html del contenitore, lo rigenero vuoto. Non potevo più inserire i messaggi. Mettendo i template fuori dal contenitore-messaggi - tanto sono invisibili - non si cancellano e posso ripescarli per generarli nelle chat dei contatti. ((Ora "ultima-riga" non mi servirebbe neanche più ma la lascio per questa spiegazione))

}


function attivaChat(contattoDaAttivare) {
    $(".contenitore-messaggi").hide();
    $(".contenitore-messaggi").removeClass("active");
    $(contattoDaAttivare).addClass("active");
    $(contattoDaAttivare).show();

}
