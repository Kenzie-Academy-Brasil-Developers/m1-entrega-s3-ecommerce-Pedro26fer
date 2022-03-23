const bancoDeDados = [
    {
        imgSrc: "Men-Jacket-Front-Black__15466 1.png",
        alt:"Jaqueta preta masculina",
        variedade: "Camisetas",
        nome: "Ligthweigth Jacket",
        descricao: "Adicione um pouco de energia ao seu guarda-roupa de inverno com essa jaqueta vibrante...",
        preco: 100,
        id: "1"
    },
    {
        imgSrc:"image 1.png",
        alt:"Boné preto",
        variedade:"Acessorios",
        nome:"Black Hat",
        descricao:"O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        preco: 100,
        id: '2'
    },
    {
        imgSrc: "Surgical-Mask-Black__89554 1.png",
        alt:"Máscara cirúrgica preta",
        variedade:"Acessórios",
        nome:"Mask",
        descricao:"Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        preco: 40,
        id:'3'
    },
    {
        imgSrc:"Men-TShirt-Black-Front__70046 1.png",
        alt:"Camisa preta masculina",
        variedade:"Camisetas",
        nome:"T-Shirt",
        descricao:"Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        preco: 100,
        id:'4'
    },
    {
        imgSrc: "mockup-a0dc2330__62146 1.png",
        alt:"Camisa branca",
        variedade: "Camisetas",
        nome: "Short-Sleeve T-Shirt",
        descricao:"Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        preco: 100,
        id:'5'
    },
    {
        imgSrc:"jacketa.png",
        alt:"Jaqueta de lona preta masculina",
        variedade:"Camisetas",
        nome:"Champion Packable Jacketa",
        descricao:"Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        preco: 100,
        id:'6'
    }
]
let quantidade = 1
let precoTotal = 0
const produtosArr = []


let carrinho = document.querySelector(".carrinho-vazio")
carrinho.innerHTML = `<h2 class="dentroCarrinho">Carrinho vazio</h2> 
<small>Adicione itens</small>`

carrinho.addEventListener("click",function(item){
    console.log(item.target)
    produtosArr.splice(item.target.id,1)
    addProdutoS()
    }
) 



function createProductCard ({id,imgSrc,alt,variedade,nome,descricao,preco}){
    let cardProduct = document.createElement("div")
    cardProduct.id = id
    cardProduct.setAttribute("class","carta-produto")
    cardProduct.innerHTML = `
<figure>
<img src="${imgSrc}" alt="${alt}">
</figure>
<figcaption>
<small class="variedade">${variedade}</small>
<h3 class="nomeProduto">${nome}</h3>
<p>${descricao}</p>
<p class="price">R$${preco},00</p>
<small class="add">Adicionar ao carrinho</small>
</figcaption>`

    document.querySelector(".produtos").appendChild(cardProduct)   
    
}


function atualizaProdutos(){
    bancoDeDados.forEach((item) =>createProductCard(item))
}

atualizaProdutos()


const add = document.querySelectorAll(".add")


for(let i = 0; i < add.length; i++){
    add[i].addEventListener("click",function(evt){
        const idt = evt.target.parentElement.parentElement.id
        const idBanco = bancoDeDados.filter(e => e.id == idt)
        produtosArr.push(idBanco[0])
        addProdutoS()
    })
}


function addProdutoS(){
    document.querySelector(".carrinho-vazio").innerHTML = ""
    if( document.querySelector(".carrinho-vazio").nextSibling){
        document.querySelector(".carrinho-vazio").nextSibling.remove();}
    produtosArr.forEach((item,index)=>{
        let cardCompras = document.createElement("div")
    cardCompras.setAttribute("class","card-compras")
    cardCompras.innerHTML = ` <figure class="figCarrinho">
    <div class="fundoImg">
        <img class="produto-carrinho" src="${item.imgSrc}" alt=${item.alt}>
    </div>   
    <div class="descricaoCarrinho">
        <h3 class="nomeCarrinho">${item.nome}</h3>
        <p class="price-carrinho">R$${item.preco},00</p>
        <p id="${index}" class="remove">Remover produto</p>
    </div>
    </figure>`

    document.querySelector(".carrinho-vazio").appendChild(cardCompras)    
})
    let price = produtosArr.reduce((total,item)=> total+item.preco, 0)
    if( produtosArr.length !== 0){
        total = document.createElement("div")
        total.innerHTML = `
        <div class="total">
        <p class="quantidade">Quantidade: <small>${produtosArr.length}</small></p>
        <p class="precoTotal">Total: <small>R$${price},00</small></p>  
        </div>`
        document.querySelector(".Compras").appendChild(total)}
        else{
            carrinho.innerHTML = `<h2 class="dentroCarrinho">Carrinho vazio</h2> 
<small>Adicione itens</small>`
        }

    
}


function addProduto({imgSrc,alt,nome,preco}){
    

    let cardCompras = document.createElement("div")
    cardCompras.setAttribute("class","card-compras")
    cardCompras.innerHTML = ` <figure class="figCarrinho">
    <div class="fundoImg">
        <img class="produto-carrinho" src="${imgSrc}" alt=${alt}>
    </div>   
    <div class="descricaoCarrinho">
        <h3 class="nomeCarrinho">${nome}</h3>
        <p class="price-carrinho">R$${preco},00</p>
        <p class="remove">Remover produto</p>
    </div>
    </figure>`

    document.querySelector(".carrinho-vazio").appendChild(cardCompras)    
    
    if( quantidade == 1){
    total = document.createElement("div")
    total.innerHTML = `
    <div class="total">
    <p class="quantidade">Quantidade: <small>${quantidade}</small></p>
    <p class="precoTotal">Total: <small>R$${preco},00</small></p>  
    </div>`
    document.querySelector(".Compras").appendChild(total)}

  
    precoTotal = precoTotal + preco
    console.log(preco)

    total.innerHTML =  `<div class="total">
    <p class="quantidade">Quantidade: <small>${quantidade}</small></p>
    <p class="precoTotal">Total: <small>R$${precoTotal},00</small></p>  
    </div>`      
        console.log(precoTotal)

    
    }
    

