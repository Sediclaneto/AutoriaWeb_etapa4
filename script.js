const formulario = document.getElementById('formDados');
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const tipo1 = document.getElementById('tipo1').value;
    const tipo2 = document.getElementById('tipo2').value;

    const novaLinha = tabela.insertRow();

    const cellNome = novaLinha.insertCell(0);
    const cellTipo1 = novaLinha.insertCell(1);
    const cellTipo2 = novaLinha.insertCell(2);

    cellNome.textContent = nome;
    cellTipo1.textContent = tipo1;
    cellTipo2.textContent = tipo2;

    formulario.reset();
});