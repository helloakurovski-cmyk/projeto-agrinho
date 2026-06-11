// Seleção de elementos do DOM
const formPostagem = document.getElementById('form-postagem');
const feedPosts = document.getElementById('feed-posts');
const btnAcessibilidade = document.getElementById('btn-acessibilidade');

// 1. Lógica do Modo Escuro (Acessibilidade)
btnAcessibilidade.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
});

// 2. Array para armazenar as postagens (Simulação de Banco de Dados)
let postagens = [];

// Função para renderizar as postagens na tela (Manipulação do DOM)
function renderizarFeed() {
    feedPosts.innerHTML = ''; // Limpa o feed para não duplicar

    postagens.forEach((post) => {
        const card = document.createElement('div');
        card.classList.add('card-post');

        card.innerHTML = `
            <h4>Produtor(a): ${post.autor}</h4>
            <p><strong>Problema relatado:</strong> ${post.texto}</p>
            <small>Publicado em ambiente sustentável</small>
        `;

        feedPosts.appendChild(card);
    });
}

// Função para capturar o formulário e salvar a nova postagem
formPostagem.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede a página de recarregar

    // Capturando os dados digitados (Uso de variáveis)
    const nomeInput = document.getElementById('nome-usuario').value;
    const problemaInput = document.getElementById('descricao-problema').value;

    // Criando o objeto da nova postagem
    const novaPostagem = {
        autor: nomeInput,
        texto: problemaInput
    };

    // Adiciona no início da lista e atualiza a tela
    postagens.unshift(novaPostagem);
    renderizarFeed();

    // Limpa os campos do formulário para o usuário
    formPostagem.reset();
});