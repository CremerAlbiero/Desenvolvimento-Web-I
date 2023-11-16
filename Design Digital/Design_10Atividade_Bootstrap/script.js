document.addEventListener('DOMContentLoaded', function () {
    const calcularButton = document.getElementById('calcularButton');
    const novoPedidoButton = document.getElementById('novoPedidoButton');
    const reciboButton = document.getElementById('reciboButton');
    const pagamentoForm = document.getElementById('pagamentoForm');

    calcularButton.addEventListener('click', function () {
        const combos = document.getElementById('combos');
        const comboPreco = parseFloat(combos.options[combos.selectedIndex].value);
        const adicionalBacon = document.getElementById('bacon').checked ? 2 : 0;
        const adicionalCheddar = document.getElementById('cheddar').checked ? 2 : 0;
        const adicionalPickles = document.getElementById('pickles').checked ? 2 : 0;
        const entrega = parseFloat(document.querySelector('input[name="entrega"]:checked').value);

        const totalPagar = comboPreco + adicionalBacon + adicionalCheddar + adicionalPickles + entrega;

        const descricaoPedido = `Seu lanche custará ${comboPreco} reais com ${adicionalBacon + adicionalCheddar + adicionalPickles} reais de adicionais e ${entrega} reais de taxa de entrega.`;

        document.getElementById('totalPagar').value = totalPagar;
        document.getElementById('descricaoPedido').value = descricaoPedido;
    });

});