function Calcular_Ex01() {

    var salario = parseFloat(document.getElementById('salario').value);
    var perc_aumento = parseFloat(document.getElementById('perc_sal').value);

    var novo_sal = salario + ((salario * perc_aumento)/ 100);
    document.getElementById('resultado01').textContent = `O valor do Novo Salário é R$${novo_sal}`;
    return false;
}

function Calcular_Ex02() {
    
    var base = parseFloat(document.getElementById('base').value)
    var altura = parseFloat(document.getElementById('altura').value)

    if  ((!isNaN(base) && (!isNaN(altura)))) {
        var area = (base * altura) / 2
        document.getElementById('resultado02').textContent = `Valor da área: ${area}`
    }
    
    else {
        alert("Digite apenas números.")
    }
}

function Calcular_Ex03() {

    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    if (nota1 <= 10 && nota2 <= 10 && nota1 >= 0 && nota2 >= 0) {
        var media = (nota1 * 0.3) + (nota2 * 0.7)
        document.getElementById('resultado03').textContent = `Sua média foi: ${media}`;
    }

    else {
        alert("A nota NÃO pode ser maior que 10 ou menor que 0.")
    }
}

function Calcular_Ex04() {
    var ano_nasc = Number(document.getElementById('ano_nasc').value)

    if (ano_nasc.toString().length !== 4) {
        alert("Digite seu ano de nascimento com 4 números.")
    }

    else {
        var meses = ano_nasc * 12;
        var dias = meses * 30;
        var horas = dias * 24;
        var minutos = horas * 60;
        var segundos = minutos * 60;
    
        console.log(`Data de nascimento: ${ano_nasc}`);
        console.log(`Valores Aproximados abaixo.\nMeses: ${meses}\nDias: ${dias}\nHoras: ${horas}\nMinutos: ${minutos}\nSegundos: ${segundos}`);
    }
}

function Calcular_Ex05() {
    var km = parseFloat(document.getElementById('km').value);
    var litros = parseFloat(document.getElementById('litros').value);
    var consumo_medio = km / litros;

    document.getElementById('resultado05').textContent = `O consumo médio é: ${consumo_medio}`;
}I

function Calcular_Ex06() {
    var v_hora = parseFloat(document.getElementById('valor_h').value)
    var h_normais = parseFloat(document.getElementById('h_normais').value)
    var h_extras = parseFloat(document.getElementById('h_extras').value)
    var refeicoes = parseFloat(document.getElementById('refeicoes').value)

    if (isNaN(v_hora) || isNaN(refeicoes) || v_hora === 0 || refeicoes === 0) {
        alert("O valor hora ou quantidade de refeições não pode estar em branco.")
    }

    else {
        desc_refeicoes = refeicoes * 1.50;
        sal_bruto = (v_hora * h_normais) + (v_hora * h_extras * 3);   /*valor por h_extra é 3 vezes maior. */
        sal_liquido = sal_bruto - desc_refeicoes;
    
        document.getElementById('resultado06').textContent = `Salário Bruto (sem descontos): R$ ${sal_bruto}\nDesconto das refeições R$${desc_refeicoes}\nSalário líquido (com descontos) R$ ${sal_liquido}`
    }
}

function Calcular_Ex07() {
    var number = Math.round((Math.random() * 100));  /*estou usando round para arredondar o número e *100 para mostrar de 1 a 100.*/

    document.getElementById('mostrar_n').innerText = `Número gerado: ${number}`
    if (number % 2 === 0) {
        document.getElementById('resultado07').textContent = "O número é par"
    } else {
        document.getElementById('resultado07').textContent = "O número é ímpar"
    }    
}
