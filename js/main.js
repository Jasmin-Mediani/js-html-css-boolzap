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


    $(document).on("click", ".contatto", function () {
        var nomeContatto = $(this).find("h3").text();
        $(".nome-contatto-chattante").children("h4").text(nomeContatto);

        var immagineUtente = $(this).children("img").clone();
        $(".box-img").html(immagineUtente);

    })

    ////////////  carrellata di attivazioni chat in base al numeo di utenti. //////////////

    $(document).on("click", ".contatto1", function () {
        attivaChat("#primo-utente");
        $(".contenitore-dx .impostazioni-utente").show();
    })


    $(document).on("click", ".contatto2", function () {
        console.log("ciao");
        attivaChat("#secondo-utente");
        $(".contenitore-dx .impostazioni-utente").show();
    })


    $(document).on("click", ".contatto3", function () {
        attivaChat("#terzo-utente");
        $(".contenitore-dx .impostazioni-utente").show();
    })



    $(document).on("click", ".contatto4", function () {

        attivaChat("#quarto-utente");
        $(".contenitore-dx .impostazioni-utente").show();
    });


    $(document).on("click", ".contatto5", function () {

        attivaChat("#quinto-utente");
        $(".contenitore-dx .impostazioni-utente").show();
    });

    $(document).on("click", ".contatto6", function () {

        attivaChat("#sesto-utente");
        $(".contenitore-dx .impostazioni-utente").show();
    });

    $(document).on("click", ".contatto7", function () {

        attivaChat("#settimo-utente");
        $(".contenitore-dx .impostazioni-utente").show();
    });


    $(document).on("click", ".contatto8", function () {

        attivaChat("#ottavo-utente");
        $(".contenitore-dx .impostazioni-utente").show();
    });

    $(document).on("click", ".contatto9", function () {

        attivaChat("#nono-utente");
        $(".contenitore-dx .impostazioni-utente").show();
    });

    $(document).on("click", ".contatto10", function () {

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




    ////////// HANDLEBARS CONTATTI A SINISTRA //////////

    var source = $("#template-contatto").html();
    var templateContatto = Handlebars.compile(source);

    // METODO 1 - LUNGO ) 


    // var contatto1 = {
    //     classe: "contatto1",
    //     nome: "Chiara",
    //     immagine: 'https://image.flaticon.com/icons/svg/219/219990.svg',
    //     orario: data()
    // };

    // var contattoPopolato = templateContatto(contatto1)
    // $(".lista-contatti").append(contattoPopolato);


    // var contatto2 = {
    //     classe: "contatto2",
    //     nome: "Marco",
    //     immagine: "https://image.flaticon.com/icons/svg/219/219986.svg",
    //     orario: data()
    // };
    // var contattoPopolato = templateContatto(contatto2)
    // $(".lista-contatti").append(contattoPopolato);



    // var contatto3 = {
    //     classe: "contatto3",
    //     nome: "Sabrina",
    //     immagine: "https://image.flaticon.com/icons/svg/219/219987.svg",
    //     orario: data()
    // };
    // var contattoPopolato = templateContatto(contatto3)
    // $(".lista-contatti").append(contattoPopolato);



    // var contatto4 = {
    //     classe: "contatto4",
    //     nome: "Marcella",
    //     immagine: "https://image.flaticon.com/icons/svg/219/219984.svg",
    //     orario: data()
    // };
    // var contattoPopolato = templateContatto(contatto4)
    // $(".lista-contatti").append(contattoPopolato);


    // var contatto5 = {
    //     classe: "contatto5",
    //     nome: "Giuseppe",
    //     immagine: "https://image.flaticon.com/icons/svg/219/219988.svg",
    //     orario: data()
    // };
    // var contattoPopolato = templateContatto(contatto5)
    // $(".lista-contatti").append(contattoPopolato);


    // var contatto6 = {
    //     classe: "contatto6",
    //     nome: "Giuseppina",
    //     immagine: "https://image.flaticon.com/icons/svg/219/219982.svg",
    //     orario: data()
    // };
    // var contattoPopolato = templateContatto(contatto6)
    // $(".lista-contatti").append(contattoPopolato);

    // var contatto7 = {
    //     classe: "contatto7",
    //     nome: "Marcello",
    //     immagine: "https://image.flaticon.com/icons/svg/219/219981.svg",
    //     orario: data()
    // };
    // var contattoPopolato = templateContatto(contatto7)
    // $(".lista-contatti").append(contattoPopolato);

    // var contatto8 = {
    //     classe: "contatto8",
    //     nome: "Edna",
    //     immagine: "https://image.flaticon.com/icons/svg/219/219989.svg",
    //     orario: data()
    // };
    // var contattoPopolato = templateContatto(contatto8)
    // $(".lista-contatti").append(contattoPopolato);

    // var contatto9 = {
    //     classe: "contatto9",
    //     nome: "Edmund",
    //     immagine: "https://image.flaticon.com/icons/svg/219/219985.svg",
    //     orario: data()
    // };
    // var contattoPopolato = templateContatto(contatto9)
    // $(".lista-contatti").append(contattoPopolato);


    // var contatto10 = {
    //     classe: "contatto10",
    //     nome: "Claudia",
    //     immagine: "https://image.flaticon.com/icons/svg/219/219980.svg",
    //     orario: data()
    // };
    // var contattoPopolato = templateContatto(contatto10)
    // $(".lista-contatti").append(contattoPopolato);



    // METODO 2) CORTO - CON ARRAY E CICLO:

    var arrayContatti = [

        {
            classe: "contatto1",
            nome: "Chiara",
            immagine: 'immagini/chiara.svg',
            orario: data()
        },


        {
            classe: "contatto2",
            nome: "Marco",
            immagine: "immagini/marco.svg",
            orario: data()
        },



        {
            classe: "contatto3",
            nome: "Sabrina",
            immagine: "immagini/sabrina.svg",
            orario: data()
        },



        {
            classe: "contatto4",
            nome: "Marcella",
            immagine: "immagini/marcella.svg",
            orario: data()
        },


        {
            classe: "contatto5",
            nome: "Giuseppe",
            immagine: "immagini/giuseppe.svg",
            orario: data()
        },


        {
            classe: "contatto6",
            nome: "Giuseppina",
            immagine: "immagini/giuseppina.svg",
            orario: data()
        },

        {
            classe: "contatto7",
            nome: "Marcello",
            immagine: "immagini/marcello.svg",
            orario: data()
        },

        {
            classe: "contatto8",
            nome: "Edna",
            immagine: "immagini/edna.svg",
            orario: data()
        },

        {
            classe: "contatto9",
            nome: "Edmund",
            immagine: "immagini/edmund.svg",
            orario: data()
        },


        {
            classe: "contatto10",
            nome: "Claudia",
            immagine: "immagini/claudia.svg",
            orario: data()
        },


    ]

    for (i = 0; i < arrayContatti.length; i++) {
        var contattoPopolato = templateContatto(arrayContatti[i])
        $(".lista-contatti").append(contattoPopolato);
    }



    $(document).on("click", ".contatto", function () {
        $("#nessun-utente").hide();
        $(".contenitore-dx .impostazioni-utente").show();

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
