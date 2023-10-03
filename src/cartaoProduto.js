import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class =" flex flex-col group p-2 justify-between w-60 m-2 shadow-xl shadow-slate-400 rounded-lg" id= "card-produto-${produtoCatalogo.id}">
          <img src="./assets/${produtoCatalogo.nomeArquivoImagem}" alt="Foto do Produto" class='group-hover:scale-105 duration-300 my-3 rounded-lg'>
              <p>${produtoCatalogo.nome}</p>
              <img src="${produtoCatalogo.marca}" alt="Marca" class="w-16";>
              <p class='text-green-700 mb-2'>
              R$ ${produtoCatalogo.preco}
              </p>
              <button id='adicionar-${produtoCatalogo.id}' class='bg-neutral-950 hover:bg-neutral-700 text-slate-100'>
              Adicionar ao Carrinho
              </button>
              </div>`;

        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }

    for ( const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}