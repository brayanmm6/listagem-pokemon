// primeiro eu acesso o botao que esta com uma id no index.html

const botaoAlteraTema = (document.getElementById("botao_altera_tema"));

// depois eu acesso o body

const body = document.querySelector("body");

// acessando img do botao para altera-la
// pra representar uma classe sevo por . antes

const imagemBotaoTroca = document.querySelector(".imagem_botao");
console.log(imagemBotaoTroca)
// agora preciso identificar o clique no botao

botaoAlteraTema.addEventListener("click", () => {

    // quando detecta o clique, preciso verificar se o modo escuro esta ativo
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    
    if(modoEscuroAtivo){
        body.classList.remove("modo-escuro");
        imagemBotaoTroca.setAttribute("src", "./src/imagens/sun.png");
        console.log("modo escuro desligado")
    }
    else{
        body.classList.add("modo-escuro")
        imagemBotaoTroca.setAttribute("src", "./src/imagens/moon.png")
        console.log("modo escuro ligado")
    }

})