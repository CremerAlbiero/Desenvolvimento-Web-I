let valorPacote = 0;
let soma_adicionais;

function calcularTotalViagem() {
    calcularPacote();
    calcularAdicionais();
    let total_final = soma_adicionais + valorPacote
    document.getElementById('mostrar_total').textContent = total_final;
    cliente_nome = document.getElementById('nome').value
    document.getElementById('msg_cliente').innerHTML = `${cliente_nome} irá pagar ${valorPacote} no Pacote e mais ${soma_adicionais} de itens adicionais.`;
}


function calcularAdicionais() {
    soma_adicionais = 0;
    let adicionais = document.querySelectorAll("input[name='adicionais']");
    
/* 
    verificar por índice quais estão .checked, usando uma array. 
    i++ significa que está adicionando o valor 1 (i = i + 1).      */
    for (let i=0; i<adicionais.length; i++) {
        if (adicionais[i].checked == true) 
        {
            soma_adicionais = soma_adicionais + parseFloat(adicionais[i].value);
        }
    }
    console.log(`Adicionais: ${soma_adicionais} `)

    /* string formatada:`Texto qualquer: ${variavel}´. usar crase  */
}

function calcularPacote()
{
    let qtdPacotes = document.querySelectorAll("input[name='pacotes']").length; 
 
    let pacotes = document.querySelectorAll("input[name='pacotes']"); 

  
    for (var i=0; i< qtdPacotes; i++) 
    {
        if ( pacotes[i].checked == true )
        {
            valorPacote = Number(pacotes[i].value)
            console.log(`Pacote: ${valorPacote} `)
            break
        };
    }
}