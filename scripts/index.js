"use strict";
const blusas = [
    { id: 1, marca: "lacosta", modelo: "blusa do naruto", preco: 3.5, tamanho: "P", cores: ["amarelo", "preto", "vermelho"], categoria: "blusa", imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_627789-MLB46515960810_062021-W.jpg' },
    { id: 2, marca: "lafrente", modelo: "Casaco do one piece", preco: 7.0, tamanho: "G", cores: ["branco", "preto", "amarelo"], categoria: "casaco", imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_725801-MLB44062191039_112020-F.webp' },
    { id: 311, marca: "ardidas", modelo: "blusa do tokyo ghoul", preco: 12.5, tamanho: "M", cores: ["preto", "branco", "vermelho"], categoria: "blusa", imageUrl: 'https://img.elo7.com.br/product/zoom/1CA16D8/camiseta-tokyo-ghoul-kaneki-camiseta.jpg' },
    { id: 4, marca: "puma", modelo: "blusa do jujutsu no kaizen", preco: 12.99, tamanho: "G", cores: ["preto", "branco", "azul", "verde"], categoria: "camisa", imageUrl: 'https://www.streetanime.com.br/arquivos/PRODUTOS/3501619183158948393/1_GG_Camisa-Jujutsu-Kaisen-Yuji-Megumi-Nobara-Sat.jpg' },
    { id: 5, marca: "calvo cleide", modelo: "blusa do kimetsu no yaiba", preco: 32.99, tamanho: "M", cores: ["branco", "verde", "preto"], categoria: "camisa", imageUrl: 'https://cf.shopee.com.br/file/238ed9ae75bc8490cb57eee1ed352c2e' },
    { id: 6, marca: "pia", modelo: "blusa do boruto", preco: 1.99, tamanho: "G", cores: ["preto", "amarelo", "azul"], categoria: "blusa", imageUrl: 'https://cf.shopee.com.br/file/97284bb98b6c4805e43b2c1903d5db08' },
    { id: 21, marca: "cavalera", modelo: "blusa do cavalo de fogo", preco: 8.99, tamanho: "GG", cores: ["branco", "roxo", "vermelho"], categoria: "blusa", imageUrl: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/186/674/products/camiseta-cinza-cavalo-de-fogo-nostalgia-desenho-animado-anos-70-80-90-16301-f2bcfc1253b9608e3915709119586563-640-0.jpg' },
    { id: 123, marca: "reserva", modelo: "blusa do cavalo de fogo azul", preco: 25.99, tamanho: "G", cores: ["azul", "branco", "vermelho", "preto"], categoria: "blusa", imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_768880-MLB46470593884_062021-O.jpg' },
];
const rootElement = document.querySelector("#root");
const checkboxCategoria = document.querySelector("#checkbox-filtro-categoria");
const inputFiltroCategoria = document.querySelector("#input-filtro-categoria");
const selectFiltroTamanho = document.querySelector("#select-filtro-tamanho");
const selectFiltroPreco = document.querySelector("#select-filtro-preco");
const checkboxCor = document.querySelector("#checkbox-filtro-cor");
const inputFiltroCor1 = document.querySelector("#input-filtro-cor1");
const inputFiltroCor2 = document.querySelector("#input-filtro-cor2");
// function criarFiltro(tipo: keyof Blusa, valor:string)  {
//   return {
//     [tipo]: valor,
//   }
// }
// const filtro = (criarFiltro("modelo", "blusa do naruto"));
// console.log(filtro);
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = "";
        itens.forEach((item) => {
            rootElement.innerHTML += `
        <div class="item-wrapper">
          <div class="item-name">
            <h2>${item.modelo}</h2>
          </div>
          <div class="item-image">
            <img id="imagem-${item.id}" class="imagem-produto" src="${item.imageUrl}" />
          </div>
          <div class="item-info">
            <h3>Marca: ${item.marca}</h3>
            <h4>Preço: ${item.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
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
function filtraCategoria(arrayDeBlusas = blusas) {
    const checkboxCategoriaChecked = checkboxCategoria.checked;
    let newBlusas = arrayDeBlusas;
    if (checkboxCategoriaChecked) {
        const inputFiltroCategoriaValue = inputFiltroCategoria.value.toLowerCase();
        console.log(inputFiltroCategoriaValue);
        newBlusas = newBlusas.filter((blusa) => blusa['categoria'].includes(inputFiltroCategoriaValue));
    }
    return newBlusas;
}
function filtraTamanho(arrayDeBlusas = blusas) {
    const selectFiltroTamanhoValue = selectFiltroTamanho.value;
    let newBlusas = arrayDeBlusas;
    if (selectFiltroTamanhoValue !== 'Todos') {
        newBlusas = newBlusas.filter((blusa) => blusa['tamanho'].includes(selectFiltroTamanhoValue));
    }
    return newBlusas;
}
function filtraPreco(arrayDeBlusas = blusas) {
    const selectFiltroPrecoValue = selectFiltroPreco.value;
    let newBlusas = arrayDeBlusas;
    if (selectFiltroPrecoValue === 'crescente') {
        newBlusas = newBlusas.sort((a, b) => a.preco < b.preco ? -1 : a.preco > b.preco ? 1 : 0);
    }
    if (selectFiltroPrecoValue === 'decrescente') {
        newBlusas = newBlusas.sort((a, b) => a.preco > b.preco ? -1 : a.preco < b.preco ? 1 : 0);
    }
    return newBlusas;
}
function filtraCor(arrayDeBlusas = blusas) {
    const checkboxCorChecked = checkboxCor.checked;
    let newBlusas = arrayDeBlusas;
    if (checkboxCorChecked) {
        const inputFiltroCor1Value = inputFiltroCor1.value.toLowerCase();
        if (inputFiltroCor1Value !== '') {
            newBlusas = newBlusas.filter((blusa) => {
                let flag = false;
                blusa['cores'].forEach((e) => {
                    if (e.includes(inputFiltroCor1Value))
                        flag = true;
                });
                return flag;
            });
        }
        console.log(newBlusas);
        const inputFiltroCor2Value = inputFiltroCor2.value.toLowerCase();
        if (inputFiltroCor2Value !== '') {
            newBlusas = newBlusas.filter((blusa) => {
                let flag = false;
                blusa['cores'].forEach((e) => {
                    if (e.includes(inputFiltroCor2Value))
                        flag = true;
                });
                return flag;
            });
        }
        console.log(newBlusas);
    }
    return newBlusas;
}
function aplicaFiltros() {
    let newBlusas = filtraCategoria();
    newBlusas = filtraTamanho(newBlusas);
    newBlusas = filtraPreco(newBlusas);
    newBlusas = filtraCor(newBlusas);
    render(newBlusas);
    scaleFontSize();
}
function eventListenerHandleInputCategoria() {
    inputFiltroCategoria === null || inputFiltroCategoria === void 0 ? void 0 : inputFiltroCategoria.addEventListener("keyup", aplicaFiltros);
}
function eventListenerHandleCheckboxCategoria() {
    checkboxCategoria.addEventListener("change", aplicaFiltros);
}
function eventListenerHandleSelectTamanho() {
    selectFiltroTamanho.addEventListener("change", aplicaFiltros);
}
function eventListenerHandleSelectPreco() {
    selectFiltroPreco.addEventListener("change", aplicaFiltros);
}
function eventListenerHandleInputCor1() {
    inputFiltroCor1 === null || inputFiltroCor1 === void 0 ? void 0 : inputFiltroCor1.addEventListener("keyup", aplicaFiltros);
}
function eventListenerHandleInputCor2() {
    inputFiltroCor2 === null || inputFiltroCor2 === void 0 ? void 0 : inputFiltroCor2.addEventListener("keyup", aplicaFiltros);
}
function eventListenerHandleCheckboxCor() {
    checkboxCor.addEventListener("change", aplicaFiltros);
}
render(blusas);
eventListenerHandleInputCategoria();
eventListenerHandleCheckboxCategoria();
eventListenerHandleSelectTamanho();
eventListenerHandleSelectPreco();
eventListenerHandleCheckboxCor();
eventListenerHandleInputCor1();
eventListenerHandleInputCor2();
scaleFontSize();
