$(document).ready(function () {

    $(".contenitore-dx .impostazioni-utente").hide();


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

    ////////////  carrellata di attivazioni chat in base al numeo di utenti. //////////////

    $(".contatto1").click(function () {
        attivaChat("#primo-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    $(".contatto2").click(function () {
        attivaChat("#secondo-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    $(".contatto3").click(function () {
        attivaChat("#terzo-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    $(".contatto4").click(function () {
        attivaChat("#quarto-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    $(".contatto5").click(function () {
        attivaChat("#quinto-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    $(".contatto6").click(function () {
        attivaChat("#sesto-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    $(".contatto7").click(function () {
        attivaChat("#settimo-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    $(".contatto8").click(function () {
        attivaChat("#ottavo-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    $(".contatto9").click(function () {
        attivaChat("#nono-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    $(".contatto10").click(function () {
        attivaChat("#decimo-utente");
        $(".contenitore-dx .impostazioni-utente").show();

    });

    ///// quando del testo viene inviato con INVIO /////////

    $("textarea").keypress(function () {
        if (event.which == 13) {
            var msg = $(this).val();

            if (msg.trim().length < 1) {
                return
            }

            ////////////////      HANDLEBARS     ////////////////

            var source = $('#template-hdb-inviato').html();
            var templateClonatoInviato = Handlebars.compile(source);
            var rowClonata = templateClonatoInviato({
                mexinviato: msg,
                orario: data()
            });
            $(".active").append(rowClonata);


            $("textarea").val("");

            setTimeout(function () {
                var source = $('#template-hdb-ricevuto').html();
                var templateClonatoRicevuto = Handlebars.compile(source);
                var rowClonataR = templateClonatoRicevuto({
                    mexricevuto: "ok!",
                    orario: data()
                });
                $(".active").append(rowClonataR);
            }, 3000);

            $(".active").scrollTop(100000);
        }

    });

    /////////// ricerca conttati (filtro) //////////

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

    //// possibilità di eliminare i messaggi inviati: (document).on permette azioni sugli elementi aggiunti successivamente nella pagina. 

    $(document).on("click", ".fa-chevron-down", function () {
        $(".elimina-mex").slideUp(); //li tiro su tutti;
        $(this).next(".elimina-mex").toggle();

        $(".elimina-mex").click(function () {

            $(this).parents(".messaggio-inviato").remove();
        });
    });


});



/******************************************************* FUNZIONI ************************************************************/


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


function attivaChat(contattoDaAttivare) {
    $(".contenitore-messaggi").hide();
    $(".contenitore-messaggi").removeClass("active");
    $(contattoDaAttivare).addClass("active");
    $(contattoDaAttivare).show();

}
