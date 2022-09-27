import {produtos, Produto} from "./produtos.js";

const rootElement = document.querySelector("#root");
const checkboxCategoria = document.querySelector("#checkbox-filtro-categoria");
const inputFiltroCategoria = document.querySelector("#input-filtro-categoria");
const selectFiltroTamanho = document.querySelector("#select-filtro-tamanho");
const selectFiltroPreco = document.querySelector("#select-filtro-preco");
const checkboxCor = document.querySelector("#checkbox-filtro-cor");
const inputFiltroCor1 = document.querySelector("#input-filtro-cor1");
const inputFiltroCor2 = document.querySelector("#input-filtro-cor2");

function render(itens: Produto[]) {
  if (rootElement) {
    rootElement.innerHTML = "";
    itens.forEach((item) => {
      rootElement.innerHTML += `
        <div class="item-wrapper hidden" id="card-id-${item.id}">
          <div class="item-name">
            <h2>${item.modelo}</h2>
          </div>
          <div class="item-image">
            <img id="imagem-${item.id}" class="imagem-produto" src="${item.imageUrl}" />
          </div>
          <div class="item-info-container" id="item-info-${item.id}">
            <h3 class="item-info-marca">${item.marca}</h3>
            <h4 class="item-info-preco">${item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
          </div>
        </div>
      `;
    });
  }
}

function scaleFontSize() {
  const nomeProdutos = document.getElementsByTagName('h2');

  for (let i = 0; i < nomeProdutos.length; i++) {

    if (nomeProdutos[i].innerHTML.length > 30) {
        nomeProdutos[i].style.fontSize = '22px';
    }
    if (nomeProdutos[i].innerHTML.length > 100) {
      nomeProdutos[i].style.fontSize = '18px';
    }
    if (nomeProdutos[i].innerHTML.length > 150) {
      nomeProdutos[i].style.fontSize = '15px';
    }
    if (nomeProdutos[i].innerHTML.length > 160) {
      // console.log(nomeProdutos[i].innerHTML )
      const textoLimitado = nomeProdutos[i].innerHTML.substring(0, 160) + '...';
      // console.log(textoLimitado);
      nomeProdutos[i].innerText = textoLimitado;
    }
  }
}

function filtraCategoria (arrayDeProdutos:Produto[] = produtos) {
  const checkboxCategoriaChecked = (checkboxCategoria as HTMLInputElement).checked;
  let newProdutos:Produto[] = arrayDeProdutos;
  if(checkboxCategoriaChecked) {
    const inputFiltroCategoriaValue = (inputFiltroCategoria as HTMLInputElement).value.toLowerCase();
    newProdutos = newProdutos.filter((produto) => produto['categoria'].includes(inputFiltroCategoriaValue));

  }
  return newProdutos;
}

function filtraTamanho(arrayDeProdutos:Produto[] = produtos) {
  const selectFiltroTamanhoValue = (selectFiltroTamanho as HTMLSelectElement).value;
  let newProdutos:Produto[] = arrayDeProdutos;
  if(selectFiltroTamanhoValue !== 'Todos') {
    newProdutos = newProdutos.filter((produto) => produto['tamanho'].includes(selectFiltroTamanhoValue));
    
  }
  return newProdutos;
}
function ordenaPreco(arrayDeProdutos:Produto[] = produtos) {
  const selectFiltroPrecoValue = (selectFiltroPreco as HTMLSelectElement).value;
  let newProdutos:Produto[] = arrayDeProdutos;
  if(selectFiltroPrecoValue === 'crescente'){
    newProdutos = newProdutos.sort((a, b) => a.preco < b.preco ? -1 : a.preco > b.preco ? 1 : 0);
  }

  if(selectFiltroPrecoValue === 'decrescente'){
    newProdutos = newProdutos.sort((a, b) => a.preco > b.preco ? -1 : a.preco < b.preco ? 1 : 0);
  }
  return newProdutos;
}

function filtraCor(arrayDeProdutos:Produto[] = produtos) {
  const checkboxCorChecked = (checkboxCor as HTMLInputElement).checked;
  let newProdutos = arrayDeProdutos;
  if(checkboxCorChecked) {
    const inputFiltroCor1Value = (inputFiltroCor1 as HTMLInputElement).value.toLowerCase();
    if(inputFiltroCor1Value !== ''){
      newProdutos = newProdutos.filter((produto) => {
        let flag = false;
        produto['cores'].forEach((e) => {
          if(e.includes(inputFiltroCor1Value)) flag = true;
        })
        return flag;
      });
  
    }
    const inputFiltroCor2Value = (inputFiltroCor2 as HTMLInputElement).value.toLowerCase();
    if(inputFiltroCor2Value !== ''){
      newProdutos = newProdutos.filter((produto) => {
        let flag = false;
        produto['cores'].forEach((e) => {
          if(e.includes(inputFiltroCor2Value)) flag = true;
        })
        return flag;
      });
  
    }
  }
  return newProdutos;
}

function aplicaFiltros() {
  let newProdutos = filtraCategoria();
  newProdutos = filtraTamanho(newProdutos);
  newProdutos = ordenaPreco(newProdutos);
  newProdutos = filtraCor(newProdutos);
  render(newProdutos);
  scaleFontSize();
  transitionEffect(newProdutos.length);
  
}

function eventListenerHandleInputCategoria() {
  (inputFiltroCategoria as HTMLInputElement)?.addEventListener("keyup", aplicaFiltros);
}
function eventListenerHandleCheckboxCategoria() {
  (checkboxCategoria as HTMLInputElement).addEventListener("change", aplicaFiltros);
}
function eventListenerHandleSelectTamanho() {
  (selectFiltroTamanho as HTMLSelectElement).addEventListener("change", aplicaFiltros);
}
function eventListenerHandleSelectPreco() {
  (selectFiltroPreco as HTMLSelectElement).addEventListener("change", aplicaFiltros);
}
function eventListenerHandleInputCor1() {
  (inputFiltroCor1 as HTMLInputElement)?.addEventListener("keyup", aplicaFiltros);
}
function eventListenerHandleInputCor2() {
  (inputFiltroCor2 as HTMLInputElement)?.addEventListener("keyup", aplicaFiltros);
}
function eventListenerHandleCheckboxCor() {
  (checkboxCor as HTMLInputElement).addEventListener("change", aplicaFiltros);
}

render(produtos);
eventListenerHandleInputCategoria();
eventListenerHandleCheckboxCategoria();
eventListenerHandleSelectTamanho();
eventListenerHandleSelectPreco();
eventListenerHandleCheckboxCor();
eventListenerHandleInputCor1();
eventListenerHandleInputCor2();
scaleFontSize();

function transitionEffect(numeroFiltrado:number = 0) {
  const cardsNaTela = document.querySelectorAll('.item-wrapper');
  const arrayCardsNaTela = Array.from(cardsNaTela)

  // Remover transição ao filtrar.
  if(numeroFiltrado === cardsNaTela.length) {
    arrayCardsNaTela.forEach((el) =>{
      // if(el) {(el as HTMLObjectElement).style.transitionDelay = "1ms";}
      el.classList.add('show');
    })
  }
  //-----------------------------------

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
    })
  });

  cardsNaTela.forEach((el) => observer.observe(el));
  let delay = 100;
  let columnCount = 0;

  arrayCardsNaTela.forEach((el) =>{
    if(el) (el as HTMLObjectElement).style.transitionDelay = delay.toString() + "ms";
    delay +=100;
    columnCount++;
    // considerando cada linha com 4 colunas
    if(columnCount === 4)  {
      delay = 100;
      columnCount = 0;
    }
  })  
}

transitionEffect(); 

const linkSobre = document.getElementById("link-sobre");
if(linkSobre)linkSobre.addEventListener("click", scrollToBottom);

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);

}
