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
        variedade:"Acessórios",
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
    },
    {
        imgSrc:"tenis.png",
        alt:"Tênis de corrida",
        variedade:"Calçados",
        nome:"Sport-Shoes",
        descricao:"O par de tênis ideal para você que quer começar a levar uma vida de atleta. Com o Sport-Shoes ...",
        preco: 135,
        id: "7"
        
    }
]
let quantidade = 1
let precoTotal = 0
const produtosArr = []
let novoBanco = []


let carrinho = document.querySelector(".carrinho-vazio")
carrinho.innerHTML = `<h2 class="dentroCarrinho">Carrinho vazio</h2> 
<small class = "small" >Adicione itens</small>`

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

    let figure = document.createElement("figure")
    cardProduct.appendChild(figure)

    let img = document.createElement("img")
    img.src = imgSrc 
    img.alt = alt
   
    figure.appendChild(img)

    let figcaption = document.createElement("figcaption")
    cardProduct.appendChild(figcaption)

    let small = document.createElement("small")
    small.classList.add("variedade")
    small.innerText = `${variedade}`
    figcaption.appendChild(small)

    let h3 = document.createElement("h3")
    h3.classList.add("nomeProduto")
    h3.innerText =`${nome}`
    figcaption.appendChild(h3)

    let p = document.createElement("p")
    p.innerText = `${descricao}`
    figcaption.appendChild(p)

    let p2 = document.createElement("p")
    p2.classList.add("price")
    p2.innerText = `R$${preco},00`
    figcaption.appendChild(p2)

    let buttonAdd = document.createElement("small")
    buttonAdd.classList.add("add")
    buttonAdd.innerText = "Addicionar ao carrinho"
    figcaption.appendChild(buttonAdd) 


    document.querySelector(".produtos").appendChild(cardProduct)   

    buttonAdd.addEventListener("click",function(evt){
        const idt = evt.target.parentElement.parentElement.id
        const idBanco = bancoDeDados.filter(e => e.id == idt)
        produtosArr.push(idBanco[0])
        addProdutoS()
    })
    
}


function atualizaProdutos(){
    bancoDeDados.forEach((item) =>createProductCard(item))
}



function produtosFiltrados(){
    novoBanco.forEach((item) =>createProductCard(item))
}

atualizaProdutos()



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
        <p id="${index}" class="remove"> Remover produto </p>
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
<small class = "small" >Adicione itens</small>`
        }

    
}


   let itemMenu = document.querySelectorAll("a")


   for( let i=0; i<itemMenu.length; i++){
       itemMenu[i].addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(".produtos").innerHTML = ""
        console.log(e.target.innerText)   
        if(e.target.innerText == "Todos"){
            atualizaProdutos()
        }
        novoBanco = bancoDeDados.filter( obj => obj.variedade == e.target.innerText)
        produtosFiltrados()



       })
       

   }

  const newBanco = []

  function search(texto){
    
      
      document.querySelector(".produtos").innerHTML = ""

    for(let i = 0; i < bancoDeDados.length; i++){
    
        if((bancoDeDados[i].nome).toLowerCase().includes(texto)){
            newBanco.push(bancoDeDados[i])
           
    }
    console.log(newBanco)
  }
  newBanco.forEach((item) =>createProductCard(item))
  newBanco.pop()
  console.log(newBanco)


}


let inputp = document.querySelector(".pesquisando")

let pesquisar = document.querySelector(".search")
pesquisar.addEventListener("click", function(e) {
    let texto = inputp.value
    e.preventDefault()
    search(texto)
    

})

let remove = document.querySelectorAll(".remove")
console.log(remove)