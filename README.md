# Sistema de Cadastro de Produtos 📦

Aplicação **front‑end** pura (HTML + CSS + JavaScript) para **cadastrar, editar, listar e excluir** produtos com persistência em **LocalStorage**.

Projeto acadêmico/portfólio — ideal para demonstrar fundamentos de DOM, eventos e organização de código.

> Status: MVP funcional (CRUD + responsividade). Roadmap aberto para novas features.
> 

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
| --- | --- |
| Cadastro | Formulário com validação de campos obrigatórios |
| Edição in‑place | Clique em **✏️** para alterar um produto existente |
| Exclusão | Botão **🗑️** com confirmação antes de remover |
| Listagem | Tabela dinâmica ordenada por valor (JS `sort`) |
| Persistência | Dados salvos no `localStorage` (não perde ao recarregar) |
| Responsivo | Layout Flexbox/Grid adaptável a 320 px+ |

---

## 🗂 Estrutura do Projeto

```
.
├── cadastro.html     # Formulário de criação / edição
├── cadastro.js       # Lógica de CRUD + validação
├── listagem.html     # Tabela de listagem
├── listagem.js       # Render + ações (editar/excluir)
├── styles.css        # Estilos globais dos dois fluxos
└── /assets           # Imagens e ícones (SVG)
```

---

## 🚀 Como Executar Localmente

1. **Clone** o repositório
    
    ```bash
    git clone https://github.com/Victorcostadev/-painel-cadastro.git
    cd -painel-cadastro
    ```
    
2. **Abra** `cadastro.html` ou `listagem.html` no navegador
    - Para URLs limpas, rode um servidor estático (opcional):
    
    ```bash
    # Python 3python -m http.server 8000
    # depois acesse http://localhost:8000/cadastro.html
    ```
    

> Nenhuma dependência externa, nem build – 100 % client‑side.
> 

---

## 🛠️ Tecnologias & Recursos

- **HTML5** semântico (+ acessibilidade básica)
- **CSS3** com Flexbox, Grid e variáveis
- **JavaScript ES6** – módulos simples, `localStorage`, `querySelector`
- **Boxicons** para ícones de ação
- **Google Fonts – Inter** como tipografia padrão

---

## 🤝 Contribuindo

1. **Fork** este repositório
2. Crie uma *branch* para a feature: `git checkout -b feat/minha-feature`
3. **Commit**: `git commit -m "feat: descrição"`
4. **Push**: `git push origin feat/minha-feature`
5. Abra um **Pull Request** explicando a proposta

---
