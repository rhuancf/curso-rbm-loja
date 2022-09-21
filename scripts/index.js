"use strict";
const produtos = [
    { id: 1, marca: "lacosta", modelo: "Blusa do naruto", preco: 13.5, tamanho: "P", cores: ["amarelo", "preto", "vermelho"], categoria: "blusa", imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_627789-MLB46515960810_062021-W.jpg' },
    { id: 2, marca: "lafrente", modelo: "Casaco do one piece", preco: 67.20, tamanho: "G", cores: ["branco", "preto", "amarelo"], categoria: "casaco", imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_725801-MLB44062191039_112020-F.webp' },
    { id: 311, marca: "ardidas", modelo: "Blusa do tokyo ghoul", preco: 12.5, tamanho: "M", cores: ["preto", "branco", "vermelho"], categoria: "blusa", imageUrl: 'https://img.elo7.com.br/product/zoom/1CA16D8/camiseta-tokyo-ghoul-kaneki-camiseta.jpg' },
    { id: 4, marca: "puma", modelo: "Camisa do jujutsu no kaizen", preco: 15.99, tamanho: "G", cores: ["preto", "branco", "azul", "verde"], categoria: "camisa", imageUrl: 'https://www.streetanime.com.br/arquivos/PRODUTOS/3501619183158948393/1_GG_Camisa-Jujutsu-Kaisen-Yuji-Megumi-Nobara-Sat.jpg' },
    { id: 5, marca: "calvo cleide", modelo: "Camisa do kimetsu no yaiba", preco: 32.99, tamanho: "M", cores: ["branco", "verde", "preto"], categoria: "camisa", imageUrl: 'https://cf.shopee.com.br/file/238ed9ae75bc8490cb57eee1ed352c2e' },
    { id: 6, marca: "luis vitão", modelo: "Blusa do boruto", preco: 12.99, tamanho: "G", cores: ["preto", "amarelo", "azul"], categoria: "blusa", imageUrl: 'https://cf.shopee.com.br/file/97284bb98b6c4805e43b2c1903d5db08' },
    { id: 21, marca: "cavalera", modelo: "Blusa do cavalo de fogo", preco: 8.99, tamanho: "GG", cores: ["branco", "roxo", "vermelho"], categoria: "blusa", imageUrl: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/186/674/products/camiseta-cinza-cavalo-de-fogo-nostalgia-desenho-animado-anos-70-80-90-16301-f2bcfc1253b9608e3915709119586563-640-0.jpg' },
    { id: 123, marca: "reserva", modelo: "Blusa do cavalo de fogo azul", preco: 25.99, tamanho: "G", cores: ["azul", "branco", "vermelho", "preto"], categoria: "blusa", imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_768880-MLB46470593884_062021-O.jpg' },
    { id: 113, marca: "ardidas", modelo: "Tenis ardidas branco", preco: 200.99, tamanho: "Todos", cores: ["branco", "preto"], categoria: "tenis", imageUrl: 'https://cdn.dooca.store/1290/products/m-grand-court-base-bcopreto-1.jpg?v=1623520192&webp=0' },
    { id: 87, marca: "mike", modelo: "Tenis mike preto", preco: 354.99, tamanho: "Todos", cores: ["preto", "vermelho"], categoria: "tenis", imageUrl: 'https://imgs.extra.com.br/1519876725/1xg.jpg?imwidth=292' },
    { id: 17, marca: "Gucci", modelo: "Calça Jeans Feminina", preco: 154.99, tamanho: "G", cores: ["azul"], categoria: "calça", imageUrl: 'https://i.pinimg.com/564x/e7/c6/0c/e7c60c558fab8b7355b1fdd189742a9b.jpg' },
    { id: 11, marca: "GAP", modelo: "Moletom GAP", preco: 354.99, tamanho: "G", cores: ["cinza", "rosa"], categoria: "casaco", imageUrl: 'https://i.pinimg.com/236x/a7/93/97/a79397a80091c3ef17fe2ca1193afdf0--sweatshirt.jpg' },
    { id: 13, marca: "luis vitão", modelo: "Mochila do Bem 12", preco: 54.99, tamanho: "Todos", cores: ["verde", "preto", "marrom"], categoria: "mochila", imageUrl: 'https://img.elo7.com.br/product/original/3362EA9/mochila-de-costas-ben-10-tam-m-costas.jpg' },
    { id: 188, marca: "obama", modelo: "Mochila do Sônico", preco: 224.99, tamanho: "Todos", cores: ["preto", "vermelho", "azul"], categoria: "mochila", imageUrl: 'https://i.ibb.co/WprHbQP/D-NQ-NP-739539-MLB51202382033-082022-W-removebg-preview.png' },
    { id: 127, marca: "marvel", modelo: "Mochila do Sheregue", preco: 73.22, tamanho: "Todos", cores: ["verde", "preto", "amarelo"], categoria: "mochila", imageUrl: 'https://i.ibb.co/G3QZGV4/Ezxp-S2-AWQAAP8-Wc-removebg-preview.png' },
    { id: 128, marca: "lula", modelo: "Caneca Bolsotsé", preco: 13.22, tamanho: "Todos", cores: ["branco", "vermelho"], categoria: "caneca", imageUrl: 'https://i.ibb.co/wcKQFCG/7a6057063a1274ed947a5db31a78d1e5-removebg-preview-2.png' },
];
const rootElement = document.querySelector("#root");
const checkboxCategoria = document.querySelector("#checkbox-filtro-categoria");
const inputFiltroCategoria = document.querySelector("#input-filtro-categoria");
const selectFiltroTamanho = document.querySelector("#select-filtro-tamanho");
const selectFiltroPreco = document.querySelector("#select-filtro-preco");
const checkboxCor = document.querySelector("#checkbox-filtro-cor");
const inputFiltroCor1 = document.querySelector("#input-filtro-cor1");
const inputFiltroCor2 = document.querySelector("#input-filtro-cor2");
// function criarFiltro(tipo: keyof Produto, valor:string)  {
//   return {
//     [tipo]: valor,
//   }
// }
// const filtro = (criarFiltro("modelo", "produto do naruto"));
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
          <div class="item-info-container" id="item-info-${item.id}">
            <h3 class="item-info-marca">${item.marca}</h3>
            <h4 class="item-info-preco">${item.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
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
function filtraCategoria(arrayDeProdutos = produtos) {
    const checkboxCategoriaChecked = checkboxCategoria.checked;
    let newProdutos = arrayDeProdutos;
    if (checkboxCategoriaChecked) {
        const inputFiltroCategoriaValue = inputFiltroCategoria.value.toLowerCase();
        newProdutos = newProdutos.filter((produto) => produto['categoria'].includes(inputFiltroCategoriaValue));
    }
    return newProdutos;
}
function filtraTamanho(arrayDeProdutos = produtos) {
    const selectFiltroTamanhoValue = selectFiltroTamanho.value;
    let newProdutos = arrayDeProdutos;
    if (selectFiltroTamanhoValue !== 'Todos') {
        newProdutos = newProdutos.filter((produto) => produto['tamanho'].includes(selectFiltroTamanhoValue));
    }
    return newProdutos;
}
function ordenaPreco(arrayDeProdutos = produtos) {
    const selectFiltroPrecoValue = selectFiltroPreco.value;
    let newProdutos = arrayDeProdutos;
    if (selectFiltroPrecoValue === 'crescente') {
        newProdutos = newProdutos.sort((a, b) => a.preco < b.preco ? -1 : a.preco > b.preco ? 1 : 0);
    }
    if (selectFiltroPrecoValue === 'decrescente') {
        newProdutos = newProdutos.sort((a, b) => a.preco > b.preco ? -1 : a.preco < b.preco ? 1 : 0);
    }
    return newProdutos;
}
function filtraCor(arrayDeProdutos = produtos) {
    const checkboxCorChecked = checkboxCor.checked;
    let newProdutos = arrayDeProdutos;
    if (checkboxCorChecked) {
        const inputFiltroCor1Value = inputFiltroCor1.value.toLowerCase();
        if (inputFiltroCor1Value !== '') {
            newProdutos = newProdutos.filter((produto) => {
                let flag = false;
                produto['cores'].forEach((e) => {
                    if (e.includes(inputFiltroCor1Value))
                        flag = true;
                });
                return flag;
            });
        }
        const inputFiltroCor2Value = inputFiltroCor2.value.toLowerCase();
        if (inputFiltroCor2Value !== '') {
            newProdutos = newProdutos.filter((produto) => {
                let flag = false;
                produto['cores'].forEach((e) => {
                    if (e.includes(inputFiltroCor2Value))
                        flag = true;
                });
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
render(produtos);
eventListenerHandleInputCategoria();
eventListenerHandleCheckboxCategoria();
eventListenerHandleSelectTamanho();
eventListenerHandleSelectPreco();
eventListenerHandleCheckboxCor();
eventListenerHandleInputCor1();
eventListenerHandleInputCor2();
scaleFontSize();
