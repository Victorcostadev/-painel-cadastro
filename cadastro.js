document.getElementById('listagemBtnCadastro').addEventListener('click', function () {
    window.location.href = 'listagem.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    if (index !== null) {
        document.getElementById('nome_produtoCadastro').value = urlParams.get('nome');
        document.getElementById('descricao_produtoCadastro').value = urlParams.get('descricao');
        document.getElementById('valor_produtoCadastro').value = urlParams.get('valor');
        document.getElementById('disponivel_vendaCadastro').value = urlParams.get('disponivel');
        document.getElementById('formTitleCadastro').textContent = 'Editar Produto';
        document.getElementById('submitButtonCadastro').textContent = 'Concluir Edição';
    }

    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = document.getElementById('nome_produtoCadastro').value;
        const descricao = document.getElementById('descricao_produtoCadastro').value;
        const valor = document.getElementById('valor_produtoCadastro').value;
        const disponivel = document.getElementById('disponivel_vendaCadastro').value;

        const produto = { nome, descricao, valor, disponivel };
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

        if (index === null) {
            produtos.push(produto);
        } else {
            produtos[index] = produto;
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        window.location.href = 'listagem.html';
    });
});
