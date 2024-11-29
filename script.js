// Array que armazenará os itens do carrinho
let carrinho = [];
let total = 0;

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho(); // Atualiza a lista do carrinho
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itensCarrinho');
    itensCarrinho.innerHTML = ''; // Limpa a lista atual

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itensCarrinho.appendChild(li);
    });

    // Atualiza o total
    total = carrinho.length * 120; // Altere este cálculo conforme a lógica de preços
    document.getElementById('totalCarrinho').textContent = 'Total: R$ ${total},00';
}

// Seleciona o container de produtos e os botões de rolar
const produtosContainer = document.querySelector('.produtos-container');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');

// Define a quantidade de rolagem para cada clique (ajuste conforme necessário)
const scrollAmount = 300;

// Rolar para a esquerda
scrollLeftButton.addEventListener('click', () => {
    produtosContainer.scrollBy({
        left: -scrollAmount,  // Rola para a esquerda
        behavior: 'smooth'    // Comportamento de rolagem suave
    });
});

// Rolar para a direita
scrollRightButton.addEventListener('click', () => {
    produtosContainer.scrollBy({
        left: scrollAmount,   // Rola para a direita
        behavior: 'smooth'    // Comportamento de rolagem suave
    });
});

document.getElementById('scrollLeft').addEventListener('click', function() {
    document.getElementById('produtos').scrollLeft -= 100;
});

document.getElementById('scrollRight').addEventListener('click', function() {
    document.getElementById('produtos').scrollLeft += 100;
});