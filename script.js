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

function ordernarTabela(colunaIndex) {
    const tabela = document.getElementById("tabela");
    const linhas = Array.from(tabela.getElementsByTagName('tbody')[0].rows);

    const isOrdenada = tabela.getAttribute("data-ordenada") === colunaIndex.toString();

    linhas.sort((a, b) => {
        const celulaA = a.cells[colunaIndex].innerText.trim();
        const celulaB = b.cells[colunaIndex].innerText.trim();
        const valorA = isNaN(celulaA) ? celulaA : parseFloat(celulaA);
        const valorB = isNaN(celulaB) ? celulaB : parseFloat(celulaB);
        return valorA > valorB ? (isOrdenada ? -1 : 1) : (isOrdenada ? 1 : -1);
    })

    linhas.forEach(row => tabela.getElementsByTagName('tbody')[0].appendChild(row));
    tabela.setAttribute("data-ordenada", isOrdenada ? -1 : colunaIndex);
}

document.querySelectorAll("th").forEach((th, index) => {
    th.addEventListener("click", () => ordernarTabela(index));
});