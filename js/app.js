function comprar()
{
    if (validarEntradaIndefinida(document.getElementById('qtd').value))
    {
        alert('Preencha o campo quantidade corretamente.');
        return;
    }
    else if (validarEntradaIndefinida(document.getElementById('tipo-ingresso').value) || validarEntradaDesconhecida(document.getElementById('tipo-ingresso').value))
    {
        alert('Tipo do ingresso indefinido ou desconhecido.');
        return;
    }    
    else if (parseInt(document.getElementById(`qtd-${document.getElementById('tipo-ingresso').value}`).textContent) < document.getElementById('qtd').value)
    {
        alert(`Quantidade indisponível para tipo ${document.getElementById('tipo-ingresso').value}.`);
        return;
    }
    else
    {
        document.getElementById(`qtd-${document.getElementById('tipo-ingresso').value}`).textContent = parseInt(document.getElementById(`qtd-${document.getElementById('tipo-ingresso').value}`).textContent) - document.getElementById('qtd').value;
        document.getElementById('qtd').value = '';
        alert('Compra realizada com sucesso!');
    }
}

function validarEntradaIndefinida(entrada)
{
    return 0 >= entrada || '' == entrada || 'undefined' === typeof entrada;
}

function validarEntradaDesconhecida(entrada)
{
    return !('inferior' == entrada || 'superior' == entrada || 'pista' == entrada);
}