document.getElementById('cadastroBtnListagem').addEventListener('click', function () {
    window.location.href = 'cadastro.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.sort((a, b) => parseFloat(a.valor) - parseFloat(b.valor));
    const produtosList = document.getElementById('produtosListListagem');

    produtos.forEach((produto, index) => {
        const row = document.createElement('tr');
        const nomeCell = document.createElement('td');
        const valorCell = document.createElement('td');
        const disponivelCell = document.createElement('td');
        const acoesCell = document.createElement('td');

        const excluirButton = document.createElement('button');
        excluirButton.classList.add('excluir-itemListagem');
        excluirButton.setAttribute('aria-label', 'Excluir item');
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('bx', 'bxs-trash');
        excluirButton.appendChild(trashIcon);

        excluirButton.addEventListener('click', function () {
            const nomeProduto = row.querySelector('td').textContent;

            if (confirm(`Tem certeza que deseja excluir o produto "${nomeProduto}"?`)) {
                const row = this.closest('tr');
                const rowIndex = Array.from(row.parentNode.children).indexOf(row);
                const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
                produtos.splice(rowIndex, 1);
                localStorage.setItem('produtos', JSON.stringify(produtos));
                row.remove();
            }
        });

        const editarButton = document.createElement('button');
        editarButton.classList.add('editar-itemListagem');
        editarButton.setAttribute('aria-label', 'Editar item');
        const editIcon = document.createElement('i');
        editIcon.classList.add('bx', 'bx-edit');
        editarButton.appendChild(editIcon);

        editarButton.addEventListener('click', function () {
            const params = new URLSearchParams({
                index: index,
                nome: produto.nome,
                descricao: produto.descricao,
                valor: produto.valor,
                disponivel: produto.disponivel
            });
            window.location.href = `cadastro.html?${params.toString()}`;
        });

        nomeCell.textContent = produto.nome;
        valorCell.textContent = produto.valor;
        disponivelCell.textContent = produto.disponivel === 'sim' ? 'Sim' : 'Não';

        acoesCell.appendChild(excluirButton);
        acoesCell.appendChild(editarButton);

        row.appendChild(nomeCell);
        row.appendChild(valorCell);
        row.appendChild(disponivelCell);
        row.appendChild(acoesCell);
        produtosList.appendChild(row);
    });
});
