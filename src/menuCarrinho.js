import { catalogo } from "./utilidades";

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById('fecharCarrinho');
  const botaoAbrirCarrinho = document.getElementById('abrirCarrinho');

  botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto)
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho')
  const cartaoProdutoCarrinho =
    `<article class="flex bg-slate-100 border border-neutral-800 rounded-lg p-1 relative">
  <button id="fecharCarrinho" class="absolute top-0 right-2">
    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-900"></i>
  </button>
  <img
   src="assets/${produto.nomeArquivoImagem}" alt="Produto" class="h-24 rounded-lg"
   >
  <div class="px-2 py-1">
    <p class="text-slate-900 text-sm">
      ${produto.nome}
    </p>
    <p class="text-slate-400 text-xs">
      Tamanho: M
    </p>
    <p class="text-green-700 text-lg">
      R$ ${produto.preco}
    </p>
  </div>
</article>`;
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}