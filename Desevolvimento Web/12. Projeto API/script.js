/* exemplo professora */
elemento = document.getElementById('pesquisa');
elemento.addEventListener('click', async function(){
    document.getElementById('resultado').innerText = ""
        var valor= document.getElementById("cep").value
        if (valor=='')
            alert("Informe o CEP");
        else
        {
            var cep = valor.replace(/\D/g, '');  /*tirando td que n é dígito /\D/g (global) */
            var validacep = /^[0-9]{8}$/;   /*criando variavel, dizendo que quer n de 0 a 9. */

            if(validacep.test(cep)) /*test: atribui valor booleano */{
            var api= `https://viacep.com.br/ws/${cep}/json/`;
            let resposta = await fetch(api);
            dados = await  resposta.json();
            console.log(dados);
            if (dados.erro)
               document.getElementById('resultado').innerText = "CEP Não Existe";
            else
               document.getElementById('resultado').innerText = dados.logradouro + " "+ dados.bairro
    
    
     }
          else
            //if (!(resposta.ok))
                alert("cep inválido");
    }
    })
    
