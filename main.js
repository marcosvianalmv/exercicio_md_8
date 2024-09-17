const form = document.getElementById('form-contatos')

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome');
    const inputTelefoneContato = document.getElementById('telefone');
    
    let linha = "<tr>";
    linha = linha + "<td>" + inputNomeContato.value + "</td>";
    linha = linha + "<td>" + inputTelefoneContato.value + "</td>";
    linha = linha + "<tr>";

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
});