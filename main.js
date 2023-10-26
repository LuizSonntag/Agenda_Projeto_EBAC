const form = document.getElementById('Contatos');
const NomeContatos = [];
const NumContatos = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    AdicionaLinha();
    AtualizaTabela();
})

function AdicionaLinha() {
    const inputNomeContato = document.getElementById('Nome_do_contato');
    const inputNumContato = document.getElementById('Número_do_contato');

    if (NomeContatos.includes(inputNomeContato.value)){
        alert('Nome de contato já existente, tente outro');
    }else {
        NomeContatos.push(inputNomeContato.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumContato.value}</td>`;
        linha += `</td>`;

        linhas += linha;
    }
        inputNomeContato.value = '';
        inputNumContato.value = '';
    }

function AtualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}