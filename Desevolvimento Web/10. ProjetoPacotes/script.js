function calcularDesconto()
{
    let qtdPacotes = document.querySelectorAll("input[name='pacotes']").length;
    console.log(qtdPacotes);
 
    let pacotes = document.querySelectorAll("input[name='pacotes']");  /*selecionando todos os pacotes */
    console.log(pacotes);

    //                    i < pacotes.length.
    for (var i=0; i< qtdPacotes; i++) {
        console.log(pacotes[i].value);
    }
}


/* document.querySelectorAll("input[name='pacotes']") */