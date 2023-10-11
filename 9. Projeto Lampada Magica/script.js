let lamp = document.getElementById("lampdes");
function ligar() {
    lampdes.src = "luzLigada.gif"

}

function desligar() {
    lampdes.setAttribute("src", "luzDesligada.gif")

}

function alternar() {
    if(lampdes.getAttribute("src") == "luzLigada.gif")
    desligar();
    else if(lampdes.getAttribute("src") == "luzDesligada.gif")
    ligar();

}

function aparecer() {
    lampdes.hidden = false;
}

function sumir() {
    lampdes.hidden = true;
}

// criar função sem especificar no html. No caso abaixo, ele está acionando a função a cada 5s.
function piscar() {
    alternar()
    
} setInterval(piscar, 5000)

//alterar style diretamente pelo JS:
document.getElementById('title').style.color = "red";


//atividade: tentar mudar a cor do título com setInterval.