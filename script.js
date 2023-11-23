function salvarNoDiario() {
    var texto = document.getElementById('diarioInput').value;

    if (texto.trim() !== "") {
        // Recupera os dados existentes do armazenamento local
        var diarioAnterior = localStorage.getItem('diarioAnterior') || '';

        // Atualiza os dados com o novo texto
        diarioAnterior += '<p>' + texto + '</p>';

        // Salva os dados no armazenamento local
        localStorage.setItem('diarioAnterior', diarioAnterior);

        // Atualiza a exibição dos dados anteriores
        document.getElementById('diarioAnterior').innerHTML = diarioAnterior;

        // Limpa o campo de entrada
        document.getElementById('diarioInput').value = '';
    }
}
