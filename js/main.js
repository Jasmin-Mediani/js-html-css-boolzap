$(document).ready(function () {

    /*    ISTRUZIONI: 

    (1) se (IF) premo il tasto invio, creo una variabile a cui assegno il valore della text-area.
    (2) il contenitore-messaggi dovrà essere uguale a se stesso (come la somma) ma con l'aggiunta della variabile inserita nel Paragrafo: è una somma con aggiunta.
    (3) al click di ogni contatto corrisponde parte una funzione che fa partire il contenitore-immagini vuoto.  */


    /*************************************************************************************************/

    //se (IF) premo il tasto invio, creo una variabile a cui assegno il valore della text-area:

    var d = new Date();
    var n = d.getHours();

    $("textarea").keypress(function () {
        if (event.which == 13) {
            var msg = $(this).val();
            console.log(msg);


            //primo tentativo - DA NON RIFARE: è brutto //

            //document.getElementById("id-contenitore").innerHTML = document.getElementById("id-contenitore").innerHTML + "<div class=\"row messaggio-inviato\"> <div class=\"messaggio\"> <div class=\"div-paragrafo\"><p>" + msg + "</p></div> <div class=\"div-small\"> <small>" + data() + "</small></div> </div> </div>" + "<div class=\"row messaggio-ricevuto\"> <div class=\"messaggio\"> <div class=\"div-paragrafo\"><p>" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum itaque delectus, dolore culpa quo magni ea sit expedita, omnis placeat repudiandae nobis nam at voluptate, explicabo officiis impedit ab." + "</p></div> <div class=\"div-small\"> <small>" + data() + "</small></div> </div> </div>"


            var rowClonata = $('.template1 .messaggio-inviato').clone(); // ha"display: none" nel CSS
            rowClonata.find('p').text(msg); //nel testo del P metto quanto scritto (msg) nella text-area
            rowClonata.find('small').text(data()); //aggiungo l'ora
            $(rowClonata).insertBefore(".ultima-riga");

            $("textarea").val("");


            /******** messaggio ricevuto*********

            //LO DEVO OSCURARE PERCHE' HO GIA' INSERITO QUESTO ALL'INTERNO DI UNA FUNZIONE CHE SI CHIAMA generaMessaggioRicevuto. SE LO LASCIO VISIBILE HO UN DOPPIO MESSAGGIO RICEVUTO. 

            //  var rowClonata2 = $('.template2 .messaggio-ricevuto')//.clone(); 
            //  rowClonata2.find('p').html("ok");
            //  rowClonata2.find('small').text(data());
            //  $(rowClonata2).insertBefore(".ultima-riga");
            //   */


            setTimeout(function () {

                generaMessaggioRicevuto();

            }, 3000);

        }

    });


    console.log($('#find-chat'));
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






    // chat di ogni utente (per ora si "autopulisce")

    $(".contatto").click(function () {
        document.getElementById("id-contenitore").innerHTML = ""
    });


    // trovare un modo per mettere la visuale sull'ultimo messaggio inviato per non dover scrollare (scrolled)



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


function generaMessaggioRicevuto() {
    var rowClonata2 = $('.template2 .messaggio-ricevuto').clone();
    rowClonata2.find('p').html("ok");
    rowClonata2.find('small').text(data());
    $(rowClonata2).insertBefore(".ultima-riga");
}